<template lang="html">
  <transition>
    <div>
      <p>{{ skill.fields.name }}</p>
      <div class="bar">
        <div class="inner" :style="{width: `${width}%`}"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Skill",
  props: ['skill'],
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    anime({
      targets: this.$data,
      width: this.bar,
      easing: 'easeOutQuint',
      duration: 1500
    })
  },
  computed: {
    bar() {
      return Math.round((this.skill.fields.level / 5) * 100)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

.bar {
  height: 20px;
  border: 2px solid $green;
  margin-bottom: 48px;
}

p {
  margin-bottom: 12px;
}

.inner {
  height: 100%;
  background-color: $green;
}
</style>
