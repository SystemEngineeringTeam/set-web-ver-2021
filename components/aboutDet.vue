<template>
    <transition name="slide">
      <div v-show="animation">
        <v-row class="justify-center justify-space-around">
          <v-col cols="4">
            <h2 class="font-weight-bold">勉強会</h2>
            <p class="mt-3">
              インフラ知識からWebデザイン、ゲーム制作などの幅広い勉強会をしています。上級生だけでなく下級生もどんどん勉強会を開催しています。
            </p>
            <v-img
              class = "photo"
              :src="require('@/assets/images/benkyokai.jpg')"
              aspect-ratio="2"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <h2 class="font-weight-bold">ハッカソン</h2>
            <p class="mt-3">
              ハッカソンではチーム開発の楽しさや難しさを知ってもらうためシス研で開催する大きなイベントの一つです。
            </p>
            <v-img
              class = "photo"
              :src="require('@/assets/images/unnamed.jpg')"
              aspect-ratio="2"
            ></v-img
          ></v-col>
        </v-row>
        <v-row class="justify-center justify-space-around">
          <v-col cols="4">
            <h2 class="font-weight-bold">イベント</h2>
            <p class="mt-3">
              新入生歓迎やBBQなどのイベントや、
              大学祭では露天を出したり、希望者で駅伝に参加したりなど学校行事にも積極的に参加しています。
            </p>
            <v-img
              class = "photo"
              :src="require('@/assets/images/unnamed.jpg')"
              aspect-ratio="2"
            ></v-img
          ></v-col>
          <v-col cols="4" >
            <h2 class="font-weight-bold">工科展</h2>
            <p class="mt-3">
              大学祭のイベントの一つ。サークルや研究室が作ったものを発表するコンテスト。シス研では学部二年生を中心に活躍してもらいます。
            </p>
            <v-img
              class = "photo"
              :src="require('@/assets/images/unnamed.jpg')"
              aspect-ratio="2"
            ></v-img
          ></v-col>
        </v-row>
      </div>
    </transition>
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
    window.addEventListener('load',this.load)
  },
  mounted() {
    // 要素の幅を取得するメソッド
    this.getTargetWidth()

    window.addEventListener('load',this.load)
    window.addEventListener('scroll', this.handleScroll);
    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener('resize', this.getTargetWidth)
  },
  methods: {
      load(){
        if(this.width < 1800){
          this.animation = true
        }
      },
      handleScroll() {
          this.scrollY = window.scrollY;
          if(this.scrollY >= 10 || this.width > 1600){
              this.animation = true
          }
          // console.log(this.scrollY)
      },
      getTargetWidth () {
          if(this.width > 1500){
              this.animation = true
          }
          this.width = window.innerWidth;
          console.log(this.width);
      }
  }
};
</script>

<style>
.photo{
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6));
  border-radius: 5px
}
h2 {
    font-size:1.5rem;
}

/* .slide-enter { */
  /* 現れた時の最初の状態 */
  /* opacity: 0; */
/* } */
.slide-enter-active {
  /* 現れる時のトランジションの状態 */
  animation: slide-in 2s;
}
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

@keyframes slide-in {
  from{
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}
</style>