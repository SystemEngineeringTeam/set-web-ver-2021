<template>
  <v-row  class="pa-0 ma-5 justify-space-around">
    <v-col cols="12">
      <h2 class="text-center pb-8">Products</h2>
    </v-col>
    <v-col cols="2">
    </v-col>
    <v-col cols="8">
      <div class="slide-group-wrap">
        <v-sheet class="backcolor">
          <v-slide-group class="slide-group" center-active show-arrows>
            <v-slide-item v-for="(slide,i) in slides" :key="i">
              <v-card v-if="i==selectItem" :href="slide.url" class="select">
                <v-img class="white--text align-end" height="60%" :src="slide.src" />
                <v-card-title>{{ slide.text }}</v-card-title>
              </v-card>
              <v-card v-else class="not-select" >
                <v-img class="white--text align-end" height="50%" :src="slide.src" />
                <v-card-title class="text">{{ slide.text }}</v-card-title>
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
        </v-sheet>
      </div>
    </v-col>
    <v-col cols="2">
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

/* nextボタンの設定 */
.next{
  /* position:absolute; */
  top: 200px;
}
/* prevボタンの設定 */
.prev{
  position:absolute;
  top: 200px;
  left: -100px;
}
/* 重ねるためにrelativeにしている */
.slide-group-wrap {
  position: relative;
}
@media screen and (min-width: 600px) {
  .select {
    margin: 0 20px 0 0;
    width: 180px;
    height: 250px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    /* font-size: 10px; */
    opacity:0.5;
    margin: 60px 30px 0 0;
    width: 100px;
    height: 160px;
  }
  /* nextボタンの設定 */
  .next{
    /* position:absolute; */
    top: 120px;
  }
  /* prevボタンの設定 */
  .prev{
    position:absolute;
    top: 120px;
    left: -100px;
  }
  .text{
    font-size: 16px;
  }
}
@media screen and (min-width: 800px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 200px;
    height: 300px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    /* font-size: 10px; */
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 120px;
    height: 180px;
  }
  /* nextボタンの設定 */
  .next{
    /* position:absolute; */
    top: 150px;
  }
  /* prevボタンの設定 */
  .prev{
    position:absolute;
    top: 150px;
    left: -100px;
  }
  .text{
    font-size: 18px;
  }
}
@media screen and (min-width: 920px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 250px;
    height: 300px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 140px;
    height: 200px;
  }
  /* nextボタンの設定 */
  .next{
    /* position:absolute; */
    top: 150px;
  }
  /* prevボタンの設定 */
  .prev{
    position:absolute;
    top: 150px;
    left: -100px;
  }
}
@media screen and (min-width: 1030px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 300px;
    height: 400px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 150px;
    height: 250px;
  }
}
@media screen and (min-width: 1130px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 350px;
    height: 400px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 160px;
    height: 250px;
  }
}

@media screen and (min-width: 1300px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 400px;
    height: 400px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 180px;
    height: 250px;
  }
}

@media screen and (min-width: 1400px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 450px;
    height: 400px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 200px;
    height: 250px;
  }
}
@media screen and (min-width: 1500px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 500px;
    height: 400px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 200px;
    height: 250px;
  }
}
@media screen and (min-width: 1630px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 500px;
    height: 450px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 250px;
    height: 300px;
  }
}
@media screen and (min-width: 1700px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 550px;
    height: 450px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 250px;
    height: 300px;
  }
}

@media screen and (min-width: 1790px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 600px;
    height: 450px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 250px;
    height: 300px;
  }
}

@media screen and (min-width: 1930px) {
  .select {
    margin: 0 20px 0 0;
    /* width: 30%;
    height: 100%; */
    width: 650px;
    height: 450px;
  }
  /* 選択していない要素を薄くしている */
  .not-select{
    opacity:0.5;
    margin: 60px 20px 0 0;
    width: 270px;
    height: 300px;
  }
}
</style>