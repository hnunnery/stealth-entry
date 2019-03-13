<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 class="text-xs-center mb-5">
      <h2 class="display-1 mb-2 my-header font-weight-light primary--text">
        Interview with
        <span class="hidden-xs-only">Stealth Entry</span> CEO
      </h2>
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TZbLM0j2Y_w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="elevation-14"
        ></iframe>
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
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
  left: 5%;
  width: 90%;
  height: 100%;
}
</style>

