<template>
  <div id="app">
    <ml-header />
    <top />
  </div>
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

<style scoped="sass">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
