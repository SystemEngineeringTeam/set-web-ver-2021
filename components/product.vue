<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      <v-row class="fill-height" align="center" justify="center"> </v-row>
    </v-carousel-item>
  </v-carousel>
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
          text: "ああああああああああああああああああ",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          text: "ああああああああああああああ",
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