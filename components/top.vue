<template>
  <div class="video-container">
    <video src="@/assets/toplevel.mp4" autoplay playsinline muted loop></video>
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
.video-container {
  position: relative;
}

.video-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  color: white;
  font-size: 30px;
}

video {
  width: 100%;
}
</style>