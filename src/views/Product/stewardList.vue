<template>
  <div class="pd-container">
    <product-nav v-bind:class="{'isSteward':isNowPage}"></product-nav>
    <product-list id="1"></product-list>
    <foot-bar></foot-bar>
  </div>
</template>
<style scoped>
  .pd-container{
      background-color: #f2f2f2;
  }
</style>
<script>
  import productNav from '../../components/productNav.vue'
  import productList from '../../components/productList.vue'
  import footBar from '../../components/footBar.vue'
  export default {
    components: {
      productNav,
      productList,
      footBar
    },
    data () {
      return {
        isNowPage: true
      }
    }
  }
</script>
