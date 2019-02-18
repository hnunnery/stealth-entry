<template>
  <div class="training">
    <Training/>
  </div>
</template>

<script>
import Training from "@/components/Training";

export default {
  name: "training",
  components: {
    Training
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Training"
  }
};
</script>

