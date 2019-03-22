import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home';
import Skills from '@/views/Skills';
import Work from '@/views/Work';
import Contact from '@/views/Contact';

Vue.use(Router)

export default new Router({
    routes: [
		{
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/skills',
            component: Skills,
            name: 'skills'
        },
        {
            path: '/work',
            component: Work,
            name: 'work'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        }
    ]
})
