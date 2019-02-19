<template>
  <div class="contracts">
    <Contracts/>
    <Jobs/>
  </div>
</template>

<script>
import Contracts from "@/components/Contracts";
import Jobs from "@/components/Jobs";

export default {
  name: "contracts",
  components: {
    Contracts,
    Jobs
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Contracts"
  }
};
</script>

<style lang="scss" scoped>
.contracts {
  margin: 0;
  padding: 0;
}
</style>