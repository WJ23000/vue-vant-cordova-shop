<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller" refresh-layer-color="#3982f6"
      loading-layer-color="#3982f6" style="top:44px;">
        <div class="collection-list" v-for="(item,index) in collectionList" :key="index">
          <div v-if="showVal"></div>
          <div v-else>
          <div class='icon'>
            <van-icon :name="iconXz" v-if="item.selected" @click="selectSingle" :data-index="index" size="20px"/>
            <van-icon :name="iconWxz" v-else @click="selectSingle" :data-index="index" size="20px"/>
          </div>
          </div>
          <router-link :to="{path:'/GoodsDetail',query: {goodsId: item.id}}">
            <div :class="showVal ?  curActive1 : curActive2">
                <div class='order-cell-shop'>
                    <div class='shop-img'>
                        <img class='img' v-lazy="item.icon"/>
                    </div>
                    <div class='shop-fx'>
                        <div class='shop-label'>{{item.title}}</div>
                        <div class='shop-price'>￥{{item.price}}</div>
                    </div>
                </div>
            </div>
          </router-link>
        </div> 
      </scroller>
      <!-- 底部 -->
      <div class="cart-bottom">
        <div v-if="showVal">
          <div class='cart-bottom-edit' @click='edit'>编辑</div>
        </div>
        <div v-else>
          <div class='cart-bottom-cell' @click='cancel'>取消</div>
          <div class='cart-bottom-cell' @click='selectAll'>全选</div>
          <div class='cart-bottom-cell del-color' @click='del'>删除({{delCount}})</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'Collection',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"我的收藏",   
      collectionList: [
        {
            id: 1,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3001.00,
            sell: 101,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 2,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3002.00,
            sell: 102,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 3,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3003.00,
            sell: 103,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 4,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3004.00,
            sell: 104,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 5,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3005.00,
            sell: 105,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 6,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3006.00,
            sell: 106,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        }
      ],
      collectionListAdd: [
        {
            id: 7,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3007.00,
            sell: 107,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 8,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3008.00,
            sell: 108,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        },
        {
            id: 9,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3009.00,
            sell: 109,
            url: '',
            icon: require('../assets/shop1.png'),
            selected: false
        }
      ],
      CheckAll: false,
      delCount: 0,
      showVal: true,
      iconXz:require('../assets/check-xz.png'),
      iconWxz:require('../assets/check-Wxz.png'),
      curActive1: "order-cell order-active",
      curActive2: "order-cell",    
    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
    edit: function () {
      this.showVal= false
    },
    cancel: function () {
      this.showVal= true
    },

    // 全选
    selectAll: function (e) {
      let CheckAll = this.CheckAll;
      CheckAll = !CheckAll
      let collectionList = this.collectionList
      for (let i = 0; i < collectionList.length; i++) {
        collectionList[i].selected = CheckAll
      }
      this.collectionList= collectionList,
      this.delList= collectionList,
      this.CheckAll= CheckAll
      // 计算删除数量
      this.delCollectionCount();
    },

    // 单选
    selectSingle: function (e) {
      let collectionList = this.collectionList //获取购物车列表
      let index = e.currentTarget.dataset.index; //获取当前点击事件的下标索引
      let selected = collectionList[index].selected; //获取当前点击事件的下标索引是否选中
      // 取反
      collectionList[index].selected = !selected;
      this.collectionList= collectionList,
      this.delList= collectionList,
      // 计算删除数量
      this.delCollectionCount();
    },

    // 删除
    del: function (e) {
      let delState = true;
      let collectionList = this.collectionList //获取购物车列表
      console.log(collectionList.length)
      for (let i = 0; i < collectionList.length; i++) {
        if (collectionList[i].selected == delState){
          collectionList.splice(i, 1)
          // 更新删除数量数据
          this.delCount= i
          i=i-1;
        }
      }
      this.collectionList= collectionList
    },

    // 删除数量方法
    delCollectionCount: function () {
      let count = 0;
      let i = 0;
      for (i; i < this.collectionList.length; i++) {
        if (this.collectionList[i].selected) {
          count = count + 1;
        }
      }
      // 更新删除数量数据
      this.delCount= count
    },

    // 下拉刷新
    refresh(done) {
      let that = this;
      that.$toast("已触发下拉刷新")
      setTimeout(() => {
        that.$refs.my_scroller.finishPullToRefresh(); //停止下拉刷新动效
      },3000)  
    },
    // 上拉加载
    infinite(done) {
      if (this.bottom >= 3) {
        setTimeout(() => {
          done(true)
        }, 1500)
        return;
      }
      setTimeout(() => {
        let start = 3
        for (let i = 0; i < start ; i++) {
          this.collectionList.push(this.collectionListAdd[i])
        }
        this.bottom = 3;
        setTimeout(() => {
          done()
        })
      }, 1500)
    }
  }
  
}
</script>
<style scoped>
/* 使用固定高度解决vue-scroller无法上拉加载 */
.collection-list{
  display: block;
  width: 100%;
  height: 140px;
  background: #ffffff;
}
.page-content{
  float: left;
  background: #ffffff;
}
.order-cell{
  float: left;
  width: 89%;  
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
}
.order-active{
  float: left;
  width: 100%;  
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
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
.collection-list a{
  color: #333333;
}
.order-cell-shop .shop-img{
  float: left;
  width: 120px;
  height: 120px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 120px;
}
.order-cell-shop .shop-fx{
  position: relative;
  height: 120px;
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
  position: absolute;
  bottom: 4px;
  margin-left: 120px;
  font-size: 14px;
  color: #3982f6;
  height: 20px;
  line-height: 20px;
}
.order-cell-shop .shop-fx .shop-del{
  position: absolute;
  bottom: 0;
  right: 60px;
  padding: 2px 12px;
  font-size: 12px;
  color: #aaaaaa;
  height: 20px;
  /* line-height: 18px; */
  border: 1px solid #aaaaaa;
  border-radius: 25px
}
.order-cell-shop .shop-fx .shop-buy{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 12px;
  font-size: 12px;
  background: #3982f6;
  color: #ffffff;
  height: 20px;
  /* line-height: 18px; */
  border: 1px solid #3982f6;
  border-radius: 25px
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
.icon{
  float: left;
  width: 5%;
  margin: 48px 10px;
  background: #ffffff;
}
.icon-bj{
  margin-top: 4px
}
/* 底部 */
.cart-bottom{
  position: fixed;
  width: 100%;
  height: 44px;
  bottom:0;
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
  width: 33.025%;
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
