<template>
    <div>
        <van-nav-bar
            :title="title"
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
  created () {
      
  }
}
</script>