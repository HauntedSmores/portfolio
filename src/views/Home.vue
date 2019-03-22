<template lang="html">
	<div id="home" v-if="fields">
		<h2>{{ fields.heading }}</h2>
		<p>{{ fields.body }}</p>
	</div>
</template>

<script>
	import client from '@/contentful'

	export default {
		name: 'Home',
		data() {
			return {
				fields: null
			}
		},
		mounted() {

			client.getEntry("3xJ7BqqM52PKC0VfekZiid")
				.then(entry => {
					this.fields = entry.fields
				})
				.catch(err => console.log(err));
		}
	}
</script>

<style lang="scss">
	@import '~@/assets/scss/variables';

	#home {
		width: 100%;
		height: 500px;
		color: $blue;
	}
</style>
