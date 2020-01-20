<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" @click="swipeImgPreview"/>
          </van-swipe-item>
        </van-swipe>
        <div>
          <!-- 商品信息 -->
          <div class="detail">
            <div class="title" name="title">高空航拍无人机至尊荣耀版</div>
            <div class="price" name="price">￥3501.00</div>
          </div>
          <div style='margin: 10px 0px;'>
            <van-field
              v-model="specifValue"
              name="address"
              label="已选"
              icon="arrow"
              placeholder="请选择规格"
              @click="onSpecif"
              :border="false"
              :readonly="true"
              title-width="40px"
            />
            <van-popup
              v-model="show"
              position="bottom"
              bind:click-overlay="onClose"
            >
              <div class='specif-count'>
                <div class='specif-header'>
                  <div class='specif-img'>
                    <img class='img' v-lazy='specifImg' @click="specifImgPreview(specifImg)"/>
                  </div>
                  <div class='specif-detail'>
                    <div class='specif-price'>￥{{specifPrice}}</div>
                    <div class='specif-inventory'>库存{{specifStock}}件</div>
                    <div class='specif-title'>{{specifTitle}}</div>
                  </div>
                  <div class='specif-close-icon'>
                    <van-icon name="close" size="20px" @click='closeSpecif'/>
                  </div>
                </div>
                <div class='specif-cation' v-for="(pItem, findex) in specif_list" :key="findex">
                  <div class='search-history-title'>{{pItem.pName}}</div>
                  <ul class='search-cell' v-for="(oItem, zindex) in pItem.info" :key="zindex">
                    <li @click="xzSpecif(oItem.spec_id,findex,$event,zindex)" :class="[oItem.isShow?'':'noneActive',subIndex[findex] == zindex?'productActive':'']">{{oItem.spec_val}}</li>
                  </ul>
                </div>
                <div style='margin-bottom:44px;'>
                  <van-cell title="数量" size="large">
                    <van-stepper name="count" v-model="specifCount" bind:change="onCount"/>
                  </van-cell>
                </div>
                <van-goods-action>
                  <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="onCart"
                  />
                  <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    primary
                    @click="onBuy"
                  />
                </van-goods-action>  
              </div>
            </van-popup>
          </div>
          <!-- 商品评价 -->
          <van-cell title="商品评价(1)" value="查看全部" to="/Comment" is-link size="large" :border="false"></van-cell>
          <div v-if="commentList.length > 0">
            <div v-for="(item,index) in commentList" :key="index">
              <div class='comment-cell'>
                <div class='user-nickname'>
                  <img class='user-icon' v-lazy="item.userImg"/>
                  <span class='nickname'>{{item.userName}}</span>
                </div>
                <span class='commentDetail'>{{item.content}}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-remark">东西还可以，好评~</div>
          </div> 
          
          <!-- 商品详情 -->
          <div style='margin-top:10px;margin-bottom:50px;'>
            <van-cell title="商品详情" size="large"></van-cell>
            <div v-for="(item, index) in detailImg" :key="index">
              <img class="image_detail" v-lazy="item.img"/>
            </div>
          </div>
        </div>
        <!-- 底部悬浮栏 -->
        <van-goods-action>
          <van-goods-action-icon
            icon="star"
            text="收藏"
            @click="addLike" 
            v-if="isLike"
          />
          <van-goods-action-icon
            icon="star-o"
            text="收藏"
            @click="addLike"
            v-else
          />
          <van-goods-action-icon
            info="5"
            icon="cart-o"
            text="购物车"
            @click="tzCart"
          />
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="onCart"
          />
          <van-goods-action-button
            type="danger"
            text="立即购买"
            primary
            @click="onBuy"
          />
        </van-goods-action>
        <!-- backTop 回顶部的组件 -->
        <ToTop/>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import HeaderTwo from '@/components/HeaderTwo';
import ToTop from "@/components/ToTop";
export default {
  name: 'GoodsDetail',
  components:{
    HeaderTwo,
    ToTop
  },
  data () {
    return {
      title:"商品详情",   
      goodsId:"",
      isLike: false,
      images: [
        require('../assets/s-banner1.jpg'),
        require('../assets/s-banner2.jpg')
      ],
      // 商品详情介绍
      detailImg: [
        {img:require('../assets/sp-detail1.png')},
        {img:require('../assets/sp-detail2.png')}
      ],
      // 评价列表
      commentList: [
        {
          id: 1,
          userImg: require('../assets/user.png'),
          userName: "大黑",
          content: "商家很靠谱，物美价廉、商品质量真的很不错，下次还会再来的",
          goodsImg: [
            require('../assets/shop1.png'),
            require('../assets/shop1.png'),
            require('../assets/shop1.png')
          ],
          createTime: "2019-02-25 15:23:30",
          likeNum: 554,
          isLike: true
        }
      ],
      // 规格
      specifImg: require('../assets/shop1.png'),
      specifTitle: "选择 规格参数",
      specifPrice: "3500-4000",
      specifStock: "5000",
      skuId: "",
      sku_list: [
        {
          id: 1,
          sku_id: 1001001,
          img: "/image/shop1.png",
          title: "亮黑色 至尊版",
          price: 3000,
          stock: 10,
          spec_key:"101,101"
        },
        {
          id: 2,
          sku_id: 1001002,
          img: "/image/shop1.png",
          title: "亮黑色 荣耀版",
          price: 4000,
          stock: 0,
          spec_key: "101,102"
        },
        {
          id: 3,
          sku_id: 1001003,
          img: "/image/shop1.png",
          title: "炫紫色 至尊版",
          price: 5000,
          stock: 20,
          spec_key: "102,101"
        },
        {
          id: 4,
          sku_id: 1001004,
          img: "/image/shop1.png",
          title: "炫紫色 荣耀版",
          price: 6000,
          stock: 15,
          spec_key: "102,102"
        }
      ],
      specif_list: [
        {
          pId: 101,
          pName: "颜色",
          info: [
            {
              id: 0,
              spec_id: 101,
              spec_val: "亮黑色",
              is_click: 0
            },
            {
              id: 1,
              spec_id: 102,
              spec_val: "炫紫色",
              is_click: 0
            }
          ]      
        },
        {
          pId: 102,
          pName: "版本",
          info: [
            {
              spec_id: 101,
              spec_val: "至尊版",
              is_click: 0
            },
            {
              spec_id: 102,
              spec_val: "荣耀版",
              is_click: 0
            }
          ]
        }
      ],
      arrId: [],
      selectArr: [], //存放被选中的值
      shopItemInfo: {}, //存放要和选中的值进行匹配的数据
      subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断


      show: false,
      specifValue: "选择 商品规格",
      specifCount: 1
    }
  },
  created () {
    let that = this;
    that.$toast({
      message:"商品id:"+that.$route.query.goodsId,
      duration:500
    }); 
    that.goodsId=that.$route.query.goodsId;

    //商品规格初始化
    for (var i in that.sku_list) {
      that.shopItemInfo[that.sku_list[i].spec_key] = that.sku_list[i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
    }
    that.checkItem();
  },
  mounted () {
    
  },
  methods:{
    //获取当前选中的规格参数z
    xzSpecif: function (item, findex, event, zindex) {
      let that = this;
      if (that.selectArr[findex] != item) {
          that.selectArr[findex] = item;
          that.subIndex[findex] = zindex;

      } else {
          that.selectArr[findex] = "";
          that.subIndex[findex] = -1; //去掉选中的颜色 
      }

      //初始化arrId
      let arrId = that.arrId;
      //把点击的规格名称和规格id存起来
      arrId[findex] = item;
      //拼接规格id（后台返回的数据是这个）
      let selectGuigeId = arrId.join(',');
      //匹配skuId
      for (let i = 0; i < that.sku_list.length; i++) {
        //找对应的规格组合
        if (that.sku_list[i].spec_key == selectGuigeId) {
          let guilists = that.sku_list[i];
          //设置规格预览效果
          that.skuId = guilists.sku_id;
          that.specifImg = guilists.img;
          that.specifPrice = guilists.price;
          that.specifStock = guilists.stock;
          that.specifTitle = '已选:"'+guilists.title+'"';
          that.specifValue = '已选:"'+guilists.title+'"';
        }
      }
      that.checkItem();
    },
    checkItem: function () {
      let that = this;
      var option = that.specif_list;
      var result = [];  //定义数组存储被选中的值
      for (var i in option) {
          result[i] = that.selectArr[i] ? that.selectArr[i] : '';
      }
      for (var i in option) {
          var last = result[i];  //把选中的值存放到字符串last去
          for (var k in option[i].info) {
              result[i] = option[i].info[k].spec_id; //赋值，存在直接覆盖，不存在往里面添加name值
              option[i].info[k].isShow = that.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
          }
          result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
      that.$forceUpdate(); //重绘
    },
    isMay: function (result) {
      let that = this;
      let guilists = {};
      for (var i in result) { 
          if (result[i] == '') {
              return true; //如果数组里有为空的值，那直接返回true
          }
      }
      return that.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false  
    },



    //打开商品规格和购买数量
    onSpecif: function () {  
      this.show= true
    },
    closeSpecif: function () {
      this.show= false
    },
    //点击蒙层商品规格和购买数量弹层
    onClose: function () {
      this.show= false
    },
    //收藏
    addLike() {
      let likeId=this.goodsId;
      console.log(likeId);
      let likeState=this.isLike;
      if(likeState == true){
        this.isLike= !this.isLike;
        this.$toast("已取消收藏")
      }else{
        this.isLike= !this.isLike;
        this.$toast("收藏")
      }  
    },
    //跳到购物车
    tzCart() {
      this.$router.push({ path: '/Cart' ,params:{id:"1"}});
    },
    //加入购物车
    onCart() {
      this.show= true
    },
    //立即购买
    onBuy() {
      this.show= true
    },
    //轮播图图片预览
    swipeImgPreview: function () {
      ImagePreview(this.images);
    },
    //商品规格图片预览
    specifImgPreview: function (img) {
      let imgArray = [];
      imgArray.push(img)
      ImagePreview(imgArray);
    }
  }
  
}
</script>
<style scoped>
.van-swipe-item img{
  float: left;
  width: 100%;
  height: 100%;
}
.detail {
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
}
.title {
  background: #ffffff;
  color: black;
  font-size: 16px;
  padding: 10px 15px;
  text-align: justify;
}
.price {
  background: #ffffff;
  color: #3982f6;
  font-size: 16px;
  padding: 10px 15px;
}
.line_flag {
  width: 40px;
  height: 1px;
  display: inline-block;
  margin: 10px auto;
  background-color: gainsboro;
  text-align: center;
}
.line {
  width: 100%;
  height: 1px;
  display: inline-block;
  margin: 10px 0px;
  background-color: gainsboro;
  text-align: center;
}
.detail-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  float: left;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
}
.button-green {
  background-color: #4caf50; /* Green */
}
.button-red {
  background-color: #f44336; /* 红色 */
}
.image_detail {
  width: 100%;
}
button {
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 0px;
  width: 50%;
  height: 100%;
  line-height: 50px;
}
.detail-nav image {
  width: 35px;
  height: 25px;
  margin: 10px 20px;
}
.line_nav {
  width: 2.5px;
  height: 100%;
  background-color: gainsboro;
}
/* 占位 */
.temp {
  height: 50px;
}
.text-remark {
  background: #ffffff;
  color: #aaaaaa;
  display: block;
  font-size: 12px;
  padding: 10px 15px;
}

.specif-count{
  float: left;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px 0px;
  box-sizing: border-box;
}
.specif-count .specif-header{
  padding: 10px 15px;
  box-sizing: border-box;
}
.specif-count .specif-img{
  float: left;
  width: 35%;
  height: 120px;
  margin-right: 0.2rem;
}
.specif-count .specif-img .img{
  width: 100%;
  height: 120px;
}
.specif-count .specif-detail{
  float: left;
  width: 55%;
}
.specif-count .specif-close-icon{
  float: left;
  width: 5%;
  margin-top: -15px;
}
.specif-count .specif-price{
  color: #3982f6;
  font-size:18px;
  margin-top: 20px;
}
.specif-count .specif-inventory{
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
}
.specif-count .specif-title{
  font-size: 14px;
  margin-top: 10px;
}

.specif-count .specif-cation{
  float: left;
  width: 100%;
}
.search-history-title{
  float: left;
  width: 100%;
  font-size: 16px;
  padding: 10px 15px;
  box-sizing: border-box;
}
.search-cell li{
  float: left;
  margin: 5px 0px 5px 15px;
  text-align: center;
  padding: 5px 15px;
  font-size: 14px;
  border: 1px solid #606060;
  border-radius: 0.08rem;
  color: #606060;
}
/*规格item被选中时*/  
.search-cell li.productActive {
    background-color: #ff976a;
    color: #fff;
    border: 1px solid #ff976a;
}
.search-cell li.noneActive {
    background-color: #ccc;
    opacity: 0.4;
    color: #000;
    pointer-events: none;
}



.van-button--danger{
  background-color: #3982f6 !important;
  border:2rpx solid #3982f6 !important;
}
.van-info{
  background-color: #3982f6 !important;
} 
button{
  border: 0;
}



/* 商品评价 */
.comment-cell{
  float: left;
  width: 100%;
  background: #ffffff;
  padding: 10px 15px 10px 15px;
  border-bottom: 1px solid #f2f2f2; 
  box-sizing: border-box
}
.user-nickname{
  float: left;
  width: 100%;
}
.user-icon{
  float: left;
  width: 32px; 
  height: 32px; 
  border-radius: 25px;
  vertical-align: top;
}
.nickname{
  float: left;
  width: 100px;
  font-size: 16px;
  color: #999999;
  margin-left: 10px;
  margin-top: 5px;
}
.commentDetail{
  float: left;
  font-size: 13px;
  margin-left: 42px;
}
</style>
