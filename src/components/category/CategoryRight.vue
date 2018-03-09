<template>
  <div id="cate_right">
    <div class="category_right">
      <div class="category_banner">
          <img v-lazy="img_url[id]" alt="">
      </div>
      <div class="category_detail">
        <ul class="list" v-for="(item, index) in [,,]" :key=index>
          <li class="category_detail_def">常用分类 <span>清空</span></li>
          <li class="category_detail_item" v-for="(item, index) in cateGoodsData" :key=index>
            <router-link :to="''" tag = "div" class="category_detail_item_link">
              <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
              <p class="category_detail_item_name">{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    // mounted () {
    //   this.fetchData(this.$route.params.id);
    // },
    // data () {
    //   return {
    //     cateGoodsData: []
    //   };
    // },
    // watch: {
    //   $route (to) {
    //     //  console.log(to);
    //     var reg = /catgory\/\d+/;
    //     if (reg.test(to.path)) {
    //       var categotyId = this.$route.params.id || 0;
    //       this.fetchData(categotyId);
    //     }
    //   }
    // },
    // methods: {
    //   fetchData (id) {
    //     var _this = this;
    //     _this.$http.get('/categorygoods', {
    //       params: {
    //         mId: id
    //       }
    //     }).then((res) => {
    //       _this.cateGoodsData = res.data;
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    //   }
    // }
    mounted () {
    },
    data () {
      return {
        id:0,
        img_url:['http://img13.360buyimg.com/mcoss/jfs/t16000/198/2301610159/26513/b138128e/5aa0d312N97b18132.jpg'],
        cateGoodsData: [{
          product_img_url:'//img20.360buyimg.com/focus/jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg',
          name:'吃鸡装备'
        },{
          product_img_url:'//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg',
          name:'手机'

        },{
          product_img_url:'//img10.360buyimg.com/focus/jfs/t17053/241/671667712/6565/a9dc4c3b/5a9f82d8Naf14421d.jpg',
          name:'电话手表'
        },{
          product_img_url:'//img30.360buyimg.com/focus/jfs/t19282/66/487901773/1169/9ea7cd58/5a7d5834N72dddd3b.jpg',
          name:'耳机'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .category_right {
    width: 100%;
    height: 100%;
    padding-left: 90px;
    overflow: hidden;
  }

  .category_right .category_banner,
  .category_detail {
    // padding: 10px 12px;
  }

  .category_right .category_banner a img {
    display: block;
    width: 100%;
  }

  .category_detail .category_detail_item {
    float: left;
    width: 33.333%;
    text-align: center;
  }

  .category_detail  {

    background-color: #fff;
    width: 96%;
    float: right;
    .list {
      overflow: hidden;
      margin-top: 10px;
      border-top: 10px solid rgb(243, 243, 243)
    }
  }

  .category_detail_item_link .category_detail_item_pic {
    width: 62px;
    height: 62px;
    display: inline-block;
  }

  .category_detail_item_link .category_detail_item_name {
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    color: #686868;
  }
  .category_detail .category_detail_def {
    font-family: PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif;
    font-size: 12px;
    font-weight: bold;
    span {
      float: right;
      color: #848689;
      font-size: 12px;
    }
  }
</style>
