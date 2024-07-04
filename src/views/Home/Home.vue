<template>
	<div class="content">
		<div v-for="blog in $store.state.blogs" :key="blog" class="content__blog">
			<router-link :to="{ name: 'blog', params: { id: blog.id }}">
				<img class="content__blog__thumbnail" :src="`http://localhost:3000/uploads/${blog?.images}`">
			
				<div class="content__blog__title">
					{{ blog.title }}
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['blogs'])
	},
	
	created() {
		this.$store.dispatch('fetchBlogs')
	}
}

</script>

<style lang="sass">
	.content
		@media only screen and (max-width: 1500px) 
			grid-template-columns: repeat(3, minmax(0, 1fr))

		@media only screen and (max-width: 1100px) 
			grid-template-columns: repeat(2, minmax(0, 1fr))

		@media only screen and (max-width: 850px) 
			grid-template-columns: repeat(1, minmax(0, 1fr))

		display: grid 
		grid-template-columns: repeat(4, minmax(0, 1fr))
		justify-items: center
		padding-top: 115px
		
		&__blog
			padding-bottom: 38px

			&__thumbnail
				width: 334px !important
				height: 184px !important
				background-color: blue
				margin-bottom: 12px

			&__title
				font-size: 24px
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
				width: 320px
			
			a
				color: black
				text-decoration: none
</style>