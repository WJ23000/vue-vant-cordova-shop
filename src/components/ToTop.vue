<template>
    <div>
        <!-- backTop 回顶部的方法 -->
        <img v-if="btnFlag" class="go-top" src="../assets/to-top.png" @click="backTop">
    </div>
</template>

<script>
export default {
  name: "ToTop",
  data() {
    return {
      btnFlag: false
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
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style lang="stylus">
.go-top {
  position: fixed;
  bottom: 60px;
  right: 15px;
  z-index: 2;
  width: 44px;
  height: 44px;
  opacity: 0.5;
}
</style>
