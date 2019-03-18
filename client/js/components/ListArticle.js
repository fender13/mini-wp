Vue.component('featured-post', {
    props: ['allpost'],
    template: `
        <div class="main-items">
            <div class="item-container">
                <ul>
                    <li v-for="(item, index) in allpost">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" v-bind:src="item.featured_image" alt="Card image cap">
                            <div class="card-body">
                            <p class="card-text">{{item.title}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
})