import Swal from "sweetalert2";

import axios from 'axios'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const API_URL = 'http://localhost:8080/api/arl_website/TypeAnimals'

const typeAnimals = {
    namespaced: true,
    state: {
        typeAnimals: [],
        typeAnimal: {
            id: null,
            type: '',
        },
        errors: {},


    },
    getters: {
        typeAnimals: state => state.typeAnimals,
    },
    mutations: {
        setIndexTypeAnimal(state, typeAnimals) {
            state.typeAnimals = typeAnimals
            state.errors = {}
            //localStorage.setItem('typeAnimals', JSON.stringify(state))
        },
        addTypeAnimalCommit(state, data) {
            //state.typeAnimals.push(data)
            axios.post(API_URL, {
                type: data.type,
            }).then((data) => {
                //console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donnée enregistrer',
                    showConfirmButton: false,
                    timer: 1500
                })
                state.typeAnimals.push(data.data);
            })
            //localStorage.setItem('typeAnimals', JSON.stringify(state))
            //state.typeAnimals = typeAnimals
        },

        removeTypeAnimalCommit(state, typeAnimal) {
            Swal.fire({
                title: 'Etes Vous Sûr ?',
                text: " Voulez vous vraiment suprimer ce type Animal ! ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Suprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(API_URL + '/' +
                        typeAnimal.id
                    ).then((data) => {
                        //console.log(data)
                        const ta = state.typeAnimals.find(typeAnimals => typeAnimals.id === typeAnimal.id)
                        console.log(ta)
                        if (ta !== undefined) {
                            state.typeAnimals.splice(state.typeAnimals.indexOf(ta), 1)
                        }

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Suppression .',
                            text: ' Vous avez suprimer le type Animal "' + typeAnimal.type + '" est supprimer .',
                            showConfirmButton: false,
                            timer: 5000
                        })
                    }).catch((err) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Erreur de suppression',
                            text: ''+err,
                            timer: 4000
                        })

                    })

                }
            })

        },
        updateTypeAnimalCommit(state, payload) {
            console.log(payload)
            axios.put(API_URL + '/' + payload.typeAnimal.id, {
                id: payload.typeAnimal.id,
                type: payload.typeAnimal.type,
            }).then((data) => {
                console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Type Animal "' + data.data.type + '" est Modifier .',
                    showConfirmButton: false,
                    timer: 1500
                })
                const record = state.typeAnimals.find(typeAnimals => typeAnimals.id === data.data.id)
                state.typeAnimals[record] = data.data

            }).catch((err) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Erreur de modification ' + err,
                    showConfirmButton: true,
                    timer: 10000
                })
            })
            // const record = state.typeAnimals.find(typeAnimals => typeAnimals.id === data.id)
            // state.typeAnimals[record] = data
        }
    },
    actions: {

        getAllTypeAnimals({ commit }) {
            axios
                .get(API_URL)
                .then((data) => {
                    console.log(data)
                    commit('setIndexTypeAnimal', data.data)
                    //context.commit('fetchEnd')
                })
                .catch((response) => {
                    commit('setIndexTypeAnimal', response.data.errors)
                })
        },
        addTypeAnimalAction(context, payload) {

            return new Promise((resolve, reject) => {
                context.commit('addTypeAnimalCommit', payload)
                resolve()
            })
        },
        removeTypeAnimalAction(context, payload) {
            //console.log(payload.typeAnimals)
            return new Promise((resolve, reject) => {
                context.commit('removeTypeAnimalCommit', payload.typeAnimals)
                resolve()
            })
        },
        updateTypeAnimalAction(context, payload) {
            //console.log(payload)
            return new Promise((resolve, reject) => {
                context.commit('updateTypeAnimalCommit', payload)
                resolve()
            })
        }
    }

}

export default typeAnimals