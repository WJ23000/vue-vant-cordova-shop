<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div class='sort-wrap'>
        <div class='sort-btn' :data-index="textIndex" @click="textSort">
          <div :class="textColor">综合</div>
        </div>
        <div class='sort-btn' :data-index="sortIndex1" @click="searchSort1">
          销量
          <img :src="sortImg1"/>
        </div>
        <div class='sort-btn' :data-index="sortIndex2" @click="searchSort2">
          价格
          <img :src="sortImg2"/>
        </div>
        <div class='sort-btn' :data-index="viewIndex" @click="viewSort">
          <img :src="viewImg" class='view-Img'/>
        </div>
      </div>
      <div style="float:left;">
        <GoodsList :goodsListVal="goodsList" :viewWayVal="viewWay"></GoodsList>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import GoodsList from '@/components/GoodsList';
import { goodsList } from "@/json/goods";
export default {
  name: 'searchOrderList',
  components:{
    HeaderTwo,
    GoodsList
  },
  data () {
    return {
      title:"商品列表",   
      textColor:"",
      textIndex: 0,
      sortImg1: require('../assets/sort-down.png'),
      sortIndex1: 0,
      sortImg2: require('../assets/sort-down.png'),
      sortIndex2: 0,
      viewImg:  require('../assets/view-kj.png'),
      viewIndex: 0,
      viewWay: false,
      goodsList: goodsList,
      query1: "参数1",
      query2: "参数2",
      query3: "参数3",
    }
  },
  created () {
    this.loadList()
  },
  mounted () {
    
  },
  methods:{
    /*  查询条件   */
    textSort: function (e) {
      if (this.textIndex == 0) {
        this.textColor= "textColor",
        this.textIndex= 1,
        this.query1="综合",
        this.loadList()
      } else {
        this.textColor= "",
        this.textIndex= 0,
        this.query1= "默认",
        this.loadList()
      }
    },
    searchSort1: function (e) {
      if (this.sortIndex1 == 0) {
        this.sortImg1= require('../assets/sort-up.png'),
        this.sortIndex1=1,
        this.query2= "低",
        this.loadList()
      } else {
        this.sortImg1= require('../assets/sort-down.png'),
        this.sortIndex1= 0,
        this.query2= "高",
        this.loadList()
      }
    },
    searchSort2: function (e) {
      if (this.sortIndex2 == 0) {
        this.sortImg2= require('../assets/sort-up.png'),
        this.sortIndex2=1,
        this.query3= "便宜",
        this.loadList()
      } else {
        this.sortImg2= require('../assets/sort-down.png'),
        this.sortIndex2= 0,
        this.query3= "昂贵",
        this.loadList()
      }
    },
    viewSort: function (e) {
      if (this.viewIndex == 0) {
        this.viewImg= require('../assets/view-hj.png'),
        this.viewIndex= 1,
        this.viewWay= true
      } else {
        this.viewImg= require('../assets/view-kj.png'),
        this.viewIndex= 0,
        this.viewWay= false
      }
    },


    // 数据请求
    loadList: function (){
      let param1 = this.query1;
      let param2 = this.query2;
      let param3 = this.query3;
      this.$toast({
        message: "请求参数=" + param1+','+param2+','+param3,
        duration:1000
      });
    },
  }
  
}
</script>
<style lang="stylus" scoped>
.sort-wrap{
  position: fixed;
  width: 100%;
  z-index: 1;
  height:44px;
  background-color:#fff;
  border-bottom: 1px solid #f2f2f2; 
  margin-top: 2px;
}
.sort-btn{
  width:25%;
  float:left;
  text-align: center;
  height:44px;
  line-height:44px;
  font-size: 14px;
  color:#333;
}
.sort-btn img{
  margin-top: 2px;
  width: 20px;
  height: 36px;
  margin-left:3px;
  vertical-align: top;
}
.sort-btn .view-Img{
  margin-top: 8px;
  width: 25px;
  height: 25px;
  margin-left: 3px;
  vertical-align: top;
}
.sort-btn .textColor{
  color: #3982f6;
}
</style>
