<template>
    <div class="main-table">
        <div>
            <h3>View All Questions</h3>
        </div>
        <table class="table listTable">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in listData" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td><router-link  :to="{ name: 'QuestionPage', params: { id: data._id, title: data.title} }"><p class="title">{{ data.title }}</p></router-link></td>
                    <td><router-link :to="{ name: 'UpdatePost', params: { id: data._id } }"><a>Update</a></router-link> | <a href="#" @click.prevent="onClickDelete(data._id)">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from '../database/server.js'
export default {
    name: 'AllPostPage',
    data() {
        return {
            listData: []
        }
    },
    created() {
        return this.getAllData()
    },
    methods: {  
        getAllData() {
            axios
                .get('/article')
                .then(({ data }) => {
                    this.listData = data
                })
                .catch(({ response }) => {
                    console.log(response)
                })
        },
        onClickDelete(id) {
            swal("Are you sure you want to do this?", {
                buttons: ["Oh no!", true],
            })
            
                .then((data) => {
                    if (data == true) {
                        return axios
                            .delete(`/article/${id}`)
                    }
                })

                .then(({ data }) => {
                    for (let i = 0; i < this.listData.length; i++) {
                        if (this.listData[i]._id == data._id) {
                            this.listData.splice(i, 1)
                        }
                    }
                })

                .catch(({ response }) => {
                    console.log(response)
                })
        }
    }
}
</script>

<style scoped>
.main-table {
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    height: 100vh;
}

h3 {
    text-align: center;
}

.listTable {
    margin-top: 3%;
}
</style>
