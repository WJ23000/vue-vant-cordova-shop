<template>
  <div class="page">
    <div class="page-header">
      <Header :titleVal="title"></Header>
    </div>
    <div class="page-content">
      <form @submit.prevent="formSubmitPhone">
        <van-cell-group>
          <van-field
            v-model="formText.phone"
            name="phone"
            clearable
            icon="arrow"
            placeholder="手机号码"
            bind:click-icon="onClickIcon"
          />
          <van-field
            v-model="formText.sms"
            name="sms"
            clearable
            placeholder="请输入短信验证码"
            use-button-slot
          >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <div class="btn-cell">
            <van-button type="primary" size="large" form-type="submit" class="login-btn">登录</van-button>
        </div>  
      </form>
      <div class="login-option-title">第三方登录</div>
      <div class="login-option-content">
          <span class="login-author" @click="qqLogin"><img src="../assets/qq-icon.png"/></span>
          <span class="login-author" @click="wxLogin"><img src="../assets/wx-icon.png"/></span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import requestUrl from "@/utils/commonUrl";
import validator from "@/utils/validator";
export default {
  name: "Login",
  components: {
    Header
  },
  data() {
    return {
      title: "用户登录",
      formText: {
        phone: "",
        sms: ""
      },
      rules: {
        phone: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback("请输入手机号码");
              } else if (/^[1][0-9]{10}$/.test(value)) {
                callback();
              } else {
                callback("请输入正确的手机号码");
              }
            }
          }
        ],
        sms: [{ required: true, message: "请输入验证码" }]
      }
    };
  },
  created() {
    this.validator = validator(this.rules, this.formText);
  },
  mounted() {
    
  },
  methods: {
    //正则验证方法
    validate(callback, data) {
      this.validator.validate((errors, fields) => {
        if (errors) {
          fields.forEach(item => {
            this.$toast(item.message);
          });
        }
        callback && callback(errors, fields);
      }, data);
    },
    //提交表单
    formSubmitPhone: function() {
      //触发表单正则校验且通过校验提交数据
      this.validate((errors, fields) => {
        console.log(fields.length);
        if (fields.length == 0) {
          if(this.formText.phone=="15501233759"&&this.formText.sms=="1234"){
            //localStorage.setItem("isLogin","true");
            //调用vuex的ations设置登录状态
            this.$store.dispatch("setLoginFn", "true");
            //登录成功跳到主页
            this.$router.push('/');
          }else{
            this.$toast("用户名或密码错误！");
            return false;
          }   
        } else {
          return false;
        }
      });
    },
    //QQ授权登录
    qqLogin: function () {
        this.$toast("已触发QQ授权登录");
    },
    //微信授权登录
    wxLogin: function () {
        this.$toast("已触发微信授权登录");
    }
  }
};
</script>
<style lang="stylus" scoped>
.page-content{
    background: #ffffff;
}
.btn-cell{
    padding: 10px 15px;
}
.login-btn{
    margin-top: 80px;
}
.login-option-title{
    text-align: center;
    margin-top: 120px;
    color: #999999;
    font-size: 16px;
}
.login-option-content{
    margin-top: 60px;
}
.login-author{
    float: left;
    width: 50%;
    text-align: center;
}
.login-author img{
    width: 20%;
}
</style>
