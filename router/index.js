import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Anasayfa.vue'
import contact from '@/components/Contact.vue'
import aboutus from '@/components/Hakkımızda.vue'
import hizmet from '@/components/Hizmetlerimiz.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/anasayfa',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'İletişim',
        component: contact
    },
    {
        path: '/hakkimizda',
        name: 'Hakkımızda',
        component: aboutus
    },
    {
        path: '/hizmetlerimiz',
        name: 'Hizmetlerimiz',
        component: hizmet
    },





]

const router = new VueRouter({
    mode: 'history',
   
    routes
})

export default router
