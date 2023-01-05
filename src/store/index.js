import { createStore } from 'vuex'
import http from '@/http'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload){
      state.todos = payload
    },

    storeTodo(state, payload){
      const index = state.todos.findIndex(t => t.id == payload.id)
      if(index >= 0){
        state.todos.splice(index, 1, payload) 
      } else {
        state.todos.push(payload)   // se usar o unshift ao inves do push, o valor entra na primeira posicao
      }
    },

    deleteTodo(state, id){
      const index = state.todos.findIndex(t => t.id == id)
      if(index >= 0){
        state.todos.splice(index, 1) 
      }
    },

  },
  actions: {
  // o return faz com que apos o then ser finalizado, 
  // a resposta vai ser enviada para o componente que solicitou o dispatch.
    getTodos({commit}){
      this.loading = true
      return http.get("todos").then(res => {  
        commit('storeTodos', res.data)
      })
    },

    addTodo({commit}, data){
      return http.post("todos", data).then(res => {
        commit('storeTodo', res.data)
      })
    },

    updateTodo({commit}, {id, data}){
      return http.put(`todos/${id}`, data).then(res => {
        commit('storeTodo', res.data)
      })
    },
    
    deleteTodo({commit}, id){
      return http.delete(`todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    }
  
  },
  modules: {
  }
})
