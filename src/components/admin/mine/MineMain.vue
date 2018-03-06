<template>
  <div class="mine_mm">
    <main class="mine_layout">
      <section class="mine_infos clearfix">
        <div class="mmm_info">
          <div class="user_icon">
            <img src="../../../assets/images/my_icon.jpg" alt="">
          </div>
          <div class="user_detal">
            <p class="user_name">{{uInfs.user_name}}</p>
            <div class="reg">
              <a href="#" class="reg_link">注册会员</a>
              <div class="vip">
              <span class="vip_icon">
                <img src="../../../assets/images/vip.png" alt="">
              </span>
                <a href="#">
                  立享PLUS特权 >
                </a>
              </div>
            </div>
          </div>
          <div class="manage_account">
            <span>
              账户管理 >
            </span>
          </div>
        </div>
        <div class="yguanzhu_box">
          <ul class="gunzhuf">
            <li class="item">
              <a href="" class="item_link">
                <span>0</span>
                <span>关注的商品</span>
              </a>
            </li>
            <li class="item">
              <a href="" class="item_link">
                <span>0</span>
                <span>关注的店铺</span>
              </a>
            </li>
            <li class="item">
              <a href="" class="item_link">
                <span>8</span>
                <span>浏览记录</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="my_order_box">
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/my_order_icon.png" alt="">
            <span>我的订单</span>
          </div>
          <div class="order_right">
            <span>全部订单></span>
          </div>
        </div>
        <div class="order_bottom_box">
          <ul>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img src="../../../assets/images/waitpay.png" alt="" class="order_item_pic">
                <span class="order_item_pay">待付款</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img src="../../../assets/images/wuliu.png" alt="" class="order_item_pic">
                <span class="order_item_pay">待收货</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img src="../../../assets/images/tuihuan.png" alt="" class="order_item_pic">
                <span class="order_item_pay">退换/售后</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="my_order_box">
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/mypackage.png" alt="">
            <span>我的钱包</span>
          </div>
          <div class="order_right">
            <span>></span>
          </div>
        </div>
        <div class="order_bottom_box">
          <ul>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -5px;display: block">0</span>
                <span class="order_item_pay">账户余额</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">优惠券</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">京豆</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">京东卡/E卡</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="my_order_box my_b_info">
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/baitiao1.png" alt="">
            <span>京东白条</span>
          </div>
          <div class="order_right">
            <span>白条还款、激活获礼包></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/baitiao2.png" alt="">
            <span>客户服务</span>
          </div>
          <div class="order_right">
            <span>返修/退换货、在线客服></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/bai3.png" alt="">
            <span>会员plus</span>
          </div>
          <div class="order_right">
            <span>PLUS绝密攻略></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/bai4.png" alt="">
            <span>京东会员</span>
          </div>
          <div class="order_right">
            <span>会员俱乐部></span>
          </div>
        </div>
      </section>
      <section class="my_order_box my_b_info">
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/huo1.png" alt="">
            <span>京东火车票</span>
          </div>
          <div class="order_right">
            <span>来京东轻松抢票></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/huo2.png" alt="">
            <span>1元抢宝</span>
          </div>
          <div class="order_right">
            <span>1元成就梦想></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/huo3.png" alt="">
            <span>我的预约</span>
          </div>
          <div class="order_right">
            <span>></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/huo4.png" alt="">
            <span>我的必购码</span>
          </div>
          <div class="order_right">
            <span>></span>
          </div>
        </div>
        <div class="order_top_box">
          <div class="order_left">
            <img src="../../../assets/images/huo5.jpg" alt="">
            <span>应用推荐</span>
          </div>
          <div class="order_right">
            <span>></span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        uInfs: {}
      };
    },
    mounted () {
      this.getUDatas();
    },
    methods: {
      getUDatas () {
        let _this = this;
        // let uObj = {};
        if (window.sessionStorage.userInfo) {
          let uObj = JSON.parse(window.sessionStorage.userInfo);
          let useId = uObj.user_id;
          _this.$http.get('/userinfo', {
            params: {
              uId: useId
            }
          }).then((res) => {
            _this.uInfs = res.data;
            console.log(_this.uInfs);
          }).catch((err) => {
            console.log(err);
          });
        } else {
          _this.$router.push({
            path: '/login'
          });
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .mine_layout{
    max-width: 640px;
    min-width: 300px;
    margin: 0 auto;
    height: 300px;
    padding-top: 40px;
  }

  .mine_layout .mine_infos{
    width: 100%;
    height: 135px;
    background: url("../../../assets/images/userbg.png") no-repeat top center;
    padding-top: 10px;
    position: relative;
  }
  .mine_infos .user_icon{
    float: left;
    width: 76px;
    height: 80px;
    vertical-align: middle;
    margin-right: 4px;
    position: relative;
  }

  .user_icon img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    position: absolute;
    top: 12px;
    left: 10px;
    z-index: 1;
  }

  .mine_infos .user_detal{
    float: left;
    color: #fff;
    margin-top: 10px;
  }
  .user_detal .user_name{
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
  }

  .user_detal .reg{
    margin-top: 8px;
  }
  .reg .reg_link{
    color: #fff;
  }

  .user_detal .vip{
    display: inline-block;
    font-size: 11px;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid rgba(76,74,72,0.5);
    border-radius: 10px;
    box-sizing: border-box;
    margin-left: 4px;
    background-color: rgba(76,74,72,0.3);
    text-align: center;
  }
  .vip .vip_icon{
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #4c4a48;
    position: relative;
  }
  .vip .vip_icon img{
    width: 11px;
    height: 8px;
    position: absolute;
    top: 5px;
    left: 3px;
  }
  .vip a{
    display: inline-block;
    color: #fff;
    height: 18px;
    vertical-align: top;
  }

  .manage_account{
    float: right;
    color: #E6B2B0;
    margin-right: 10px;
    margin-top: 30px;
  }

  .yguanzhu_box{
    height: 45px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

  }
  .mine_infos .mmm_info{
    width: 100%;
    height: auto;
  }
  .item{
    float: left;
    width: 33%;
    height: 45px;
    background: rgba(0,0,0,.2);
    text-align: center;
    margin-left: 1px;
  }

  .item .item_link{
    display: block;
    width: 100%;
    height: 45px;
    text-align: center;
    color: #fff;
  }
  .item_link span:nth-child(2){
    display: block;
  }

  .my_order_box{
    margin-top: 10px;
    width: 100%;
    height: 100px;
    background-color: #fff;

  }
  .my_order_box .order_top_box{
    border-bottom: 1px solid #E3E5E9;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
  }

  .order_top_box .order_left{
    float: left;
    height: 100%;
    width: 30%;
    line-height: 44px;
    position: relative;
  }
  .order_left img{
    width: 15px;
    height: 18px;
    display: inline-flex;
    line-height: 44px;
    position: absolute;
    left: 0;
    top: 13px;
  }
  .order_left span{
    margin-left: 25px;
    display: inline-flex;
  }
  .order_right{
    float: right;
    color: #848689;
  }

  .order_bottom_box{
    height: 56px;
    width: 100%;
    padding: 0 10px;
  }
  .order_bottom_box ul{
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .order_bottom_box .order_item{
    height: 56px;
    line-height: 56px;

  }
  .order_item .order_item_link{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
  }
  .order_item_link .order_item_pay{
    display: block;
    margin-top: -40px;
    color: #848689;
  }
  .order_item_pic{
    display: inline-block;
    width: 21px;
    height: 18px;
    margin: 0 auto;
  }

  .my_b_info {
    margin-top: 10px;
    width: 100%;
    height: auto;
    background-color: #fff;
  }
</style>
