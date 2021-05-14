<template>
  <div class="video-container">
    <video src="@/assets/toplevel2.mp4" autoplay playsinline muted loop></video>
    <div class="video-sidebar">
      <h1>System</h1>
      <h1>Engineering</h1>
      <h1>Team</h1>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@media screen and (min-width: 1900px) {
  .video-sidebar {
    font-size: 46px;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1899px) {
  .video-sidebar {
    font-size: 34px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .video-sidebar {
    font-size: 28px;
  }
}
@media screen and (max-width: 320px) {
  .video-sidebar {
    font-size: 8px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 440px) {
  .video-sidebar {
    font-size: 9px;
  }
}
@media only screen and (min-width: 441px) and (max-width: 509px) {
  .video-sidebar {
    font-size: 12px;
  }
}
@media only screen and (min-width: 510px) and (max-width: 750px) {
  .video-sidebar {
    font-size: 17px;
  }
}
@media only screen and (min-width: 751px) and (max-width: 1199px) {
  .video-sidebar {
    font-size: 23px;
  }
}
.video-container {
  position: relative;
}
.video-sidebar {
  position: absolute;
  top: 10%;
  left: 20px;
  color: whitesmoke;
}

video {
  width: 100%;
  height: 80%;
}
</style>