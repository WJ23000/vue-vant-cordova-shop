<template>
    <div>
        <van-notice-bar
          :text="notice"
          left-icon="volume-o"
          background="#ffffff"
          color="#3982f6"
        />
    </div>
</template>
<script>
export default {
  name: 'Notice',
  props:['noticeVal'],
  data () {
    return {
      notice: this.noticeVal
    }
  },
  created () {
      
  }
}
</script>