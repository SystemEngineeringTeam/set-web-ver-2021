<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
* {
  font-family: Montserrat;
}
.slide-group > .v-slide-group__next {
  display: none;
}
.slide-group > .v-slide-group__prev {
  display: none;
}
</style>