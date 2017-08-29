<template>
    <div class="container">
        <div class="top">
          <img style="width: 100%;position:absolute;" src="../assets/images/top.png">
          <div class="toGooglePlay" @click="toGooglePlay()">
              <img src="../assets/images/down_btn.png">
          </div>
        </div>
        <div class="advantage">
          <img class="ad_img" src="../assets/images/advantage.png">
        </div>
        <div class="loan">
          <img class="lg_img" src="../assets/images/loanGuide.png">
        </div>
        <div class="about">
          <img class="ab_img" src="../assets/images/about_us.png">
        </div>
    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    body{
        background-color:#ff0000;
    }

    .container {
        height: 100%;
        position: relative;
        min-height: 1217px;
        background: #030303;
        .top {
            position: relative;
            height: 2100px;
            .toGooglePlay {
                position:absolute;
                margin-top: 32%;
                right: 34%;
            }
        }
        .advantage {
            position: relative;
            width: 100%;
            height: 2100px;
            .ad_img {
                position: absolute;
                width: 100%;
            }
        }
        .loan {
            position: relative;
            width: 100%;
            height: 2100px;
            .lg_img {
                position: absolute;
                width: 100%;
            }
        }
        .about {
            position: relative;
            width: 100%;
            .ab_img {
                position: absolute;
                width: 100%;
            }
        }
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
