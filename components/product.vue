<template>
  <v-row  class="pa-0 ma-5 justify-space-around align-center">
    <v-col cols="12">
      <h2 class="text-center pb-8 pt-10 mt-10">Products</h2>
    </v-col>
    <template v-for="(slide,i) in slides">
      <v-col v-if="i==selectItem" xs="12" sm="12" md="12" lg="6" xl="6" cols="12" :key="i">
        <v-card  :href="slide.url" style="height:500px;">
          <v-img class="white--text align-end" height="300px" :src="slide.src" />
          <v-card-title>{{ slide.text }}</v-card-title>
        </v-card>
      </v-col>
      <v-col v-else xs="12" sm="12" md="12" lg="3" xl="3" cols="12" :key="i">
        <v-card class="not-select" style="margin: 60px 0 0 0; height:300px;">
          <v-img class="white--text align-end" height="180px" :src="slide.src" />
          <v-card-title>{{ slide.text }}</v-card-title>
        </v-card>
      </v-col>
    </template>
    <v-col cols="6" style="text-align: center;">
      <v-btn
        x-large
        dark
        color="indigo"
        @click="prev()"
      >
        <v-icon dark>
          mdi-arrow-left-bold
        </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="6" style="text-align: center;">
      <v-btn
        x-large
        dark
        color="indigo"
        @click="next()"
      >
        <v-icon dark>
          mdi-arrow-right-thick
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          text: "温度管理システム",
          src: require('@/assets/webp/sysken_ondo.webp'),
          url: "https://set1.ie.aitech.ac.jp/koukaten2016"
        },
        {
          text: "栄養管理アプリ",
          src:  require('@/assets/webp/sysken_ryouri.webp'),
          url: "https://set1.ie.aitech.ac.jp/koukaten2017"
        },
        {
          text: "時間割作成アプリ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          url: "https://set1.ie.aitech.ac.jp/koukaten2019/"
        }
      ],
      selectItem: 1,
    };
  },
  created(){
  },
  methods: {
    // slidesのリストを右シフトする
    rightShift(){
      const firstElement = this.slides.shift();
      this.slides.push(firstElement)
    },
    // slidesのリストを左シフトする
    leftShift(){
      const lastElement = this.slides.pop();
      this.slides.unshift(lastElement)
    },
    // nextボタンを押したときにrightShiftを呼び出す関数
    next(){
      this.rightShift()
    },
    // prevボタンを押したときにleftShiftを呼び出す関数
    prev(){
      this.leftShift()
    }
  }
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
/* 選択していない要素を薄くしている */
.not-select{
  opacity:0.5;
}
@media screen and (max-width: 1264px) {
  .not-select{
    display:none;
  }
}

h2 {
    text-align: center;
    font-size: 2.25rem;
}

</style>
