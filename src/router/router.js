// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Anasayfa from '@/components/Anasayfa.vue';
import Hizmetlerimiz from '@/components/Hizmetlerimiz.vue';
import Hakkimizda from '@/components/Hakkımızda.vue';
import Contact from '@/components/Contact.vue';


const routes = [
    { path: '/anasayfa', component: Anasayfa },
    { path: '/hizmetlerimiz', component: Hizmetlerimiz },
    { path: '/hakkimizda', component: Hakkimizda },
    { path: '/contact', component: Contact },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
