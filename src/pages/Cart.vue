<template>
  <div class="page">
    <div class="page-header">
      <van-nav-bar
        :title="title"
        right-text="编辑"
        @click-right="onRightEdit"
      />
    </div>
    <div class="page-content">
      <div v-if="cartItems.length > 0 ? true : false">
      <div v-for="(item,index) in cartItems" :key="index" class='cart-cell'>
        <div :data-id="item.id"  class='cart-box' :data-index="index">
            <div class='icon'>
                <van-icon :name="iconXz" v-if="item.selected" @click="selectedCart" :data-index="index" size="20px"/>
                <van-icon :name="iconWxz" v-else @click="selectedCart" :data-index="index" size="20px"/>
            </div>

            <div class='cart-main'>
              <div class='left'>
                <div class='left_imgae'>
                    <img class="cart-image" v-lazy="item.icon"/>
                </div>

                <div class='left_box'>
                    <span class="cart-title">{{item.title}}</span>
                    <span class="cart-price">￥{{item.price}}</span>
                    <span class="cart-specif">{{item.specif}}</span>
                    <span @click='reduce'  class="input cart-reduce"  :data-index="index">-</span>
                    <span class="input cart-text">{{item.value}}</span>
                    <span @click='add' class="input cart-add"  :data-index="index">+</span>
                </div>
              </div>
            </div>

          
            <!-- 底部 -->
            <div v-if="showVal">
              <div class="del-bottom">
                <div class='cart-bottom-cell' @click='cancel'>取消</div>
                <div class='cart-bottom-cell del-color' @click='del'>删除({{delCount}})</div>
              </div>
            </div>
            <div v-else>
              <div class="cart-bottom">
                <div class=cart-bottom-icon>
                  <van-icon :name="iconXz" v-if="CheckAll" @click="select" :data-index="index" size="20px"/>
                  <van-icon :name="iconWxz" v-else @click="select" :data-index="index"  size="20px"/>
                </div>
                <div class='checkAll'>全选</div>
                <div class='cart-sum'>
                    <span class='sum_text'>合计：</span>
                    <span class='sum_color'>￥{{total}}元</span>
                </div>
                <div class='cart-pay'>
                  <span class='cart_pay' @click="payOrder" :data-id="item.id">结算({{goodsCount}})</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <!--如果无数据，则显示数据-->
      <div class="nodata_text" v-else>
        <img src='../assets/no-result.png'/>
      </div>
    </div>
    <van-tabbar v-model="navActive">
      <van-tabbar-item :to="{path:'/'}" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item :to="{path:'/Class'}" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item :to="{path:'/Cart'}" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item :to="{path:'/Mine'}" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'Cart',
  data () {
    return {
      title:"购物车",
      navActive:2,
      cartItems: [
        {
          id: 1,
          title: '智能飞行器',
          price: 3500.00,
          specif:"默认",
          value: 1,
          sell: 101,
          url: '',
          selected: false,
          icon: require('../assets/shop1.png')
        },
        {
          id: 2,
          title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
          price: 3500.00,
          specif:"蓝色",
          value: 2,
          sell: 102,
          url: '',
          selected: false,
          icon: require('../assets/shop1.png')
        }
      ],
      total: 0,
      CheckAll: false,
      goodsCount: 0,
      delCount: 0,
      showVal: false,
      iconXz:require('../assets/check-xz.png'),
      iconWxz:require('../assets/check-Wxz.png'),

    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
    //全选
    select: function (e) {
      var CheckAll = this.CheckAll;
    
    CheckAll = !CheckAll
    var cartItems = this.cartItems

    for (var i = 0; i < cartItems.length; i++) {
      cartItems[i].selected = CheckAll
    }

    this.cartItems= cartItems,
    this.CheckAll= CheckAll
    //计算总金额
    this.getSumTotal()
    //计算商品数量
    this.getGoodsCount();
    //计算删除数量
      this.delGoodsCount();
    },
    //加
    add: function (e) {
      var cartItems = this.cartItems   //获取购物车列表
      console.log(cartItems);
      var index = e.currentTarget.dataset.index //获取当前点击事件的下标索引
      console.log(index);
      var value = cartItems[index].value  //获取购物车里面的value值

      value++
      cartItems[index].value = value;
      this.cartItems= cartItems
      this.getSumTotal()
    },
    //减
    reduce: function (e) {
      var cartItems = this.cartItems  //获取购物车列表
      var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
      var value = cartItems[index].value  //获取购物车里面的value值

      if (value == 1) {
        value--
        cartItems[index].value = 1
      } else {
        value--
        cartItems[index].value = value;
      }
      this.cartItems= cartItems
      this.getSumTotal()
    },
    //单选
    selectedCart: function (e) {
      var cartItems = this.cartItems   //获取购物车列表
      var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
      var selected = cartItems[index].selected;    //获取当前点击事件的下标索引是否选中

      //取反
      cartItems[index].selected = !selected;
      this.cartItems= cartItems
      //计算总金额
      this.getSumTotal();
      //计算商品数量
      this.getGoodsCount();
      //计算删除数量
      this.delGoodsCount();
    },

    //删除
    del: function (e) {
      let delState = true;
      let cartItems = this.cartItems  //获取购物车列表
      console.log(cartItems.length)
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].selected == delState){
          cartItems.splice(i, 1)
          //更新删除数量数据
          this.delCount= i
          i=i-1;
        }
      }
      this.cartItems= cartItems
      this.total= 0,
      this.goodsCount= 0,
      this.CheckAll= false
    },

    //删除数量方法
    delGoodsCount: function () {
      let count = 0;
      let i = 0;
      for (i; i < this.cartItems.length; i++) {
        if (this.cartItems[i].selected) {
          count = count + 1;
        }
      }
      //更新删除数量数据
      this.delCount= count
    },

    //结算
    payOrder: function () {
      this.$router.push({ path: '/PayOrder' ,params:{orderId:1}});
    },
    //合计
    getSumTotal: function () {
      console.log("触发了嘛");
      console.log(this.cartItems);
      var sum = 0
      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].selected) {
          sum += this.cartItems[i].value * this.cartItems[i].price
        }
      }
      //更新数据
      this.total= sum
    },
    //商品总数量
    getGoodsCount: function () {
      var count = 0;
      var i=0;
      for (i; i < this.cartItems.length; i++) {
        if (this.cartItems[i].selected) {
          count = count + 1;
        }
      }
      //更新数据
      this.goodsCount= count
    },
    //编辑
    onRightEdit (){
      this.showVal= true
    },
    //取消删除功能
    cancel () {
      this.showVal= false
    }
  }
  
}
</script>
<style scoped>
.cart-main{
  float: left;
  width: 88%;
}
.cart-active{
  float: left;
  width: 100%;  
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
}
.cart-image{
  width: 90px;
  height: 100px;
  float: left;
  padding: 7.5px 5px;
}
.cart-box{
  width: 100%;
  height: auto;
  background: white;
  /* margin-top: 15rpx; */
  /* padding-left: 60rpx; */
}
.cart-boxtwo{
  display: flex;
  flex-direction:column;
  
}
.left_imgae{
  float: left;
  width: 36%;
}
.left_box{
  float: left;
  width: 64%;
  line-height: 30px
}
.cart-title{
  font-size: 15px;
  line-height: 17px;
  display:-webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient:vertical;
  /* autoprefixer: on */
  overflow:hidden;
  -webkit-line-clamp:2;
}
.cart-price{
  display: flex;
  color: #3982f6;
  font-size: 15px;
  height: 18px;
  line-height: 18px;
}
.cart-specif{
  display: flex;
  color: #999999;
  font-size: 15px;
  height: 18px;
  line-height: 18px;
  margin-bottom:5px;

}
.left{
  float: left;
  width: 84%;
}
.right{
  float: right;
  width: 5%;
}
.right img{
  width: 25px;
  height: 25px;
  float: right;
  margin-right: 15px;
}
.input{
  display: block;
  width: 32.5px;
  height: 32.5px;
  line-height: 32.5px;
  text-align: center;
  /* border: 1px solid red; */
  float: left;
}
.cart-add{
  border-left: none;
  background: #FBFBFB;
  font-size: 18px;
}
.cart-reduce{
  border-right: none;
  background: #FBFBFB;
  font-size: 18px;
}
.cart-text{
  width: 45px;
  background: #F4F4F4;
  font-size: 15px;
}
.cart-bottom{
  display: flex;
  position: fixed;
  width: 100%;
  height: 44px;
  bottom:50px;
  background: #ffffff;
  padding: 0px 10px;
  box-sizing: border-box;
  border-top: 1px solid #f2f2f2;
}
.cart-bottom-icon{
  margin-top: -3px;
}
.yuan{
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid red;
}
.icon{
  float: left;
  width: 6%;
  margin: 38px 10px 32px 10px;
}
.SpCart{
  display: block;
  width: 150px;
  height: 150px;
}
.Sptext{
  font-size: 15px;
}
.cart-icon{
  margin:13px 10px;
  float: left;
}
/* .cart-bottom-icon{
  margin:-2px 0px;
  float: left;
} */
.cart-sum{
  width: 150px;
  height: 100%;
  line-height: 43.5px;
  float: left;
  text-align: center;
  margin-left: 10px;
  font-size: 14px;
}
.cart-pay{
  position: absolute;
  width: 115px;
  height: 100%;
  background: #3982f6;
  right: 0;
}
.cart_pay{
  display: block;
  line-height: 43.5px;
  text-align: center;
  font-size:15px;
  color: white;
}
.sum_color{
  color: #3982f6;
  font-size: 12.5px;
}
.sum_text{
  font-size: 15px;
}
.checkAll{
  margin-left: 10px;
  line-height: 43.5px;
  font-size: 14px;
}
.cart-cell{
  float: left;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
  box-sizing: border-box; 
}
.nodata_text{
  background: #ffffff;
  color: black;
  font-size: 14px;  
  text-align: center;  
} 
.nodata_text img{
  margin-top: 50px;
  width: 44%;
  height: 150px;
} 
.icon{
  float: left;
  width: 5%;
  margin: 34px 10px;
  background: #ffffff;
}
.icon-bj{
  margin-top: 4px
}
/* 底部 */
.del-bottom{
  position: fixed;
  width: 100%;
  height: 44px;
  bottom:50px;
  background: #ffffff;
  border-top: 1px solid #f2f2f2;
}
.cart-bottom-edit{
  float: left;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 14px;
  color: #3982f6
}
.cart-bottom-cell{
  float: left;
  width: 49.725%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 14px;
  color: #999999;
  border-right: 1px solid #f2f2f2; 
}
.del-color{
  color: #3982f6
}
</style>
