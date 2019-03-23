<template lang="html">
  <div class="work-detail">
    <div class="work-detail__close">
      <button class="button" @click="close">Close</button>
    </div>
    <div class="work-detail__container">

      <div class="mb-6">
        <h2>{{ entry.fields.name }}</h2>
        <a :href="entry.fields.link">{{ entry.fields.link }}</a>
      </div>

      <div ref="glide" class="glide">
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
  
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div v-for="image of entry.fields.images" class="glide__slide">
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
  
      <h3>Code Example</h3>
      <pre v-if="entry.fields.codeExample">
        <code class="js">
          {{ entry.fields.codeExample }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  // import client from '@/contentful'
  import Glide from '@glidejs/glide'

	export default {
    name: 'Work',
    props: ['entry'],
		data() {
			return {
				entries: []
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
        console.log('Close')
        this.$emit('close')
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
    // transform: translate(-50%, -50%);
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
  }

  .glide {
    img {
      object-fit: contain;
      width: 100%;
      height: 700px;
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
