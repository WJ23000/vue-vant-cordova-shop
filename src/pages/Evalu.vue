<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class='order-cell'>
          <div class='order-cell-shop'>
            <div class='shop-img'>
              <img class='img' src='../assets/shop1.png'/>
            </div>
            <div class='shop-fx'>
              <span class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</span>
              <span class='shop-price'>￥3500.00</span>
              <span class='shop-specif'>蓝色</span>
            </div>
          </div>
        </div>
        <div style="float:left;width:100%;">
          <form @submit.prevent="formSubmitEvalu">
            <div>
              <van-cell-group>
                <van-cell title="描述相符">
                  <van-rate v-model="formText.descScore" name="descScore" @change="onDesc" :size="16" color="#3982f6"/>
                </van-cell>
                <van-cell title="服务态度">
                  <van-rate v-model="formText.tudeScore" name="tudeScore" @change="onTude" :size="16" color="#3982f6"/>
                </van-cell>
                <van-field
                  v-model="formText.leave"
                  name="leave"
                  clearable
                  type="textarea"
                  placeholder="留个言给其他小伙伴做个参考呗"
                  rows="1"
                  autosize
                  :border="false"
                />
                <div class="evalu-upload">
                  <van-uploader :after-read="afterRead" @delete="delImg" v-model="fileList" accept="image/*" multiple/>
                </div>
                <van-switch-cell
                  v-model="formText.checked"
                  name="switch"
                  title="是否匿名"
                />
              </van-cell-group>
            </div>
            <div>
              <button class='address-add-btn'  form-type="submit">发布</button>
            </div>
          </form>
        </div>
        
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import areaVal from '@/utils/areaList'
import validator from '@/utils/validator';
export default {
  name: 'Evalu',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"评论详情",
      formText:{
        descScore: 0,
        tudeScore: 0,
        leave:"",
        checked:false
      }, 
      rules: {
        descScore: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback('请选择描述相符星级');
              } else if (/^[1-5]\d*$/.test(value)) {
                callback();
              } else {
                callback('请选择描述相符星级');
              }
            }
          }
        ],
        tudeScore: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback('请选择服务态度星级');
              } else if (/^[1-5]\d*$/.test(value)) {
                callback();
              } else {
                callback('请选择服务态度星级');
              }
            }
          }
        ],
        leave: [
          {required: true, message: '请输入留言'}
        ]
      },
      uploaderList: [],
      fileList: []  // 服务端图片回显
    }
  },
  created () {
    this.validator = validator(this.rules, this.formText);
  },
  mounted () {

  },
  methods:{
    // 正则验证方法
    validate(callback, data) {
      this.validator.validate((errors, fields) => {
        if (errors) {
          fields.forEach(item => {
            this.$toast(item.message);
          })
        }
        callback && callback(errors, fields)
      }, data);
    },
    // 提交表单
    formSubmitEvalu: function() {
      // 触发表单正则校验且通过校验提交数据
      this.validate((errors, fields) => {
        console.log(fields.length);
        if(fields.length==0){
          this.$toast("此处处理表单数据");
          console.log(this.formText);
        }else{
          return false;
        }
      })
    },
    // 星形评分
    onDesc: function (value) {
      this.descScore= value
    },
    onTude: function (value) {
      this.tudeScore= value
    },
    // 图片选择后上传服务端新增
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 点击图片后上传服务端移除
    delImg(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
  
}
</script>
<style scoped>
.page{
  background: #f2f2f2;
}
.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
  margin-bottom: 10px;
}
.order-cell-store{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-store .store-img{
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 0.2rem;
}
.order-cell-store .store-img .img{
  width: 100%;
  height: 20px;
}
.order-cell-store .store-left{
  float: left;
  font-size: 14px;
}
.order-cell-store .store-right{
  float: right;
  font-size: 14px;
  color: #3982f6;
}
.order-cell-shop{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-shop .shop-img{
  float: left;
  width: 90px;
  height: 90px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 90px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-cell-shop .shop-fx .shop-price{
  font-size: 14px;
}
.order-cell-shop .shop-fx .shop-specif{
  font-size: 14px;
  color: #aaaaaa;
}
.order-cell-shop .shop-fx .shop-specif .count{
  float: right;
}
.order-cell-shop .shop-amount{
  float: right;
  text-align: right;
  width:  100%;
  font-size: 14px;
}
.order-cell-btn{
  float: right;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-btn .btn-zf{
  float: right;
  width: 80px;
  height: 32px;
  line-height: 29px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}
.address-add-btn{
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  line-height:normal; 
  padding:10px 0; 
  background:linear-gradient(63deg,rgba(50,125,218,1),rgba(50,66,218,1));
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border: 0;
  border-radius: 0;
}
.evalu-upload{
  padding: 10px 15px;
  border-bottom: 1px solid #f2f2f2;
}
</style>
