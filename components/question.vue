<template>
  <v-row class="justify-center justify-space-around">
    <v-col cols="0">
      <h2 class="text-center mb-8">Question</h2>
      <v-card outlined class="mx-auto mb-5 cardwidth">
        <!-- cardwidthはレスポンシブ対応,widthを占める割合をbreakpointで変えている -->
        <v-card-actions
          @click="
            show1 = !show1;
            toggle1();
          "
          style="font-weight: bold"
        >
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" size="30px">mdi-quora</v-icon>
          </v-avatar>
          <div class="ml-5">部費はいくらかかりますか？</div>
          <v-btn
            v-show="!hidden"
            class="right box"
            color="black"
            fab
            dark
            small
          >
            <v-icon align-end justify="end">
              {{ btnshow1 ? "mdi-minus" : "mdi-plus" }}</v-icon
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
        <v-card-actions
          @click="
            show2 = !show2;
            toggle2();
          "
          style="font-weight: bold"
        >
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" size="30px">mdi-quora</v-icon>
          </v-avatar>
          <div class="ml-5">場所はどこですか？</div>
          <v-btn
            v-show="!hidden"
            class="right box"
            color="black"
            fab
            dark
            small
          >
            <v-icon align-end justify="end">
              {{ btnshow2 ? "mdi-minus" : "mdi-plus" }}</v-icon
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
        <v-card-actions
          @click="
            show3 = !show3;
            toggle3();
          "
          style="font-weight: bold"
        >
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" size="30px">mdi-quora</v-icon>
          </v-avatar>
          <div class="ml-5">普段何をしてますか？</div>
          <v-btn
            v-show="!hidden"
            class="right box"
            color="black"
            fab
            dark
            small
          >
            <v-icon align-end justify="end">
              {{ btnshow3 ? "mdi-minus" : "mdi-plus" }}</v-icon
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
        <v-card-actions
          @click="
            show4 = !show4;
            toggle4();
          "
          style="font-weight: bold"
        >
          <v-avatar slot="icon" color="black accent-4" size="40">
            <v-icon dark color="white" size="30px">mdi-quora</v-icon>
          </v-avatar>
          <div class="ml-5">活動時間は？</div>
          <v-btn
            v-show="!hidden"
            class="right box"
            color="black"
            fab
            dark
            small
          >
            <v-icon align-end justify="end">
              {{ btnshow4 ? "mdi-minus" : "mdi-plus" }}</v-icon
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
      show2: false,
      show3: false,
      show4: false,
      btnshow1: false, //プラスマイナスのiconの状態
      btnshow2: false,
      btnshow3: false,
      btnshow4: false,
    };
  }, //月曜から金曜まで時間に決まりなく活動しています!
  methods: {
    toggle1() {
      this.btnshow1 = !this.btnshow1;
    },
    toggle2() {
      this.btnshow2 = !this.btnshow2;
    },
    toggle3() {
      this.btnshow3 = !this.btnshow3;
    },
    toggle4() {
      this.btnshow4 = !this.btnshow4;
    },
  },
};

//
</script>

<style scoped>
.answer {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

@media screen and (min-width: 1200px) {
  h2 {
    text-align: center;
    font-size: 1.75rem;
  }

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
  h2 {
    text-align: center;
    font-size: 1.75rem;
  }

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
  h2 {
    text-align: center;
    font-size: 1.75rem;
  }

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
  h2 {
    text-align: center;
    font-size: 1.75rem;
  }

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
  h2 {
    text-align: center;
    font-size: 1.75rem;
  }

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
