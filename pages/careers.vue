<template>
  <div class="careers">
    <Jobs/>
  </div>
</template>

<script>
import Jobs from "@/components/Jobs";

export default {
  name: "careers",
  components: {
    Jobs
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Careers"
  }
};
</script>

<style lang="scss" scoped>
.careers {
  margin: 0;
  padding: 0;
}
</style>
