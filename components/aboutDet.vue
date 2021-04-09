<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="font-weight-bold">勉強会</h2>
          <p>
            asaライブラリ「vue-tinybox」をインストールすると、lightbox
            galleryの実装が簡単に可能です。ここでは、nuxt.jsでvue-tinyboxを利用するための手順と簡単な使い方を記述してます。
          </p>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
          ></v-img>
        </v-col>
        <v-col>
          <h2 class="font-weight-bold">ハッカソン</h2>
          <p>
            ライブラリ「vue-tinybox」をインストールすると、lightbox
            galleryの実装が簡単に可能です。ここでは、nuxt.jsでvue-tinyboxを利用するための手順と簡単な使い方を記述してます。
          </p>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
          ></v-img
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="font-weight-bold">イベント</h2>
          <p>
            ライブラリ「vue-tinybox」をインストールすると、lightbox
            galleryの実装が簡単に可能です。ここでは、nuxt.jsでvue-tinyboxを利用するための手順と簡単な使い方を記述してます。
          </p>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
          ></v-img
        ></v-col>
        <v-col>
          <h2 class="font-weight-bold">LT会</h2>
          <p>
            ライブラリ「vue-tinybox」をインストールすると、lightbox
            galleryの実装が簡単に可能です。ここでは、nuxt.jsでvue-tinyboxを利用するための手順と簡単な使い方を記述してます。
          </p>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
          ></v-img
        ></v-col>
      </v-row>
    </v-container>
    <LightBox ref="lightbox" :images="images"></LightBox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src:
            "https://pbs.twimg.com/media/Eyhu7l_U8AMylB1?format=jpg&name=medium",
        },
        { src: "http://example.com/image2.jpg" },
        { src: "http://example.com/image3.jpg" },
      ],
    };
  },
};
</script>

<style>
</style>