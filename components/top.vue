<template>
  <div>
    <div class="video-container">
      <video
        src="@/static/toplevel.mp4"
        autoplay
        playsinline
        muted
        loop
      ></video>
      <div class="video-sidebar">
        <div class="">
          <div>System</div>
          <div>Engineering</div>
          <div>Team</div>
        </div>
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
  width: 40%;
  height: 100%;
}

video {
  width: 100%;
}
</style>