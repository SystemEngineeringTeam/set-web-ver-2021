<template>
  <div class="center">
    <h2 class="text-center mb-8">Team Activities</h2>
    <div class="font">
      <v-row>
        <v-col
          order="2"
          order-md="1"
          cols="12"
          sm="9"
          md="6"
          lg="5"
          xl="6"
          class="pl-7 images"
        >
          <v-card elevation="0">
            <img
              class="pc web"
              src="@/assets/work-731198_1920.jpg/"
              alt="パソコン用の画像"
            />
          </v-card>
        </v-col>

        <v-col order="1" order-md="2" cols="11" sm="9" md="6" lg="5" xl="6"
          ><center class="pt-15">
            <p style="font-size: 25px; font-weight: bold">Creative</p>
            <div class="px-11">
              <p class="pt-7" style="font-size: 20px; font-weight: 500">
                クリエイティブ班では、CGやWebアプリケーション、Live2DやUnityなど、主にものづくりを中心とした活動を行っています！
              </p>
            </div>
          </center>
        </v-col>
      </v-row>

      <v-row class="pt-14">
        <v-col cols="12" sm="9" md="6" lg="5" xl="6"
          ><center class="pt-15">
            <p style="font-size: 25px; font-weight: bold">Infrastructure</p>
            <div class="px-11">
              <p class="pt-7" style="font-size: 18px; font-weight: 500">
                インフラ班では、主に、シス件に置いてあるサーバーの管理を行い、設計や構築、保守点検などを行います！
              </p>
            </div>
          </center></v-col
        >
        <v-col cols="12" sm="9" md="6" lg="5" xl="6" class="pr-7 images">
          <v-card elevation="0">
            <img
              class="pc server web"
              src="@/assets/server-1235959_1920.jpg/"
              alt="パソコン用の画像"
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
h2 {
  font-size: 1.75rem;
}
.center {
  text-align: center;
}
.center * {
  margin-right: auto;
  margin-left: auto;
}

.pc {
  max-width: 100%;
}

.font {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.web {
  filter: drop-shadow(2px 2px 2px #aaa);
}
</style>