<template lang="html">
  <div>
    <p>{{ data.fields.name }}</p>
    <div class="bar">
      <div class="inner" :style="{width: bar}"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Skill",
  props: ['data'],
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    console.log(this.bar)
    anime({
      targets: {width: this.width},
      width: [0,this.bar],
      duration: 2000,
      delay: 1000
    })
  },
  computed: {
    bar() {
      return Math.round((this.data.fields.level / 5) * 100) + "%"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

.bar {
  height: 50px;
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
