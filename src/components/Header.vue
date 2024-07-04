<template>
	<div class="header">
		<img @click="counter++" src="../assets/Logo.png">

		<div class="header__links">
			<router-link :to="{name: 'home'}">
				<p>Domov</p>
			</router-link>

			<router-link :to="{name: 'about'}">
				<p>O mne</p>
			</router-link>

			<router-link :to="{name: 'portfolio'}">
				<p>Moje projekty</p>
			</router-link>
			
			<router-link :to="{name: 'contact'}">
				<p>Kontakt</p>
			</router-link>
		</div>

		<img class="icon" @click="menu = !menu" width="50px" src="@/assets/menu.svg"/>
	</div>
	<div v-if="menu" class="menu">
		<!-- <div> -->
			<router-link :to="{name: 'home'}">
				<p>Domov</p>
			</router-link>

			<router-link :to="{name: 'about'}">
				<p>O mne</p>
			</router-link>

			<router-link :to="{name: 'portfolio'}">
				<p>Moje projekty</p>
			</router-link>
			
			<router-link :to="{name: 'contact'}">
				<p>Kontakt</p>
			</router-link>
		<!-- </div> -->
	</div>
</template>

<script>
	export default {
		data(){
			return{
				counter: 0,
				menu: false
			}
		},

		watch: {
			counter(){
				if(this.counter == 5) {
					this.$router.push('/login')
					this.counter = 0
					console.log(this.$router.currentRoute.value.fullPath)
				}
			},

			
		}
	}

</script>

<style lang="sass">

	.header
		background-color: #46494C
		height: 100px
		display: flex
		position: sticky
		top: 0px

		p
			@media only screen and (max-width: 850px) 
				display: none
				
				
			color: white
			font-size: 30px

		.icon
			@media only screen and (max-width: 850px) 
				display: block
			
			display: none
			padding-right: 50px

		&__links
			display: flex
			justify-content: space-around
			width: 100%

		a
			margin: auto 0
			text-decoration-color: #46494C

	.router-link-active
		text-decoration-color: #1985A1 !important
		text-underline-offset: 10px

	.menu
		background-color: black
		background-color: rgb(0,0,0, 0.5)
		width: 100% 
		height: 100% 
		z-index: 2 
		position: fixed

		p		
			color: white
			font-size: 50px
			display: flex
			justify-content: center

		a
			margin: auto 0
			text-decoration-color: rgb(0, 0, 0, 0)
</style>