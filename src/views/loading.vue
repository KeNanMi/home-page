<template>
    <div id="loadPage">
        <div class="containerDiv">
            <div class="temp">
                Loading...<span v-text="temp"></span>%
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    #loadPage {
        height: 100%;
        position: relative;
        min-height: 1217px;
        .containerDiv{
            min-height: 1217px;
            width: 100%;
            background-size: contain;
            .temp {
                height: 130px;
                width: 100px;
                color: white;
                padding-top: 366px;
                font-size: 26px;
                margin-left: 278px;
            }
        }
    }
</style>
<script ts>
    import list from '../assets/script/loadimg';

    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex';

    export default{
        data(){
            return {
                progress: 0,
                temp: 0
            }
        },

        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },

        mounted() {
            let imagesList = list.list;
            let len = imagesList.length;
            let images = [];
            let count = 0;
            this.progress = parseInt(count/len);

            if (imagesList.length > 0) {
                imagesList.forEach((item) => {
                    let imgUrl = require('../assets/images/' + item);
                    let img = document.createElement('img');
                    img.src = imgUrl;
                    images.push(img);
                })
            }
            var timer = setInterval( ()=>{
                var self = this;
                images.forEach(function(img, index){
                    if(img.complete){
                        count = count + 1;
                        images.splice(index, 1)
                    }
                });
                this.progress = parseInt(count * 100 / len);
                if(this.temp < this.progress - 1){
                    this.temp += 2;
                }

                if(this.progress == 100 && this.temp >= this.progress-1) {
                    window.clearInterval(timer);
                    setTimeout( ()=>{
                        if(this.userInfo != null){
                            this.$store.dispatch('loadHide', false);
                            clearTimeout(timer);
                        }
                    }, 600 )
                }
                self.images = images;
            }, 33)
        }
    }
</script>
