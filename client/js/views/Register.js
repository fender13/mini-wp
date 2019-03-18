Vue.component('add-register', {
    props: ['location', 'login'],
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    template: `
    <div class="wrapper-logreg fadeInDown" v-if="!login && location == 'register-page'">
        <div id="formContent">
            <!-- Tabs Titles -->
            <h2 class="active"> Register </h2><br>

            <!-- Login Form -->
            <form v-on:submit.prevent="$emit('user-register', {username: username, email: email, password: password})">
                <input v-model="username" type="text" id="login" class="fadeIn second" name="username" placeholder="username">
                <input v-model="email" type="text" id="email" class="fadeIn second" name="email" placeholder="email">
                <input v-model="password" type="password" id="password" class="fadeIn third" name="password" placeholder="password">
                <input type="submit" class="fadeIn fourth" value="Register">
            </form>
        
            <!-- Remind Passowrd -->
            <div id="formFooter">
                <a v-on:click.prevent="$emit('to-login')" class="underlineHover" href="#">Login?</a> || <a v-on:click.prevent="$emit('to-home')" class="underlineHover" href="#">Home?</a>
            </div>
        
        </div>
    </div>
    `
})