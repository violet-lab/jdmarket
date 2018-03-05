<template>
  <div class="home">
    <div class="m_layout">
      <!-- 头部区 -->
      <HomeHeaderView></HomeHeaderView>
      <!-- 轮播图-->
      <HomeBannerView></HomeBannerView>
      <!--导航-->
      <HomeNavView></HomeNavView>
      <!--商品区-->
      <HomeMainView></HomeMainView>
    </div>
  </div>
</template>
 <script>
  import HomeHeaderView from './HomeHeader.vue';
  import HomeBannerView from './HomeBanner.vue';
  import HomeNavView from './HomeNav.vue';
  import HomeMainView from './HomeMain.vue';
  export default{
    components: {
      HomeHeaderView,
      HomeBannerView,
      HomeNavView,
      HomeMainView
    },
    mounted () {
      this.bindEvent();
      // this.scrollPic();
    },
    methods: {
      bindEvent () {
        var sea = document.getElementById('my_search');
        /* banner对象 */
        var banner = document.getElementById('my_banner');
        /* 高度 */
        var height = banner.offsetHeight;
        window.onscroll = function () {
          var top = document.body.scrollTop;
          /* 当滚动高度大于banner的高度时候颜色不变 */
          if (top > height) {
            sea.style.background = 'rgba(201,21,35,0.85)';
          } else {
            var op = top / height * 0.85;
            sea.style.background = 'rgba(201,21,35,' + op + ')';
          }
        };
      }
    }
  };
</script>
<style>
  .m_layout {
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    height: 1000px;
  }
</style>