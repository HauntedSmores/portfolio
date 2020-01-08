<template lang="html">
  <div class="work-detail">
    <div class="work-detail__close">
      <button class="button" @click="close">Close</button>
    </div>
    <div class="work-detail__container">

      <div class="mb-2">
        <h2>{{ entry.fields.name }}</h2>
        <a :href="entry.fields.link">{{ entry.fields.link }}</a>
      </div>

      <div class="work-detail__skills flex mb-6">
        <i :key="skill.name"
          v-for="skill of skills"
          class="work-detail__skill"
          :style="{ backgroundColor: skill.color }"
        >
          {{ skill.name }}
        </i>
      </div>

      <div ref="glide" class="glide">
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
  
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div :key="image.sys.id"
              v-for="image of entry.fields.images"
              class="glide__slide"
            >
              <img :src="image.fields.file.url" alt="">
            </div>
          </div>
        </div>
  
  
        <!-- <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
        </div> -->
  
      </div>
  
      <div v-if="entry.fields.codeExample">
        <h3>Code Example</h3>
        <pre>
          <code class="js">
            {{ entry.fields.codeExample }}
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  // import client from '@/contentful'
  import Glide from '@glidejs/glide'

	export default {
    name: 'WorkDetail',
    props: ['entry'],
		data() {
			return {
			}
		},
		mounted() {
      if (this.entry.fields.codeExample) {
        window.hljs.configure({tabReplace: '  '})
        window.hljs.highlightBlock(this.$el.querySelector('pre code'))
      }

      new Glide(this.$refs['glide']).mount()

    },
    methods: {
      close() {
        this.$emit('close')
      }
    },
    computed: {
      skills() {
        return this.entry.fields.skills.map(skill => {
          switch (skill) {
            case 'Angular':
              return { name: skill, color: '#FFAFD7' }
            case 'Vue.js':
              return { name: skill, color: '#86F4B6' }
            case 'React':
              return { name: skill, color: 'blue' }
            case 'WordPress':
              return { name: skill, color: '#2372a0' }
            default:
              return { name: skill, color: 'white' }
          }
        })
      }
    }
	}
</script>

<style lang="scss">
  @import '~@/assets/scss/variables';
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
  // @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
  
  .work-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: ($gutter * 2);
    background-color: $dark;
    z-index: 1;

    &__container {
      max-width: $large-break;
      margin: auto;
    }
    
    &__close {
      display: flex;
      justify-content: flex-end;
      position: sticky;
      top: 0;
      z-index: 1;
    }

    &__skill {
      // font-size: 12px;
      font-weight: bold;
      color: $dark;
      margin-right: $gutter;
      border-radius: 20px;
      padding: 8px 12px;
    }
  }

  .glide {
    img {
      display: block;
      margin: 0 auto;
    }

    &__track,
    &__arrows {
      margin-bottom: $gutter * 2;
    }

    &__arrow--left {
      margin-right: $gutter;
    }
  }

	.hljs {
		background: none;
		height: 500px;
		overflow: auto;
	}
</style>
