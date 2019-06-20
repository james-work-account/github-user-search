import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: route => 'Home Page',
      metaTags: [{
        name: 'description',
        content: 'The home page of the GitHub search app.'
      },
      {
        property: 'og:description',
        content: 'The home page of the GitHub search app.'
      }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    meta: {
      title: route => 'About Page',
      metaTags: [{
        name: 'description',
        content: 'The about page.'
      },
      {
        property: 'og:description',
        content: 'The about page.'
      }
      ]
    }
  },
  {
    path: '/:user',
    name: 'user details',
    component: () => import(/* webpackChunkName: "user details" */ './views/UserDetail.vue'),
    meta: {
      title: route => `User Details - ${route.params.user}`,
      metaTags: [{
        name: 'description',
        content: 'The about page.'
      },
      {
        property: 'og:description',
        content: 'The about page.'
      }
      ]
    }
  }
  ]
})
