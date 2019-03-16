<template>
  <v-layout row wrap justify-center class="mx-3">
    <v-flex xs12 class="text-xs-center">
      <h2 class="mb-1 display-1 font-weight-light my-header primary--text">Stealth Entry Videos</h2>
      <v-divider class="mx-4"></v-divider>
    </v-flex>
    <v-flex xs12 class="text-xs-center mt-3 mb-5">
      <!-- YouTube Interview with Izzy -->
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TZbLM0j2Y_w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="elevation-12"
        ></iframe>
      </div>
    </v-flex>
    <v-flex xs12 class="text-xs-center mt-3 mb-5">
      <!-- CIM Panel Discussion ComSpark -->
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_3csOojYJsE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="elevation-12"
        ></iframe>
      </div>
    </v-flex>
    <v-flex xs12 class="text-xs-center mt-3 mb-5">
      <!-- Cyber Security Training -->
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yp1FU9Z9OMw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="elevation-12"
        ></iframe>
      </div>
    </v-flex>
    <v-flex xs12 class="text-xs-center mt-3 mb-5">
      <!-- Three Steps -->
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ko2GcBN-rdU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="elevation-12"
        ></iframe>
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .layout {
    margin: 0px !important;
    padding: 0px !important;
  }
}
</style>


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

