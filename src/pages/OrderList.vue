<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <van-tabs :active="active" @click="onTab" color="#3982f6" animated>
          <van-tab title="待付款">
            <div class='order-cell'>
              <router-link :to="{path:'/OrderDetail',query: {orderId: 1}}">
                <div class='order-cell-store'>
                    <div class='store-img'>
                      <img class='img' src='../assets/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                    <div class='store-right'>待付款</div>
                </div>
                <div class='order-cell-shop'>
                  <div class='shop-img'>
                    <img class='img' src='../assets/shop1.png'/>
                  </div>
                  <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥3500.00</div>
                    <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                  </div>
                  <div class='shop-amount'>合计：￥7000.00</div>
                </div>
              </router-link>
              <div class='order-cell-btn'>
                <router-link :to="{path:'/PayOrder',query: {orderId: 1}}">
                  <button class='btn-zf'>去付款</button>
                </router-link>
              </div>
            </div>
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>待付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button class='btn-zf'>去付款</button>
              </div>
            </div>
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>待付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button class='btn-zf'>去付款</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="已发货">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button @click="remindGoods" class='btn-zf'>提醒发货</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="待收货">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已发货</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button @click="okGoods" class='btn-zf'>确认收货</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="待评价">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已收货</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                <router-link :to="{path:'/Evalu',query: {orderId: 1}}">
                  <button class='btn-zf'>立即评价</button>
                </router-link>
              </div>
            </div>
          </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'OrderList',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"我的订单",   
      active:0
    }
  },
  created () {
    this.active=this.$route.query.indexId;
  },
  mounted () {
    
  },
  methods:{
    //TAB页切换
    onTab(index, title) {
      this.$toast(title);
    },
    //提醒商家发货
    remindGoods: function (){
      this.$dialog.confirm({
        title: '订单',
        message: '是否提醒商家发货'
      }).then(() => {
        this.$notify({
          message:'提醒发货成功',
          background: '#3982f6'
        });
      }).catch(() => {
        // on cancel
      });
    },
    //确认收货
    okGoods: function () {
      this.$dialog.confirm({
        title: '订单',
        message: '是否确认收货'
      }).then(() => {
        this.$notify({
          message:'确认收货成功',
          background: '#3982f6'
        });
      }).catch(() => {
        // on cancel
      });
    }
  }
  
}
</script>
<style scoped>
.page{
  background: #f2f2f2;
}
.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
  margin-bottom: 10px;
}
.order-cell a{
  color: #333333;
}
.order-cell-store{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-store .store-img{
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 0.2rem;
}
.order-cell-store .store-img .img{
  float: left;
  width: 100%;
  height: 20px;
}
.order-cell-store .store-left{
  float: left;
  font-size: 14px;
}
.order-cell-store .store-right{
  float: right;
  font-size: 14px;
  color: #3982f6;
}
.order-cell-shop{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-shop .shop-img{
  float: left;
  width: 90px;
  height: 90px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 90px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display:-webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient:vertical;
  /* autoprefixer: on */
  overflow:hidden;
  -webkit-line-clamp:2;
}
.order-cell-shop .shop-fx .shop-price{
  font-size: 14px;
}
.order-cell-shop .shop-fx .shop-specif{
  font-size: 14px;
  color: #aaaaaa;
}
.order-cell-shop .shop-fx .shop-specif .count{
  float: right;
}
.order-cell-shop .shop-amount{
  float: right;
  text-align: right;
  width:  100%;
  font-size: 14px;
}
.order-cell-btn{
  float: right;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-btn .btn-zf{
  float: right;
  width: 80px;
  height: 32px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}
</style>
