<template>
  <div align="center">
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            large
            height="47px"
            width="200px"
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
            height="47px"
            width="200px"
            elevation="1"
            color="white"
            style="text-transform: none"
          >
            <div class="btngithub iconsize">
              <v-icon dark size="40px">mdi-github</v-icon>
              GitHub
            </div>
          </v-btn></v-col
        >
        <v-col
          ><v-btn
            large
            height="47px"
            width="200px"
            elevation="1"
            color="black"
            style="text-transform: none"
          >
            <div class="btnblog iconsize">
              <v-icon dark size="40px">mdi-book-open-blank-variant</v-icon>
              Blog
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Roboto:ital@1&display=swap");

.btntwitter {
  color: white;
}
.btngithub {
  color: black;
}
.btnblog {
  color: white;
  font-family: "Noto Sans JP", sans-serif;
}

.iconsize {
  font-size: 22px;
}
</style>