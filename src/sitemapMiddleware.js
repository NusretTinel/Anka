// sitemapMiddleware.js

import App from './App.vue';
import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
import { router }            from 'router';
import {createApp} from "vue";


export const sitemapMiddleware = () => {
    return (req, res) => {
        res.set('Content-Type', 'application/xml');

        const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
        const filterConfig = {
            isValid: false,
            rules: [
                /\/example-page/,
                /\*/,
            ],
        };

        new VueRouterSitemap(router).filterPaths(filterConfig).build('http://ankatedarik.com.tr').save(staticSitemap);

        return res.sendFile(staticSitemap);
    };
};


const app = createApp(App);
app.get('/sitemap.xml', sitemapMiddleware());