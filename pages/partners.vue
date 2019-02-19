<template>
  <div class="partners">
    <Customers/>
    <PartnersContact/>
    <Charity/>
  </div>
</template>

<script>
import Customers from "@/components/Customers";
import PartnersContact from "@/components/PartnersContact";
import Charity from "@/components/Charity";

export default {
  name: "partners",
  components: {
    Customers,
    PartnersContact,
    Charity
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
