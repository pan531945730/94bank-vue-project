<template>
  <div class="foot-bar">
      <!-- <a href="https://itunes.apple.com/us/app/94bank-bu-shi-yin-xing-de94bank/id878005164?l=zh&ls=1&mt=8">下载APP</a> -->
      <a href="javascript:void(0);" id="contact_us">联系我们</a>
      <router-link to="/Member/AccountCenter">账户中心</router-link>
      <router-link to="/">理财中心</router-link>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    if (this.loginStatus) {

    }
  },
  computed: mapGetters([
    'loginStatus'
  ])
}
</script>

<style scoped>
.foot-bar{
    position: fixed;
    display: -webkit-box;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 49px;
    background-color: #333;
    font-size: 1.4rem;
}
.foot-bar a{
    display: block;
    -webkit-box-flex:1;
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
}
.info{
    padding: 10px 0;
    line-height: 22px;
    font-size: 1.4rem;
    text-align: center;
}
</style>
