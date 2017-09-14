// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import FastClick from 'fastclick'
import './common/mixins'
Vue.config.productionTip = false
Vue.use(Vuex)
FastClick.attach(document.body)
import {ToastPlugin, AlertPlugin, ConfirmPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.$vux.toast.text = function (text, position, time) {
  position = position || 'middle'
  time = time || 3000
  setTimeout(() => {
    Vue.$vux.toast.show({
      type: 'text',
      time: time,
      isShowMask: true,
      text: text,
      position: position
    })
  }, 200)
}
window.addEventListener('load', function () {
  document.querySelector('.vux-toast .weui-mask_transparent').addEventListener('touchstart', function () {
    Vue.$vux.toast.hide()
  }, false)
}, false)
/* eslint-disable no-new */
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
