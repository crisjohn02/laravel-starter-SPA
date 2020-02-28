/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Import BootstrapVue
 */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

/**
 * Configure moment-timezone and declare as global
 */
window.moment = require("moment-timezone");

window.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

window.time_format = "MMM D, YYYY h:mm A";

/**
 * Import the routes
 */
import router from './router'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
