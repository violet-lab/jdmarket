<template>
  <main class="category_content">
    <CategoryLeftView></CategoryLeftView>
    <CategoryRightView></CategoryRightView> 
  </main>
</template>
<script>
  import CategoryLeftView from './CategoryLeft.vue';
  import CategoryRightView from './CategoryRight.vue';
  export default{
    components: {
      CategoryLeftView,
      CategoryRightView
    }
  };
</script>
<style lang="scss" scoped>
  .category_content {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 45px;
  }
</style>
