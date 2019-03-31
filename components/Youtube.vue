<template>
  <div>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src="this.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="elevation-12"
      ></iframe>
    </div>
    <h3 class="headline secondary--text mt-3">{{ this.video.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Youtube",
  props: ["video"],
  computed: {
    videoUrl() {
      return "https://www.youtube.com/embed/" + this.video.id;
    }
  }
};
</script>

<style lang="scss" scoped>
/* Video Container Styling */
.video-container {
  position: relative;
  padding-bottom: 51.5%;
  padding-top: 25px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>