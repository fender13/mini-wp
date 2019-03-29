import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/database/server'
import swal from 'sweetalert'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    isLogin: false,
    username: ''
  },
  mutations: {
    setId(state, payload) {
      state.id = payload
    },
    setIsLogin(state, payload) {
      state.isLogin = payload
    },
    setUsername(state, payload) {
      state.username = payload
    }
  },
  actions: {
    verifyToken({ commit }, { isToken }) {
      axios
        .get('/verify', {
          headers: {
              token: isToken
          }
        })
        .then(({ data }) => {
          commit('setUsername', data.username)
          commit('setIsLogin', true)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    userRegistration({ commit }, { firstName, lastName, username, email, password }) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      }

      axios
        .post('/sign-up', data)
        .then(({ data }) => {
            router.push('/')
            swal("Register berhasil!!", "Harap LOGIN terlebih dahulu untuk melanjutkan!!", "success")
        })
        .catch((error) => {
            console.log(error)
        })
    },
    userLogin({ commit }, { username, password }) {
      const data = {
        username: username,
        password: password
      }
      axios
        .post('/sign-in', data)
        .then(({ data }) => {
            localStorage.setItem('token', data.token)
            commit('setId', data.id)
            commit('setUsername', data.username)
            commit('setIsLogin', true)
            router.push('/')
            swal("Welcome", data.username, "success")
        })
        .catch((error) => {
            console.log(error)
        })
      },
      userLogout({ commit }) {
          commit('setUsername', '')
          commit('setIsLogin', false)
          localStorage.removeItem('token')
          router.push('/')
      }
  },
  getters: {
      isLogin(state) {
        return state.isLogin
      },
      getUsername(state) {
        return state.username
      }
  }
})
