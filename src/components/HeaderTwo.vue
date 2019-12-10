<template>
    <div>
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>
<script>
export default {
  name: 'Header',
  props:['titleVal'],
  data () {
    return {
      title: this.titleVal
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>