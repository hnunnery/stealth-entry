<template>
  <v-container fluid>
    <v-layout row wrap justify-center class="secondary--text">
      <v-flex xs12 sm10 md8 class="text-xs-center mb-3">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_800/v1549426148/StealthEntry/detected.jpg"
          alt="detected"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 sm10 md8 class="mb-4 px-2">
        <h2
          class="my-header primary--text display-2 font-weight-light mb-3 text-xs-center"
        >What is CSaaS?</h2>
        <!-- <h6 class="secondary--text title text-xs-center">Hunter Nunnery - March 24, 2019</h6> -->
        <v-divider class="my-3"></v-divider>
        <div class="text-xs-left secondary--text">
          <p class="subheading">
            ​
            You may be familiar with Software as a Service (SaaS), which includes cloud computing, infrastructure as a service (IaaS), and platform as a service (PaaS). Cyber Security as a Service, or CSaaS, is similar. With CSaaS, a company like Stealth Entry Cyber Security Solutions will handle that very important and specialized part of your business for you, allowing you to focus on other things and rest easy knowing that you are protected.
          </p>
          <p class="subheading"></p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  

<script>
export default {
  name: "Blog12172018",
  head() {
    return {
      titleTemplate: "%s Blog - CSaaS",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "What is CSaaS?"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "You may be familiar with Software as a Service (SaaS), which includes cloud computing, infrastructure as a service (IaaS), and platform as a service (PaaS). Cyber Security as a Service, or CSaaS, is similar."
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1553429932/StealthEntry/blog/what-is-csaas.png"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.stealthentry.com/blog/what-is-a-csaas"
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
@media screen and (max-width: 599px) {
  .container,
  .layout {
    margin: 0px !important;
    padding: 0px !important;
  }
}
</style>