<template>
    <div class="alert">
        <div class="alert-wrap">
            <div class="text">
                {{alertMsg}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: mapState({
    alertMsg: state => state.com.alertMsg
  })
}
</script>

<style lang="scss" scoped>
    .alert {
        z-index: 1000;
        .alert-wrap {
            position: fixed;
            z-index: 10;
            padding: 5px 10px;
            line-height: 22px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 45px;
            background: rgba(0, 0, 0, 0.6);
            .text {
                font-size: 14px;
                color: #fff;
            }
        }
    }
</style>
