<template>
<div id="app" @click="pop">
    <!-- <h1 class="app__title">
        <span class="text-green">D</span>
        <span class="text-purple">arren </span>
        <span class="text-pink">S</span>egal
    </h1> -->
    <div class="app__container">
        <Links />
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    <Pixi />
</div>
</template>

<script>
import Pixi from "@/components/Pixi";
import Links from "@/components/Links";

export default {
    name: "App",
    components: {
        Pixi,
        Links
    },
	methods: {
		pop($event) {
			this.$bus.$emit('pop', $event);
		}
	}
};
</script>

<style lang="scss">
@import '~@/assets/scss/main';

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: $dark;
    position: relative;
    height: 100vh;
    overflow: auto;
    padding-top: $gutter * 4;
}

.app__title {
    text-align: center;
}

.app__container {
    display: flex;
    max-width: $large-break;
    margin: 0 auto;
    padding-left: 22px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 200ms;
}
.fade-enter {
    transform: translateY(5%);
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
