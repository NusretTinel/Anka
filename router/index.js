import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Anasayfa.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/anasayfa',
        name: 'Home',
        component: Home
    },




]

const router = new VueRouter({
    mode: 'history',
   
    routes
})

export default router
