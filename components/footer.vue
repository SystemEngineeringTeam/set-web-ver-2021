<template>
  <v-footer padless>
    <v-card flat tile width="100%" color="#2F2F2F" class="text-center">
      <v-card-text class="mt-3 footertitle white--text font-weight-black">
        System Engineering Team
      </v-card-text>
      <v-card-text class="white--text pt-1 footerTitileMin font-weight-light">
        We're a club in Aichi Institute of Technology
      </v-card-text>
      <v-card-text class="pt-0 pb-0">
        <v-btn
          v-for="item in items"
          :key="item.url"
          class="pt-0 mx-6 white--text iconbutton"
          icon
          :href="item.url"
        >
          <v-icon size="28px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="text-no-wrap footerbottom pt-4 pb-0 white--text">
        © {{ new Date().getFullYear() }} システム工学研究会. All Rights
        Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-twitter",
          url: "https://twitter.com/set_official",
        },
        {
          icon: "mdi-github",
          url: "https://github.com/SystemEngineeringTeam",
        },
        {
          icon: "mdi-book-open-blank-variant",
          url: "https://set1.ie.aitech.ac.jp/blog/",
        },
      ],
    };
  },
};
//["mdi-twitter", "mdi-github", "mdi-book-open-blank-variant"],
</script>

<style>
@media screen and (min-width: 1200px) {
  .footertitle {
    font-size: 35px;
  }
  .footerTitileMin {
    font-size: 15px;
  }
  .footerbottom {
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
  .footertitle {
    font-size: 20px;
  }
  .footerTitileMin {
    font-size: 13px;
  }
  .footerbottom {
    font-size: 8px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 440px) {
  .footertitle {
    font-size: 25px;
  }
  .footerTitileMin {
    font-size: 12px;
  }
  .footerbottom {
    font-size: 12px;
  }
}
@media only screen and (min-width: 441px) and (max-width: 509px) {
  .footertitle {
    font-size: 30px;
  }
  .footerTitileMin {
    font-size: 13px;
  }
  .footerbottom {
    font-size: 12px;
  }
}
@media only screen and (min-width: 510px) and (max-width: 1199px) {
  .footertitle {
    font-size: 35px;
  }
  .footerTitileMin {
    font-size: 15px;
  }
  .footerbottom {
    font-size: 12px;
  }
}
</style>