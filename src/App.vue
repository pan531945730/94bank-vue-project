<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import { Loading } from 'vux'
export default {
  components: {
    Loading
  },
  data () {
    return {

      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    }
  },
  computed: {
    ...mapGetters([
      'showAlert'
    ]),
    ...mapState({
      isLoading: state => state.load.isLoading
    })
  }
}
</script>
<style lang="scss">
@import 'assets/css/reset.css';
</style>
