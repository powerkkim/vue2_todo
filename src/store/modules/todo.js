export default {
    namespaced: true,
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false },
            { id: 2, text: 'play game', checked: false },
        ] 
    },
    mutations: {
        ADD_TODO( state, value ) {
            console.log("App : " + value);
            state.todos.push( {
              id: Math.random(),
              text: value,
              checked: false
            }); 
        },
        TOGGLE_TODO( state, { id, checked} ) {
            const index = state.todos.findIndex( todo => {
              return todo.id === id;
            });
            state.todos[index].checked = checked; 
        },
        DELETE_TODO( state, todoId ) {
            const index = state.todos.findIndex( todo => {
              return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: { 
      addTodo( {commit}, value) {
          console.log( "index.js: addTodo: "+value);

          setTimeout( function() {
              commit('ADD_TODO',value);
          }, 500);
      },
      toggleTodo({commit}, payload) {
          setTimeout( function() {
            commit('TOGGLE_TODO',payload);
        }, 500);
      } ,
      deleteTodo({commit}, todoId) {
          setTimeout( function() {
            commit('DELETE_TODO',todoId);
        }, 500);
      }
    },
    getters: {
      numberOfCompletedTodo: state => {
          return state.todos.filter( todo => { return todo.checked == true} ).length;
      }
    }
}

 








