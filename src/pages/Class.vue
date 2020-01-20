<template>
  <div class="page">
    <div class="page-header">
      <router-link to="/Search">
        <van-search  placeholder="请输入搜索关键词" disabled="true"/>
      </router-link>
    </div>
    <div class="page-content">
      <!--主盒子-->
      <!--左侧栏-->
      <div class="content-left-right"> 
        <div class="content-left">
          <div class="nav_left">
            <div v-for="(item,index) in cateItems" :key="index">
              <!--当前项的id等于item项的id，那个就是当前状态-->
              <!--用data-index记录这个数据在数组的下标位置，使用data-id设置每个item的id值，供打开2级页面使用-->
            <div :class="curNav == item.cate_id ?  curActive1 : curActive2" @click="switchRightTab(item.cate_id,index)">{{item.cate_name}}</div>
            </div>
          </div>
        </div>
      
        <!--右侧栏-->
        <div class="content-right">
          <div class="nav_right">
            <!--如果有数据，才遍历项-->
            <div v-if="cateItems[curIndex].ishaveChild">
              <div v-for="(item,index) in cateItems[curIndex].children" :key="index">
                <div class="nav_right_items">
                <!--界面跳转 -->
                  <router-link :to="{path:'/SearchOrderList',query: {goodsId: item.child_id}}">
                    <img v-lazy="item.image"/>
                    <span>{{item.name}}</span>
                  </router-link>
                </div>
              </div>
            </div>
            <!--如果无数据，则显示数据-->
            <div class="nodata_text" v-else>
              <img src="../assets/no-result.png"/>
            </div>
          </div>
        </div>
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
export default {
  name: 'Class',
  data () {
    return {
      navActive: 1,
      cateItems: [
        {
          cate_id: 1,
          cate_name: "护肤",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '洁面皂',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 2,
                name: '卸妆',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 3,
                name: '洁面乳',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 4,
                name: '面部祛角质',
                image: require('../assets/shop1.png')
              }
            ]
        },
        {
          cate_id: 2,
          cate_name: "彩妆",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '气垫bb',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 2,
                name: '修容/高光',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 3,
                name: '遮瑕',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 4,
                name: '腮红',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 5,
                name: '粉饼',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 6,
                name: '粉底',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 7,
                name: '蜜粉/散粉',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 8,
                name: '隔离霜',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 9,
                name: '腮红',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 10,
                name: '粉饼',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 11,
                name: '粉底',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 12,
                name: '蜜粉/散粉',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 13,
                name: '隔离霜',
                image: require('../assets/shop1.png')
              }
            ]
        },
        {
          cate_id: 3,
          cate_name: "香水/香氛",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '淡香水EDT',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 2,
                name: '浓香水EDP',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 3,
                name: '香体走珠',
                image: require('../assets/shop1.png')
              },
              {
                child_id: 4,
                name: '古龙香水男士的最爱',
                image: require('../assets/shop1.png')
              }
            ]
        },
        {
          cate_id: 4,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 5,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 6,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 7,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 8,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 9,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 10,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 11,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 12,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        },
        {
          cate_id: 13,
          cate_name: "其他",
          ishaveChild: false,
          children: []
        }
      ],
      curNav: 1,
      curIndex: 0,
      curActive1: "nav_left_items active",
      curActive2: "nav_left_items"
    }
  },
  created () {
    
  },
  mounted () {

  },
  methods:{
    //事件处理函数  
    switchRightTab: function (id,index) {
      // 获取item项的id，和数组的下标值  
      var id = id,
      index = parseInt(index);
      // 把点击到的某一项，设为当前index  
      this.curNav= id,
      this.curIndex= index
    }
  }
  
}
</script>
<style lang="stylus" scoped>
  .content-left-right{
    position: absolute;
    top: 0px; 
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
  /*左侧栏主盒子*/  
  .content-left{
    position: absolute;
    left: 0;
    top: 44px; 
    width: 26%;
    height: 100%;
    overflow-y: auto;
  }
  .content-left::-webkit-scrollbar {display:none}
  .nav_left{  
    /*右侧盒子使用了绝对定位*/  
    float: left;
    width: 100%;
    margin-bottom: 93px;
    flex: 1;  
    /*宽度75%，高度占满，并使用百分比布局*/  
    text-align: center;
    /* padding: 0px 10px 10px 0px;   */
    box-sizing: border-box;  
    background: #f2f2f2;  
  }  
  /*左侧栏list的item*/  
  .nav_left .nav_left_items{  
    /*每个高30px*/  
    height: 40px;  
    /*垂直居中*/  
    line-height: 40px;  
    /*再设上下padding增加高度，总高42px*/  
    padding: 6px 0;  
    /*只设下边线*/  
    border-bottom: 1px solid #dedede;  
    /*文字14px*/  
    font-size: 14px; 
  }  
  /*左侧栏list的item被选中时*/  
  .nav_left .nav_left_items.active{  
    /*背景色变成白色*/  
    background: #ffffff;  
    color: #3982f6; 
    border-left: 4px solid #3982f6; 
  }  
  /*右侧栏主盒子*/ 
  .content-right{
    position: absolute;
    right: 0;
    top: 44px; 
    width: 75%;
    height: 100%;
    background: #ffffff;
    overflow-y: auto;
  } 
  .nav_right{  
    /*右侧盒子使用了绝对定位*/  
    float: left;
    width: 100%;
    margin-bottom: 93px;
    flex: 1;  
    /*宽度75%，高度占满，并使用百分比布局*/   
    padding: 10px;  
    box-sizing: border-box;  
    background: #fff;  
  }  
  .nav_right a{  
    color: #333333;
  }  
  /*右侧栏list的item*/  
  .nav_right .nav_right_items{  
    /*浮动向左*/  
    float: left;  
    /*每个item设置宽度是33.33%*/  
    width: 33.33%;  
    height: 120px;  
    text-align: center;  
  }  
  .nav_right .nav_right_items span{  
    /*浮动向左*/  
    float: left;  
    /*每个item设置宽度是33.33%*/  
    width: 100%;  
    font-size: 10px;
    text-align: center;  
  }
  .nav_right .nav_right_items img{  
    /*被图片设置宽高*/  
    width: 60px;  
    height: 60px;  
    margin-top: 15px;  
  }  
  .nav_right .nav_right_items text{  
    /*给text设成块级元素*/  
    display: block;  
    margin-top: 15px;  
    font-size: 14px;  
    color: black;
    /*设置文字溢出部分为...*/  
    overflow: hidden;  
    white-space: nowrap;  
    text-overflow: ellipsis;  
  } 
  .nodata_text{
    color: black;
    font-size: 14px;  
    text-align: center;  
  } 
  .nodata_text img{
    margin-top: 50px;
    width: 50%;
    height: 120px;
  } 
</style>
