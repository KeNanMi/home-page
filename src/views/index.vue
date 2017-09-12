<template>
  <div>
    <div id="home" class="header-background"></div>
    <div id="ad" class="advantage-background">
      <img src="../assets/images/advantage.png">
    </div>
    <div id="loan" class="loan-background">
      <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(image,index) in img' :key='index' v-show='index===mark'>
                <a><img :src="image"></a>
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for='(item,index) in list' :class="{'active':index===mark}" @click='change(index)'>{{item}}</span>
        </div>
    </div>
    </div>
    <div id="about" class="about-background"></div>
    <ul :class="['nav', { 'nav-fixed': !isTop, 'nav-invisible': !isVisible }]">
      <li>
        <a @click="scroll('home')">Home</a>
      </li>
      <li>
        <a @click="scroll('ad')">Our Advantage</a> 
      </li>
      <li>
        <a @click="scroll('loan')">Loan Guide</a>
      </li>
      <li>
        <a @click="scroll('about')">About Us</a>
      </li>
    </ul>
    <div class="header-title"><h1 v-if="show" transition="fade">{{headlineFinal}}</h1></div>
  </div>
</template>

<script type="text/babel">
  import { headline } from '../vuex/getters'

  export default {
    data () {
      return {
        show: true,
        nav: 'nav',
        isTop: true,
        isVisible: true,
        headlineFinal: '',
        mark: 0,
        timer: null,
        img: ['http://activity-codoon.b0.upaiyun.com/123/upload/loan_one.png',
            'http://activity-codoon.b0.upaiyun.com/123/upload/loan_two.png',
            'http://activity-codoon.b0.upaiyun.com/123/upload/loan_three.png',
            'http://activity-codoon.b0.upaiyun.com/123/upload/loan_four.png'
        ],
        list: ['1. Open Google Play and download Cash Lending',
            '2. Choose loan amount and term',
            '3. Spend 5 minutes to fill in application information',
            '4. Loan disbursement within 5 seconds'
        ],
      }
    },
    vuex: {
      getters: {
        headline: headline
      }
    },
    watch: {
      'headline': function (val, oldVal) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.headlineFinal = val
        }, 400)
      }
    },
    mounted () {
      this.play()
    },
    methods: {
      scroll(mode) {
        var element = document.getElementById(mode);

        element.scrollIntoView();
        element.scrollIntoView(false);
        element.scrollIntoView({block: "end"});
        element.scrollIntoView({block: "end", behavior: "smooth"});
      },
      change(i) {
            this.mark = i
      },
      autoPlay() {
          this.mark++
              if (this.mark === 4) {
                  this.mark = 0
                  return
              }
      },
      play() {
          setInterval(this.autoPlay, 3000)
      },
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    *{
    margin: 0;
    padding: 0;
    }
    body {
        margin: 0px;
    }
    .nav {
      position: absolute;
      width: 100%;
      display: flex;
      -webkit-flex-flow: row wrap;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      transition: all .4s;
    }

  .nav-fixed {
    color: rgba(0, 0, 0, .8);
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #bababa;
  }

  .nav-invisible {
    transform: translate(0, -4.8rem)
  }

  .nav a {
    font-size: 1rem;
    display: block;
    margin: 0;
    padding: 1.5rem 3.8rem;
    opacity: 1;
    transition: opacity 0.4s;
  }

  .nav a:hover {
    opacity: 0.7;
  }

  .header {
    height: 30rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .2);
  }

  .header-background {
    z-index: -1;
    position: absolute;
    height: 50rem;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .4) url('../assets/images/top.png') no-repeat;
    background-size: cover;
  }
  .advantage-background {
    z-index: -1;
    position: absolute;
    height: 50rem;
    width: 100%;
    left: 0;
    top: 50rem;
    background-size: cover !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .loan-background {
    z-index: -1;
    position: absolute;
    height: 50rem;
    width: 100%;
    left: 0;
    top: 100rem;
    background-size: cover !important;
    background: url('../assets/images/loanGuide.png') no-repeat;
    li {
      position: absolute;
    }
    img {
        width: 700px;
        height: 1000px;
    }
    .clearfix {
        content: '';
        clear: both;
        display: block;
        position: absolute;
        margin-left: 30%;
    }
    
    .carousel {
        width: 100%;
        height: 1200px;
        margin: 0 auto;
        margin-top: 13%;
        overflow: hidden;
        position: relative;
    }
    
    .slide {
        width: 800px;
        height: 800px;
    }
    .bullet {
        width: 30%;
        position: absolute;
        margin-top: 70px;
        left: 50%;
        text-align: center;
        z-index: 10;
    }
    .active {
        color: #ffca6c;
    }
    
    .image-enter-active {
        transform: translateX(0);
        transition: all 1s ease;
    }
    
    .image-leave-active {
        transform: translateX(-100%);
        transition: all 1s ease;
    }
    
    .image-enter {
        transform: translateX(100%)
    }
    
    .image-leave {
        transform: translateX(0)
    }
    span {
        width: 100%;
        height: 220px;
        text-align: left;
        color: #eff2ff;
        display: inline-block;
        margin-top: 20px;
        margin-right: 60px;
    }
  }
  .about-background {
    z-index: -1;
    position: absolute;
    height: 50rem;
    width: 100%;
    left: 0;
    top: 150rem;
    background-size: cover !important;
    background: url('../assets/images/about_us.png') no-repeat center;
  }

  .header-title {
    color: #fff;
    display: flex;
    align-self: center;
    margin: auto;
    justify-content: center;
    align-items: center;
    max-width: 94%;
  }

  .header-title h1 {
    font-size: 4rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .header-title h1 {
      font-size: 2.6rem;
    }

    .nav-invisible {
      transform: translate(0, -4.4rem)
    }

    .nav a {
      font-size: 1.4rem;
      padding: 1rem 1.4rem;
    }

    .header, .header-background {
      height: 24rem;
    }
  }
</style>
