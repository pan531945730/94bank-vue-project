<template>
  <div class="pdd-warp">
    productDetail
    <foot-bar></foot-bar>
  </div>
</template>
<style>

</style>
<script>
import { getUrlParams } from '../../common/util'
import footBar from '../../components/footBar.vue'
export default{
  components: {
    footBar
  },
  data () {
    return {
      uid: this.isLogin()
    }
  },
  created () {
    this.setTitle(getUrlParams('pName'))
  }
}
</script>
<style scoped>
  body{
      background-color: #f2f2f2;
  }
</style>
