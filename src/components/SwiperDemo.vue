<template>
  <div class="swiper" id="mySwiper">
     <div class="swiper-container" id = "swiperBox">
        <div class="swiper-wrapper">
            <div class="swiper-slide">1</div>
            <div class="swiper-slide">2</div>
            <div class="swiper-slide">3</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import   '../../static/plugin//swiper/css/swiper.min.css'
import   '../../static/plugin//swiper/js/swiper.min.js'
export default {
  name: 'SwiperDemo',
  
  data () {
    return {

    }
  },
  mounted (){
    var selectDom = document.querySelectorAll("#swiperBox")
    var mySwiper = new Swiper(selectDom,{
        // autoplay : 3000,
        lazyLoading : true,
        loop:true,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
    })

  }
  
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mySwiper{
  width: 500px;
  height: 360px
}
#swiperBox{
  width: 500px;
  height: 360px
}
</style>
