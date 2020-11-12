<template lang="pug">
.doughnut-container
    .card-container
        .card(v-for="number in 13" :style="{transform: doughnutTransform(number,time)}") {{number}}
</template>

<script>
export default {
	name: 'Doughnut',
	data(){
		return {
			time: 0
		}
	},
  computed: {
    doughnutTransform() {
			return function (number,time) {
				number --; // set origin 1 to 0
				// number = (number + 1) % 13
				number = number - time;
				let radius = 800;
				let x = radius * Math.sin(number/13*2*Math.PI);
				let y = 180 + radius/10 * Math.cos(number/13*2*Math.PI);
				let z = radius * Math.cos(number/13*2*Math.PI);
				return `translate3d(${x}px, ${y}px, ${z}px) 
						rotateY(${number/13}turn)
						scale(${1 + Math.abs(6.5 - number % 13) / 100})`;
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
.doughnut-container
	height: 95%
	width: 100%
	display: flex
	justify-content: center
	align-items: center

	.card-container
		width: 90%
		height: 90%
		perspective: 2500px

		.card
			width: 100%
			height: 100%
			overflow: hidden
			$w: 300px
			$h: 400px
			position: absolute
			top: calc(50% - #{$h} / 2)
			left: calc(50% - #{$w} / 2)
			width: $w
			height: $h
			background: #666
			line-height: 1000%
			transform-style: preserve-3d
			will-change: transform
			color: white
			transition: transform .5s ease-in-out
			text-align: center
			border-radius: 10px
			font-size: 40px
</style>
