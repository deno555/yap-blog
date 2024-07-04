<template>
    <div v-for="blog in $store.state.blogs.filter(blog => blog.id == this.$route.params.id)" :key="blog">
		<div style="display: flex">
			<div style="padding-left: 116px; padding-top: 116px">
				<img :src="`http://localhost:3000/uploads/${blog?.images}`" style="width: 638px; height: 354px; padding-bottom: 30px;">
			</div>
		
			<div style="padding-top: 116px; padding-left: 80px; padding-right: 116px">
				<h1>
					{{ blog.title }}
				</h1>

				<h3>
					{{ blog.blog_content }}
				</h3>
			</div>

		</div>
    </div>
</template>

<script>
export default {
	data(){
		return{
		}
	}
}
</script>