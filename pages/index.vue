<template>
  <div>
    <Hero/>
    <Hire/>
    <Process/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import Process from "@/components/Process";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    Process
  },
  data() {
    return {};
  }
};
</script>