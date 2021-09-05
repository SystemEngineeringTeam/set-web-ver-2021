<template>
  <v-row class="justify-center justify-space-around">
    <v-col cols="0">
      <h2 class="text-center mb-8 pt-10 mt-10">Question</h2>
      <v-card outlined class="mx-auto mb-5 cardwidth">
        <!-- cardwidthはレスポンシブ対応,widthを占める割合をbreakpointで変えている -->
        <v-card-actions @click="show1 = !show1" style="font-weight: bold">
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" class="pr-1" size="24px">Q</v-icon>
          </v-avatar>
          <div class="ml-5">部費はいくらかかりますか？</div>
          <v-btn class="right box" color="black" fab dark small>
            <v-icon align-end justify="end">
              {{ show1 ? "mdi-minus" : "mdi-plus" }}</v-icon
            >
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show1">
            <v-divider></v-divider>
            <v-card-text class="answer"> 年額5,000円です。 </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card outlined class="mx-auto mb-5 cardwidth">
        <v-card-actions @click="show2 = !show2" style="font-weight: bold">
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" class="pr-1" size="24px">Q</v-icon>
          </v-avatar>
          <div class="ml-5">場所はどこですか？</div>
          <v-btn class="right box" color="black" fab dark small>
            <v-icon align-end justify="end">
              {{ show2 ? "mdi-minus" : "mdi-plus" }}</v-icon
            >
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show2">
            <v-divider></v-divider>

            <v-card-text class="answer"> 4号館別館301号室です。 </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card outlined class="mx-auto mb-5 cardwidth">
        <v-card-actions @click="show3 = !show3" style="font-weight: bold">
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" class="pr-1" size="24px">Q</v-icon>
          </v-avatar>
          <div class="ml-5">普段何をしてますか？</div>
          <v-btn class="right box" color="black" fab dark small>
            <v-icon align-end justify="end">
              {{ show3 ? "mdi-minus" : "mdi-plus" }}</v-icon
            >
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show3">
            <v-divider></v-divider>

            <v-card-text class="answer">
              ゲーム開発、サーバ構築、モデリングなどなど幅広く部員が興味を持ったことをしています。<br />
              特に何かをやらなければいけないということはありません。
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card outlined class="mx-auto mb-10 cardwidth">
        <v-card-actions @click="show4 = !show4" style="font-weight: bold">
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" class="pr-1" size="24px">Q</v-icon>
          </v-avatar>
          <div class="ml-5">活動時間は？</div>
          <v-btn class="right box" color="black" fab dark small>
            <v-icon align-end justify="end">
              {{ show4 ? "mdi-minus" : "mdi-plus" }}</v-icon
            >
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show4">
            <v-divider></v-divider>
            <v-card-text class="answer">
              月曜から金曜まで時間に決まりなく活動しています!
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show1: false, //cardのオンオフ
      show2: false, //プラスマイナスのiconの状態
      show3: false,
      show4: false,
    };
  }, //月曜から金曜まで時間に決まりなく活動しています!
  methods: {},
};

//
</script>

<style scoped>
@media screen and (min-width: 1200px) {
  .right {
    margin: 0 0 0 auto;
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: #2196f3;
  }

  .cardwidth {
    max-width: 60%;
  }
}

@media screen and (max-width: 320px) {
  .right {
    margin: 0 0 0 auto;
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: #2196f3;
  }

  .cardwidth {
    max-width: 100%;
  }
}

@media only screen and (min-width: 321px) and (max-width: 440px) {
  .right {
    margin: 0 0 0 auto;
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: #2196f3;
  }

  .cardwidth {
    max-width: 100%;
  }
}

@media only screen and (min-width: 441px) and (max-width: 509px) {
  .right {
    margin: 0 0 0 auto;
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: #2196f3;
  }

  .cardwidth {
    max-width: 100%;
  }
}

@media only screen and (min-width: 510px) and (max-width: 1199px) {
  .right {
    margin: 0 0 0 auto;
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: #2196f3;
  }

  .cardwidth {
    max-width: 75%;
  }
}
</style>
