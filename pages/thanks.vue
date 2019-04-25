<template>
  <div class="team">
    <ThankYou/>
  </div>
</template>

<script>
import ThankYou from "@/components/ThankYou";
export default {
  components: {
    ThankYou
  },
   head() {
    return {
      titleTemplate: "Thank You!"
    };
  }
};
</script>