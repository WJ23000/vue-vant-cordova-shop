<template>
  <div id="app">
    <transition :name="transitionName">   
      <router-view class="child-view" v-if="isRouterAlive"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      transitionName:'',
      isRouterAlive: true
    }
  },
  created () {
    // 关闭页面加载动画
    document.body.removeChild(document.getElementById('Loading'))
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
	    //设置动画名称
        this.transitionName = 'slide-left';
      }else if(to.meta.index < from.meta.index){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide';
      }
      //判断是否登录
      this.login();
    }
  },
  methods: {
    reload () {
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
        this.$toast.loading({
          mask: true,
          message: '加载中...'
        })
      })
    },
    login () {
      let loginMsg=localStorage.getItem("isLogin");
      console.log(loginMsg)
      if(loginMsg == null || loginMsg == ""){
        this.$router.push('/Login');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-content{
  float: left;
  width: 100%;
  background: #f2f2f2;
}
/* 路由切换动画 */
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-enter-active,
.slide-leave-active {
  will-change: transform;
  transition: all 300ms;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-enter {
  opacity: 0;
  transform: translate3d(0%, 0, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate3d(0%, 0, 0);
}
</style>
