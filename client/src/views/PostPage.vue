<template>
    <div post-page>
        <div>
            <img v-bind:src="image" alt="">
        </div>
        <div class="post-container">
            <div>
                <h1>{{ title }}</h1>
            </div>
            <div class="content">
                <p v-html="content">{{ content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../database/server.js'
export default {
    name: 'PostPage',
    data() {
        return {
            title: '',
            image: '',
            content: ''
        }
    },
    created() {
        return this.getPost(this.$route.params.id)
    },
    methods: {
        getPost(id) {
            axios
                .get(`/article/findOne/${id}`)
                .then(({ data }) => {
                    this.title = data.title
                    this.image = data.featured_image
                    this.content = data.content
                })
                .catch(({ response }) => {
                    console.log(response)
                })
        }
    }
}
</script>

<style scoped>
.post-page {
    /* width: 100vw; */
    min-height: 100vh
}

img {
    width: 100%;
}

.post-container{
    margin-top: 5%;
    margin-left: 8%;
    margin-right: 8%;
    min-height: 100vh
}

h1 {
    text-align: center;
}

.content {
    margin-top: 5%;
}
</style>
