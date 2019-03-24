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
          <p class="subheading">
            The "as a Service" model has taken off in recent years due to the positive impact it tends to have on businesses and individuals alike. A good example of Software as a Service (SaaS) is Office 365 by Microsoft. Office 365 is a cloud-based subscription service that combines apps like Excel and Outlook with powerful cloud services like OneDrive and Microsoft Teams.
            <span
              class="primary--text"
            >By leveraging the expertise of others, you can focus on the key parts of your business; the aspects that you are an expert in.</span>
          </p>
          <p
            class="subheading"
          >Businesses of all sizes should consider CSaaS in order to meet the challenges of Cyber Security in the future. It may not make sense to attempt to hire a staff of Cyber Security Experts into your business. In that case, reach out to Stealth Entry - Cyber Security Solutions. We will work with you to develop a solution that makes sense for your company.</p>
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
          content: "Stealth Entry Blog - What is CSaaS?"
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