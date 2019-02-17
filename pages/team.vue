<template>
  <div class="team">
    <TeamComponent/>
  </div>
</template>

<script>
import TeamComponent from "@/components/TeamComponent";
export default {
  name: "team",
  components: {
    TeamComponent
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Our Team"
  }
};
</script>

<style lang="scss" scoped>
</style>
