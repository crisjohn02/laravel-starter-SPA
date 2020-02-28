import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './../components/Home'

Vue.use(VueRouter)

/**
 * First component to be loaded should NOT be asynched so it won't throw an undefined call error.
 * The other routes however can be asynchronously called.
 */

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