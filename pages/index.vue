<template>
  <div>
    <Hero/>
    <Hire/>
    <Process/>
    <TeamComponent/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import Process from "@/components/Process";
import TeamComponent from "@/components/TeamComponent";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    Process,
    TeamComponent
  },
  data() {
    return {};
  }
};
</script>