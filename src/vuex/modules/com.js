import * as types from '../types'
const state = {
  showToast: false,
  showSuccess: true,
  showFail: false,
  toastMsg: '操作成功',
  alertMsg: '退出登录',
  showAlert: false,
  loading: false
}
const actions = {
  showToast ({commit}, status) {
    commit(types.COM_SHOW_TOAST, status)
  },
  showSuccess ({commit}, status) {
    commit(types.COM_SHOW_SUCCESS, status)
  },
  showFail ({commit}, status) {
    commit(types.COM_SHOW_FAIL, status)
  },
  toastMsg ({commit}, str) {
    commit(types.COM_TOAST_MSG, str)
  },
  showAlert ({commit}, status) {
    commit(types.COM_SHOW_ALERT, status)
  },
  alertMsg ({commit}, str) {
    commit(types.COM_ALERT_MSG, str)
  },
  setLoadingState ({commit}, status) {
    commit(types.COM_LOADING_STATUS, status)
  }
}
const getters = {
  showToast: state => state.showToast,
  showAlert: state => state.showAlert,
  loading: state => state.loading
}
const mutations = {
  [types.COM_SHOW_TOAST] (state, status) {
    state.showToast = status
  },
  [types.COM_SHOW_SUCCESS] (state, status) {
    state.showSuccess = status
  },
  [types.COM_SHOW_FAIL] (state, status) {
    state.showFail = status
  },
  [types.COM_TOAST_MSG] (state, str) {
    state.toastMsg = str
  },
  [types.COM_SHOW_ALERT] (state, status) {
    state.showAlert = status
  },
  [types.COM_ALERT_MSG] (state, str) {
    state.alertMsg = str
  },
  [types.COM_LOADING_STATUS] (state, status) {
    state.loading = status
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
