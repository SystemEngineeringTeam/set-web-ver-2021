<template>
  <div class="center">
    <h2 class="text-center mt-10 pt-10 mb-6">Team Activities</h2>
    <div>
      <v-container>
        <v-row>
          <v-col
            order="2"
            order-md="1"
            cols="10"
            sm="9"
            md="6"
            lg="6"
            xl="6"
            class="images"
          >
            <v-card elevation="0">
              <img
                class="pc-server-images"
                src="@/assets/webp/work-731198_1920.webp/"
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
                  インフラ班では、シス研に置いてあるサーバーの管理を行い、設計や構築、ネットワークの運用保守などを行います！
                </p>
              </div>
            </center>
          </v-col>
          <v-col cols="10" sm="9" md="6" lg="6" xl="6" class="images">
            <v-card elevation="0">
              <img
                class="pc-server-images"
                src="@/assets/webp/server-1235959_1920.webp/"
                alt="パソコン用の画像"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.center {
  text-align: center;
}
.center * {
  margin-right: auto;
  margin-left: auto;
}

.pc-server-images {
  max-width: 100%;
  filter: drop-shadow(2px 2px 2px #aaa);
}
</style>
