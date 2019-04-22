<template>
  <div class="contracts">
    <Contracts/>
  </div>
</template>

<script>
import Contracts from "@/components/Contracts";

export default {
  name: "contracts",
  components: {
    Contracts
  },
  head() {
    return {
      titleTemplate: "%s Contract Information"
    };
  }
};
</script>

<style lang="scss" scoped>
.contracts {
  margin: 0;
  padding: 0;
}
</style>