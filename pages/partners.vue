<template>
  <div class="partners">
    <Customers/>
    <PartnersContact/>
  </div>
</template>

<script>
import Customers from "@/components/Customers";
import PartnersContact from "@/components/PartnersContact";

export default {
  name: "partners",
  components: {
    Customers,
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
