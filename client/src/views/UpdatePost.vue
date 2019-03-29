<template>
    <div>
        <div class="form-addProduct">
            <form @submit.prevent="updatePost" enctype="multipart/form-data" >
                <div>
                    <h1>Update Post</h1>
                </div>
                <div class="mt-3">
                    <div class="mt-3">Post Title</div>
                    <input type="text" v-model="title" class="form-control mb-2 mr-sm-2" placeholder="Enter Post Title">
                </div>
                <div class="mt-3"> 
                    <div>Selected file: {{ file ? file.name : '' }}</div>
                    <input type="file" ref="file" :value="file" @change="onImageChange()" />
                </div>
                <div class="mt-3">
                    <div class="mt-3">Tell your story.....</div>
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
                <div class="mt-3 add-product">
                    <button class="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from '../database/server.js'
import router from '@/router'
export default {
    name: 'UpdatePost',
    data() {
        return {
            title: '',
            file: '',
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the rich-text editor.
            }
        }
    },
    created() {
        return this.getData(this.$route.params.id)
    },
    methods: {
        getData(id) {
            axios
                .get(`/article/findOne/${id}`)
                .then(({ data }) => {
                    this.title = data.title
                    this.editorData = data.content
                })
                .catch(({ response }) => {
                    console.log(response)
                })
        },
        updatePost() {
            let dataFormat = new FormData();
            let token = localStorage.getItem('token')
            dataFormat.append("image", this.$refs.file.files[0])
            dataFormat.append("title", this.title)
            dataFormat.append("tags", this.tags)
            dataFormat.append("content", this.editorData)
            dataFormat.append("token", token)

            axios.put(`http://localhost:8081/article/upload/${this.$route.params.id}`, dataFormat, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(({ data }) => {
                router.push('/dashboard')
            })
            .catch(({ response }) => {
                console.log(response);
            });
        },
        onImageChange(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>
.form-addProduct {
    margin-top: 5%;     
    margin-left: 25%;   
    margin-right: 25%;
    min-height: 100vh;
}

h1 {
    text-align: center;
}

.add-product {
    text-align: right;
}
</style>
