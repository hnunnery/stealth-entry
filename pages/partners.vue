<template>
  <div class="partners">
    <PartnersContact/>
    <StrategicPartners/>
    <EmergingTechnology/>
    <Customers/>
    <Volunteer/>
  </div>
</template>

<script>
import PartnersContact from "@/components/PartnersContact";
import StrategicPartners from "@/components/StrategicPartners";
import EmergingTechnology from "@/components/EmergingTechnology";
import Customers from "@/components/Customers";
import Volunteer from "@/components/Volunteer";

export default {
  name: "partners",
  components: {
    PartnersContact,
    StrategicPartners,
    EmergingTechnology,
    Customers,
    Volunteer
  },
  head() {
    return {
      titleTemplate: "%s Partners"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
