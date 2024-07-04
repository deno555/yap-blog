<template>
    moje projekty
    <button @click="cock()">cock</button>
</template>

<script>
export default {
	data(){
		return{
			cislo: 9
		}
	},

    methods: {
        cock(){
            console.log(this.cislo)
        }
    }
}
</script>