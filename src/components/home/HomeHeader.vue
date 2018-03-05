<template>
  <div class="home_h">
    <header class="m_header">
      <div class="m_header_box" id="my_search">
        <a href="#" class="icon_logo"></a>
        <form action="#">
          <span class="icon_search"></span>
          <input type="search" class="search" placeholder="点击搜索" @click="goSearch($event)">
        </form>
        <router-link to="/login" class="logo_btn">登录</router-link>
      </div>
     </header>
  </div>
</template>
<script>
  export default{
    methods: {
      goSearch (event) {
        this.$router.push('/search');
        window.event? window.event.returnValue = false : event.preventDefault();
      }
    }
  };
</script>
<style lang="scss" scoped>
.m_header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  z-index: 2;
}

.m_header .m_header_box {
  position: relative;
  min-width: 300px;
  max-width: 640px;
  height: 40px;
  margin: 0 auto;
  background: rgba(201, 21, 35, 0);
}

.m_header_box .icon_logo {
  width: 60px;
  height: 36px;
  position: absolute;
  top: 4px;
  left: 10px;
  background-position: 0 -103px;
  display: block;
}

.m_header_box form {
  width: 100%;
  height: 40px;
  padding-left: 75px;
  padding-right: 60px;
  position: relative;
}

.m_header_box form .search {
  width: 100%;
  height: 30px;
  border-radius: 15px;
  margin-top: 5px;
  padding-left: 30px;
}

.m_header_box form .icon_search {
  display: block;
  width: 37px;
  height: 40px;
  position: absolute;
  left: 85px;
  top: 10px;
  background-position: -60px -109px;
}

.m_header_box .logo_btn {
  display: block;
  width: 30px;
  height: 40px;
  position: absolute;
  right: 8px;
  top: 0;
  color: #fff;
  line-height: 40px;
  font-weight: 400;
}
</style>
