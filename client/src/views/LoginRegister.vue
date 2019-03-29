<template>
    <div class="member-container">
        <div class="member-area">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div>
                            <div class="member-title">
                                <h2>Login - Register</h2>
                            </div>
                            <div class="introduce">
                                <p style="text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div class="logreb-button" v-if="register">
                                <button class="btn btn-primary" @click="clickGoToLogin">Login</button>
                            </div>
                            <div class="logreb-button" v-if="login">
                                <button class="btn btn-primary" @click="clickGoToRegister">Register</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="register-form" v-if="register">
                            <h2><img src="../assets/icon/register.png" alt="Register"> Register</h2>
                            <div>
                                <form class="form-container" @submit.prevent="userRegister">
                                    <div class="row">
                                        <div class="col">
                                            <label for="fistName">First Name:</label>
                                            <input type="text" v-model="firstName" class="form-control mb-2 mr-sm-2" id="firstName" placeholder="Enter First Name">
                                        </div>
                                        <div class="col">
                                            <label for="lastName">Last Name:</label>
                                            <input type="text" v-model="lastName" class="form-control mb-2 mr-sm-2" id="lastName" placeholder="Enter Last Name">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <label for="email">Email address</label>
                                            <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                                            <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>  
                                    <div class="row mt-2">
                                        <div class="col">
                                            <label for="username">Username</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" v-model="username" class="form-control" id="username" placeholder="Enter username">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <div>
                                                <label for="password">Password</label>
                                                <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter password">
                                                <small id="passwordHelpInline" class="text-muted">
                                                Must be 8-20 characters long.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <div>
                                                <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                                                <label class="form-check-label" for="invalidCheck2">
                                                    Agree to terms and conditions
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <button class="btn btn-primary" type="submit">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="login-form" v-if="login">
                            <h2><img src="../assets/icon/login.png" alt="Login"> Login</h2>
                            <div>
                                <form class="form-container" @submit.prevent="userLogin">
                                    <div class="row">
                                        <div class="col">
                                            <label for="username">Username</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" v-model="username" class="form-control" id="username" placeholder="Enter username">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <div>
                                                <label for="password">Password</label>
                                                <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter password">
                                                <small id="passwordHelpInline" class="text-muted">
                                                Must be 8-20 characters long.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <button class="btn btn-primary" type="submit">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemberPage',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            register: false,
            login: true
        }
    },
    methods: {
        clickGoToLogin() {
            this.login = true
            this.register = false
        },
        clickGoToRegister() {
            this.login = false
            this.register = true
        },
        userRegister() {
            this.$store.dispatch('userRegistration', {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                password: this.password
            })
            this.firstName = ''
            this.lastName = ''
            this.username = ''
            this.email = ''
            this.password = ''
        },
        userLogin() {
            this.$store.dispatch('userLogin', {
                username: this.username,
                password: this.password
            })
            this.username = ''
            this.password = ''
        }
    }
}
</script>

<style scoped>
.member-container {
    margin-top: 4%;
    height: 100vh;
}

.form-container {
    margin-top: 4%;
}

.introduce {
    margin-top: 4%;
}

.member-title h2 {
    text-align: center;
}

.logreb-button {
    margin-top: 5%;
    text-align: center;
}
</style>
