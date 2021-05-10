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
@media screen and (min-width: 1200px) {
  .video-sidebar {
    position: absolute;
    top: 10%;
    left: 20px;
    width: 30%;
    font-size: 90%;
    color: whitesmoke;
  }
}
@media screen and (max-width: 320px) {
}
@media only screen and (min-width: 321px) and (max-width: 440px) {
}
@media only screen and (min-width: 441px) and (max-width: 509px) {
}
@media only screen and (min-width: 510px) and (max-width: 1199px) {
}
.video-sidebar {
  position: absolute;
  top: 10%;
  left: 20px;
  width: 30%;
  font-size: 90%;
  color: whitesmoke;
}
.video-container {
  position: relative;
}

video {
  width: 100%;
  height: 80%;
}
</style>