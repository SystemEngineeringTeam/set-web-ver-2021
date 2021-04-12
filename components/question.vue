<template>
    <div >
        <p class="display-4 text-center pb-5">Question</p>
        <v-card
            class="mx-auto pd-5"
            max-width="600"
        >
            <v-card-actions>

            <v-spacer></v-spacer>

            <v-btn
                @click="show1 = !show1"
            >
                部費はいくらかかりますか？
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show1">
                    <v-divider></v-divider>

                    <v-card-text>
                        年額5,000円です。
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto pd-5"
            max-width="600"
        >
            <v-card-actions>

            <v-spacer></v-spacer>

            <v-btn
                @click="show2 = !show2"
            >
                場所はどこですか？
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show2">
                    <v-divider></v-divider>

                    <v-card-text>
                        ４号館別館301号室
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto pd-5"
            max-width="600"
        >
            <v-card-actions>

            <v-spacer></v-spacer>

            <v-btn
                @click="show3 = !show3"
            >
                普段何をしてますか？
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show3">
                    <v-divider></v-divider>

                    <v-card-text>
                        好きなことをサークルの仲間と
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        
        活動時間
    </div>
</template>

<script>
  export default {
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
    }),
  }
</script>

<style scoped>

</style>