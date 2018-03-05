<template>
	<div class="home_m">
    <main class="m_product">
      <section class="product_box">
        <div class="product_top">
          <a href="#" class="product_left">
            <img src="../../assets/images/jd_skill.png" alt="" class="miaosha_icon">
            <strong class="dianshu">六点场</strong>
            <span class="time">{{time}}</span>
          </a>
        </div>
        <div class="product_content">
          <ul>
            <li class="product_skill_item" v-for="(item,index) in homeDatas" :key="index">
              <router-link :to="'/detail/'+item.product_id" class="product_skill_item_link">
                <img v-lazy="item.product_img_url" alt="" class="product_skill_item_cion lazy-img-fadein">
                <p class="nowprice">
                  <i style="text-decoration: none;font-style: normal;font-size: 12px">¥</i>
                  <span class="now_price">{{item.product_price}}</span>
                </p>
                <p class="oldprice">
                  <i style="text-decoration: none;font-style: normal;font-size: 12px">¥</i>
                  <del class="old_price">{{item.product_uprice}}</del>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
      <div class="left_share_quality_content clearfix">
        <div class="share_quality">
          <div class="share_quality_top">
            <div class="share_title">
              <p class="share_text">为你推荐</p>
            </div>
          </div>
          <div class="share_quality_left not_eng_box">
            <ul>
              <li class="not_eng_item" v-for="(item, index) in mainDatas" :key="index">
                <router-link  class="not_eng_link" :to="'/detail/'+item.product_id">
                  <img v-lazy="item.product_img_url" alt="" class="not_eng_pic lazy-img-fadein">
                  <div class="not_eng_info">
                    <p class="not_eng_title">{{item.product_name}}</p>
                    <p class="not_eng_text">
                      <i style="text-decoration: none;font-style: normal;font-size: 12px">¥</i>
                      <span class="more_info_price_txt">{{item.product_price}}</span>
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
	</div>
</template>
<script>
  export default{
    data () {
      return {
        homeDatas: [],
        mainDatas: [],
        time: ''
      };
    },
    mounted () {
      var _this = this;
      _this.getData();
      setInterval(function () {
        _this.time = new Date().toLocaleTimeString();
      }, 500);
    },
    methods: {
      getData () {
        let _this = this;
        _this.$http.get('/home').then((res) => {
          _this.homeDatas.push(res.data[0]);
          _this.homeDatas.push(res.data[1]);
          _this.homeDatas.push(res.data[2]);
          _this.homeDatas.push(res.data[3]);
          _this.mainDatas = res.data;
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .m_product {
    margin: 0 5px;
  }

  .m_product .product_box {
    box-shadow: 0 0 1px 1px #e0e0e0;
  }

  .m_product .product_top {
    height: 32px;
    border-bottom: 1px solid #ccc;
  }
  .product_left{
    width: 60%;
    height: 32px;
    display: flex;
  }

  .product_left .miaosha_icon{
    height: 30px;
    width: 60px;
  }

  .product_left .dianshu{
    display: inline-block;
    height: 32px;
    line-height: 27px;
    margin-left: 8px;
  }

  .product_left .time{
    line-height: 27px;
    margin-left: 4px;
    color: #aaa;
  }

  .product_content{
    margin-top: 8px;

  }
  .product_content .product_skill_item{
    width: 25%;
    height: 130px;
    float: left;
    text-align: center;
    background-color: #fff;
  }

  .product_skill_item .product_skill_item_link{
    width: 25%;
    height: 130px;
    display: block;
  }

  .product_skill_item_link .product_skill_item_cion{
    width: 80px;
    height: 80px;
    display: block;
  }

  .product_skill_item_link .nowprice{
    width: 80px;
    text-align: center;
    color: #F11938;
    font-weight: 800;
    font-family: "微软雅黑";
    font-size: 16px;
  }

  .product_skill_item_link .oldprice{
    width: 80px;
    text-align: center;
    color: #aaa;
  }
  /*还没逛够*/
  .not_eng_box{
    height: auto;

  }
  .left_share_quality_content{
    width: 100%;
  }

  .share_quality_left{
    width: 100%;
  }
  .not_eng_item{
    text-align: center;
    float: left;
    width: 50%;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .not_eng_link{
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0s;
  }

  .not_eng_pic{
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 5px  0 5px 5px;
  }

  .not_eng_info{
    text-align: left;
    margin-left: 10px;

  }

  .not_eng_title{
    overflow: hidden;
    margin-bottom: 5px;
    height: 36px;
    color: #6F7474;
    font-weight: 500;
    font-family: "Microsoft YaHei";

  }

  .not_eng_text{
    width: 80px;
    color: #F11938;
    font-weight: 800;
    font-family: "微软雅黑";
    font-size: 16px;
  }

  img[lazy=error] {
    background: url('../../assets/images/err.png');
  }
</style>
