<template lang="html">
		<div id="work" v-if="entries">
			<h2 class="mb-4">Work</h2>
			<div class="work__entries">
				<div class="work__entry" v-for="entry of entries" :key="entry.sys.id">
					<h4 class="mb-1">{{ entry.fields.name }}</h4>
					<div :ref="entry.sys.id"
            class="work__tile cursor-pointer"
            @mouseenter="tile_enter(entry)"
            @mouseleave="tile_leave(entry)"
            @click="set_active_entry(entry)">
						<img class="work__entry-image" :src="entry.featured_image">
					</div>
					<transition name="slide-fade">
						<WorkDetail v-if="active_entry == entry" :entry="entry" @close="reset"/>
					</transition>
				</div>
			</div>
		</div>
</template>

<script>
import client from "@/contentful";
import WorkDetail from "@/components/WorkDetail";
import anime from "animejs";

export default {
  name: "Work",
  components: { WorkDetail },
  data() {
    return {
      entries: null,
      active_entry: null
    };
  },
  mounted() {
    client
      .getEntries({content_type: 'work'})
      .then(data => {
        this.entries = data.items.map(item => {
          let image = item.fields.featuredImage;
          if (image) item.featured_image = image.fields.file.url;
          return item;
        });
      })
      .catch(err => console.log(err));
  },
  methods: {
    set_active_entry(entry) {
      this.active_entry = entry;
    },
    reset() {
      this.active_entry = null;
    },
    tile_enter(entry) {
      anime.remove(this.$refs[entry.sys.id]);
      anime({
        targets: this.$refs[entry.sys.id],
        scale: 0.95,
        easing: 'easeOutQuad',
        duration: 200
      });
    },
    tile_leave(entry) {
      anime.remove(this.$refs[entry.sys.id]);
      anime({
        targets: this.$refs[entry.sys.id],
        scale: 1,
        duration: 1500
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

#work {
  width: 100%;
  height: 500px;
  color: $purple;
}

.work__entries {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $gutter;
}

.work__tile {
  backface-visibility: hidden;
}

.work__entry-image {
  // height: 10vw;
}

.hljs {
  background: none;
  height: 800px;
  overflow: auto;
}
</style>
