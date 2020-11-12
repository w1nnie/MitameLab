<template lang="pug">
doughnut
</template>

<script>
import Doughnut from "@/components/Doughnut.vue"
export default {
  name: 'Top',
  props: {
    msg: String
  },
  components: {Doughnut}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
