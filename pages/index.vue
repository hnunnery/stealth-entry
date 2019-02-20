<template>
  <div>
    <Hero/>
    <Hire/>
    <Mission/>
    <TeamComponent/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import Mission from "@/components/Mission";
import TeamComponent from "@/components/TeamComponent";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    Mission,
    TeamComponent
  },
  data() {
    return {};
  }
};
</script>