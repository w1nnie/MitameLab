<template lang="pug">
.illust-mask-diagonal-line-container
</template>

<script>
export default {
	name: 'IllustLineDiagonalLine',
	data(){
		return {
			time: 0,
			cards: 13
		}
	},
	computed: {
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/media.sass"

.illust-mask-diagonal-line-container
	height: 100%
	width: 100%
	display: flex
	justify-content: center
	align-items: center
	background: yellow


</style>
