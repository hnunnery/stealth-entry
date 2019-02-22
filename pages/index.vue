<template>
  <div>
    <Hero/>
    <Hire/>
    <Mission/>
    <TeamComponent/>
    <CompanyHistory/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import Mission from "@/components/Mission";
import TeamComponent from "@/components/TeamComponent";
import CompanyHistory from "@/components/CompanyHistory";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    Mission,
    TeamComponent,
    CompanyHistory
  },
  data() {
    return {};
  }
};
</script>