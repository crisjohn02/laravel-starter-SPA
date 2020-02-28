import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './../components/Home'
//import About from './../components/About'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./../components/About')
        }
    ]
})

export default router