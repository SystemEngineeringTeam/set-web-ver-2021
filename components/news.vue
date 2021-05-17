<template>
    <div>
        <h2 class="mt-12 mb-8 text-center font-weight-bold">news story</h2>
        <v-row class="ma-1 justify-center">
            <v-col cols="3">
                <v-img
                    class="photo"
                    v-bind:src="require('@/assets/images/benkyokai.jpg')"
                ></v-img>
                <v-card class="upcard">
                    <v-card-text class="black--text pt-1 firstNews font-weight-light">
                        <p class="newstopic">勉強会</p>
                        <p class="mt-3">
                            4/28(水)勉強会開催しました。
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-img
                    class="photo"
                    src="https://picsum.photos/510/300?random"
                ></v-img>
                <v-card class="upcard">
                    <v-card-text class="black--text pt-1 secondNews font-weight-light">
                        <p class="newstopic">シス研ハッカソン</p>
                        <p class="mt-3">
                            3/15~3/19の5日間でシス研ハッカソン開催しました
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="ma-1 justify-center">
            <v-col cols="2">
                <v-img
                    class="photo"
                    v-bind:src="require('@/assets/images/takopa.jpg')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card class="rowcard">
                    <v-card-text class="black--text pt-1 thirdNews font-weight-light">
                        <p class="newstopic">タコパ</p>
                        <p class="mt-3">
                            11/6(土)梶研究室を借りて院生と学部生が仲良くタコパしました
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="2">
                <v-img
                    class="photo"
                    v-bind:src="require('@/assets/images/ekiden.jpg')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card class="rowcard">
                    <v-card-text class="black--text pt-1 fourthNews font-weight-light">
                        <p class="newstopic">駅伝</p>
                        <p class="mt-3">
                            12/4(土)駅伝大会参加しました。つらい...帰りたい
                        </p>
                        </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="2">
                <v-img
                    class="photo"
                    v-bind:src="require('@/assets/images/tako.png')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card class="rowcard">
                    <v-card-text class="black--text pt-1 fifthNews font-weight-light">
                    <p class="newstopic">たこ</p>
                    <p class="mt-3">
                        This is a tako
                    </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            image_src: "@/assets/images/benkyokai.jpg"
        }
    }
}
</script>

<style scoped>
.photo:hover{
    filter: opacity(70%);
    cursor: pointer;
}

</style>