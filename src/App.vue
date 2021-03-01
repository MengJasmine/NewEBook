<template>
  <div id="app">
    <span class ='text'>abcde</span>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const getters = {
    a: () => 1,
    b: () => 2,
    c: () => 3
  }
  function fn(keys) {
    const data = {}
      keys.forEach(key => {
        if (getters.hasOwnProperty(key)) {
          data[key] = getters[key]
        }
      })
      return data
    }
  export default {
    computed: {
      ...mapGetters(['test']),
      ...fn(['a', 'b', 'c'])
    },
    mounted () {
      //this.$store.dispatch('setTest', 9).then(() => {
      //console.log(this.test)
      // })
      console.log(this.a, this.b, this.c)
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
  // 获取html元素
    const html = document.querySelector('html')
  // 根据屏幕宽度动态计算fontSize
    let fontSize = window.innerWidth / 10
  // 当fontSize大于50时，设置最大值为50
    fontSize = fontSize > 50 ? 50 : fontSize
  // 设置html的fontSize属性，使rem生效，1rem = fontSize + 'px'
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  @import "./assets/styles/global";
  .text{
  width: 100%;
  height: 100%;
  background: #7d8188;
  overflow: hidden;
}
</style>
