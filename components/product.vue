<template>
  <div class="pa-0 ma-5">
    <v-carousel cycle height="400" show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-row class="fill-height" align="center" justify="center">
          <p class="display-3">{{ slide.text }}</p>
          <p class="display-3">Slide</p>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#2F2F2F", "#2F2F2F", "#2F2F2F"],
      slides: [
        {
          text: "ああああ",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          text: "あwqwwq",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          text: "ああああああああsasa",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      alignments: ["start", "center", "end"],
    };
  },
};
</script>
<style scoped>
.MoreButton {
  margin-top: 40px;
}
</style>