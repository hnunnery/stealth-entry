<template>
  <div class="careers">
    <Jobs2/>
    <Benefits/>
  </div>
</template>

<script>
import Jobs2 from "@/components/Jobs2";
import Benefits from "@/components/Benefits";

export default {
  name: "careers",
  components: {
    Jobs2,
    Benefits
  },
  head() {
    return {
      titleTemplate: "%s Careers",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Stealth Entry Careers"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Stealth Entry Cyber Security Solutions is hiring! We have a diverse portfolio of contract positions."
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549812205/StealthEntry/SE_-_Apply_today.png"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.stealthentry.com/careers"
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
