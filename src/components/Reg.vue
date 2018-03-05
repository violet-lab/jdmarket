<template>
  <div class="m_r">
    <header class="top_bar">
      <a onclick="window.history.go(-1)" class="icon_back"></a>
      <h3 class="cartname">京东注册</h3>
    </header>
    <main class="user_login_box">
      <div class="login_dialog">
        <div class="_username">
          <input type="text" name="regname" placeholder="用户名/邮箱/手机号" class="user_input" v-model="regname">
        </div>
        <div class="_username u_passwd">
          <input type="password" name="regpasswd" placeholder="请输入密码" class="user_input" v-model="regpasswd">
        </div>
        <div class="_username u_passwd">
          <input type="password" name="regpasswd_ag" placeholder="请再次输入密码" class="user_input" v-model="regpasswd_ag">
        </div>
        <div class="login_box">
          <a @click="goSearch()" class="btn_login">注册</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        regname: '',
        regpasswd: '',
        regpasswd_ag: '',
        regInfo: {}
      };
    },
    methods: {
      goSearch () {
        let _this = this;
        if (_this.regname === '') {
          alert('请输入手机号');
        } else if (_this.regpasswd === '' || _this.regpasswd_ag === '') {
          alert('请输入密码');
        } else if (_this.regpasswd !== _this.regpasswd_ag) {
          alert('两次输入的密码不一致');
        } else {
          _this.$http.post('/reg', {
            regName: _this.regname,
            regPasswd: _this.regpasswd
          }).then((res) => {
            if (res.status === 200) {
              _this.regInfo = res.data;
              if (_this.regInfo.status === 1) {
                //  reg success, go to this login page
                window.history.go(-1);
              } else {
                alert('注册失败');
              }
            } else {
              alert('出现错误');
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
