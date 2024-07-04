<template>
    <Header/>

	<router-view/>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style lang="sass">
	body
		margin: 0
		background-color: #DCDCDD
</style>