<template>
<div>
    <br><br>
    <h1>news story</h1>
    <v-container>
        <v-row class="ma-1">
        <v-col class="ma-4">
        <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
            height="125px"
            width="525px"
        ></v-img>
        <v-card>
            <h3 class="font-weight-bold">勉強会</h3>
            <p class="mt-3">
            勉強してまーすwwwwww
            </p>
        </v-card>
        </v-col>

        <v-col class="ma-4">
        <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
        ></v-img>
        <v-card>
            <h3 class="font-weight-bold">ハッカソン</h3>
            <p class="mt-3">
            ハッカソン開催しました
            </p>
        </v-card>
        </v-col>
        </v-row>

        <v-row class="ma-2">
        <v-col class="ma-4">
        <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
        ></v-img
        >
        <v-card>
        <h3 class="font-weight-bold">BBQ</h3>
        <p class="mt-3">
            炎上炎上wwwwww
        </p>
        </v-card>
        </v-col>

        <v-col class="ma-4">
        <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
        ></v-img
        >
        <v-card>
        <h3 class="font-weight-bold">駅伝</h3>
        <p class="mt-3">
            つらい...帰りたい
        </p>
        </v-card>
        </v-col>

        <v-col class="ma-4">
        <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
        ></v-img
        >
        <v-card>
        <h3 class="font-weight-bold">たこ</h3>
        <p class="mt-3">
            たこたこたこたこ
        </p>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
    <LightBox ref="lightbox" :images="images"></LightBox>
    </div>
</template>

<script>

</script>

<style scoped>
h1 {
    text-align:center;
}

</style>