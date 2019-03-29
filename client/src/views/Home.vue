<template>
    <div class="home">
        <MainSlider></MainSlider>
        <div class="post-container">
            <div>
                <h3>LATEST NEWS</h3>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-5" v-for="(item, index) in listData" :key="index">
                    <div class="card-group top-buffer">
                        <div class="card">
                            <img class="card-img-top" v-bind:src="item.featured_image" alt="Card image cap">
                            <div class="card-body">
                                 <router-link  :to="{ name: 'PostPage', params: { id: item._id, title: item.title} }"><h5 class="title">{{ item.title }}</h5></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue'
import axios from '../database/server.js'
export default {
    name: 'home',
    components: {
        MainSlider
    },
    created() {
        return this.getPost()
    },
    data() {
        return {
            listData: []
        }
    },
    methods: {
        getPost() {
            axios
                .get('/article')
                .then(({ data }) => {
                    this.listData = data
                })
                .catch(({ response }) => {
                    console.log(response)
                })
        }  
    }
}
</script>

<style scoped>
.post-container {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    min-height: 100vh;
}

.top-buffer {
  margin-top: 20%;
}

h3 {
    text-align: center;
}

h5 {
    text-align: center;
}
</style>

