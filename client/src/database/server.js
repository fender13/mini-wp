import axios from 'axios'

var axi = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {'token': localStorage.getItem('token')}
})

export default axi