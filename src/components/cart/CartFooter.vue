<template>
	<div class="cart_fo">
		<footer class="cart_footer">
      <div class="all_check_box">
        <div class="check_box">
        </div>
        <span>全选</span>
      </div>
      <div class="count_money_box">
        <div class="heji">
          <strong>合计:</strong>
          <strong>￥</strong>
          <strong>537.80</strong>
        </div>
        <div class="total_money clearfix">
          <span>总额:</span>
          <i>￥</i>
          <span>537.80</span>
          <span>立减:</span>
          <i>￥</i>
          <span>0.00</span>
        </div>>
        <a href="#" class="go_pay">
          <span>去计算(1)</span>
        </a>
      </div>
		</footer>
	</div>
</template>

<style lang="scss" scoped>

  .cart_footer {
    width: 100%;
    height: 50px;
    border-top: 1px solid #cccccc;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  .cart_footer .all_check_box {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .cart_footer .all_check_box .check_box {
    top: 15px;
    left: 14px;
  }

  .cart_footer .all_check_box span {
    text-align: center;
    line-height: 50px;
    margin-left: 36px;
    color: #232326;
    font-weight: 600;
  }

  .cart_footer .count_money_box {
    float: left;
    height: 50px;
    margin-left: 80px;
  }

  .count_money_box .heji {
    margin-top: 6px;
  }

  .count_money_box .total_money {
    color: #aaa;
    font-size: 12px;
  }

  .count_money_box .total_money i {
    font-style: normal;
    text-decoration: none;
  }

  .count_money_box .go_pay {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 98px;
    line-height: 50px;
    text-align: center;
    background: #f23030;
    color: #fff;
    font-size: 16px;
    height: 49px;
    margin-top: 1px;
    padding: 0 16px;
  }

</style>
