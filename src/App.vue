<template>
  <div id="app">
    <alert v-show="showAlert"></alert>
    <toast v-show="showToast"></toast>
    <loading v-show="loading"></loading>
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import alert from '../src/components/alert.vue'
import toast from '../src/components/toast.vue'
import loading from '../src/components/loading.vue'

import {mapGetters} from 'vuex'
export default {
  components: {
    alert,
    toast,
    loading
  },
  data () {
    return {

      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    }
  },
  computed: mapGetters([
    'showAlert',
    'showToast',
    'loading'
  ])
}
</script>
<style>
@import 'assets/css/reset.css';
</style>
