<template>
  <div>
    <v-container>
      <v-row class="ma-1">
        <v-col class="ma-4">
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
        <v-col class="ma-4">
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
      <v-row class="ma-1">
        <v-col class="ma-4">
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
        <v-col class="ma-4">
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
    </v-container>
    <LightBox ref="lightbox" :images="images"></LightBox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src:
            "https://pbs.twimg.com/media/Eyhu7l_U8AMylB1?format=jpg&name=medium",
        },
        { src: "http://example.com/image2.jpg" },
        { src: "http://example.com/image3.jpg" },
      ],
    };
  },
};
</script>

<style>
.photo{
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6));
  border-radius: 5px
}
</style>