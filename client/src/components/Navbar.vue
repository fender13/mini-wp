<template>
    <div>
        <nav class="navbar navbar-expand-md ">
            <div class="mx-auto order-0">
                <router-link to="/"><img src="../assets/logo4.png" alt="Hacktiv-Overflow"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" v-if="isLogin" href="#" @click.prevent="onClickDashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-if="!isLogin" href="#" @click.prevent="onClickGoToLoginRegister">Sign In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-if="isLogin" href="#" @click.prevent="onClickLogout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>    
    </div>
</template>

<script>
import router from '../router.js'
export default {
    name: 'MainNavbar',
    computed: {
      isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
        onClickGoToLoginRegister() {
            router.push('/member-area')
        },
        onClickLogout() {
            this.$store.dispatch('userLogout')
        },
        onClickDashboard() {
            router.push('/dashboard')
        }
    }
}
</script>

<style scoped>
img {
  width: 30%;
}

.navbar {
  background-color: #ffffff;
}
.navbar .navbar-brand {
  color: #6869d9;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #8a8ba9;
}
.navbar .navbar-text {
  color: #6869d9;
}
.navbar .navbar-text a {
  color: #8a8ba9;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #8a8ba9; 
}
.navbar .navbar-nav .nav-link {
  color: #6869d9;
  border-radius: .25rem;
  margin: 0 0.25em;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #8a8ba9;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #8a8ba9;
  background-color: #ffffff;
}
.navbar .navbar-toggle {
  border-color: #ffffff;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #ffffff;
}
.navbar .navbar-toggle .navbar-toggler-icon {
  color: #6869d9;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #6869d9;
}
.navbar .navbar-link {
  color: #6869d9;
}
.navbar .navbar-link:hover {
  color: #8a8ba9;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #6869d9;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #8a8ba9;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #8a8ba9;
    background-color: #ffffff;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #6869d9;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #8a8ba9;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #8a8ba9;
    background-color: #ffffff;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #6869d9;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #8a8ba9;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #8a8ba9;
    background-color: #ffffff;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #6869d9;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #8a8ba9;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #8a8ba9;
    background-color: #ffffff;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #6869d9;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #8a8ba9;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #8a8ba9;
  background-color: #ffffff;
}
</style>
