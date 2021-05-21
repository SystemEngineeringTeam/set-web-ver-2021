<template>
  <div class="aboutHeight">
    <!-- <transition name="slide"> -->
      <!-- <div v-show="animation"> -->
        <v-row class="justify-center">
          <v-col cols="4">
            <v-dialog
              transition="dialog-top-transition"
              max-width="800"
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="ImgBox">
                  <v-img
                    v-bind="attrs"
                    v-on="on"
                    class="photo"
                    :src="require('@/assets/images/hackathon.jpeg')"
                    aspect-ratio="2"
                  ></v-img>
                  <p class="title">勉強会</p>
                </div>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-img
                    :src="require('@/assets/images/hackathon.jpeg')"
                    aspect-ratio="2"
                  ></v-img>
                  <v-card-text>
                    <h2 class="font-weight-bold pt-12 pb-8">勉強会</h2>
                    <p>インフラ知識からWebデザイン、ゲーム制作などの幅広い勉強会をしています。上級生だけでなく下級生もどんどん勉強会を開催しています。</p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >閉じる</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
          <v-col cols="4">
            <div class="ImgBox">
            <v-dialog
              transition="dialog-top-transition"
              max-width="800"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  v-bind="attrs"
                  v-on="on"
                  class = "photo"
                  :src="require('@/assets/images/benkyo.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-img
                    :src="require('@/assets/images/benkyo.jpg')"
                    aspect-ratio="2"
                  ></v-img>
                  <v-card-text>
                    <h2 class="font-weight-bold pt-12 pb-8">ハッカソン</h2>
                    <p>ハッカソンではチーム開発の楽しさや難しさを知ってもらうためシス研で開催する大きなイベントの一つです。</p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >閉じる</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <p class="title">ハッカソン</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <div class="ImgBox">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="800"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  v-bind="attrs"
                  v-on="on"
                  class = "photo"
                  :src="require('@/assets/images/takopa.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-img
                    :src="require('@/assets/images/takopa.jpg')"
                    aspect-ratio="2"
                  ></v-img>
                  <v-card-text>
                    <h2 class="font-weight-bold pt-12 pb-8">イベント</h2>
                    <p>新入生歓迎やBBQなどのイベントや、
              大学祭では露天を出したり、希望者で駅伝に参加したりなど学校行事にも積極的に参加しています。</p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >閉じる</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <p class="title">イベント</p>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="ImgBox">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="800"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  v-bind="attrs"
                  v-on="on"
                  class = "photo"
                  :src="require('@/assets/images/presen.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-img
                    :src="require('@/assets/images/presen.jpg')"
                    aspect-ratio="2"
                  ></v-img>
                  <v-card-text>
                    <h2 class="font-weight-bold pt-12 pb-8">工科展</h2>
                    <p>大学祭のイベントの一つ。サークルや研究室が作ったものを発表するコンテスト。シス研では学部二年生を中心に活躍してもらいます。</p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >閉じる</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <p class="title">工科展</p>
            </div>
          </v-col>
        </v-row>
      <!-- </div> -->
    <!-- </transition> -->
  </div>
  <!-- <LightBox ref="lightbox" :images="images"></LightBox> -->
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      animation: false,
      width: 0,
      images: [
        {
          src:"https://pbs.twimg.com/media/Eyhu7l_U8AMylB1?format=jpg&name=medium",
        },
        { src: "http://example.com/image2.jpg" },
        { src: "http://example.com/image3.jpg" },
      ],
    };
  },
  created(){
    // window.addEventListener('load',this.load)
  },
  mounted() {
    // // 要素の幅を取得するメソッド
    // this.getTargetWidth()

    // window.addEventListener('load',this.load)
    // window.addEventListener('scroll', this.handleScroll);
    // // ユーザーがウィンドウサイズを変更したら実行されるようにする
    // window.addEventListener('resize', this.getTargetWidth)
  },
  methods: {
      // load(){
      //   if(this.width < 1800){
      //     this.animation = true
      //   }
      // },
      // handleScroll() {
      //     this.scrollY = window.scrollY;
      //     if(this.scrollY >= 10 || this.width > 1600){
      //         this.animation = true
      //     }
      // },
      // getTargetWidth () {
      //     if(this.width > 1500){
      //         this.animation = true
      //     }
      //     this.width = window.innerWidth;
      // }
  }
};
</script>

<style scoped>
.photo:hover{
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6));
  border-radius: 5px;
  opacity: 1.0;
  transform: scale(1.2);
  transition-duration: 0.3s;
}
.photo{
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6));
  border-radius: 5px;
  opacity: 0.6;
  transition-duration: 0.3s;
}
.ImgBox{
  /* filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6)); */
  background: #000;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 10px 10px;
}
.title{
  position: absolute;
  top:calc(50% - 25px);
  left:calc(46% - 25px);
  font-size: 50px;
  color: #ffffff;
  font-weight: bold;
}
/* .v-img{
  transition: opacity .4s ease-in-out;
}

.v-img:not(.on-hover) {
  opacity: 0.6;
 } */

h2 {
    font-size:1.5rem;
}

/* .slide-enter { */
  /* 現れた時の最初の状態 */
  /* opacity: 0; */
/* } */
/* .slide-enter-active {
  現れる時のトランジションの状態
  animation: slide-in 2s;
} */
/* .slide-enter-to { */
  /* 現れた時の最後の状態 */
  /* opacity: 1; */
/* } */
/* .slide-leave { */
  /* 消えるときの最初の状態 */
  /* opacity: 1; */
/* } */
/* .slide-leave-active { */
  /* 消えるときのトランジションの状態 */
  /* animation: slide-in 2s reverse; */
/* } */
/* .slide-leave-to { */
  /* 消えるときの最後の状態 */

/* } */

/* @keyframes slide-in {
  from{
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}

/* レスポンシブ対応 */

/* @media screen and (min-width: 1200px) {
  .aboutHeight {
    height:1100px;
  }
}
@media screen and (max-width: 320px) {
  .aboutHeight {
    height:1050px;
  }

}
@media only screen and (min-width: 321px) and (max-width: 440px) {
  .aboutHeight {
    height:800px;
  }
}
@media only screen and (min-width: 441px) and (max-width: 509px) {
  .aboutHeight {
    height:800px;
  }
}
@media only screen and (min-width: 510px) and (max-width: 1199px) {
  .aboutHeight {
    height:900px;
  }
} */
</style>