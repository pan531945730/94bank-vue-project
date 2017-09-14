import Vue from 'vue'
import router from '../router'
import { loginToken } from './config'
import { cookie } from './util'
router.afterEach((to, from) => {
  console.log(to.path)
})
Vue.mixin({
  methods: {
    goBack () {
      router.go(-1)
    },
    goHome () {
      router.push('/')
    },
    goLogin () {
      let href = window.location.hash.replace('#', '')
      router.replace('/Member/Login?returl=' + encodeURIComponent(href))
    },
    isLogin () {
      return cookie.get(loginToken)
    },
    hideLoading () {
      this.$store.commit('updateLoadingStatus', { isLoading: false })
    },
    showLoading () {
      this.$store.commit('updateLoadingStatus', { isLoading: true })
    },
    setTitle (title) {
      title = title || '94bank'
      document.title = title
      var iframe = document.createElement('iframe')
      iframe.src = '/static/img/favicon.png'
      iframe.style.display = 'none'
      iframe.onload = function () {
        setTimeout(function () {
          document.body.removeChild(iframe)
          iframe.onload = iframe = null
        }, 50)
      }
      document.body.appendChild(iframe)
    },
    TimeFormat (Data, fmt) {
      if (!Data) {
        return
      }
      let dataArr = Data.split(' ')
      let date = dataArr[0].split('/')
      let time = dataArr[1].split(':')
      let year = date[0]
      let month = date[1]
      let day = date[2]
      let house = time[0]
      let minutes = time[1]
      let seconds = time[2]
      let o = {
        'M+': month,
        'd+': day,
        'h+': house,
        'm+': minutes,
        's+': seconds
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (year + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
        return fmt
      }
    }
  }
})
