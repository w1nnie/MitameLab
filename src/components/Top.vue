<template lang="pug">
.item-container
	router-link.items(v-for="item in items" :to="item")
router-view
</template>

<script>
import Doughnut from "@/components/Doughnut.vue"
export default {
	name: 'Top',
	components: {Doughnut},
	data(){
		return {
			items: ["/doughnut"]
		}
	}
	// mounted() {
	//   Typekit.load({async: true})
	// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.item-container
	display: flex
	justify-content: center
	align-items: center
	width: 100%
	height: 100%
	background: white
	position: absolute
	top: calc(5vh + 16px)

	.items
		width: 20vw
		height: 20vw
		background: black
</style>
