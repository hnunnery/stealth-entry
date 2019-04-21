<template>
  <v-container fluid class="pa-5 orange">
    <v-layout row wrap justify-center align-center class="text-xs-center">
      <v-flex xs12 lg6 pa-5>
        <!-- <h3
          class="display-4 grey--text text--darken-3 font-weight-bold headline-spacing desktop"
        >Stealth Entry</h3>-->
        <p
          class="display-3 white--text headline-spacing"
        >We work as a part of your team to deliver exceptional results</p>
      </v-flex>
      <v-flex xs12 lg6 pa-5>
        <v-img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1555859364/StealthEntry/monitor.png"
          alt="monitor"
          data-aos="slide-left"
          data-aos-delay="700"
          data-aos-offset="50"
          data-aos-duration="1500"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MonitorGraphic"
};
</script>

<style lang="scss" scoped>
.headline-spacing {
  line-height: 1.7em !important;
}
@media screen and (min-width: 1264px) and (max-width: 1469px) {
  h3 {
    font-size: 6em !important;
  }
}

/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .container,
  .row,
  .v-flex {
    padding: 0px !important;
    margin: 0px !important;
  }
  p {
    margin-top: 50px !important;
    font-size: 2.3em !important;
  }
}
</style>
