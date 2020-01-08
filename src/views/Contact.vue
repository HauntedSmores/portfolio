<template lang="html">
	<div id="contact">
		<h2>Contact</h2>
		<div class="contact-item">
			<i class="far fa-envelope"></i>
			<a href="mailto:me@darren-segal.com">Email</a>
		</div>
		<div class="contact-item">
			<i class="fab fa-github"></i>
			<a target="_blank" href="https://github.com/HauntedSmores">GitHub</a>
		</div>
		<div class="contact-item">
			<i class="fab fa-linkedin"></i>
			<a target="_blank" href="https://www.linkedin.com/in/dsegaldev/">LinkedIn</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contact'
	}
</script>

<style lang="scss">
	@import '~@/assets/scss/variables';

	#contact {
		width: 100%;
		height: 500px;
		color: $pink;

		h2 {
			margin-bottom: 24px;
		}

		.contact-item {
			display: flex;
			align-items: center;
			margin-bottom: 12px;
		}

		i {
			font-size: 30px;
			margin-right: 12px;
			color: $pink;
		}

		a {
			font-family: $font_3;
			font-size: 40px;
			line-height: 1;
			text-decoration: none;
		}
	}
</style>
