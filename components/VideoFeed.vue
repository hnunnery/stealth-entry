<template>
  <v-layout row wrap justify-center class="mx-3">
    <v-flex xs12 class="text-xs-center">
      <h2 class="mb-1 display-1 font-weight-light my-header primary--text">Stealth Entry Videos</h2>
      <v-divider class="mx-4 mb-3"></v-divider>
    </v-flex>
    <v-layout row wrap justify-center>
      <v-flex xs12 v-for="(video, index) in videos" :key="index" class="text-xs-center mb-5">
        <Youtube :video="video"/>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import Youtube from "@/components/Youtube";

export default {
  components: {
    Youtube
  },
  data() {
    return {
      videos: [
        {
          id: "TZbLM0j2Y_w",
          title: "Interview with CEO, Israel Arroyo Jr"
        },
        {
          id: "_3csOojYJsE",
          title: "CIM Panel Discussion - ComSpark"
        },
        {
          id: "Yp1FU9Z9OMw",
          title: "Cyber Security Training"
        },
        {
          id: "Ko2GcBN-rdU",
          title: "We can help in Three Steps"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .layout {
    margin: 0px !important;
    padding: 0px !important;
  }
}
</style>

