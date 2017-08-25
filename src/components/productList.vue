<template>
  <div class="pd-cont">
    <router-link v-for="item in items" :key="item.appTemplateType" :to="{path:item.appTemplateType!= 6 ? '/Product/ProductDetail?ProductId='+item.id+'&ProductTypeId='+item.typeId+'&pName='+item.title : '/Product/SunPrivateDetail?pName='+item.title}" class="pd-list">
        <div class="list-tit">
          <h2>{{item.title}}
            <span class="forsale" v-if="item.status===1">待售</span>
          </h2>
          <span class="count-down" v-if="item.status===1">倒计时：<em class="countdown" v-bind:data-time="item.startTimeText" v-bind:data-curtime="item.serverTimeText"></em></span>
          <span class="vip" v-if="item.productType2Id===1">新手专享</span>
        </div>
        <ul class="list-info">
          <li v-if="item.eventSpecificIncome!=0"><p class="earn">{{item.interestRateText}}<span class="event">{{item.eventSpecificIncomeText}}</span></p><span>预期年化收益</span></li>
          <li v-else><p class="earn">{{item.interestRateText}}</p><span>预期年化收益</span></li>
          <li><p>{{item.investmentTimeText}}</p><span>{{item.startAmountText}}元起投</span></li>
          <li>
            <div class="ac-warn" v-if="item.status===0 && item.appTemplateType===6 && item.appointment===1">预约中</div>
            <div class="circle" v-else-if="item.status===0">
              <div class="pie_left">
                <div class="left"></div>
              </div>
              <div class="pie_right">
                <div class="right"></div>
              </div>
              <div class="mask"><em>{{parseInt(item.remainingPercentage)}}</em>%<br>可购</div>
            </div>
            <div class="ac-warn haswarn" v-else-if="item.status===2">已售罄</div>
            <div class="ac-warn remind" v-else-if="item.status===1 && item.appointment===0" v-bind:data-proid="item.id">提醒</div>
            <div class="ac-warn haswarn" v-else-if="item.status===1">已提醒</div>
          </li>
        </ul>
      </router-link>
  </div>
</template>
<script type="text/javascript">
import api from '../fetch/api'
import * as _ from '../util/productList'
export default {
  props: {
    id: String
  },
  data () {
    return {
      items: [],
      timeArr: [],
      cirArr: []
    }
  },
  created: function () {
    let data = {
      D: '{"ProductTypeId":' + this.id + ',"PageIndex":1,"PageSize":10}',
      M: 'GetProductList'
    }
    api.postAjax(data)
    .then(res => {
      this.items = JSON.parse(res.D)
      for (let i = 0; i < this.items.length; i++) {
        let sta = this.items[i].status
        let starTime = this.items[i].serverTimeText
        let endTime = this.items[i].startTimeText
        let second = (Date.parse(endTime) - Date.parse(starTime)) / 1000
        if (second > 0 && sta === 1) {
          this.timeArr.push(second)
        }
        let percentage = this.items[i].remainingPercentage
        if (percentage > 0 && sta === 0) {
          this.cirArr.push(percentage)
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  },
  updated () {
    var countEle = document.getElementsByClassName('countdown')
    for (let i = 0; i < this.timeArr.length; i++) {
      this.contTimeDown(this.timeArr[i], i, countEle[i])
      console.log(document.getElementsByClassName('countdown')[0])
    }
    for (let i = 0; i < this.cirArr.length; i++) {
      this.drawCir(this.cirArr[i] * 3.6, i)
    }
  },
  methods: {
    contTimeDown (second, i, ele) {
      this.$nextTick(function () {
        _.contTimeDown(second, i, ele)
      })
    },
    drawCir (num, i) {
      this.$nextTick(function () {
        _.drawCir(num, i)
      })
    }
  }
}
</script>
<style scoped>
.pd-cont{
    margin-bottom: 49px;
}
.pd-list{
    display: block;
    margin-top: 15px;
    padding: 0 15px;
    background-color: #fff;
    color: #333;
}
.list-tit{
    display: -webkit-box;
    -webkit-box-align:center;
    height: 45px;
    border-bottom: 1px solid #e5e5e5;
}
.list-tit h2{
    -webkit-box-flex:1;
    font-size: 1.5rem;
}
.count-down{
    display: -webkit-box;
    -webkit-box-align: center;
    width: 120px;
    padding-left: 25px;
    line-height: 22px;
    background: url(../assets/images/countdown-new.png) no-repeat;
    background-size: 145px;
    color: #fff;
}
.forsale{
    display: inline-block;
    line-height: 16px;
    background-color: #3896fd;
    color: #fff;
    font-size: 1.2rem;
    padding: 0 5px;
    border-radius: 2px;
    margin-left: 5px;
}
.vip{
    display: block;
    width: 63px;
    line-height: 21px;
    background: url(../assets/images/vip-ico-new.png) no-repeat;
    background-size: 63px;
    color: #fff;
    text-align: center;
}
.list-info{
    display: -webkit-box;
}
.list-info li{
    -webkit-box-flex:1;
    width: 100%;
    line-height: 22px;
}
.list-info li:first-child{
    padding: 30px 0 25px;
}
.list-info li:nth-child(2){
    padding: 30px 0 25px;
    text-align: center;
}
.list-info li:last-child{
    padding: 20px 0 25px;
}
.list-info li p{
    font-size: 1.6rem;
}
.list-info li span{
    display: inline-block;
    color: #b2b2b2;
}
.list-info li .earn{
    color: #ff5959;
    font-size: 1.8rem;
}
.event{
    font-size: .8rem;
    color: #ff5959 !important;
}
.circle {
    width: 60px;
    height: 60px;
    position: relative;
    float: right;
    border-radius: 100%;
    background: #ff5959;
}
.pie_left, .pie_right {
    width:60px;
    height:60px;
    position: absolute;
    top: 0;left: 0;
}
.left, .right {
    width:60px;
    height:60px;
    background:#e5e5e5;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 2px 2px #fff;
}
.pie_right, .right {
    clip:rect(0,auto,auto,30px);
}
.pie_left, .left {
    clip:rect(0,30px,auto,0);
}
.mask {
    display: inline-block;
    width: 36px;
    height: 36px;
    padding: 9px;
    line-height: 18px;
    border-radius: 100%;
    left: 3px;
    top: 3px;
    background: #fff;
    position: absolute;
    text-align: center;
    color: #ff5959;
}
.ac-warn{
    float: right;
    width: 55px;
    height: 55px;
    line-height: 54px;
    border: 3px solid #ff5959;
    text-align: center;
    border-radius: 100%;
    color: #ff5959;
}
.haswarn{
   border: 3px solid #e6e6e6;
   color: #e6e6e6;
}
</style>
