<template>
  <div class="home_ban">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img, index) in imgArray" :key="index">
        <a href="#fdf"><img :src="img"/></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        imgArray: [
          'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15052/363/1969469596/127337/e5282fc1/5a61b16aN938bede7.jpg!q70.jpg',
          'https://img1.360buyimg.com/da/jfs/t19783/7/141325248/160830/e9f99090/5a5f2426Nc7f667a8.jpg',
          'https://img1.360buyimg.com/da/jfs/t16150/221/1638330634/423008/14530141/5a58727bNbfd9e5ef.jpg',
          'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t18325/269/164527083/153957/fe7003e8/5a61669fNeb892a58.jpg!q70.jpg',
          'https://img1.360buyimg.com/da/jfs/t13693/107/2172847180/86994/d7ec761/5a6061f7N54c36a58.jpg'
        ],
        swiperOption: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      };
    },
    computed: {
    },
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  display: block
}
</style>
