<template>
  <div class="stage"></div>
</template>

<script>
import * as PIXI from "pixi.js";
import anime from "animejs";

export default {
  name: "Pixi",
  data() {
    return {
      app: null,
      colors: ["86F4B6", "90E0F3", "B8B3E9", "D999B9"]
    };
  },
  mounted() {
    this.app = new PIXI.Application({
      transparent: true,
      antialias: true,
      autoResize: true
    });

    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight);
    })
    
    this.$el.appendChild(this.app.view);

    this.$bus.$on('pop', this.pop);
  },
  methods: {
    pop(event) {
      let mouse_x = event.x,
        mouse_y = event.y,
        particles = [],
        spread = 100,
		particle_count = 20;

      for (let i = 0; i < particle_count; i++) {
        let particle = new PIXI.Graphics();
        let rand = anime.random(1, this.colors.length);
        particle.beginFill("0x" + this.colors[rand - 1]);
        particle.drawCircle(0, 0, 4);
        particle.endFill();
        particle.x = mouse_x;
        particle.y = mouse_y;
        particles.push(particle);
        this.app.stage.addChild(particle);
      }

      anime({
        targets: particles,
        x() {
          return anime.random(mouse_x - spread, mouse_x + spread);
        },
        y() {
          return anime.random(mouse_y - spread, mouse_y + spread);
        },
        alpha: { delay: 300, duration: 500, value: 0 },
        easing: "easeOutQuint",
        complete: () => {
          for (let particle of particles) {
            this.app.stage.removeChild(particle);
          }
        }
      });
    }
  }
};
</script>

<style media="screen">
	.stage {
		position: fixed;
		top: 0;
		left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
	}
</style>
