<template lang="pug">
.illust-mask-diagonal-line-container
	img.po(:src="img")
</template>

<script>
import steria from "@/assets/steria_sd.png";

export default {
	name: 'IllustLineDiagonalLine',
	data() {
		return {
			img: steria
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/media.sass"

.illust-mask-diagonal-line-container
	position: absolute
	left: 5vw
	top: 2.5vh
	width: 90vw
	height: 90vh
	background: white
	display: flex
	justify-content: center
	align-items: center

	.po
		width: 60%
		height: auto


</style>
