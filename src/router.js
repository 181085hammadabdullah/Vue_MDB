import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import ContactV from './views/ContactV.vue'
import ContactM from './views/ContactM.vue'
import ContactU from './views/ContactU.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/contactV',
            name: 'ContactV',
            component: ContactV
        },
        {
            path: '/contactM',
            name: 'ContactM',
            component: ContactM
        },
        {
            path: '/contactU',
            name: 'ContactU',
            component: ContactU
        }
    ]
})