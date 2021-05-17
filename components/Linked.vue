<template>
  <v-container>
    <v-row class="pt-4">
      <div class="tmp">
        <v-card class="mx-auto" max-width="374">
          <v-icon dark color="black" class="btngithub" size="100px"
            >mdi-github</v-icon
          >
          <v-card-title>Github</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
//@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Roboto:ital@1&display=swap");

<style>
.btntwitter {
  color: white;
}

.btngithub {
  margin: 0;
  position: absolute;
  left: 38%;
  margin-right: 50%;
}
.tmp {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
  transition: 0.3s;
}
.tmp:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
</style>
