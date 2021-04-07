<template>
  <v-footer padless>
    <v-card flat tile width="100%" color="#2F2F2F" class="text-center">
      <v-card-text class="footertitle white--text font-weight-black">
        SystemEngineeringTeam
      </v-card-text>
      <v-card-text
        class="white--text pt-2 footerTitileMin font-weight-light"
        justify="center"
      >
        We're a club in Aichi Institute of Technology
      </v-card-text>
      <v-card-text class="pt-0 pb-0">
        <v-btn v-for="icon in icons" :key="icon" class="pt-2 white--text" icon>
          <v-icon size="28px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="text-no-wrap footerbottom white--text">
        © {{ new Date().getFullYear() }} システム工学研究会. All Rights
        Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-twitter", "mdi-github", "mdi-book-open-blank-variant"],
  }),
};
</script>

<style>
.footertitle {
  font-size: 35px;
}
.footerTitileMin {
  font-size: 14px;
}
.footerbottom {
  font-size: 12px;
}
</style>