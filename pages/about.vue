<template>
  <div>
    <Mission/>
    <TeamComponent/>
    <Charity/>
  </div>
</template>

<script>
import Mission from "@/components/Mission";
import TeamComponent from "@/components/TeamComponent";
import Charity from "@/components/Charity";

export default {
  name: "index",
  components: {
    Mission,
    TeamComponent,
    Charity
  },
  data() {
    return {};
  }
};
</script>