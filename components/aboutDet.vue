<template>
  <div class="aboutHeight">
    <v-container>
      <v-row class="justify-center">
        <v-col
          v-for="item in about"
          :key="item.topic"
          cols="12"
          sm="5"
          md="5"
          lg="5"
          xl="5"
        >
          <div class="ImgBox">
            <v-dialog transition="dialog-top-transition" max-width="800">
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  v-bind="attrs"
                  v-on="on"
                  class="photo"
                  v-bind:src="item.srcimg"
                  aspect-ratio="2"
                ></v-img>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-img :src="item.srcimg" aspect-ratio="2"></v-img>
                  <v-card-text>
                    <h2 class="font-weight-bold pt-12 pb-8">
                      {{ item.topic }}
                    </h2>
                    <p>{{ item.contents }}</p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">閉じる</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <h2 class="title">{{ item.topic }}</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about: [
        {
          srcimg: require("@/assets/webp/hackathon.webp"),
          topic: "勉強会",
          contents:
            "インフラ知識から機械学習、Web関連などの幅広い勉強会をしています。上級生だけでなく下級生もどんどん勉強会を開催しています。",
          cols: 5,
          daialog_contents:
            "インフラ知識から機械学習、Web関連などの幅広い勉強会をしています。上級生だけでなく下級生もどんどん勉強会を開催しています。",
        },
        {
          srcimg: require("@/assets/webp/benkyo.webp"),
          topic: "ハッカソン",
          contents:
            "ハッカソンはシス研で開催する大きなイベントの一つで、数人のチームを作り開発をします。チーム開発の楽しさや難しさを知りつつ成長できます。",
          cols: 5,
          daialog_contents:
            "ハッカソンはシス研で開催する大きなイベントの一つで、数人のチームを作り開発をします。チーム開発の楽しさや難しさを知りつつ成長できます。",
        },
        {
          srcimg: require("@/assets/webp/takopa.webp"),
          topic: "イベント",
          contents:
            "新入生歓迎会やBBQなどのイベントや、大学祭では模擬店を出したり、希望者で駅伝に参加したりなど、学校行事にも積極的に参加しています。",
          cols: 5,
        },
        {
          srcimg: require("@/assets/webp/presen.webp"),
          topic: "工科展",
          contents:
            "大学祭のイベントの一つ。サークルや研究室が作ったものを発表するコンテスト。シス研では学部二年生を中心に活躍してもらいます。",
          cols: 5,
        },
      ],
    };
  },
};
</script>

<style scoped>
.photo:hover {
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
  border-radius: 5px;
  opacity: 1;
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.photo {
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
  border-radius: 5px;
  opacity: 0.6;
  transition-duration: 0.3s;
}

.ImgBox {
  /* filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.6)); */
  background: #000;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 10px 10px;
}

.title {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(46% - 25px);
  color: #ffffff;
  font-weight: bold;
}
</style>
