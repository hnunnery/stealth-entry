<template>
  <div class="contact">
    <Contactform/>
  </div>
</template>

<script>
import Contactform from "@/components/Contactform";

export default {
  name: "contact",
  components: {
    Contactform
  },
  head() {
    return {
      titleTemplate: "Contact %s Today"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
