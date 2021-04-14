<template>
    <div >
        <p class="display-4 text-center mb-10">Question</p>
        <v-card
            class="mx-auto mb-5"
            max-width="60%"
        >
            <v-card-actions class="quetion" @click="show1 = !show1">
                Q 部費はいくらかかりますか？
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show1">
                    <v-divider></v-divider>

                    <v-card-text class="anser">
                        A 年額5,000円
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto mb-5"
            max-width="60%"
        >
            <v-card-actions class="quetion" @click="show2 = !show2">
                Q 場所はどこですか？
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show2">
                    <v-divider></v-divider>

                    <v-card-text class="anser">
                        A ４号館別館301号室
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto mb-5 "
            max-width="60%"
        >
            <v-card-actions class="quetion" @click="show3 = !show3">
                Q 普段何をしてますか？
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show3">
                    <v-divider></v-divider>

                    <v-card-text class="anser">
                        A ゲーム開発、サーバ構築、モデリングなどなど幅広く部員が興味を持ったことをしています。<br/>
                        　特に何かをやらなければいけないということはありません。
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto mb-10"
            max-width="60%"
        >
            <v-card-actions class="quetion" @click="show4 = !show4">
                Q 活動時間は？
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show4">
                    <v-divider></v-divider>
                    <v-card-text class="anser">
                        A 月曜から金曜まで時間に決まりなく活動しています
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }),
  }
</script>

<style scoped>
.quetion {
    font-size: 28px;
}
.anser {
    font-size: 24px;
}
</style>