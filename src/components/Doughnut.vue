<template lang="pug">
.card-container
	.card(v-for="number in cards" :style="{transform: doughnutTransform(number,time), background: background(number), zIndex: zIndex(number,time), filter: filter(number,time), color: background(number)}")
		.card-content {{number}}
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
		},
		filter() {
			return function (number, time) {
				number --;
				number = number - time;
				return `blur(${this.cards/2 - Math.abs(this.cards/2 - Math.abs(number % this.cards))}px)`
			}
		}
	},
	methods: {
		tick() {
			setInterval(() => {
				this.time ++;
				},2000);
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
@import "@/assets/preset.sass"


.card-container
	@include default-mordal
	perspective: 2000px

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
		color: #555
		transition: transform .5s ease-in-out
		text-align: center
		border-radius: 15px
		font-size: 40px
		box-shadow: 0 10px 20px #eee
		display: flex
		justify-content: center
		align-items: center
		@media only screen and (max-width: 2000px)
			@include setSize(200px, 280px)

		@media only screen and (max-width: $md)
			@include setSize(100px, 140px)
		

		.card-content
			width: 80%
			height: 85%
			background: white
			border-radius: 10px
			display: flex
			justify-content: center
			align-items: center
			font-family: vdl-logojrblack, sans-serif;
			font-weight: 900;
			font-style: normal;

</style>
