<template>
  <div id="cate_left">
    <div class="category_left">
      <ul class="childbox">
        <li class="" v-for="item in leftDatas">
          <router-link :to="'/catgory/'+item.category_id">
            {{item.category_name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      leftDatas: []
    };
  },
  mounted () {
    this.getLeftDatas();
  },
  methods: {
    getLeftDatas () {
      let _this = this;
      _this.$http.get('/category').then((res) => {
        _this.leftDatas = res.data;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .category_left {
    width: 90px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 45px;
    background-color: #fff;
  }

  .category_left ul {}

  .category_left ul li {
    height: 50px;
    width: 90px;
    background: #f3f4f6;
    font-size: 12px;
    font-family: sans-serif;
  }

  .category_left ul li a {
    height: 50px;
    width: 90px;
    display: block;
    text-align: center;
    line-height: 50px;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .category_left ul li.now {
    background: #fff;
  }

  .category_left ul li.now a {
    border-right: none;
    color: #f15353;
  }
</style>
