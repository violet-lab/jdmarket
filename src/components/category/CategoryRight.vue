<template>
  <div id="cate_right">
    <div class="category_right">
      <div class="category_banner">
        <a href="#">
          <img src="../../assets/images/banner_1.png" alt="">
        </a>
      </div>
      <div class="category_detail">
        <h3 class="category_n">Hot Category Goods</h3>
        <ul>
          <li class="category_detail_item" v-for="(index, item) in cateGoodsData" :key=index>
            <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
              <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
              <p class="category_detail_item_name">{{item.product_name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    mounted () {
      this.fetchData(this.$route.params.id);
    },
    data () {
      return {
        cateGoodsData: []
      };
    },
    watch: {
      $route (to) {
        //  console.log(to);
        var reg = /catgory\/\d+/;
        if (reg.test(to.path)) {
          var categotyId = this.$route.params.id || 0;
          this.fetchData(categotyId);
        }
      }
    },
    methods: {
      fetchData (id) {
        var _this = this;
        _this.$http.get('/categorygoods', {
          params: {
            mId: id
          }
        }).then((res) => {
          _this.cateGoodsData = res.data;
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .category_right {
    width: 100%;
    height: 100%;
    padding-left: 90px;
    background-color: #fff;
  }

  .category_right .category_banner,
  .category_detail {
    padding: 10px 12px;
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

  .category_detail .category_n {
    color: #888;
    margin-bottom: 10px;
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
  }

</style>
