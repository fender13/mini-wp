const url = 'http://localhost:8081'

const app = new Vue({
    el: '#app',
    data: {
        username: '',
        email: '',
        password: '',
        login: false,
        location: 'Home',
        token: '',
        title: '',
        tags: [],
        limit: 10,
        content: '',
        file: '',
        allpost: []
    },
    created() {
        let token = localStorage.getItem('token')
        if (token != null) {
            this.verifyToken()
        }
    },
    methods: {
        verifyToken: function() {
            this.token = localStorage.getItem('token')
            axios.get(`${url}/user/verify`, {
                headers: {
                    token: this.token
                }
            })
            .then(({ data }) => {
                this.login = true
                this.location = 'home'
                this.getAllPost()
            })
            .catch(({ response }) => {
                this.login = false
                this.location = 'home'
            })
        },
        userRegister: function(payload) {
            axios.post(`${url}/user/register`, {
                username: payload.username,
                email: payload.email,
                password: payload.password
            })
            .then(({ data }) => {
                this.location = 'home'
                Swal.fire(
                    'Good job!',
                    `Welcome to Hacktium, ${data.username},\n Please Login to Continue!!`,
                )
                this.name = this.email = this.password = '';
                event.target.reset()
            })
            .catch(({ response }) => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<a href>${response.data.message}</a>`
                })
            })
        },
        userLogin: function(payload) {
            axios.post(`${url}/user/login`, {
                username: payload.username,
                password: payload.password
            })
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
                this.username = payload.username
                this.login = true
                this.location = 'home'
            })
            .catch(({ response }) => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<a href>${response.data.message}</a>`
                })
            })
        },
        getAllPost() {
            axios.get(`${url}/article`)
            .then(({ data }) => {
                for (let i = 0; i < data.length; i++) {
                    this.allpost.push(data[i])
                }
            })
            .catch(({ response }) => {
                console.log(response)
            })
        },
        onClickHome() {
            this.location = 'home'
        },
        onClickLogin() {
            this.location = 'login-page'
        },
        onClickRegister() {
            this.location = 'register-page'
        },
        onClickLogOut() {
            localStorage.clear()
            this.login = false
            this.location = 'home'
        },
        onClickBlogpost() {
            this.location = 'blogpost-page'
        }
    }
}).$mount('#app')