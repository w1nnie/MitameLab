<template lang="pug">
.illust-mask-diagonal-line-container
	.po
</template>

<script>
export default {
	name: 'IllustLineDiagonalLine'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/media.sass"

.illust-mask-diagonal-line-container
	position: absolute
	top: 0
	left: 0
	height: 100%
	width: 100%
	display: flex
	justify-content: center
	align-items: center
	background: yellow

	.po
		width: 90vw
		height: 90vh
		background: blue


</style>
