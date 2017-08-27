<template>
    <div id="app">
        <loading v-show="loading"></loading>
        <transition name="scale">
            <router-view v-show="!loading"></router-view>
        </transition>
        <!-- <router-view v-show="!loading"></router-view> -->
    </div>
</template>

<script type="text/ecmascript-6">
    import 'mint-ui/lib/style.css';
    import api from './assets/script/api';
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex';

    import loading from './views/loading.vue';

    const fetchUserInfo = async(store) => {
        const params = {isIntercept: true} ;
        await store.dispatch('getUserInfoFromSever', params);
    };

    export default {
        created() {
            fetchUserInfo(this.$store)
        },

        computed: {
            ...mapGetters([
                'userInfo'
            ]),

            ...mapState({
                loading: state => {
                    return state.global.loading
                }
            })
        },

        components: {
            loading: loading
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/reset.scss";
</style>
