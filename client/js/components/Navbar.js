Vue.component('navbar-template', {
    props: ['location', 'login', 'username'],
    template: `
    <div class="header-container">
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light justify-content-between">
            <div class="navbar-header">    
                <a class="navbar-brand" href="/"><strong>Hacktium</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a v-if="login" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dashboard
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">List Post</a>
                        <a class="dropdown-item" href="#" v-on:click.prevent="$emit('to-blogpost')">Add New Post</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">{{ username }}</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a v-if="!login" class="nav-link" href="#" v-on:click.prevent="$emit('to-login-page')">Login</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="!login" class="nav-link" href="#" v-on:click.prevent="$emit('to-register-page')">Register</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="login" class="nav-link" v-on:click.prevent="$emit('to-logout')" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    `
})
{/* <li class="nav-item">
    <a v-if="login" class="nav-link" href="#" v-on:click.prevent="$emit('to-dashboard')">Dashboard</a>
</li> */}