<template lang="html">
	<div class="nav">
		<router-link v-for="link of links"
			:key="link.name"
			:to="link.path"
			:class="['nav__link', 'h4', link.class]">
			{{ link.name }}
		</router-link>
		<div class="nav__active-bar" :class="$route.name"></div>
	</div>
</template>

<script>
export default {
	name: 'Links',
	data() {
		return {
			links: [{
					path: '/',
					class: 'blue',
					name: 'Home'
				},
				{
					path: '/skills',
					class: 'green',
					name: 'Skills'
				},
				{
					path: '/work',
					class: 'purple',
					name: 'Work'
				},
				{
					path: '/contact',
					class: 'pink',
					name: 'Contact'
				}
			]
		};
	}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variables';
@import '~@/assets/scss/tailwind';

.nav {
  position: relative;
	display: flex;
	flex-direction: column;
	margin-right: $gutter * 4;
}

.nav__link {
	width: 120px;
	transition: background-color 300ms;
	text-align: center;
	text-decoration: none;
  cursor: pointer;
	border-radius: 4px;
	background-color: lighten($dark, 6%);
	@apply .mb-4;
	@apply .p-2;
	@apply .shadow-md;

	@each $color, $value in $colors {
		&.#{$color} {
			color: #{$value};

			&:hover {
				background-color: #{$value};
			}
		}
	}

	&:hover {
        color: $dark;
    }
}

.nav__active-bar {
	position: absolute;
	top: 0;
	left: $gutter * -1;
	width: 4px;
	height: 54px;
	border-radius: 2px;
	background-color: white;
	transition: top 300ms;

	@each $name,
		$color in (home, $blue),
		(skills, $green),
		(work, $purple),
		(contact, $pink) {
		&.#{$name} {
			background-color: #{$color};

			@if $name == skills {
				top: 78px;
			} @else if $name == work {
				top: 156px;
			} @else if $name == contact {
				top: 234px;
			}
		}
	}
}
</style>
