<template lang="html">
		<div id="skills">
			<h2>Skills</h2>
			<Skill v-for="entry of entries" :skill="entry"/>
		</div>
</template>

<script>
import client from "@/contentful";
import Skill from "@/components/Skill"

export default {
	name: "Skills",
	components: {Skill},
	data() {
		return {
			entries: null
		}
	},
  mounted() {
    client
      .getEntries({ content_type: "skill" })
      .then(data => {
        this.entries = data.items
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

#skills {
  width: 100%;
  height: 500px;
  color: $green;
}
</style>
