<template>
  <div class="search_page">
    <div class="h_layout">
      <SearchMainView></SearchMainView>
    </div>
  </div>
</template>
<script>
  import SearchMainView from './SearchMain.vue';
  export default{
    components: {
      SearchMainView
    }
  };
</script>

<style lang="scss" scoped>
  .h_layout {
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    height: 1000px;
    background-color: #fff;
  }
</style>
