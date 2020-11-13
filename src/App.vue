<template lang="pug">
#app
  ml-header.header
  body
    top
</template>

<script>
  (function(d) {
    var config = {
      kitId: 'sxg0lca',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


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
