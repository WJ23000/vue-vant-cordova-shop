<template>
  <div class="goods-list">
    <div :class="viewWayData ? curActive1 : curActive2" v-for="(item,index) in goodsListData" :key="index">
      <router-link :to="{path:'/GoodsDetail',query: {goodsId: item.id}}">
        <div class="goods-icon">
          <img v-lazy="item.pic">
        </div>
        <div class="goods-detail">
          <span class="goods-title">{{item.title}}</span>
          <div class="goods-option">
            <span class="goods-price"><span class="symbol">￥</span>{{item.price}}</span>
            <span class="goods-sell">已出售{{item.sell}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsList",
  props: {
    goodsListVal:{
      type: Array
    },
    viewWayVal:{
      type: Boolean
    }
  },
  data() {
    return {
      goodsListData: [],
      viewWayData: false,
      curActive1: "goods-grid-flex",
      curActive2: "goods-grid"
    };
  },
  created() {},
  mounted() {
    this.goodsListData=this.goodsListVal,
    this.viewWayData=this.viewWayVal
  },
  watch: {
    goodsListVal: {
　　  immediate: true,
      handler(val){
        this.goodsListData=val
      }
　　},
    viewWayVal: {
　　  immediate: true,
      handler(val){
        this.viewWayData=val
      }
　　}
  }
};
</script>
<style lang="stylus">
.goods-list {
  float: left;
  width: 100%;
  padding: 10px 10px;
  background: #ffffff;
  box-sizing: border-box;
  margin-top: 44px;
}

/* 商品列表-块级 */
.goods-grid {
  float: left;
  width: 45.3%;
  margin: 2%;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
}
.goods-grid a {
  float: left;
  color: #333333;
}
.goods-grid .goods-icon img {
  float: left;
  width: 100%;
  height: 100px;
}
.goods-grid .goods-detail {
  float: left;
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
.goods-grid .goods-title {
  float: left;
  width: 100%;
  height: 38px;
  font-size: 14px;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  overflow: hidden;
  -webkit-line-clamp: 2;
}
.goods-grid .goods-price {
  float: left;
  margin-top: 2px;
  text-align: left;
  font-size: 14px;
  color: #3982f6;
}
.symbol{
  font-size: 8px;
}
.goods-grid .goods-sell {
  float: right;
  margin-top: 2px;
  text-align: right;
  font-size: 12px;
  color: #999999;
}

/* 商品列表-行级*/
.goods-grid-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 6px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  margin: 2%;
}
.goods-grid-flex .goods-icon {
  float: left;
  width: 32.495%;
}
.goods-grid-flex .goods-icon img {
  float: left;
  width: 100%;
  margin: 2.5%;
  height: 70px;
  border-radius: 5px;
}
.goods-grid-flex .goods-detail {
  float: left;
  width: 67.505%;
  padding: 5px 10px;
  box-sizing: border-box;
}
.goods-grid-flex .goods-title {
  float: left;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #333333;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  overflow: hidden;
  -webkit-line-clamp: 2;
}
.goods-grid-flex .goods-detail .goods-option{
  float: left;
  margin-top: 10px;
  width: 100%;
}
.goods-grid-flex .goods-price {
  float: left;
  text-align: left;
  font-size: 14px;
  color: #3982f6;
}
.goods-grid-flex .goods-sell {
  float: right;
  text-align: right;
  font-size: 12px;
  color: #aaaaaa;
}
</style>

