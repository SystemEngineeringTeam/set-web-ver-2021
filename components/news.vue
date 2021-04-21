<template>
<div>
    <br><br>
    <h1>news story</h1>
    <v-container>
        <v-row class="ma-1">
            <v-col cols="8">
                <v-img
                    v-bind:src="require('@/assets/images/benkyokai.jpg')"
                    height="300"
                ></v-img>
                <v-card>
                    <h3 class="font-weight-bold">勉強会</h3>
                    <p class="mt-3">
                        4/28(水)勉強会開催しました。
                    </p>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-img
                    src="https://picsum.photos/510/300?random"
                    height="300"
                ></v-img>
                <v-card>
                    <h3 class="font-weight-bold">ハッカソン</h3>
                    <p class="mt-3">
                        3/15~3/19の5日間でシス研ハッカソン開催しました
                    </p>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="ma-1">
            <v-col cols="4">
                <v-img
                    v-bind:src="require('@/assets/images/takopa.jpg')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card>
                    <h3 class="font-weight-bold">タコパ</h3>
                    <p class="mt-3">
                        11/6(土)梶研究室を借りて院生と学部生が仲良くタコパしました
                    </p>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-img
                    v-bind:src="require('@/assets/images/ekiden.jpg')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card>
                    <h3 class="font-weight-bold">駅伝</h3>
                    <p class="mt-3">
                        12/4(土)駅伝大会参加しました
                        <br>つらい...帰りたい
                    </p>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-img
                    v-bind:src="require('@/assets/images/tako.png')"
                    aspect-ratio="2"
                ></v-img
                >
                <v-card>
                    <h3 class="font-weight-bold">たこ</h3>
                    <p class="mt-3">
                        This is a tako
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
h1 {
    text-align:center;
}

</style>