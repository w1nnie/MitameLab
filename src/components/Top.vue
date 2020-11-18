<template lang="pug">
.item-container
	router-link.items(v-for="item in items" :to="item")
router-view(v-slot="{Component}")
	transition(name="fade")
		component(:is="Component")

</template>

<script>
import Doughnut from "@/components/Doughnut.vue"
import IllustMaskDiagonalLine from "@/components/IllustMaskDiagonalLine.vue"
export default {
	name: 'Top',
	components: {Doughnut,IllustMaskDiagonalLine},
	data(){
		return {
			items: ["/doughnut", "/illustMaskDL"]
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

	.items
		width: 10vw
		height: 10vw
		background: pink
		margin: 2vw

.fade-enter-active, .fade-leave-active
  transition: all 1s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
