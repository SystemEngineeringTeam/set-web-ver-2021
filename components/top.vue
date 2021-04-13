<template>
    <div>
        <div class="video-container">
  <video src="https://tech-dig.jp/wp/wp-content/uploads/2018/05/test.mp4" autoplay playsinline muted loop></video>
  <div class="video-sidebar">
    <h1>Title</h1>
    <p>This video is sample.</p>
  </div>
</div>
    </div>
</template>

<script>

</script>

<style scoped>
.video-container {
  position: relative;
}

.video-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

video {
  width: 100%;
}
</style>