<template lang="pug">
#app
  ml-header.header
  .content
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
  },
  head: {
    script: [
      { src: "https://use.typekit.net/sxg0lca.js" }
    ]
  }
}
</script>

<style scoped lang="sass">
#app
  width: 100%
  height: 100%
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  display: flex
  flex-direction: column

.header
  position: fixed
  height: 5%
  width: 100%
  top: 0
  left: 0
  background: white
  z-index: 1000

.content
  position: absolute
  width: 100%
  height: 95%
  left: 0
  top: 5vh

body
  margin: 0
</style>
