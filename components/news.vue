<template>
  <div>
    <h2 class="mt-10 pt-10 mb-8 text-center font-weight-bold">news story</h2>

    <v-row class="justify-center">
      <v-col
        v-for="item in news"
        :key="item.topic"
        :cols="item.cols"
        :sm="item.sm"
        :md="item.md"
        :lg="item.lg"
        :xl="item.xl"
      >
        <template v-if="item.cols != 'auto'">
          <v-img height="150" class="photo" v-bind:src="item.srcimg"></v-img>
          <v-card class="upcard rounded-card" height="15vh">
            <v-card-text class="black--text pt-1 firstNews font-weight-light">
              <p class="newstopic mt-3">{{ item.topic }}</p>
              <p class="mt-3">
                {{ item.contents }}
              </p>
              <p class="newsdate mt-3">{{ item.date }}</p>
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          srcimg: require("@/assets/images/benkyokai.jpg"),
          topic: "勉強会",
          date: "2021/4/28(水)",
          contents:
            "4/28(水)勉強会開催しました。勉強会には１年生の生徒が多く参加してくれて、Pythonを学ぶことができました。",
          cols: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        },
        {
          srcimg: require("@/assets/images/benkyokai.jpg"),
          topic: "シス研ハッカソン",
          date: "2021/3/15~3/19",
          contents: "3/15~3/19の5日間でシス研ハッカソン開催しました",
          cols: 12,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
        },
        {
          cols: "auto",
        },
        {
          srcimg: require("@/assets/images/takopa.jpg"),
          topic: "タコパ",
          date: "2020/11/6(土)",
          contents:
            "11/6(土)梶研究室を借りて院生と学部生が仲良くタコパしました",
          cols: 12,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
        },
        {
          srcimg: require("@/assets/images/ekiden.jpg"),
          topic: "駅伝",
          date: "2020/12/4(土)",
          contents: "12/4(土)駅伝大会参加しました。つらい...帰りたい",
          cols: 12,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
        },
        {
          srcimg: require("@/assets/images/benkyokai.jpg"),
          topic: "たこ",
          date: "xxxx/xx/xx(x)",
          contents: "This is a tako",
          cols: 12,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
        },
        {
          cols: "auto",
        },
      ],
      image_src: "@/assets/images/benkyokai.jpg",
    };
  },
};
</script>

<style scoped>
.photo:hover {
  filter: opacity(70%);
  cursor: pointer;
}
.black--text {
  overflow-y: scroll !important;
}
.jasty {
  display: flex;
  margin: auto;
  justify-content: center;
}
.col-auto {
  visibility: hidden;
}
.rounded-card {
  border-radius: 0px 0px 10px 10px;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none;
}
.v-card__text::-webkit-scrollbar {
  display: none;
}
.newstopic {
  font-weight: bold;
  font-size: 130%;
}

.newsdate {
  font-weight: bold;
  font-size: 90%;
  color: gray;
  text-align: right;
}
</style>