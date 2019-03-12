<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 md10 lg6 class="px-2">
        <VideoFeed/>
        <!-- <BlogComponent/> -->
      </v-flex>
      <v-flex xs12 md10 lg6 class="px-2">
        <RssFeed/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RssFeed from "@/components/RssFeed";
import VideoFeed from "@/components/VideoFeed";
// import BlogComponent from "@/components/BlogComponent";

export default {
  name: "media",
  components: {
    RssFeed,
    VideoFeed
    // BlogComponent
  },
  metaInfo: {
    title: "Stealth Entry - Media"
  }
};
</script>

<style lang="scss" scoped>
</style>
