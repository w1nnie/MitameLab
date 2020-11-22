<template lang="pug">
.illust-mask-diagonal-line-container
	.img-container
		img.steria(v-for="item in 5" :src="imageUrl")
</template>

<script>
import imageUrl from "@/assets/steria_sd.png";

export default {
	name: 'IllustLineDiagonalLine',
	data() {
		return {
			imageUrl: imageUrl
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/media.sass"
@import "@/assets/preset.sass"

$n: 5

.illust-mask-diagonal-line-container
	@include default-mordal
	display: flex
	justify-content: center
	align-items: center
	overflow: hidden

	.img-container
		position:relative
		
		.steria
			position: absolute
			width: 60%
			height: auto
			top: calc(50vh - 55%)
			left: calc(50vw - 43%)

			@for $i from 1 through $n
				&.steria:nth-of-type(#{$i})
					mask-image: linear-gradient(to bottom, transparent 0% calc((#{$i} - 1) * 20%), black calc((#{$i} - 1) * 20%) calc((#{$i} - 1) * 20% + 20%), transparent calc((#{$i} - 1) * 20% + 20%))
					animation: slideIn 2s ease 1s infinite
// @keyframes slideIn
// 	0%
// 		transform: translateX(#{$i}%)
// 		opacity: 0
// 	10%
// 		opacity: 1

// 	20%
// 		transform: translateX(0%)
// 		opacity: 1

</style>
