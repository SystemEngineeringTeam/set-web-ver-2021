<template>
  <div align="center">
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            large
            height="55px"
            width="230px"
            elevation="1"
            color="#1DA1F2"
            style="text-transform: none"
          >
            <div class="btntwitter iconsize">
              <v-icon dark size="42px">mdi-twitter</v-icon>
              Twitter
            </div>
          </v-btn></v-col
        >
        <v-col
          ><v-btn
            large
            height="55px"
            width="230px"
            elevation="1"
            color="white"
            style="text-transform: none"
          >
            <div class="btngit iconsize">
              <v-icon dark size="40px">mdi-github</v-icon>
              ㅤGitHub
            </div>
          </v-btn></v-col
        >
        <v-col
          ><v-btn
            large
            height="55px"
            width="230px"
            elevation="1"
            color="white"
            style="text-transform: none"
          >
            <div class="btngit iconsize">
              <v-icon dark size="40px">mdi-github</v-icon>
              ㅤBlog
            </div>
          </v-btn></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");

.btntwitter {
  float: right;
  color: white;
  font-family: "Space Grotesk", "Sawarabi Mincho", serif;
}
.iconsize {
  font-size: 22px;
}
</style>