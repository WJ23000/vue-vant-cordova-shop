<template>
  <div class="page">
    <div class="page-header">
      <router-link to="/Search">
        <van-search placeholder="请输入搜索关键词" disabled="true"/>
      </router-link>
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
        { url: require("../assets/s-banner2.jpg") }
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
      goodsList: [
        {
          id: 1,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3001.0,
          sell: 101,
          url: "",
          icon: require("../assets/shop1.png")
        },
        {
          id: 2,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3002.0,
          sell: 102,
          url: "",
          icon: require("../assets/shop1.png")
        },
        {
          id: 3,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3003.0,
          sell: 103,
          url: "",
          icon: require("../assets/shop1.png")
        },
        {
          id: 4,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3004.0,
          sell: 104,
          url: "",
          icon: require("../assets/shop1.png")
        },
        {
          id: 5,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3005.0,
          sell: 105,
          url: "",
          icon: require("../assets/shop1.png")
        },
        {
          id: 6,
          title:
            "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
          price: 3006.0,
          sell: 106,
          url: "",
          icon: require("../assets/shop1.png")
        }
      ]
    };
  },
  created() {},
  mounted() {
    // 监听scroll事件
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    // 销毁scroll事件
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {

  }
};
</script>

<style scoped>
.van-swipe-item img {
  float: left;
  width: 100%;
}
</style>
