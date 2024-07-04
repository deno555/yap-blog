<template>
	<div style="display: flex; justify-content: center">
		<input placeholder="Nadpis" class="title" v-model="blog.title">
	</div>
	<div style="display: flex; justify-content: center;">
		<textarea placeholder="Content" class="blogContent" style="margin-right: 2%" v-model="blog.content"/>
		<div class="addPhoto">
			<p style="display: flex; justify-content: center">Upload thumbnail</p>
			<div>
				<input type="file" @change="onFileChange" />
			</div>
		</div>
	</div>

	<div style="display: flex; justify-content: center">
		<button class="pridajBtn" @click="blogUpload">Add</button>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	import axios from 'axios'

	export default {
		data(){
			return{
				blog: {
					title: '',
					content: '',
					id: 0
				},
				file: null,
				photo: null,
				blogs: null,
				photos: null
			}
		},

		methods: {
			...mapMutations([
				'addBlog'
			]),

			addBlog(){
				this.blog.id = this.$store.state.blogs.length+1
				this.$store.commit('addBlog', this.blog)
				console.log('klik')
				this.$router.push('/')
			},

			onFileChange(e) {
				this.file = e.target.files[0];
			},
	
			async uploadPhoto() {
				const formData = new FormData();
				formData.append('photo', this.file);
				
				try {
					const response = await axios.post('http://localhost:3000/upload', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					});
					this.photo = response.data;
					console.log(this.photo.filename);
				} catch (error) {
					console.error('Error uploading file:', error);
				}
			},
		
			async blogUpload() {
				await this.uploadPhoto();
				try {
					await axios.post('http://localhost:3000/blogs', {
						title: this.blog.title,
						blog_content: this.blog.content,
						images: this.photo.filename,
					});
				} catch (error) {
					console.error('Error creating blog:', error);
				}
				this.$router.push('/')
			},
		},

		mounted(){
			if(localStorage.getItem('heslo') != 'cock') {
				console.log('zle heslo')
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="sass">
	.title
		width: 70%
		height: 5vh
		font-size: 30px
		margin-bottom: 20px
		margin-top: 20px
		border: 1px solid

	.blogContent
		width: 34%
		margin-right: 2%
		font-size: 30px
		height: 65vh
		margin-bottom: 20px
		border: 1px solid
	
	.addPhoto
		width: 34%
		font-size: 30px
		height: 65.5vh
		margin-bottom: 20px
		border: 1px solid

	.pridajBtn
		width: 50%
		height: 5vh
		border: 1px solid
		font-size: 30px
</style>