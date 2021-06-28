<template>
  <div class="center">
    <h1 class="text-center mb-8">Team Activities</h1>
    <div class="font">
      <v-row>
        <v-col class="pl-7 images">
          <v-card elevation="6" class="images">
            <img
              class="pc web"
              src="@/assets/work-731198_1920.jpg/"
              alt="パソコン用の画像"
            />
            <img
              class="sp"
              src="https://picsum.photos/id/11/500/300"
              alt="スマートフォン用の画像"
            />
          </v-card>
        </v-col>

        <v-col
          ><center class="pt-15">
            <p style="font-size: 1.75vw; font-weight: bold">Creative</p>
            <div class="px-11">
              <p class="pt-7" style="font-size: 1vw; font-weight: 500">
                栗栄班では・・・ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ。
              </p>
            </div>
          </center>
        </v-col>
      </v-row>

      <v-row class="pt-14">
        <v-col
          ><center class="pt-15">
            <p style="font-size: 1.75vw; font-weight: bold">Infrastructure</p>
            <div class="px-11">
              <p class="pt-7" style="font-size: 1vw; font-weight: 500">
                インフラ班では・・・ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ。
              </p>
            </div>
          </center></v-col
        >
        <v-col class="pr-7 images">
          <v-card elevation="6" class="images">
            <img
              class="pc server"
              src="@/assets/server-1235959_1920.jpg/"
              alt="パソコン用の画像"
            />
            <img
              class="sp"
              src="https://picsum.photos/id/11/500/300"
              alt="スマートフォン用の画像"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.center {
  text-align: center;
}
.center * {
  margin-right: auto;
  margin-left: auto;
}

.pc {
  max-width: 75%;
  display: block !important;
}
.sp {
  max-width: 100%;
  display: none !important;
}
.images {
  height: 90%;
  width: 90%;
}

.server {
}
.font {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.web {
  filter: drop-shadow(2px 2px 2px #aaa);
}

/* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
@media only screen and (max-width: 900px) {
  .pc {
    max-width: 100%;
    height: auto;
    display: none !important;
  }
  .sp {
    max-width: 100%;
    height: auto;
    display: block !important;
  }
}
</style>