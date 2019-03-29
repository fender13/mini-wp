import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MemberPage from './views/LoginRegister.vue'
import DashboardPage from './views/MyProfile.vue'
import AddPost from './views/NewPost.vue'
import AllPostPage from './views/AllPost.vue'
import UpdatePost from './views/UpdatePost.vue'
import PostPage from './views/PostPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member-area',
      name: 'MemberPage',
      component: MemberPage
    },
    {
      path: '/add-new-post',
      name: 'AddPost',
      component: AddPost,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/dashboard/all-post',
      name: 'AllPostPage',
      component: AllPostPage,
      meta: {
        authRequired: true
      }

    },
    {
      path: '/dashboard/update/:id',
      name: 'UpdatePost',
      component: UpdatePost,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/news/:id/:title',
      name: 'PostPage',
      component: PostPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (!localStorage.getItem('token')) {
          next({
              path: '/member-area'
          });
      } else {
          next()
      }
  } else {
      next()
  }
})

export default router