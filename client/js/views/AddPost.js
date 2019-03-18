Vue.component('add-post-form', {
    props: ['location', 'login', 'limit'],
    data() {
        return {
            title: '',
            tags: [],
            content: '',
            file: ''
        }
    },
    methods: {
        addBlogpost: function() {
            let token = localStorage.getItem('token')
            let dataFormat = new FormData();
            dataFormat.append("image", this.$refs.file.files[0])
            dataFormat.append("title", this.title)
            dataFormat.append("tags", this.tags)
            dataFormat.append("content", this.content)
            dataFormat.append("token", token)

            axios.post('http://localhost:8081/article/upload', dataFormat, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });
        },
        onImageChange: function(e) {
            console.log(this)
        }
    },
    template: `
    <div class="add-new-post" v-if="login && location == 'blogpost-page'">
        <div class="new-post-container">
            
            <form enctype="multipart/form-data" v-on:submit.prevent="addBlogpost">
            <h1>Add New Post</h1>
                <div class="form-group">
                    <input v-model="title" type="text" placeholder="Enter Title Here">
                </div>
                <div class="form-group">
                    <input-tag placeholder="Add Tags seperate with enter or coma - limit 10" v-model="tags" :limit="limit"></input-tag>
                </div>
                <div class="form-group">
                    <ckeditor v-model="content"></ckeditor>
                </div>
                <br>
                <div>
                    <input type="file" ref="file" :value="file" @change="onImageChange()" />
                </div>
                <br>
                <div>
                    <input type="submit" value="Save">
                </div>
            </form>
        </div>
    </div>
    `
})

// {/*   */}