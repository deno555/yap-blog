import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: {
		blogs: []
	},

	getters: {
	},

	mutations: {
		addBlog(state, blog) {
			state.blogs.push(blog)
		},
		setBlogs(state, blogs) {
			state.blogs = blogs
		}
	},

	actions: {
		async fetchBlogs({ commit }) {
			try {
				const response = await axios.get('http://localhost:3000/blogs')
				commit('setBlogs', response.data)
			} catch (error) {
				console.error('Error fetching blogs:', error)
			}
		}
	},

	modules: {
	}
})
