import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home/Home.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About/About.vue')
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: () => import('../views/Portfolio/Portfolio.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact/Contact.vue')
	},
	{
		path: '/:id',
		name: 'blog',
		component: () => import('../views/Blog/Blog.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login/Login.vue')
	},
	{
		path: '/add',
		name: 'add',
		component: () => import('../views/Add-Post/Add-Post.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
