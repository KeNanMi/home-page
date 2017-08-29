<template>
    <div id="app">
        <transition name="scale">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import 'mint-ui/lib/style.css';
    import api from './assets/script/api';
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex';

    const fetchUserInfo = async(store) => {
        const params = {isIntercept: true} ;
        await store.dispatch('getUserInfoFromSever', params);
    };

    export default {
    }
</script>

<style lang="scss">
    @import "assets/styles/reset.scss";
</style>
