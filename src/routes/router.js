import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import login from '../auth/login'
import home from '../components/home'
import register from '../auth/register'
import chat from '../components/chat'
import about from '@/components/about'
import profile from '../components/profile'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path:'/',
            name:'Home',
            component:home
        },
        {
            path:'/login',
            name:'Login',
            component: login
        },
        {
            path:'/register',
            name:'Register',
            component: register
        },
        {
            path:'/chat',
            name:'Chat',
            component: chat
        },
        {
        path:'/about',
        name:'About',
        component: about
        },
        {
            path:'/profile',
            name:'Profile',
            component:profile
        }
    ],
    mode:'history'
})

export default router;