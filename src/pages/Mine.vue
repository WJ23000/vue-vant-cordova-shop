<template>
  <div class="page">
    <div class="page-content" style="margin-top:0;">
      <div class="tx">
        <div class="mine-header" style="margin-top:20px;">
          <div class="mine-left">
            <img class="mine-img" v-lazy="userImg">
          </div>
          <div class="mine-right" style="margin-top:2px;">
            <div class="mine-welcome">您好,</div>
            <div class="mine-username">{{userName}}</div>
          </div>
        </div>
      </div>
      <div class="mine-order-grids">
        <div class="weui-grids" style="margin-bottom:10px;">
          <div class="weui-grid" v-for="(item,index) in gridsList" :key="index">
            <router-link :to="{path:'/OrderList',query: {indexId: item.id}}">
              <div class="weui-grid__icon">
                <img v-lazy="item.icon">
              </div>
              <span class="weui-grid__label">{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <van-cell title="我的评价" :icon="require('../assets/mine-evalu.png')" is-link :to="{path:'/EvaluList'}"/>
        <van-cell title="收货地址" :icon="require('../assets/mine-address.png')" is-link :to="{path:'/Address'}"/>
        <van-cell title="我的收藏" :icon="require('../assets/mine-collection.png')" is-link :to="{path:'/Collection'}"/>
        <van-cell title="我的邀请码" :icon="require('../assets/mine-code.png')" is-link :to="{path:'#'}"/>
        <van-cell title="设置" :icon="require('../assets/mine-set.png')" is-link :to="{path:'/Set'}"/>
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
import requestUrl from "@/utils/commonUrl";
export default {
  name: "Mine",
  data() {
    return {
      navActive: 3,
      userImg: "",
      userName: "测试用户",
      gridsList: [
        {
          id: 0,
          name: "代付款",
          url: "",
          icon: require("../assets/mine-order1.png")
        },
        {
          id: 1,
          name: "已发货",
          url: "",
          icon: require("../assets/mine-order2.png")
        },
        {
          id: 2,
          name: "待收货",
          url: "",
          icon: require("../assets/mine-order3.png")
        },
        {
          id: 3,
          name: "待评价",
          url: "",
          icon: require("../assets/mine-order4.png")
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.getUserInfo();
  },
  methods: {
    //请求用户信息
    getUserInfo: function() {
      var _this = this;
      let params = "";
      let url = requestUrl.testUrl + "/userInfo";
      this.$http
        .post(url, params)
        .then(function(res) {
          let resData = res.data;
          _this.userImg = resData.userImg;
          _this.userName = resData.userName;
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
.child-view {
  background: #f2f2f2;
}
.tx {
  float: left;
  width: 100%;
  height: 160px;
  background: linear-gradient(
    63deg,
    rgba(50, 125, 218, 1),
    rgba(50, 66, 218, 1)
  );
}
.mine-header {
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.mine-left {
  float: left;
  width: 18%;
}
.mine-right {
  float: left;
  width: 82%;
}
.mine-img {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 60px;
}
.mine-welcome {
  float: left;
  width: 100%;
  color: #ffffff;
  font-size: 18px;
  text-align: left;
  font-weight: 500;
}
.mine-username {
  float: left;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  text-align: left;
}
.mine-order-grids {
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-top: -60px;
}
/* 九宫格 */
.weui-grids {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border-radius: 6px;
}
.weui-grids:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  /* border-top: 1px solid #D9D9D9;   */
  color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-grids:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  /* border-left: 1px solid #D9D9D9;   */
  color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
.weui-grid {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 25%;
  box-sizing: border-box;
}
.weui-grid:before {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  /* border-right: 1px solid #D9D9D9;   */
  color: #d9d9d9;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
.weui-grid:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  /* border-bottom: 1px solid #D9D9D9;   */
  color: #d9d9d9;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-grid:active {
  background-color: #eaeaea;
}
.weui-grid__icon {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  text-align: center;
}
.weui-grid__icon img {
  display: block;
  width: 100%;
  height: 100%;
}
.weui-grid__icon + .weui-grid__label {
  margin-top: 5px;
}
.weui-grid__label {
  display: block;
  text-align: center;
  color: #999999;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mine-cell {
  border-bottom: 1px solid #f2f2f2;
}
</style>
