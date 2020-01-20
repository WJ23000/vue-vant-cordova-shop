<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class='order-static'>
            <span>商品已发货</span>
        </div>
        <div class='address-cell'>
            <div class='address-cell-left'>
            <div class='address-option'>
                <div class='option-user'>朱果</div>
                <div class='option-phone'>13856657880</div>
            </div>
            <div class='address-conn'>
                <div>浙江省杭州市西湖区留下街道石马社区88号楼区8888室</div>
            </div>
            </div>
            <div class='address-cell-right'>
            <van-icon name="arrow" color='#999999' size="15px"/>
            </div>
        </div>
        <div class='order-cell'>
            <div class='order-cell-store'>
                <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                </div>
                <div class='store-left'>乐购商城</div>
                <div class='store-right'>已评价</div>
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
            </div>
        </div>
        <div class='bottomPd'>
            <van-cell-group :border="false">
                <van-cell
                    title="商品总额"
                    value="7000.00"
                    :border="false"
                />
                <van-cell
                    title="活动折扣"
                    value="-0"
                    :border="false"
                />
                <van-cell
                    title="优惠券折扣"
                    value="-0"
                    :border="false"
                />
                <van-cell
                    title="运费"
                    value="包邮"
                    :border="false"
                />
                <van-cell
                    title="实付款(含运费)"
                    value="7000.00"
                    size="large"
                    :border="false"
                />
            </van-cell-group>
        </div>
        <div class='topPd' style='margin-top:20rpx;'>
            <van-cell-group :border="false">
                <van-cell
                    title="买家留言"
                    value="商品质优,服务态度好"
                    :border="false"
                    bind:click="onLeave"
                />
                <van-cell
                    title="订单编号"
                    value="SH2017021520305432"
                    :border="false"
                />
                <van-cell
                    title="下单时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="付款时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="发货时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="成交时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
            </van-cell-group>
        </div>
        <!-- <div class='order-detail-btn'>
            <button class='goods-btn'>确认收货</button>
            <button open-type='contact' class='contact-btn'>联系商家</button>
        </div> -->
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'OrderDetail',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"订单详情"
    }
  },
  created () {

  },
  mounted () {
    
  },
  methods:{
    
  }
  
}
</script>
<style lang="stylus" scoped>
.order-static{
  height: 90px;
  line-height: 90px;
  /* background-image: url("http://pka5fbxmj.bkt.clouddn.com/order-bj.png"); */
  background: #3982f6;
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 16px;
  padding-left: 15px;
  box-sizing: border-box;
}
.address-cell{
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  padding: 10px 15px;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2; 
  box-sizing: border-box;
  margin-bottom: 10px;
}
.address-cell-left{
 float: left;
 text-align: left;
 width: 90%;
}
.address-cell-right{
 float: left;
 text-align: right;
 width: 10%;
}
.address-option{
  float: left;
  width: 100%;
  height: 26px;
  line-height: 26px;
}
.address-option .option-user{
  float: left;
  font-size: 16px;
  margin-right: 10px;
}
.address-option .option-phone{
  font-size: 12px;
  color: #aaaaaa;
}
.address-conn{
  float: left;
  width: 100%;
  padding-right: 15px;
  font-size: 14px;
  display:-webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient:vertical;
  /* autoprefixer: on */
  overflow:hidden;
  -webkit-line-clamp:2;
}

.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
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
  line-height: 29px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}

.topPd{
  float: left;
  width: 100%;
  background: #ffffff;
  padding: 10px 0px 10px 0px;
  box-sizing: border-box;
}
.bottomPd{
  float: left;
  width: 100%;
  padding: 0px 0px 10px 0px;
  box-sizing: border-box;
}


.order-detail-btn{
  position:fixed;
  bottom:0;
  z-index:1;
  width:100%;
  height:44px;
  line-height:44px;
  background: #ffffff;
  padding: 0px 15px;
  box-sizing: border-box;
}
.contact-btn{
  float: right;
  width: 90px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #999999;
  color: #999999;
  border-radius: 60px;
  margin-right: 10px;
  margin-top: 6.5px;
}
.goods-btn{
  float: right;
  width: 90px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #3982f6;
  color: #3982f6;
  border-radius: 60px;
  margin-top: 6.5px;
}
</style>
