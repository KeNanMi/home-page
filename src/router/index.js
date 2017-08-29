/**
 * Created by codoon on 16/11/30.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue';
import test from '../views/test.vue';
import share from '../views/share.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { name: 'index', path: '/', component: index },
        { name: 'test', path: '/test/:id', component: test },
        { name: 'share', path: '/share',component: share },
    ]
});

export default router
