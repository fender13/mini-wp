const origin = 'http://localhost:3000/users'

var home = Vue.component('home', {
    template: '#home-template'
})

var login = Vue.component('login', {
    template: '.login-popup-template'
})

var addBlog = Vue.component('add-blog', {
    template: '#add-blog-temlate'
}) 

const appUser = new Vue({
    el: '#app',
    data: {
        currentView: 'home',
        person: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    },
    component:{
        home: home,
        login: login,
        addBlog: addBlog
    },
    methods: {
        addUser: function() {
            axios.post(`${origin}/register`, this.person)
            .then(({ data }) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        loginUser: function() {
            axios.post(`${origin}/login`, {
                username: this.person.username,
                password: this.person.password
            })
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
})





