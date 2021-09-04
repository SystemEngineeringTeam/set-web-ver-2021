<template>
  <v-row  class="pa-0 ma-5 justify-space-around">
    <v-col cols="10">
      <h2 class="text-center pb-8 pt-10 mt-10">Products</h2>
      <div class="slide-group-wrap">
        <v-sheet class="backcolor">
          <v-slide-group class="slide-group" center-active show-arrows>
            <v-slide-item v-for="(slide,i) in slides" :key="i">
              <v-card v-if="i==selectItem" :href="slide.url" style="margin: 0 20px 0 0; width: 850px; height:500px;">
                <v-img class="white--text align-end" height="300px" :src="slide.src" />
                <v-card-title>{{ slide.text }}</v-card-title>
              </v-card>
              <v-card v-else class="not-select" style="margin: 60px 20px 0 0; width: 320px; height:300px;">
                <v-img class="white--text align-end" height="120px" :src="slide.src" />
                <v-card-title>{{ slide.text }}</v-card-title>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-btn
            class="prev"
            fab
            dark
            large
            color="indigo"
            @click="prev()"
          >
            <v-icon dark>
              mdi-arrow-left-bold
            </v-icon>
          </v-btn>
          <v-btn
            class="next"
            fab
            dark
            large
            color="indigo"
            @click="next()"
          >
            <v-icon dark>
              mdi-arrow-right-thick
            </v-icon>
          </v-btn>
        </v-sheet>
      </div>
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
        }
      ],
      selectItem: 1,
    };
  },
  created(){
    // setInterval(() => {
    //   this.next()
    // }, 5000);
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
/* 重ねるためにrelativeにしている */
.slide-group-wrap {
  position: relative;
}
/* nextボタンの設定 */
.next{
  position:absolute;
  /* bottom: 10px; */
  top: 200px;
  right: 300px
}
/* prevボタンの設定 */
.prev{
  position:absolute;
  /* bottom: 10px; */
  top: 200px;
  left: 300px
}
/* 選択していない要素を薄くしている */
.not-select{
  opacity:0.5;
}
</style>