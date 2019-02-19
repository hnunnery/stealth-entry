<template>
  <div>
    <Hero/>
    <Hire/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";

export default {
  name: "index",
  components: {
    Hero,
    Hire
  },
  data() {
    return {};
  }
};
</script>