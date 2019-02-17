<template>
  <div class="partners">
    <PartnersComponent/>
    <Contracts/>
  </div>
</template>

<script>
import PartnersComponent from "@/components/PartnersComponent";
import Contracts from "@/components/Contracts";

export default {
  name: "partners",
  components: {
    PartnersComponent,
    Contracts
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
