const origin = 'http://localhost:3000/users'

const appUser = new Vue({
    el: '#app',
    data: {
        person: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
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