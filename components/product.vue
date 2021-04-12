<template>
  <div class="pa-0 ma-5">
    <v-carousel cycle height="400" show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-row class="fill-height" align="center" justify="center">
          <ul>
            <li class="slidetext">{{ slide.text }}</li>
            <li>
              <v-btn depressed class="mt-5" color="#059fff"> MORE INFO </v-btn>
            </li>
          </ul>
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
          text: "こんにちは",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          text: "Hello, World!",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          text: "人力プロセカで検索",
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
.slidetext {
  font-size: 50px;
}
li {
  display: flex;
  justify-content: center;
}
</style>