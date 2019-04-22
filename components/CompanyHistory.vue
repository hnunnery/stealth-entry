<template>
  <v-container fluid class="py-5 orange">
    <v-layout row wrap justify-center class="text-xs-center">
      <v-flex xs12 lg10>
        <h2 class="white--text display-2 pt-4 pb-3 text-shadow font-weight-light">Company History</h2>
        <v-divider class="mb-4"></v-divider>
        <p
          class="white--text text-xs-left subheading"
        >Founded in 2009 by Israel Arroyo, Jr. (GySgt USMC Res.), Stealth Entry has come a long way from its beginnings. Taking a pragmatic approach (developed during his time in the military), Mr. Arroyo began helping businesses and government agencies get on the right path for their Cyber Security needs. While the path has not been easy due to many misconceptions of what a Cyber Security Professional is, he has forged ahead and built the company into what it is today. Understanding our customers’ requirements is imperative to our success, and every effort is made to assist the clients in meeting their objectives. By doing so, Stealth Entry acts as a trusted and reliable partner fulfilling your Cyber Security and network architecture needs.</p>
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
  line-height: 1.9em !important;
}

/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  h2 {
    padding-top: 15px !important;
  }
}
</style>
