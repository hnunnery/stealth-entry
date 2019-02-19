<template>
  <div class="partners">
    <PartnersContact/>
    <StrategicPartners/>
    <Customers/>
  </div>
</template>

<script>
import PartnersContact from "@/components/PartnersContact";
import StrategicPartners from "@/components/StrategicPartners";
import Customers from "@/components/Customers";

export default {
  name: "partners",
  components: {
    PartnersContact,
    StrategicPartners,
    Customers
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
