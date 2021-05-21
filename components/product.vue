<template>
  <v-row  class="pa-0 ma-5 justify-space-around">
    <v-col cols="10">
      <v-sheet class="backcolor">
        <v-slide-group v-model="model"  show-arrows>
          <v-slide-item v-for="(slide,i) in slides" :key="i" v-slot="{  toggle }">
            <v-card v-if="i==model" @click="toggle" style="margin: 0 20px 0 0; width: 320px; height:400px;">
              <v-img class="white--text align-end" height="240px" :src="slide.src" />
              <v-card-title>{{ slide.text }}</v-card-title>
              <v-card-text class="text--primary">
                <v-btn :href="slide.url" depressed class="mt-5"  color="#059fff"> MORE INFO </v-btn>
              </v-card-text>
            </v-card>
            <v-card v-else @click="toggle" style="margin: 0 20px 0 0; width: 320px; height:300px;">
              <v-img class="white--text align-end" height="120px" :src="slide.src" />
              <v-card-title>{{ slide.text }}</v-card-title>
              <v-card-text class="text--primary">
                <v-btn :href="slide.url" depressed class="mt-5"  color="#059fff"> MORE INFO </v-btn>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>
      <!-- <v-carousel cycle show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
          <v-row class="fill-height" align="center" justify="center">
            <ul>
              <li class="slidetext black">
              </li>
              <li>
                <v-btn :href="slide.url" depressed class="mt-5" color="#059fff"> MORE INFO </v-btn>
              </li>
            </ul>
          </v-row>
        </v-carousel-item>
      </v-carousel> -->

<!-- <font class="white-text">{{ slide.text }}</font> -->
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
        {
          text: "時間割作成アプリ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          url: "https://set1.ie.aitech.ac.jp/koukaten2019/"
        },
        {
          text: "時間割作成アプリ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          url: "https://set1.ie.aitech.ac.jp/koukaten2019/"
        },
        {
          text: "時間割作成アプリ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          url: "https://set1.ie.aitech.ac.jp/koukaten2019/"
        }
      ],
      alignments: ["start", "center", "end"],
      model: null,
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
.backcolor{
  background:whitesmoke;
}
</style>