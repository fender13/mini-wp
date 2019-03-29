<template>
    <div id="app">
        <MainNavbar></MainNavbar>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view/>
            </transition>
        <Footer></Footer>
    </div>
</template>

<script>
import MainNavbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'Home',
    components: {
        MainNavbar,
        Footer
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
