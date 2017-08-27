import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync'
import router from './router';
import store from './store';

sync(store, router);

const app = new Vue({
    template: '<App/>',
    components: { App },
    router,
    store
});
app.$mount('#app');
