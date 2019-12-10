<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div v-if="commentList.length > 0 ? true : false"  class='comment-content'>    
            <div v-for="(item,index) in commentList" :key="index">
                <div class='comment-cell'>
                    <div class='user-nickname'>
                        <img class='user-icon' v-lazy='item.userImg'/>
                        <span class='nickname'>{{item.userName}}</span>
                        <!-- <text class='comment-time'>{{item.createTime}}</text> -->
                    </div>
                    <span class='commentDetail'>{{item.content}}</span>
                    <div class='comment-img'>
                        <div v-for="(items, zindex) in item.goodsImg" :key="zindex">
                            <img v-lazy='items'  @click="commentImgPreview(zindex,item.goodsImg)"/>
                        </div>
                    </div>
                    <div class='time-heart' @click="likeZan" :data-index="index">
                        <span class='dianzan'>{{item.likeNum}}</span>
                        <img class='heart-icon' :src='okZan' v-if="item.isLike == 1"/>
                        <img class='heart-icon' :src='noZan' v-else/>
                    </div>
                </div>
            </div>
        </div>
        <!-- 如果无数据，则显示数据 -->
        <div class="nodata_text" v-else>
            <img src='../assets/no-result.png'/>
        </div>
        <!-- 底部评论框 -->
        <div class="page-footer">
            <van-cell-group>
                <van-field
                    v-model="commentVal"
                    center
                    clearable
                    placeholder="请发表您的评论"
                >
                    <van-button slot="button" size="small" type="primary" @click="onConfirm">发送</van-button>
                </van-field>
            </van-cell-group>
        </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'Comment',
  components:{
    HeaderTwo
  },
  data () {
    return {
        title:"商品评价",
        commentList:[
            {
                id: 1,
                userImg: require('../assets/user.png'),
                userName: "大黑",
                content: "商家很靠谱，物美价廉、商品质量真的很不错，下次还会再来的",
                goodsImg:[
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-25 15:23:30",
                likeNum: 554,
                isLike: 1
            },
            {
                id: 2,
                userImg: require('../assets/user.png'),
                userName: "二黑",
                content: "商品质量真的很不错2",
                goodsImg:[
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-26 17:23:30",
                likeNum: 699,
                isLike: 0
            },
            {
                id: 3,
                userImg: require('../assets/user.png'),
                userName: "三黑",
                content: "商品质量真的很不错3",
                goodsImg:[
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-27 19:23:30",
                likeNum: 255,
                isLike: 1
            },
            {
                id: 4,
                userImg: require('../assets/user.png'),
                userName: "四黑",
                content: "商品质量真的很不错4",
                goodsImg:[
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-25 15:23:30",
                likeNum: 388,
                isLike: 1
            },
            {
                id: 5,
                userImg: require('../assets/user.png'),
                userName: "五黑",
                content: "商品质量真的很不错5",
                goodsImg:[
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-26 17:23:30",
                likeNum: 552,
                isLike: 0
            },
            {
                id: 6,
                userImg: require('../assets/user.png'),
                userName: "六黑",
                content: "商品质量真的很不错6",
                goodsImg:[
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-27 19:23:30",
                likeNum: 6666,
                isLike: 1
            },
            {
                id: 7,
                userImg: require('../assets/user.png'),
                userName: "五黑",
                content: "商品质量真的很不错7",
                goodsImg:[
                    require('../assets/shop1.png'),
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-26 17:23:30",
                likeNum: 788,
                isLike: 0
            },
            {
                id: 8,
                userImg: require('../assets/user.png'),
                userName: "六黑",
                content: "商品质量真的很不错8",
                goodsImg:[
                    require('../assets/shop1.png')
                ],
                createTime: "2019-02-27 19:23:30",
                likeNum: 866,
                isLike: 1
            }
        ],
        commentVal:"",
        okZan: require('../assets/ok-zan.png'),
        noZan: require('../assets/no-zan.png'),
        height: 0,
        adjustVal: false,
        confirmVal: true
    }
  },
  created () {
    
  },
  mounted () {

  },
  computed:{
    
  },
  methods:{
    // 发送评论
    onConfirm: function () {
      this.$toast(this.commentVal)
    },
    // 确认点赞和取消点赞
    likeZan: function (e) {
        let commentList = this.commentList  //获取评论列表
        let index = e.currentTarget.dataset.index;
        console.log(index);
        let isLike = commentList[index].isLike;
        console.log(isLike);
        let onum = commentList[index].likeNum;
        if (isLike) {
            commentList[index].likeNum = (onum - 1);
            commentList[index].isLike = false;
            this.$toast("已取消点赞")
        } else {
            commentList[index].likeNum = (onum + 1);
            commentList[index].isLike = true;
            this.$toast("已点赞")
        }
        this.commentList=commentList
    },
    // 评论商品图图片预览
    commentImgPreview: function (index,img) { 
      ImagePreview(img);
    }
  }
  
}
</script>
<style scoped>
.comment-content{
    float: left;
    width: 100%;
    background: #ffffff;
    margin-bottom: 50px;
}
.comment-cell{
    float: left;
    width: 100%;
    padding: 10px 15px 0 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2; 
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
    width: 87.5%;
    font-size: 13px;
    margin-left: 42px
}
.comment-img{
  margin-left: 42px;
}
.comment-img img{
  float: left;
  width: 90px;
  height: 90px;
  border: 1px solid #f2f2f2;
  margin: 6px 4px 6px 0px;
  border-radius: 4px;
}
.time-heart{ 
    float: left;
    width: 100%;
    height: 25px;
    position: relative;
}
.comment-time{
    font-size: 12px;
    color: #999999;
    margin-left: 35px
}
.heart-btn{ 
    width: 10px;
    height: 10px; 
}
.heart-icon{
    float: right;
    width: 20px; 
    height: 20px; 
    right: 82px;
    top: 2px
}
.dianzan{
    float: right;
    font-size: 14px;
    display: inline-block; 
    color: #999999;
    margin-top: 4px;
}
.comment-count{
    border-top: 1px solid #F9F9F9;
    text-align: center;
    color: #999999;
    font-size: 12px;
    padding: 10px 0;
}


.nodata_text{
    color: black;
    font-size: 14px;  
    text-align: center;  
} 
.nodata_text image{
    margin-top: 50px;
    width: 40%;
    height: 120px;
} 


.release{
    display: flex;
    align-items: flex-end; /*底部对齐*/
    justify-content: space-between; /*两端对齐*/
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 18rpx 30rpx 18rpx 30rpx;
    background-color: #F7F8F7;
    font-size: 28rpx;
    z-index: 999;
}
.release .text{
    width: 100%;
    min-height: 34rpx;
    max-height: 102rpx; /*最多显示三行*/
    border-width: 15rpx 20rpx; /*使用padding与预期留白不一致，故使用border*/
    border-style: solid;
    border-color:  #ffffff;
    line-height: 34rpx;
    font-size: 28rpx;
    background-color: #ffffff;
    border-radius: 4rpx;
}
.release .submit{
    width: 116rpx;
    height: 64rpx;
    line-height: 44rpx;
    text-align: center;
    color: #3982f6;
}
</style>
