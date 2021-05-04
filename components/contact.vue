<template>
  <v-card flat tile width="100%" class="text-center">
    <div class="googleform-wrapper">
      <iframe
        frameborder="0"
        src="https://docs.google.com/forms/d/e/1FAIpQLSclGARLwqkn1fm1Sg0BvcS8HOJsQ8653XEGwWEGx3tvrCfT6g/viewform?embedded=true"
        >読み込んでいます…</iframe
      >
    </div>
  </v-card>
</template>

<script>
</script>

<style scoped>
.googleform-wrapper {
  position: relative;
  width: 100%;
  height: 800px;
  overflow-y: scroll;
}

.googleform-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:whitesmoke;
}
</style>