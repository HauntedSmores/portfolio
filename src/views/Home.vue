<template lang="html">
	<div id="home" v-if="fields">
		<div class="img-wrap">
			<img :src="fields.picture.fields.file.url" />
		</div>
		<div>
			<h1>{{ fields.heading }}</h1>
			<p>{{ fields.body }}</p>
		</div>
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
		display: flex;
		align-items: flex-start;
		width: 100%;
		height: 500px;

		h1 {
			font-family: $font_3;
			color: $blue;
		}

		.img-wrap {
			flex-shrink: 0;
			padding: 12px;
			background: linear-gradient(81deg, rgba(134,244,182,1) 0%, rgba(144,224,243,1) 29%, rgba(255,175,215,1) 69%, rgba(184,179,233,1) 98%);
			border-radius: 50%;
			margin-right: 48px;
		}

		img {
			display: block;
			width: 200px;
			height: 200px;
			border-radius: 50%;
			object-fit: cover;
		}
	}
</style>
