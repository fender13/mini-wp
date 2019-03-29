<template>
    <div class="dashboard-container">
        <div>
            <h1>Dashboard Area</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Questions
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Get all Post</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" @click.prevent="onClickGoToViewAllPost"  class="btn btn-primary">View All</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Add New Question
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Add New Post</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" @click.prevent="onClickGoToAddNew" class="btn btn-primary">Add New</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">adipiscing tristique risus nec feugiat in fermentum posuere urna nec.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router.js'
export default {
    name: 'DashboardPage',
    methods: {
        onClickGoToAddNew() {
            router.push('/add-new-post')
        },
        onClickGoToViewAllPost() {
            router.push('/dashboard/all-post')
        }
    }
}
</script>

<style scoped>
.dashboard-container{
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    height: 100vh;
}

h1 {
    text-align: center;
}

.row {
    margin-top: 5%;
}

card-body a {
    color: white;
}
</style>
