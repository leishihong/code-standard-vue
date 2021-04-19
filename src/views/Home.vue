<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld
			msg="Welcome to Your Vue.js App"
			class="ceshi dede dede de"
			style="margin-top: 20px; text-align: center"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			console.log(33)
		}
	}
}
</script>
