Vue.component('home', {
    props: ['location', 'login', 'username', 'allpost'],
    template: `
        <div >
            <navbar-template 
                v-if="location != 'login-page' && location != 'register-page' && location != 'dashboard-page'" 
                v-on:to-login-page="$emit('go-to-login-page')" 
                v-on:to-register-page="$emit('go-to-register-page')" 
                v-on:to-logout="$emit('go-logout')" 
                v-on:to-blogpost="$emit('go-blogpost')"
                v-bind:location="location" 
                v-bind:login="login"
                v-bind:username="username">
            </navbar-template>
            <home-slider 
                v-if="location != 'login-page' && location != 'register-page' && location != 'blogpost-page'">
            </home-slider>
            <featured-post v-bind:allpost="allpost"></featured-post>
        </div>
    `
})