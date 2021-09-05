<template>
  <div class="video-container">
    <!--
    <video src="@/assets/toplevel2.mp4" autoplay playsinline muted loop></video>
    -->
    <div class="filter">
      <img src="@/assets/webp/topimage.webp" class="filter-img" />
    </div>
    <div class="video-sidebar font-weight-bold">
      <h1>System Engineering Team</h1>
      <p class="comment" style="text-align: center">
        We're a club in Aichi Institute of Technology
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-container {
  position: relative;
}
.video-sidebar {
  position: absolute;
  top: 30%;
  left: 17%;
  color: white;
  margin: auto;
  opacity: 1;
  font-weight: 900;
  font-size: 2.375vw;
  font-family: Montserrat;
}
.comment {
  font-weight: lighter;
  color: whitesmoke;
  opacity: 0.9;
  margin-top: 12px;
  font-size: 2vw;
}

.filter {
  background: #000;
}

.filter-img {
  display: block;
  opacity: 0.32;
  width: 100%;
}
</style>
