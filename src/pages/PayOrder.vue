<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
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
        <!-- <div class='order-jg' style='margin-bottom:10px;'></div> -->
        <div class='shop-order-content'>
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                        <img class='img' src='../assets/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥{{ 3500.00 }}</div>
                    <div class='shop-specif'>默认</div>
                </div>
                </div>
                <div class="order-cell-detail">
                    <van-cell-group>
                        <van-field
                            v-model="courier"
                            name="delive"
                            label="运费"
                            icon="arrow"
                            disabled
                            input-align="right"
                        />
                        <van-field
                            v-model="leave"
                            name="leave"
                            label="买家留言"
                            placeholder="请输入留言"
                            title-width="74px"
                            autosize
                            :border="false"
                        /> 
                    </van-cell-group>
                </div>  
            </div>
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                        <img class='img' src='../assets/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' src='../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥{{ 3500.00 }}</div>
                    <div class='shop-specif'>默认</div>
                </div>
                </div>
                <div class="order-cell-detail">
                    <van-cell-group>
                        <van-field
                            v-model="courier"
                            name="delive"
                            label="运费"
                            icon="arrow"
                            disabled
                            input-align="right"
                        />
                        <van-field
                            v-model="leave"
                            name="leave"
                            label="买家留言"
                            placeholder="请输入留言"
                            title-width="74px"
                            autosize
                            :border="false"
                        /> 
                    </van-cell-group>
                </div>  
            </div>
        </div>
        <div class='order-btn'>
            <div class='order-amount'><div class='o-hj'>合计：</div><div class='o-price'>￥7000.00</div></div>
            <div class='order-pay-btn' bindtap='goPay'>支付</div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'PayOrder',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"提交订单",
      courier:"包邮",
      leave:""
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
.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
  margin-bottom: 10px;
}
.order-cell-store{
  float: left;
  width: 100%;
  padding: 15px 15px;
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
  background-color: #f2f2f2;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-detail{
  float: left;
  width: 100%;
}
.order-cell-shop .shop-img{
  float: left;
  width: 90px;
  height: 90px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  float: left;
  width: 100%;
  height: 90px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-cell-shop .shop-fx .shop-price{
  font-size: 14px;
  color: #3982f6;
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

.address-cell{
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  padding: 10px 15px;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2; 
  box-sizing: border-box;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.order-jg{
  float: left;
  width: 100%;
  height: 10px;
  background: #3982f6;
}
.shop-order-content{
  float: left;
  width: 100%;
  margin-bottom: 44px;
}



.order-btn{
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.order-pay-btn{
  float: right;
  width: 33%;
  height: 44px;
  line-height:44px; 
  background:#3982f6;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border-radius: 0;
  border: 0;
}
.order-amount{
  float: left;
  width: 67%;
  text-align: right;
  font-size: 14px;
  background: #ffffff;
  padding: 0px 15px;
  box-sizing: border-box;
}
.order-amount .o-hj{
  float: left;
}
.order-amount .o-price{
  float: left;
  color: #3982f6;
}
</style>
