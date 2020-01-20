<template>
  <div class="page">
    <div class="page-header">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        show-action
        v-on:input="onSearch"
      >
        <div slot="action" @click="onCancel">取消</div>
      </van-search>
    </div>
    <div class="page-content" style="background: #ffffff;">
      <div v-if="showVal">
        <div class='search-history-title'>搜索历史</div>
        <div class='search-cell'>
          <div class='search-option'>路虎</div>
          <div class='search-option'>宝马</div>
          <div class='search-option'>宾利</div>
          <div class='search-option'>奔驰</div>
          <div class='search-option'>福特</div>
        </div>
      </div>
      <div v-else>
        <div v-for="(item,index) in searchListSet" :key="index">
          <router-link :to="{path:'/SearchOrderList',query: {searchId: item.id}}">
            <van-cell-group>
              <van-cell
                :title="item.title"
              />
            </van-cell-group>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchVal:"",
      searchList: [],
      searchListSet:[
        {
          id: 1,
          title: '路虎'
        },
        {
          id: 2,
          title: '奔驰'
        },
        {
          id: 3,
          title: '宝马'
        },
        {
          id: 4,
          title: '福特'
        }
      ],
      showVal: true
    }
  },
  created () {

  },
  mounted () {
  
  },
  methods:{
    // 输入内容触发搜索
    onSearch: function () {
      if (this.searchVal.length > 0) {
        this.showVal= false
      } else {
        this.showVal= true
      }
    },
    // 返回首页
    onCancel: function () {
      this.$router.go(-1)
    }
  }
  
}
</script>
<style lang="stylus" scoped>
  .search-history-title{
    float: left;
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
    box-sizing: border-box;
  }
  .search-cell{
    padding: 10px 0px;
  }
  .search-cell .search-option{
    float: left;
    margin: 5px 15px;
    text-align: center;
    padding: 5px 15px;
    font-size: 14px;
    background: #f2f2f2;
    color: #666666;
    border-radius: 25px;
  }
</style>
