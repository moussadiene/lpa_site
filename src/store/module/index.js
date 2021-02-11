import Swal from "sweetalert2";

import axios from 'axios'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const API_URL = 'http://localhost:8080/api/arl_website/modules'

const modules = {
    namespaced: true,
    state: {
        modules: [],
        module: {
            id: null,
            libelle: '',
            ordre: null
        },
        errors: {},


    },
    getters: {
        modules: state => state.modules,
    },
    mutations: {
        setIndexModule(state, modules) {
            state.modules = modules
            state.errors = {}
            //localStorage.setItem('modules', JSON.stringify(state))
        },
        addModuleCommit(state, data) {
            //state.modules.push(data)
            axios.post(API_URL, {
                libelle: data.libelle,
                ordre: data.ordre,
            }).then((data) => {
                //console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donnée enregistrer',
                    showConfirmButton: false,
                    timer: 3000
                })
                state.modules.push(data.data);
            })
            //localStorage.setItem('modules', JSON.stringify(state))
            //state.modules = modules
        },

        removeModuleCommit(state, data) {
            Swal.fire({
                title: 'Etes Vous Sûr ?',
                text: " Voulez vous vraiment suprimer ce module ! ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Suprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(API_URL + '/' +
                        data
                    ).then((data) => {
                        console.log(data)
                        const module = state.modules.find(modules => modules.id === data.data.id)
                        if (module !== undefined) {
                            state.modules.splice(state.modules.indexOf(data), 1)
                            Swal.fire(
                                'Suprimer !',
                                modules + ' est suprimer .',
                                'success'
                            )
                        } else {
                            Swal.fire(
                                'Suprimer !',
                                'erreurs de supression.',
                                'warning'
                            )
                        }
                        
                    })
                    if (module !== undefined) {
                        state.modules.splice(state.modules.indexOf(data), 1)
                    }
                }
            })

        },
        updateModuleCommit(state, data) {
            //console.log(data.module)
            axios.put(API_URL + '/' + data.module.id, {
                id: data.module.id,
                libelle: data.module.libelle,
                ordre: data.module.ordre,
            }).then((data) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donnée enregistrer',
                    showConfirmButton: false,
                    timer: 2000
                })
                const record = state.modules.find(modules => modules.id === data.data.id)
               
                state.modules[record] = data.data
            })
            // const record = state.modules.find(modules => modules.id === data.id)
            // state.modules[record] = data
        }
    },
    actions: {

        getAllModules({ commit }) {
            axios
                .get(API_URL)
                .then((data) => {
                    console.log(data)
                    commit('setIndexModule', data.data)
                    //context.commit('fetchEnd')
                })
                .catch((response) => {
                    commit('setIndexModule', response.data.errors)
                })
        },
        addModuleAction(context, payload) {

            return new Promise((resolve, reject) => {
                context.commit('addModuleCommit', payload)
                resolve()
            })
        },
        removeModuleAction(context, payload) {
            //console.log(payload.module)
            return new Promise((resolve, reject) => {
                context.commit('removeModuleCommit', payload.module.id)
                resolve()
            })
        },
        updateModuleAction(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('updateModuleCommit', payload)
                resolve()
            })
        }
    }

}

export default modules