<template>
  <div class="page">
    <div class="page-header">
      <router-link to="/Search">
        <van-search placeholder="请输入搜索关键词" disabled="true"/>
      </router-link>
      <div class="header-qrcode" @click="tzQrcode">
        <img src="../assets/qrcode-icon.png">
      </div>
    </div>
    <div class="page-content">
      <van-swipe :autoplay="3000" :height="213">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.url">
        </van-swipe-item>
      </van-swipe>
      <Grid :gridVal="gridList"></Grid>
      <div style="margin-top:10px;">
        <Notice :noticeVal="notice"></Notice>
      </div>
      <div style="float:left;margin-bottom:50px;">
        <GoodsList :goodsListVal="goodsList" style="margin-top:0px;"></GoodsList>
      </div>
      <!-- backTop 回顶部的组件 -->
      <ToTop/>
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
import Grid from "@/components/Grid";
import Notice from "@/components/Notice";
import GoodsList from "@/components/GoodsList";
import ToTop from "@/components/ToTop";
import {backbutton} from "@/utils/backbutton";
import { goodsList } from "@/json/goods";
export default {
  name: "Index",
  components: {
    Grid,
    Notice,
    GoodsList,
    ToTop
  },
  data() {
    return {
      navActive: 0,
      images: [
        { url: require("../assets/s-banner1.jpg") },
        { url: require("../assets/s-banner2.jpg") },
        { url: require("../assets/s-banner3.jpg") }
      ],
      gridList: [
        {
          id: 0,
          name: "量版专售",
          img_src: require("../assets/index-lb1.png")
        },
        {
          id: 1,
          name: "极致好货",
          img_src: require("../assets/index-lb2.png")
        },
        {
          id: 2,
          name: "智能家居",
          img_src: require("../assets/index-lb3.png")
        },
        {
          id: 3,
          name: "生活助手",
          img_src: require("../assets/index-lb4.png")
        }
      ],
      notice: "云逸商贸1周年，冬季大酬宾，各类电子商品、家居用品大优惠",
      goodsList: goodsList
    };
  },
  created() {},
  mounted() {
    // 监听scroll事件
    window.addEventListener('scroll', this.scrollToTop);
    // 监听手机返回键退出app功能
    backbutton();
  },
  destroyed() {
    // 销毁scroll事件
    window.removeEventListener('scroll', this.scrollToTop);
  },
  methods: {
    // 跳转扫描二维码
    tzQrcode: function() {
      // 扫一扫方法
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled)
        },
        function (error) {
          alert(error)
        }
      )
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-swipe-item img {
  float: left;
  width: 100%;
  height: 100%;
}
.page-header {
  background: #ffffff;
}
.van-search {
  float: left;
  display: flex;
  width: 90%;
}
.header-qrcode {
  float: left;
  margin-top: 5px;
}
.header-qrcode img {
  width: 25px;
  height: 25px;
}
</style>
