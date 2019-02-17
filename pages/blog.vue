<template>
  <div class="blog">
    <BlogComponent/>
  </div>
</template>

<script>
import BlogComponent from "@/components/blog/BlogComponent";
export default {
  name: "blog",
  components: {
    BlogComponent
  },
  metaInfo: {
    titleTemplate: "%s | Blog"
  }
};
</script>

<style lang="scss" scoped>
</style>
