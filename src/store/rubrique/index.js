import axios from 'axios'
import Swal from "sweetalert2";

const API_URL = 'http://localhost:8080/api/arl_website/rubriques';

const rubriques = {
    namespaced: true,
    state: {
        rubriques: [],
        errors: {},
    },
    mutations: {
        setIndexRubriques(state, rubriques) {
            state.rubriques = rubriques

            state.errors = {}
            localStorage.setItem('rubriques', JSON.stringify(state))
        },
        addRubriquesCommit(state, rubrique) {
            //state.rubriques.push(data)
            console.log(rubrique)
            axios.post(API_URL, {
                description: rubrique.description,
                typeinput: rubrique.typeinput,
                rubriques:rubrique.rubriques,
            }).then((data) => {
                //console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donnée enregistrer',
                    showConfirmButton: false,
                    timer: 3000
                })
                state.rubriques.push(data.data);
                //localStorage.setItem('rubriques', JSON.stringify(state))

            }).catch((err) => console.log(err.data))
        },

        removeRubriquesCommit(state, rubrique) {
            console.log(rubrique)
            Swal.fire({
                title: 'Etes Vous Sûr ?',
                text: " Voulez vous vraiment suprimer ce rubrique ! ",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Suprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {

                    // console.log(rubrique.rubrique)
                    axios.delete(API_URL + '/' +
                        rubrique.rubrique.id
                    ).then((data) => {
                        const r = state.rubriques.find(rubriques => rubriques.id === rubrique.rubrique.id)
                        console.log(r)
                        if (r !== undefined) {
                            state.rubriques.splice(state.rubriques.indexOf(r), 1)
                        }
                        Swal.fire(
                            'Suprimer !',
                            rubrique.description + ' est suprimer .',
                            'success'
                        )
                    })
                   
                }
            })

        },
        updateRubriquesCommit(state, data) {
            console.log(data.rubrique)
            axios.put(API_URL + '/' + data.rubrique.id, {
                description: data.rubrique.description,
                typeinput: data.rubrique.typeinput,
                modules: data.rubrique.modules

            }).then((data) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donnée Modifer !!!',
                    showConfirmButton: false,
                    timer: 2000
                })
                const record = state.rubriques.find(rubriques => rubriques.id === data.data.id)
                state.rubriques[record] = data.data
            }).catch((er) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Donnée non modifer !!!',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
           
        }
    },
    actions: {

        getAllRubriques({ commit }) {
            axios
                .get(API_URL)
                .then((data) => {
                    console.log(data)
                    commit('setIndexRubriques', data.data)
                    //context.commit('fetchEnd')
                })
                .catch((response) => {
                    commit('setIndexRubriques', response.data.errors)
                })
        },
        addRubriquesAction(context, payload) {
            //console.log(payload)
            return new Promise((resolve, reject) => {
                context.commit('addRubriquesCommit', payload)
                resolve()
            })
        },
        removeRubriquesAction(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('removeRubriquesCommit', payload)
                resolve()
            })
        },
        updateRubriquesAction(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('updateRubriquesCommit', payload)
                resolve()
            })
        }
    }

}

export default rubriques