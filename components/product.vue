<template>
  <v-row  class="pa-0 ma-5 justify-space-around">
    <v-col cols="8">
      <v-carousel cycle show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
          <v-row class="fill-height" align="center" justify="center">
            <ul>
              <li class="slidetext black">
                <!-- <font class="white-text">{{ slide.text }}</font> -->
              </li>
              <li>
                <v-btn :href="slide.url" depressed class="mt-5" color="#059fff"> MORE INFO </v-btn>
              </li>
            </ul>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#2F2F2F", "#2F2F2F", "#2F2F2F"],
      slides: [
        {
          text: "温度管理システム",
          src: require('@/assets/sysken_ondo.png'),
          url: "https://set1.ie.aitech.ac.jp/koukaten2016"
        },
        {
          text: "栄養管理アプリ",
          src:  require('@/assets/sysken_ryouri.png'),
          url: "https://set1.ie.aitech.ac.jp/koukaten2017"
        },
        {
          text: "時間割作成アプリ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          url: "https://set1.ie.aitech.ac.jp/koukaten2019/"
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
.blacktext{
  color: #000000
}
</style>