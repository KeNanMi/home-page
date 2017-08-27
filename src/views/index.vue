<template>
    <div id="index">
        <div class="">
          这是Home页面
        </div>
        <p v-text="userInfo.prize"></p>
        <a href="" @click="goTest">跳转</a>

        <div id="iSlider-wrapper"></div>

    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }

</style>
<script type="text/ecmascript-6">
    import api from '../assets/script/api';


    export default{
        data(){
            return{
                msg:'hello vue',
                userInfo: {
                    prize: 'fath'
                }
            }
        },

        mounted() {

        },

        methods: {
            goTest($e){
                $e.preventDefault();
                this.$router.push({ name: 'test', params: { id: 123 }});
            }
        },
        components:{

        }
    }
</script>
