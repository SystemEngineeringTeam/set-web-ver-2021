<template>
  <div align="center">
    <v-container>
      <v-row class="mt-4 mb-4">
        <v-col>
          <a
            href="https://twitter.com/set_official"
            style="text-decoration: none"
          >
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
            </v-btn>
          </a></v-col
        >
        <v-col>
          <a
            href="https://github.com/SystemEngineeringTeam"
            style="text-decoration: none"
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
            </v-btn></a
          ></v-col
        >
        <v-col>
          <a
            href="https://set1.ie.aitech.ac.jp/blog"
            style="text-decoration: none"
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
            </v-btn></a
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitterURL: "https://github.com/hihumikan",
      githubURL: "https://github.com/hihumikan",
      blogURL: "https://github.com/hihumikan",
    };
  },
};
//@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Roboto:ital@1&display=swap");
</script>

<style>
.btntwitter {
  color: white;
}
.btngithub {
  color: black;
}
.btnblog {
  color: white;
}

.iconsize {
  font-size: 22px;
}
</style>