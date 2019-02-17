<template>
  <div class="partners">
    <PartnersContact/>
  </div>
</template>

<script>
import PartnersContact from "@/components/PartnersContact";

export default {
  name: "partners",
  components: {
    PartnersContact
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Partners"
  }
};
</script>

<style lang="scss" scoped>
</style>
