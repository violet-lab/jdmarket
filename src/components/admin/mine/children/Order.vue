<template>
  <div class="order">
    <div class="order_header">
      <div class="order_header_back">
      </div>
      <div class="order_header_title">
        我的订单
      </div>
      <div class="order_header_menu">
      </div>
    </div>
    <div class="order_main">
      <ul class="om_list">
        <li class="om_list_item" v-for="(item, index) in order_headline" :key="index">
          <router-link tag='a' to="" >
            <span>{{item}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="om_content" v-for="(item, index) in [,,,,,,]" :key="item">
        <li class="om_content_item">
          <span>订单号 : </span><span>{{order_content_item[0].order_num}}</span>
          <img src="./delete.png" alt="" >
        </li>
        <li class="om_content_item">
          <div class="om_content_item_two_left">
            <div><span class="state">状&nbsp&nbsp&nbsp态 :</span> <span>已签收</span></div>
            <div><span class="state">总&nbsp&nbsp&nbsp价 :</span> <span>￥118.80</span></div>
          </div>
          <div class="om_content_item_two_right">
             <span>去评价</span><span>再次购买</span>
          </div>
        </li>
        <li class="om_content_item">
          <div class="oci_def">
            <span>JD 京东</span>
          </div>
          <div class="oci_con">
            <img src="//img10.360buyimg.com/n2/jfs/t4024/27/1710044712/118941/948bccf6/58959815nb71fc33b.jpg" alt="">
            <div>
              <p>伊利 安慕希希腊风味常温酸奶原味205g*12盒/礼盒装</p>
              <p>2 件</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg:'zuhuo',
        order_headline: ['所有订单', '待付款', '配送中', '已完成'],
        order_content_item:[{
          order_num: '72660085423',
          order_img_url: '//img10.360buyimg.com/n2/jfs/t4024/27/1710044712/118941/948bccf6/58959815nb71fc33b.jpg'
        }, {
          order_num: '72547400623',
          order_img_url: '//img10.360buyimg.com/n2/jfs/t13723/123/2525851015/271811/ce8cc365/5a430f08n84b68537.jpg'
        }, {
          order_num: '70033404094',
          order_img_url: '//img10.360buyimg.com/n2/jfs/t7573/309/3386244663/231256/8a726b4d/59e4b236n32ac3900.jpg'
        }]
      };
    }
  };
</script>
<style lang="scss" scoped>
  .order {
    background-color: pink;
    height: 3000px;
    .order_header {
      z-index: 999;
      position: fixed;
      top:0;
      background-color: white;
      height: 45px;
      width: 100%;
      .order_header_back {
        float: left;
        height: 100%;
        width: 10%;
        // background-color: blue;
        background-image: url("jd-sprites.png");
        background-repeat: no-repeat;
        background-position:-40px 3px;
      }
      .order_header_title {
        text-align: center;
        line-height: 45px;
        float: left;
        height: 100%;
        width: 80%;
        // background-color: yellow;
        font-size: 18px;
        color: #333;
      }
      .order_header_menu {
        float: right;
        // background-color: white;
        width: 10%;
        height: 100%;
        background-image: url("jd-sprites.png");
        background-repeat: no-repeat;
        background-position:-120px 3px;

      }


    }
    .order_main {
      margin-top: 55px;
      background-color: rgb(89, 243, 17);
      height: 2000px;
      width: 100%;
      .om_list {
        background-color: white;
        height: 44px;
        .om_list_item {
          display: inline-block;
          width:25%;
          height: 100%;
          line-height:45px ;
          text-align: center;
          span {
            // background-color: orange;
            display: inline-block;
            height: 100%;
            border-bottom: solid 2px white;
          }
        }
        .om_list_item:first-child span {
          border-bottom-color:  red;
        }
      }
      .om_content {
        border-right: solid 10px white;
        border-left: solid 10px white;
        border-bottom: solid 10px rgb(232, 232, 237);
        height: 220px;
        background-color: white;
        .om_content_item {
          border-top: solid 1px rgb(232, 232, 237);

        }
        .om_content_item:nth-of-type(1) {
          height: 45px;
          line-height: 45px;
          span:nth-of-type(1) {
            color: #999;
          }
          span:nth-of-type(2) {
            color: #333;
          }
          img {
            float: right;
            // display: inline-block;
            width:23px;
            // vertical-align: middle;
            margin-top: 11px;
          }
          // background-color: red;
        }
        .om_content_item:nth-of-type(2) {
          height: 40px;
          font-size: 12px;
          line-height: 20px;
          .om_content_item_two_left {
            width: 100px;
            float: left;
            div .state {
              color: #666;
            }
            div:nth-of-type(1) {
              color: #3985ff;
            }
            div:nth-of-type(2) {
               color: #e4393c;
            }

          }
          .om_content_item_two_right {
            // background-color: red;
            width: 140px;
            float: right;
            color: white;
            margin-top: 6px;
            text-align: center;
            line-height: 26px;

            span:nth-last-of-type(1){
              height: 26px;
              width: 80px;
              float: left;
              background: #3884ff;
              font-size: 14px;

            }
            span:nth-last-of-type(2){
              height: 26px;
              width: 50px;
              float: right;
              background: #f19325;
              font-size: 14px;
            }
          }
          // background-color: blue;
        }
        .om_content_item:nth-of-type(3) {
          height: 115px;
          // background-color: red;
          .oci_def {
            height: 40px;
            line-height: 40px;
            // background-color: orange;
            span {
            color: #666;
            font-family: -apple-system,Helvetica,sans-serif;
            }
          }
          .oci_con {
            img {
              float: left;
              width:18%;
            }
            div {
              background-color: #fff;
              float: right;
              width:80%;
              div{
                background-color: yellow;
                font-family: -apple-system,Helvetica,sans-serif;
                line-height: 21px;
              }
            }
          }
        }
      }
    }
  }
</style>

