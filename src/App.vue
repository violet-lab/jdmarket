<template>
  <div id="app">
  <router-view></router-view>
  <NavBottomView v-show="shownav"></NavBottomView>
  </div>
</template>

<script>
  import NavBottomView from './components/common/NavBottom.vue';
  import {mapGetters} from 'vuex';
  export default {
    name: 'app',
    computed: mapGetters(['loading', 'shownav']),
    // 监听路由的变化
    watch: {
      $route (to, from) {
        if (to.path.indexOf('detail') !== -1) {
          this.$store.dispatch('hideNav');
        } else {
          this.$store.dispatch('showNav');
        }
        if (to.path === '/cart' || to.path === '/search' || to.path === '/login' || to.path === '/register') {
          this.$store.dispatch('hideNav');
        }
      }
    },
    components: {
      NavBottomView
    }
  };
</script>

<style>
  body {
    background-color: #F3F3F3;
  }
</style>
