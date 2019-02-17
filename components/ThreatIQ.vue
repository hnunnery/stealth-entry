<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549948253/StealthEntry/tiq-with-logo.jpg"
          alt="tiq"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >THREAT-IQ</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p class="text-xs-left">
            The purpose of our patent pending proprietary Critical Threat Management Solution herein known as
            THREAT-IQ, is to provide an analytical and procedural overview for all law enforcement, first responders,
            and military organizations to quickly and efficiently plan and execute a response to a critical incident or
            an exigent circumstance that disrupts daily operations within a facility, or geographic location. THREAT-
            IQ was developed to increase tactical response, reduce the cost and loss of life that may directly result
            due to these exigent circumstances. THREAT-IQ was developed in mind with the need to mitigate risks in
            responding to potentially life-threatening situations within known or unknown environments, using
            tested and proven methods that are known to decrease response time, lapse in communications, and
            increase tactical strategic planning en-route to scene.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "threat-iq",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#fullwidth {
  @media screen and (max-width: 959px) {
    margin: 0;
    padding: 0;
    width: 100vw;
  }
}
@media screen and (max-width: 599px) {
  .container {
    margin-top: 0 !important;
  }
}
</style>
