<template>
  <v-container fluid class="media mt-4">
    <v-layout row wrap justify-center>
      <v-flex xs12 md10 lg6 class="px-4">
        <VideoFeed/>
        <Blog/>
      </v-flex>
      <v-flex xs12 md10 lg6 class="px-4">
        <RssFeed/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RssFeed from "@/components/RssFeed";
import VideoFeed from "@/components/VideoFeed";
import Blog from "@/components/Blog";

export default {
  name: "media",
  components: {
    RssFeed,
    VideoFeed,
    Blog
  },
  head() {
    return {
      titleTemplate: "%s Media"
    };
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .container {
    margin-top: 15px !important;
  }
  .media {
    padding: 0px !important;
  }
  .flex {
    padding: 0px !important;
  }
}
</style>
