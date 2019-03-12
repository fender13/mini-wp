tinymce.init({
    selector: '#mytextarea',
    width: 800,
    height: 500,
})


Vue.component('home', {
    template: '#home',
    // data: function() {
    //     return {
    //         posts: [
    //         'Vue.js: The Basics',
    //         'Vue.js Components',
    //         'Server Side Rendering with Vue',
    //         'Vue + Firebase'
    //         ]
    //     }
    // }
})

Vue.component('add-blog', {
    template: '#add-blog'
}) 

new Vue({
    el: '#app',
    data: {
        currentView: 'home'
    }
})
  