<template>
  <div class="my_l">
    <header class="top_bar">
      <router-link  to="/home" class="icon_back"></router-link>
      <h3 class="cartname">京东登录</h3>
    </header>
    <main class="user_login_box">
      <div class="login_dialog">
        <div class="_username">
          <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
        </div>
        <div class="_username u_passwd">
          <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
        </div>

        <div class="login_box">
          <a @click="goLogin()" class="btn_login">登录</a>
        </div>
        <div class="go_reg_box">
          <router-link tag="span" to="/register">快速注册</router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        username: '',
        password: '',
        userInfo: {}
      };
    },
    methods: {
      goLogin () {
        let _this = this;
        if (_this.username === '') {
          alert('请输入用户名');
        } else if (_this.password === '') {
          alert('请输入密码');
        } else {
          _this.$http.post('/login', {
            loginName: _this.username,
            loginPawd: _this.password
          }).then((res) => {
            if (res.status === 200) {
              _this.userInfo = res.data;
              if (_this.userInfo.status === 1) {
                console.log(_this.userInfo);
                window.sessionStorage.userInfo = JSON.stringify(_this.userInfo);
                console.log(window.sessionStorage.userInfo);
                _this.$store.dispatch('setUserInfo', _this.userInfo);
                console.log(_this.$store);
                // let redirect = decodeURIComponent(_this.$route.query.redirect || '/');
                _this.$router.push('/mine');
              } else {
                alert(_this.userInfo.msg);
              }
            } else {
              alert('请求出现错误');
            }
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user_login_box{
    max-width: 640px;
    min-width: 300px;
    margin: 0 auto;
    height: 200px;
    padding-top: 40px;
  }

  .user_login_box .login_dialog{
    width: 100%;
    height: 100%;
    padding: 10px;

  }

  .login_dialog ._username{
    height: 50px;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border: 1px solid #bebebe;
    border-radius: 2px;
  }

  ._username .user_input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding-left: 6px;
  }
  .login_dialog .u_passwd{
    margin-top: 10px;
  }

  .login_dialog .login_box{
    height: 50px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #F23030;
    border-radius: 4px;
    margin-top: 30px;
  }

  .login_box a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #F23030;
  }

  .go_reg_box{
    float: right;
  }
  .go_reg_box span{
    display: inline-block;
    color: #aaa;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
  }
</style>
