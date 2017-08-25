<template>
  <div class="pd-nav">
      <router-link to="/"><span>精选</span></router-link>
      <router-link to="/Product/steward"><span>94管家</span></router-link>
  </div>
</template>
<style scoped>
  .pd-nav {
      display: -webkit-box;
      line-height: 40px;
      background-color: #fff
  }
  .pd-nav a {
      display: block;
      -webkit-box-flex: 1;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      color:#333;
  }
  .pd-nav span {
      display: inline-block
  }
  .pd-nav .nav-on {
      color: #ff5959;
      border-bottom: 1px solid #ff5959
  }
  .isSift a:first-child span{
    color: #ff5959;
    border-bottom: 1px solid #ff5959
  }
  .isSteward a:last-child span{
    color: #ff5959;
    border-bottom: 1px solid #ff5959
  }
</style>
<script>
export default {
  data () {
    return {
      inputTxt: ''
    }
  },
  methods: {
  }
}
</script>
