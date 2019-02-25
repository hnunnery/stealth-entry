<template>
  <v-container fluid class="pt-2 mb-4">
    <v-layout row wrap justify-center class="text-xs-center">
      <v-flex xs12 lg10 xl8>
        <h2 class="primary--text display-2 pt-4 pb-3 text-shadow font-weight-light">Company History</h2>
        <v-divider class="mb-3"></v-divider>
        <p
          class="secondary--text text-xs-left subheading"
        >Founded in 2009 by Israel Arroyo, Jr. (GySgt USMC Res.), Stealth Entry has come a long way from its beginnings. Taking a pragmatic approach (developed during his time in the military), Mr. Arroyo began helping businesses and government agencies get on the right path for their Cyber Security needs. While the path has not been easy due to many misconceptions of what a Cyber Security Professional is, he has forged ahead and built the company into what it is today. Understanding our customers’ requirements is imperative to our success, and every effort is made to assist the clients in meeting their objectives. By doing so, Stealth Entry acts as a trusted and reliable partner fulfilling your Cyber Security and network architecture needs.</p>
        <p
          class="secondary--text text-xs-left subheading"
        >Stealth Entry now serves satisfied customers all over the United States, with plans to expand globally. We proudly serve organizations such as the Department of Defense, state and local Governments, and the Insurance, Healthcare, Financial and Retail markets. The choice for Cyber Security is important, yet simple — allow our highly qualified Information Security Professionals to become a trusted part of your team and deliver results that speak volumes.</p>
      </v-flex>
      <v-flex xs12 lg10 xl8 data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration="1000">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549227032/StealthEntry/stealth-entry-logo.png"
          alt="stealth entry logo"
          class="responsive-img"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CompanyHistory"
};
</script>

<style lang="scss" scoped>
.subheading {
  font-size: 1.3em !important;
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  h2 {
    padding-top: 15px !important;
  }
}
</style>
