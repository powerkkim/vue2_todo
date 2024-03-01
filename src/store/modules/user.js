import axios from 'axios';

export default {
    namespaced: true,
    state: { 
        users: []
    },
    mutations: {
        SET_USERS( state, users) {
          state.users = users; 
        },
    },
    actions: {
      getUsers({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/users').then( res => {
          console.log(res);
          commit('SET_USERS', res.data);
        }); 
      },
    },
    getters: { 
    }
}
