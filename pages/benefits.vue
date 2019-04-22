<template>
  <div class="careers">
    <Benefits/>
  </div>
</template>

<script>
import Benefits from "@/components/Benefits";

export default {
  name: "benefits",
  components: {
    Benefits
  },
  head() {
    return {
      titleTemplate: "%s Benefits",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Stealth Entry Benefits Summary"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Our benefits support your health, work-life balance through paid time off and holidays, and professional growth."
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1555976524/StealthEntry/Stealth_Entry_Benefits.png"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.stealthentry.com/benefits"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.careers {
  margin: 0;
  padding: 0;
}
</style>
