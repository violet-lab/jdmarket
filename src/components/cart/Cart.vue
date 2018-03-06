<template>
  <div id="my_cart">     
    <CartHeaderView></CartHeaderView>
    <CartMainView></CartMainView>
    <CartFooterView></CartFooterView>
    <div class="pop" style="display: none">
      <div class="pop_box">
        <div class="del_info">
          确定要删除该商品吗？
        </div>
        <div class="del_cancel">
          取消
        </div>
        <div class="del_ok">
          确定
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CartHeaderView from './CartHeader.vue';
  import CartMainView from './CartMain.vue';
  import CartFooterView from './CartFooter.vue';

  export default{
    components: {
      CartHeaderView,
      CartMainView,
      CartFooterView
    },
    mounted () {
      this.check();
      this.animatDelBox();
    },
    methods: {
      check () {
        var cartBoxs = document.getElementsByClassName('check_box');
        for (var i = 0; i < cartBoxs.length; i++) {
          cartBoxs[i].onclick = function () {
            var hasChecked = this.getAttribute('checked');
            if (hasChecked != null) {
              this.removeAttribute('checked');
            } else {
              this.setAttribute('checked', '');
            }
          };
        }
      },
      animatDelBox () {
        var cart_del = document.getElementsByClassName('cart_del');
        var pop = document.getElementsByClassName('pop')[0];
        var pop_box = document.getElementsByClassName('pop_box')[0];
        var delUp = null;
        for (var i = 0; i < cart_del.length; i++) {
          cart_del[i].onclick = function () {
            pop.style.display = 'block';
            pop_box.className = 'pop_box delBoxOut';
            this.children[0].style.transition = 'all 1s ease 0s';
            this.children[0].style.webkitTransition = 'all 1s ease 0s';
            this.children[0].style.transform = 'translateY(-5px) translateX(-2px) rotate(-45deg)';
            this.children[0].style.webkitTransform = 'translateY(-5px) translateX(-2px) rotate(-45deg)';
            delUp = this.children[0];
          };
        }
        document.getElementsByClassName('del_cancel')[0].onclick = function () {
          pop.style.display = 'none';
          pop_box.className = 'pop_box';
          if (delUp) {
            delUp.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
            delUp.style.webkitTransform = 'translateY(0px) translateX(0px) rotate(0deg)';
          }
        };
        document.getElementsByClassName('del_ok')[0].onclick = function () {
          pop.style.display = 'none';
          pop_box.className = 'pop_box';
          if (delUp) {
            delUp.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
            delUp.style.webkitTransform = 'translateY(0px) translateX(0px) rotate(0deg)';
          }
        };
      }
    }
  };
</script>
<style lang="scss" scoped>
  .pop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
    padding: 0 5%;
  }

  .pop .pop_box {
    width: 85%;
    height: 140px;
    background-color: #fff;
    border-radius: 8px;
    margin: 50% auto;
    padding: 0 5%;
  }

  .pop_box .del_info {
    text-align: center;
    line-height: 70px;
    font-size: 16px;
    color: #888888;
  }

  .pop_box .del_cancel {
    float: left;
    width: 35%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    margin-right: 15%;
  }

  .pop_box .del_ok {
    float: left;
    width: 35%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    background: #D8505C;
    color: #fff;
    margin-left: 15%;
  }

  @keyframes delBoxOut {
    0% {
      opacity: 0;
      transform: translateY(-2000px);
      -webkit-transform: translateY(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(30px);
      -webkit-transform: translateY(30px);
    }
    75% {
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
    }
    90% {
      transform: translateY(5px);
      -webkit-transform: translateY(5px);
    }
    100% {
      opacity: 1;
      transform: none;
      -webkit-transform: none;
    }
  }
  .delBoxOut {
    animation: delBoxOut 1s ease;
  }
</style>
