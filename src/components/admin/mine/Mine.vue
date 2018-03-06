<template>
  <div class="user_i">
    <MineHeaderView></MineHeaderView>
    <MineMainView></MineMainView>
  </div>
</template>
<script>
  import MineHeaderView from './MineHeader';
  import MineMainView from './MineMain';
  export default{
    components: {
      MineMainView,
      MineHeaderView
    }
  };
</script>