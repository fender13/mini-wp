Vue.component('add-login', {
    props: ['location', 'login'],
    data() {
        return {
            username: '',
            password: ''
        }
    },
    template: `
    <div class="wrapper-logreg fadeInDown" v-if="!login && location == 'login-page'">
        <div id="formContent">
            <!-- Tabs Titles -->
            <h2 class="active"> Sign In </h2><br>

            <!-- Login Form -->
            <form v-on:submit.prevent="$emit('user-login', {username: username, password: password})">
                <input v-model="username" type="text" id="login" class="fadeIn second" name="username" placeholder="username">
                <input v-model="password" type="password" id="password" class="fadeIn third" name="password" placeholder="password">
                <input type="submit" class="fadeIn fourth" value="Log In">
            </form>
        
            <!-- Remind Passowrd -->
            <div id="formFooter">
                <a v-on:click.prevent="$emit('to-register')" class="underlineHover" href="#">Register?</a> || <a v-on:click.prevent="$emit('to-home')" class="underlineHover" href="#">Home?</a>
            </div>
        
        </div>
    </div>
    `
})