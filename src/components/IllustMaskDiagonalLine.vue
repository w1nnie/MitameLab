<template lang="pug">
.illust-mask-diagonal-line-container
	.img-container
		img.steria(v-for="item in 10" :src="imageUrl")
</template>

<script>
import imageUrl from "@/assets/steria_sd.jpg";

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

$n: 10
@mixin tls($i)
	$x: abs($n / 2 + 0.5 - $i)
	@if $i % 2 == 1
		transform: translateX(calc(50% * #{$x}))
	@else
		transform: translateX(calc(-50% * #{$x}))

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
					mask-image: linear-gradient(to bottom, transparent 0% calc((#{$i} - 1) * 100% / #{$n}), black calc((#{$i} - 1) * 100% / #{$n}) calc((#{$i} - 1) * 100% / #{$n} + 100% / #{$n}), transparent calc((#{$i} - 1) * 100% / #{$n} + 100% / #{$n}))
					animation: slideIn-#{$i} 2s ease-out 1s infinite
					@keyframes slideIn-#{$i}
						0%
							@include tls($i)
							opacity: 0
						3%
							opacity: 1

						7%
							transform: translateX(0%)
							opacity: 1



</style>
