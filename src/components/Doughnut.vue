<template lang="pug">
.doughnut-container
	.card-container
		.card(v-for="number in cards" :style="{transform: doughnutTransform(number,time), background: background(number), zIndex: zIndex(number,time)}") {{number}}
			.back
</template>

<script>
export default {
	name: 'Doughnut',
	data(){
		return {
			time: 0,
			cards: 13
		}
	},
	computed: {
		doughnutTransform() {
			return function (number,time) {
				number --; // set origin 1 to 0
				number = number - time;
				let radius = 800;
				let x = radius * Math.sin(number/this.cards*2*Math.PI);
				let y = radius/10 * Math.cos(number/this.cards*2*Math.PI) - 80;
				let z = radius * Math.cos(number/this.cards*2*Math.PI);
				return `translate3d(${x}px, ${y}px, ${z}px) 
						rotateY(${number/this.cards}turn)
						scale(${0.9 + Math.abs(this.cards/2 - number % this.cards) / 100 + (1 - Math.ceil(Math.abs(number % this.cards) / this.cards)) / 5})`;
			};
		},
		background() {
			return function (number) {
				return `hsl(${parseInt(360 * number / this.cards)}, 80%, 75%)`
			};
		},
		zIndex() {
			return function (number, time) {
				number --;
				number = number - time;
				return parseInt(Math.abs(this.cards/2 - Math.abs(number % this.cards)))
			};
		}
	},
	methods: {
		tick() {
			setInterval(() => {
				this.time ++;
				},1000);
		}
	},
	mounted() {
		this.tick();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/media.sass"

.doughnut-container
	height: 95%
	width: 100%
	display: flex
	justify-content: center
	align-items: center

	.card-container
		width: 90vw
		height: 90vh
		perspective: 2000px
		overflow: hidden


		.card
			@mixin setSize($w, $h)
				top: calc(50% - #{$h} / 2)
				left: calc(50% - #{$w} / 2)
				width: $w
				height: $h
			position: absolute
			background: #eee
			transform-style: preserve-3d
			will-change: transform
			color: white
			transition: transform .5s ease-in-out
			text-align: center
			border-radius: 10px
			font-size: 40px
			opacity: 0.99
			// backface-visibility: hidden
			@media only screen and (max-width: 2000px)
				@include setSize(250px, 350px)

			@media only screen and (max-width: $md)
				@include setSize(125px, 175px)

			.back
				position: absolute
				top: inherit
				left: inherit
				width: inherit
				height: inherit
				background: #666
				transform: rotateY(180deg);
				backface-visibility: hidden

</style>
