<template>
  <div align="center" class="all">
    <v-container style="position: relative; top: -38px">
      <v-row no-gutters>
        <v-col v-for="link in links" :key="link.title">
          <a :href="link.url" style="text-decoration: none">
            <v-btn
              large
              elevation="1"
              :color="link.color"
              height="2.6rem"
              class="buttonline"
              style="text-transform: none"
            >
              <div :class="link.class" class="iconsize">
                <v-icon dark size="40px">{{ link.mdi }}</v-icon>
                {{ link.title }}
              </div>
            </v-btn>
          </a></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        twitter: {
          title: "Twitter",
          url: "https://twitter.com/set_official",
          mdi: "mdi-twitter",
          color: "#1DA1F2",
          class: "btntwitter",
        },
        github: {
          title: "GitHub",
          url: "https://github.com/SystemEngineeringTeam",
          mdi: "mdi-github",
          color: "white",
          class: "btngithub",
        },
        Blog: {
          title: "Blog",
          url: "https://set1.ie.aitech.ac.jp/blog",
          mdi: "mdi-book-open-blank-variant",
          color: "black",
          class: "btnblog",
        },
      },
    };
  },
};
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

.all {
  font-family: Montserrat;
}

@media screen and (min-width: 830px) {
  .buttonline {
    width: 16em;
  }
}

@media only screen and (min-width: 689px) and (max-width: 829px) {
  .buttonline {
    width: 13em;
  }
}
@media only screen and (min-width: 545px) and (max-width: 688px) {
  .buttonline {
    width: 10em;
  }
}
@media only screen and (min-width: 417px) and (max-width: 544px) {
  .buttonline {
    top: 22px;
    width: 22rem;
    margin-top: 15px;
  }
}
@media only screen and (min-width: 309px) and (max-width: 416px) {
  .buttonline {
    top: 25px;
    width: 16rem;
    margin-top: 10px;
  }
}
@media only screen and (min-width: 20px) and (max-width: 309px) {
  .buttonline {
    top: 30px;
    width: 12rem;
    margin-top: 8px;
  }
}
@media only screen and (min-width: 20px) and (max-width: 241px) {
  .buttonline {
    top: 30px;
    width: 10rem;
    margin-top: 5px;
  }
}

h2 {
    text-align: center;
    font-size: 2.25rem;
}

</style>
