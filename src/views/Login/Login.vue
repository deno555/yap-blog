<template>
	<div style="margin-left: 40px;">
		<div style="display: flex; margin-bottom: 20px; margin-top: 20px;">
			<p style="font-size: 30px; margin: auto 0; margin-right: 20px">meno</p>
			<input class="textField" v-model="name">
		</div>
		<div style="display: flex; margin-bottom: 20px">
			<p style="font-size: 30px; margin: auto 0; margin-right: 20px">heslo</p>
			<input class="textField" v-model="pasw">
		</div>
		<button style="margin-left: 85px;" @click="credCheck">enter</button>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				name: '',
				pasw: '',
			}
		},

		methods: {
			credCheck(){
				console.log(this.name, this.pasw)
				if(this.name == 'admin') {
					console.log('meno dobre')
					if(this.pasw == 'cock') {
						console.log('heslo dobre')
						localStorage.setItem('heslo', 'cock')
						this.$router.push('/add')
					} else {
						console.log('heslo zle')
						this.$router.push('/')
					}
				}
				else {
					console.log('meno zle')
					this.$router.push('/')
				}
			}
		},

		mounted(){
			if(localStorage.getItem('heslo') == 'cock') {
				console.log('dobre heslo')
				this.$router.push('/add')
			}
		}
	}

</script>

<style lang="sass">
	.textField
		border: 2px solid black
		width: 200px
		height: 50px
		font-size: 30px
	
	button
		width: 200px
		height: 50px
		font-size: 30px
		border: 2px solid black
</style>