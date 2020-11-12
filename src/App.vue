<template lang="pug">
#app
  ml-header.header
  body
    top
</template>

<script>
import MlHeader from "./components/MlHeader.vue"
import Top from "./components/Top.vue"

export default {
  name: 'App',
  components: {
    MlHeader,
    Top
  }
}
</script>

<style scoped lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px

.header
  position: fixed
  height: 5%
  width: 100%
  top: 0
  left: 0
  background: white
  z-index: 1000

body
  width: 100%
  height: 95%
</style>
