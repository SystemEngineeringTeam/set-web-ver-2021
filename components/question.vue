<template>
  <v-row class="justify-center justify-space-around">
    <v-col cols="0">
      <h2 class="text-center mb-10">Question</h2>
      <v-card class="mx-auto mb-5" max-width="60%">
        <v-card-actions @click="show1 = !show1" style="font-weight: bold">
          <v-icon dark color="black" size="30px">mdi-quora</v-icon>
          部費はいくらかかりますか？<v-btn
            v-show="!hidden"
            color="black"
            fab
            dark
            small
            end
          >
            <v-icon align-end justify="end">mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show1">
            <v-divider></v-divider>

            <v-card-text> A 年額5,000円です。 </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card class="mx-auto mb-5" max-width="60%">
        <v-card-actions @click="show2 = !show2">
          Q 場所はどこですか？
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show2">
            <v-divider></v-divider>

            <v-card-text class="anser"> A ４号館別館301号室です。 </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card class="mx-auto mb-5" max-width="60%">
        <v-card-actions @click="show3 = !show3">
          Q 普段何をしてますか？
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show3">
            <v-divider></v-divider>

            <v-card-text>
              A
              ゲーム開発、サーバ構築、モデリングなどなど幅広く部員が興味を持ったことをしています。<br />
              　特に何かをやらなければいけないということはありません。
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card class="mx-auto mb-10" max-width="60%">
        <v-card-actions @click="show4 = !show4">
          Q 活動時間は？
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show4">
            <v-divider></v-divider>
            <v-card-text>
              A 月曜から金曜まで時間に決まりなく活動しています！
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  }),
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 1.75rem;
}
.plusicon {
}
</style>