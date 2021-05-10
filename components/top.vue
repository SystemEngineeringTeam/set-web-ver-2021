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
@media screen and (min-width: 1400px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 34px;
    color: whitesmoke;
  }
}
@media screen and (min-width: 1200px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 28px;
    color: whitesmoke;
  }
}
@media screen and (max-width: 320px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 8px;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 321px) and (max-width: 440px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 9px;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 441px) and (max-width: 509px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 12px;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 510px) and (max-width: 750px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 17px;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 751px) and (max-width: 1199px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 23px;
    color: whitesmoke;
  }
}
.video-container {
  position: relative;
}

video {
  width: 100%;
  height: 80%;
}
</style>