<template>
  <div class="ac-warp">
    <div class="ac-cont">
        <div class="ac-head">
            <div class="ac-tit">
                <i></i>
                <span>总资产（元）<em class="ac-eye"></em></span>
                <i></i>
            </div>
            <p class="ac-allprice"></p>
            <span class="ac-ico" @click="togglePage"></span>
            <ul class="ac-base">
                <li>
                    <p>账户余额</p>
                    <span id="zhye"></span>
                </li>
                <li>
                    <p>昨日收益</p>
                    <span id="zrsy"></span>
                </li>
                <li>
                    <p>累计收益</p>
                    <span id="ljsy"></span>
                </li>
            </ul>
        </div>
        <div class="ac-handle">
            <a href="javascript:void(0);" class="withdraw">我要提现</a>
            <a href="javascript:void(0);" class="recharge">我要充值</a>
        </div>
        <div class="ac-info">
            <a href="javascript:void(0);" class="jxlc no-arrow">
                <label><i></i>精选理财</label>
                <span></span>
            </a>
            <a href="javascript:void(0);" class="gj">
                <label><i></i>94管家</label>
                <span></span>
            </a>
            <a href="javascript:void(0);" class="jf">
                <label><i></i>我的积分</label>
                <span></span>
            </a>
            <a href="../Order/Coupon" class="yhq">
                <label><i></i>我的优惠券</label>
                <span></span>
            </a>
            <a href="/Order/Bill" class="zd">
                <label><i></i>我的账单</label>
            </a>
        </div>
        <foot-bar></foot-bar>
        <a href="/Member/Friend" class="ac-invite">
            <img draggable="true" id="invite" src="../../assets/images/float-icon.png" width="56" height="auto">
        </a>
    </div>
    <div class="ac-page">
        <div class="ac-mod">
            <header>
                <img class="ac-pic" src="../../assets/images/ac-user.png" width="50" height="50">
                <p id="ac_tel">137****5987</p>
            </header>
            <div class="ac-main">
                <a href="javascript:void(0);" class="smrz">
                    <label><i></i>实名认证</label>
                    <span>未认证</span>
                </a>
                <a href="javascript:void(0);" class="yhk">
                    <label><i></i>我的银行卡</label>
                    <span>完善信息</span>
                </a>
                <a href="javascript:void(0);" class="jymm">
                    <label><i></i>修改交易密码</label>
                </a>
                <a href="javascript:void(0);" class="dlmm">
                    <label><i></i>修改登录密码</label>
                </a>
            </div>
        </div>
        <a href="javascript:void(0);" class="ac-exit"><i></i>退出登录</a>
    </div>

  </div>
</template>
<style>

</style>
<script>
import api from '../../fetch/api'
import footBar from '../../components/footBar.vue'
export default{
  components: {
    footBar: footBar
  },
  data () {
    return {
    }
  },
  created () {
    let data = {
      D: '{}',
      M: 'GetMemberAccount'
    }
    api.postAjax(data)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    togglePage (e) {
      let acCont = document.getElementsByClassName('ac-cont')[0]
      let contDiv = acCont.getElementsByTagName('div')
      e.stopPropagation()
      acCont.className = 'ac-cont cont-visit'
      for (let i = 0; i < contDiv.length; i++) {
        contDiv[i].style['pointer-events'] = 'none'
      }
    }
  },
  mounted () {
    let acCont = document.getElementsByClassName('ac-cont')[0]
    let contDiv = acCont.getElementsByTagName('div')

    acCont.addEventListener('click', function (e) {
      if (e.target.className === 'ac-cont cont-visit') {
        e.target.className = 'ac-cont'
        for (let i = 0; i < contDiv.length; i++) {
          contDiv[i].style['pointer-events'] = 'auto'
        }
      }
    })
    let acInviteEle = document.getElementsByClassName('ac-invite')[0]
    let inviteHei = acInviteEle.clientHeight
    let inviteWid = acInviteEle.clientWidth
    let winHei = window.innerHeight
    let winWid = window.innerWidth
    let screenHei = winHei - inviteHei - 5
    let screenWid = winWid - inviteWid
    acInviteEle.addEventListener('touchmove', function (event) {
      event.preventDefault()
      if (event.targetTouches.length === 1) {
        var touch = event.targetTouches[0]
        if (touch.pageX > screenWid || touch.pageX < 0 || touch.pageY > screenHei || touch.pageY < 0) {
          event.preventDefault()
        } else {
          acInviteEle.style.left = touch.pageX + 'px'
          acInviteEle.style.top = touch.pageY + 'px'
        }
      }
    }, false)
  }
}
</script>
<style scoped>
.ac-wrap{
  background-color: #f2f2f2;
}
.ac-cont{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 2;
  -webkit-transition: all 0.3s;
  background-color: #f2f2f2;
  left: 0;
  -webkit-transform: scale(1);
}
.cont-visit{
  left: -85%;
  -webkit-transform: scale(0.9);
}
.ac-head {
  position: relative;
  padding-top: 25px;
  background: url(../../assets/images/ac-head.jpg) no-repeat;
  background-size: 100% auto;
  color: #fff;
}
.ac-tit{
  display: -webkit-box;
  padding: 0 72px;
  text-align: center;
}
.ac-tit span{
  display: block;
  margin: -10px 10px 0;
  font-size: 1.5rem;
}
.ac-tit i{
  display: block;
  -webkit-box-flex: 1;
  height: 1px;
  background-color: #fbaabd;
}
.ac-eye{
  display: inline-block;
  vertical-align: middle;
  width: 17px;
  height: 11px;
  background: url(../../assets/images/open-eye.png) no-repeat;
  background-size: 17px 11px;
}
.close-eye{
  background: url(../../assets/images/close-eye.png) no-repeat center;
  background-size: 17px 8px;
}
.ac-ico{
  position: absolute;
  top: 22px;
  right: 15px;
  width: 24px;
  height: 24px;
  background: url(../../assets/images/ac-ico.png) no-repeat;
  background-size: 24px;
}
.ac-allprice{
  padding: 18px 0 20px;
  text-align: center;
  font-size: 3.0rem;
}
.ac-base{
  display: -webkit-box;
  -webkit-box-align: center;
  height: 53px;
  background-color: rgba(255,255,255,0.1);
}
.ac-base li{
  -webkit-box-flex:1;
  width: 100%;
  text-align: center;
  line-height: 15px;
  border-right: 1px solid #fbaabd;
}
.ac-base li:last-child{
  border-right: none;
}
.ac-base span{
  display: block;
  padding-top: 5px;
  font-size: 1.5rem;
}
.ac-handle{
  display: -webkit-box;
  background-color: #fff;
  padding: 25px 12px;
}
.ac-handle a{
  display: block;
  margin: 0 12px;
  -webkit-box-flex:1;
  line-height: 43px;
  border-radius: 5px;
  border: 1px solid #ff5959;
  text-align: center;
  font-size: 1.6rem;
}
.withdraw{
  background-color: #fff;
  color: #ff5959;
}
.recharge{
  background-color: #ff5959;
  color: #fff;
}
.ac-info{
  background-color: #fff;
  margin: 15px 0 49px;
  padding: 0 15px;
}
.ac-info a{
  display: -webkit-box;
  line-height: 50px;
  border-top: 1px solid #e5e5e5;
  color: #333;
  font-size: 1.4rem;
}
.ac-info a:first-child{
  border-top: none;
}
.ac-info a label,
.ac-main label{
  display: block;
  -webkit-box-flex: 1;
}
.ac-info a span,
.ac-main span{
  display: block;
  text-align: right;
}
.ac-info label i{
  display: inline-block;
  width: 30px;
  height: 21px;
  vertical-align: middle;
}
.jxlc i{
  background: url(../../assets/images/ac-jxlc01.png) no-repeat left center;
  background-size: 20px 21px;
}
.gj i{
  background: url(../../assets/images/ac-gj01.png) no-repeat left center;
  background-size: 20px 20px;
}
.jf i{
  background: url(../../assets/images/ac-jf01.png) no-repeat left center;
  background-size: 20px 20px;
}
.yhq i{
  background: url(../../assets/images/ac-yhq01.png) no-repeat left center;
  background-size: 19px 15px;
}
.zd i{
  background: url(../../assets/images/ac-zd01.png) no-repeat left center;
  background-size: 16px 18px;
}
.ac-info a:after{
  content: "";
  display: inline-block;
  margin-left: 3px;
  width: 8px;
  height: 8px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  transform: rotateZ(45deg);
  -webkit-transform: rotateZ(45deg);
}
/* 设置 */
.ac-page{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url(../../assets/images/page.png) no-repeat;
  background-size: 100% 100%;
}
.ac-mod{
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  padding: 50px 15px 0 0;
}
.ac-mod header{
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  padding-bottom: 50px;
}
.ac-pic{
  display: block;
  margin: 0 auto 10px;
  border-radius: 100%;
}
.ac-main a{
  display: -webkit-box;
  line-height: 50px;
  border-bottom: 1px solid #999;
  color: #fff;
  font-size: 1.4rem;
}
.ac-main a:after{
  content: "";
  display: inline-block;
  margin-left: 3px;
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotateZ(45deg);
  -webkit-transform: rotateZ(45deg);
}
.ac-main .no-arrow:after,.ac-info .no-arrow:after{
  border: 1px solid transparent;
}
.ac-main label i{
  display: inline-block;
  width: 33px;
  height: 23px;
  vertical-align: middle;
}
.smrz i{
  background: url(../../assets/images/ac-smrz.png) no-repeat left center;
  background-size: 20px 19px;
}
.yhk i{
  background: url(../../assets/images/ac-yhk.png) no-repeat left center;
  background-size: 21px 15px;
}
.jymm i{
  background: url(../../assets/images/ac-jymm.png) no-repeat left center;
  background-size: 21px 21px;
}
.dlmm i{
  background: url(../../assets/images/ac-dlmm.png) no-repeat left center;
  background-size: 17px 23px;
}
.ac-exit{
  position: absolute;
  right: 15px;
  bottom: 25px;
  color: #fff;
}
.ac-exit i{
  display: inline-block;
  width: 31px;
  height: 20px;
  vertical-align: middle;
  background: url(../../assets/images/ac-exit.png) no-repeat left center;
  background-size: 20px 20px;
}
.unlogin-dialog{
 display: none;
 z-index: 100;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 -webkit-box-align: center;
 -webkit-box-pack: center;
 background: rgba(0,0,0,0.7);
}
.unlogin-cont{
  position: absolute;
  left: 25px;
  right: 25px;
  /* top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%); */
  bottom: 150px;
}
.unlogin-cont a{
  position: absolute;
  bottom: 0;
  display: block;
  height: 30%;
  width: 45%;
}
.ac-reg{
  left: 9px;
}
.ac-log{
  right: 0;
}
.ac-invite{
  position: absolute;
  top: 37%;
  left: 80%;
}
.ac-change{
  text-align: left;
}
</style>
