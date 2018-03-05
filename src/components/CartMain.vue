<template>
  <main class="cart_box">
    <div class="cart_tip clearfix">
      <span>登录后可同步电脑与手机购物车中的商品</span>
      <a href="#" class="login">登录</a>
    </div>
    <div class="cart_content clearfix" v-for="item in cartDatas">
      <div class="cart_shop clearfix">
        <div class="cart_check_box">
          <div class="check_box">
          </div>
        </div>
        <div class="shop_info clearfix">
          <img src="../assets/images/buy-logo.png" alt="" class="shop_icon">
          <span class="shop_name">{{item.shop_name}}</span>
        </div>
        <div class="cart_free clearfix">
          <span class="free_tip">优惠券></span>
        </div>
      </div>
      <div class="cart_item">
        <div class="cart_item_box">
          <div class="check_box">
          </div>
        </div>
        <div class="cart_detial_box clearfix">
          <a href="#" class="cart_product_link">
            <img v-lazy="item.product_img_url" alt="">
          </a>
          <div class="item_names">
            <a href="#">
              <span>{{item.product_name}}</span>
            </a>
          </div>
          <div class="cart_weight">
            <i class="my_weigth">重量:0.45kg</i>
            <span class="my_color">颜色:AT800/16</span>
          </div>
          <div class="cart_product_sell">
            <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
            <div class="cart_add clearfix">
              <span class="my_add">+</span>
              <input type="tel" class="my_count" :value="item.goods_num">
              <span class="my_jian">-</span>
            </div>
          </div>
          <div class="cart_del clearfix">
            <div class="del_top">
            </div>
            <div class="del_bottom">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
  export default{
    data () {
      return {
        cartDatas: []
      };
    },
    mounted () {
      this.getCartDatas();
    },
    methods: {
      getCartDatas () {
        let _this = this;
        _this.$http.get('/cart').then((res) => {
          _this.cartDatas = res.data;
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .cart_box {
    width: 100%;
  }

  .cart_box .cart_tip {
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #bfbfbf;
    line-height: 42px;
    text-align: center;
    color: #aaa;
  }

  .login {
    color: #fff;
    display: inline-block;
    background: #f15353;
    border-radius: inherit;
    padding: 4px 12px;
    line-height: 1.2em;
    color: #fff;
  }

  .cart_content {
    background-color: #fff;
    margin: 10px 8px 0px 8px;
    overflow: hidden;
  }

  .cart_content .cart_shop {
    height: 44px;
    width: 100%;
  }


  /*the common checkbox*/

  .check_box {
    display: block;
    width: 20px;
    height: 20px;
    background: url("../assets/images/shop-icon.png") no-repeat;
    background-size: 50px 100px;
    background-position: 0 0;
    position: absolute;
    left: 6px;
    top: 12px;
  }

  .check_box[checked] {
    background-position: -25px 0;
  }

  .cart_check_box {
    width: 40px;
    height: 40px;
    position: absolute;
  }

  .shop_info {
    width: 100px;
    float: left;
    height: 44px;
    line-height: 44px;
    margin-left: 32px;
  }

  .shop_info .shop_icon {
    width: 16px;
    height: 13px;
    display: inline-block;
  }

  .cart_free {
    height: 44px;
    float: right;
    line-height: 44px;
    text-align: center;
    color: #F23C30;
    padding-right: 4px;
  }

  .cart_item {
    background-color: #fff;
    height: 130px;
    position: relative;
    border-bottom: 2px solid #ccc;
    width: 100%;
  }

  .cart_item .cart_item_box {
    position: relative;
    width: 40px;
    float: left;
    background-color: #fff;
  }

  .cart_item_box .check_box {
    position: absolute;
    top: 31px;
    left: 6px;
  }

  .cart_item .cart_detial_box {
    float: left;
    background-color: #fff;
    margin-left: 30px;
    width: 100%;
  }

  .cart_detial_box .cart_product_link {
    width: 100px;
    height: 100px;
    display: block;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px;
    float: left;
    background-color: #fff;
    margin-right: 10px;
  }

  .cart_detial_box .cart_product_link img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .cart_detial_box .item_names {
    height: 34px;
    overflow: hidden;
  }

  .cart_detial_box .cart_weight {
    margin-top: 2px;
    color: #BCCCCA;
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 16px;
  }

  .cart_detial_box .cart_weight .my_weigth {
    font-style: normal;
  }

  .cart_detial_box .cart_product_sell {
    width: 100%;
  }

  .cart_detial_box .cart_product_sell .product_money {
    font-size: 12px;
    color: #F23030;
  }

  .real_money {
    font-size: 16px;
  }

  .cart_product_sell .cart_add {
    width: 100px;
    height: 26px;
    float: right;
    margin-right: 20px;
  }

  .cart_product_sell .cart_add .my_add,
  .cart_product_sell .cart_add .my_jian {
    display: inline-block;
    width: 25px;
    height: 24px;
    border: 1px solid #CBCBCB;
    text-align: center;
    float: left;
  }

  .cart_product_sell .cart_add .my_add {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .cart_product_sell .cart_add .my_jian {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .cart_product_sell .cart_add .my_count {
    height: 24px;
    width: 30px;
    border-top: 1px solid #CBCBCB;
    border-bottom: 1px solid #CBCBCB;
    text-align: center;
    float: left;
  }

  .cart_detial_box .cart_del {
    position: absolute;
    right: 11px;
    top: 98px;
  }

  .cart_del .del_top {
    width: 20px;
    height: 5px;
    background: url("../assets/images/delete_up.png") no-repeat;
    background-size: 20px 5px;
    margin-left: -1px;
  }

  .cart_del .del_bottom {
    width: 18px;
    height: 18px;
    background: url("../assets/images/delete_down.png") no-repeat;
    background-size: 18px 18px;
    margin-top: -3px;
  }
</style>
