<template>
  <div class="video-container">
    <video src="@/assets/toplevel2.mp4" autoplay playsinline muted loop></video>
    <div class="video-sidebar">
      <div>
        <h1>System</h1>
        <h1>Engineering</h1>
        <h1>Team</h1>
      </div>
      <v-btn class="btn" depressed color="#4bc0fa"> MORE INFO </v-btn>
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
  top: 6%;
  left: 20px;
  width: 30%;
  font-size: x-large;
  color: whitesmoke;
}

.btn {
  top: 3px;
  color: white;
}

video {
  width: 100%;
  height: 80%;
}
</style>