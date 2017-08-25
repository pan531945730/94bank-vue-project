<template>
  <div class="login-warp">
    <div class="logo">
       <img src="../../assets/images/logo.png" alt="94bank" width="100%" height="auto">
    </div>
    <div class="bd-form">
        <label>
            <em class="bd-ico tel"></em>
            <span class="bd-input">
                <input type="tel" v-on:focus="focus" v-on:blur="blur" v-on:input="inPut" name="usertel" v-model="usertel" placeholder="请输入手机号码" value="" maxlength="11" id="tel">
                <i class="clear" id="tel_clear" v-show="telClear" @click="clear"></i>
            </span>
        </label>
        <label>
            <em class="bd-ico pwd"></em>
            <span class="bd-input">
                <input type="password" v-on:focus="focus" v-on:blur="blur" v-on:input="inPut" name="password" v-model="password" placeholder="请输入94bank登录密码" value=""  id="pwd">
                <i class="clear" id="pwd_clear" v-show="pwdClear" @click="clear"></i>
                <em class="eyes" @click="eyes"></em>
            </span>
        </label>
        <label class="imgcode-mod" v-show="isimgcode">
            <em class="bd-ico imgcode"></em>
            <span class="bd-input">
                <input type="number" placeholder="请输入图形验证码" value=""  maxlength="4" id="bd_imgcode">
                <i class="clear"></i>
            </span>
            <img src="#" width="75" height="30" class="img-code" alt="图形验证码">
        </label>
        <p class="error-tip"><span></span><a href="#" class="log-findpwd">忘记密码？</a></p>
        <a href="javascript:void(0);" v-on:click="_login" class="bd-btn">立即登录</a>
    </div>
    <p class="fir-act">新用户，<a href="#">立即注册</a></p>
  </div>
</template>
<style>

</style>
<script>
  import { mapActions } from 'vuex'
  import api from '../../fetch/api'
  import * as _ from '../../util/tool'
  export default {
    data () {
      return {
        usertel: '',
        password: '',
        codernm: '',
        identifycode: '',
        telClear: false,
        pwdClear: false,
        isimgcode: false
      }
    },
    computed: mapActions([
      'setUserInfo'
    ]),
    methods: {
      focus (e) {
        if (e.target.id === 'tel' && e.target.value !== '') {
          this.telClear = true
        }
        if (e.target.id === 'pwd' && e.target.value !== '') {
          this.pwdClear = true
        }
      },
      blur (e) {
        if (e.target.id === 'tel') {
          let that = this
          setTimeout(function () {
            that.telClear = false
          }, 0)
        }
        if (e.target.id === 'pwd') {
          let that = this
          setTimeout(function () {
            that.pwdClear = false
          }, 0)
        }
      },
      inPut (e) {
        if (e.target.id === 'tel') {
          this.telClear = true
        }
        if (e.target.id === 'pwd') {
          this.pwdClear = true
        }
      },
      clear (e) {
        if (e.target.id === 'tel_clear') {
          this.usertel = ''
        }
        if (e.target.id === 'pwd_clear') {
          this.password = ''
        }
      },
      eyes (e) {
        if (e.target.className === 'eyes') {
          e.target.className = 'eyes open-eyes'
        } else {
          e.target.className = 'eyes'
        }
        let pwdType = document.getElementById('pwd')
        if (pwdType.getAttribute('type') === 'password') {
          pwdType.setAttribute('type', 'text')
        } else {
          pwdType.setAttribute('type', 'password')
        }
      },
      // 用户登录
      _login () {
        if (!this.usertel) {
          _.alert('请输入手机号')
          return false
        } else if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.usertel)) {
          _.alert('请输入正确的手机号')
          return false
        }
        if (!this.password) {
          _.alert('请输入登录密码')
          return false
        }
        let data = {
          D: '{"phone":"' + this.usertel + '","Pswd":"' + this.password + '"}',
          M: 'MemberLogin'
        }
        this.$store.dispatch('setLoadingState', true)
        api.postAjax(data)
          .then(res => {
            this.$store.dispatch('setLoadingState', false)
            this.$store.dispatch('setUserInfo', true)
            this.$router.replace('/Member/AccountCenter')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
}
</script>
<style scoped>
  .logo {
    padding: 55px 25% 26px 25%;
  }
  .bd-form {
    padding: 0 15px;
  }
  .bd-form label {
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 17px 0 8px 0;
  }
  .bd-form .bd-ico {
    display: block;
    width: 28px;
    height: 22px;
  }
  .bd-input {
    display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    height: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e5e5e5;
  }
  .bd-input input {
    display: block;
    -webkit-box-flex:1;
    border: none;
    font-size: 1.4rem;
    color: #333;
  }
  .tel {
    background: url(../../assets/images/tel.png) no-repeat;
    background-size: 13px 18px;
  }
  .pwd {
    background: url(../../assets/images/pwd.png) no-repeat;
    background-size: 15px 16px;
  }
  .imgcode {
    background: url(../../assets/images/imgcode.png) no-repeat;
    background-size: 15px 16px;
  }
  .clear {
    display: block;
    width: 30px;
    height: 30px;
    background: url(../../assets/images/clear.png) no-repeat center center;
    background-size: 15px 15px;
  }
  .eyes {
    display: block;
    width: 30px;
    height: 30px;
    background: url(../../assets/images/eyes.png) no-repeat center center;
    background-size: 15px 9px;
  }
  .open-eyes {
    background: url(../../assets/images/open-eyes.png) no-repeat center center;
    background-size: 15px 9px;
  }
  .img-code{
    margin-left: 30px;
  }
  .error-tip {
    height: 20px;
    padding-top: 8px;
    color: #ff6666;
    font-size: 1.4rem;
  }
  .bd-btn {
    display: block;
    width: 100%;
    line-height: 45px;
    border-radius: 5px;
    margin-top: 14px;
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    background-color: #ff5959;
  }
  .log-findpwd{
    float: right;
    color: #ff6666;
  }
  .fir-act{
    padding: 20px 15px;
    text-align: center;
    color: #b2b2b2;
  }
  .fir-act a{
    color: #ff5959;
  }
</style>
