<template>
  <div>
    <Hero/>
    <Hire/>
    <Process/>
    <Mission/>
    <TeamComponent/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import Process from "@/components/Process";
import Mission from "@/components/Mission";
import TeamComponent from "@/components/TeamComponent";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    Process,
    Mission,
    TeamComponent
  },
  data() {
    return {};
  }
};
</script>