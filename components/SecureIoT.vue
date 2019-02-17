<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center class="flex-s">
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5 verbiage">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >Secure Internet of Things (IoT)</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            As part of our Proprietary THREAT-IQ solution we have integrated our own secure IoT
            capability to monitor, detect, identify, alert and manage both authorized and
            unauthorized IoT devices on the network! Secure IoT control (Internet of Things) is
            achieved by integrating a capability to continuously monitor and query IoT devices using
            the MQTT protocol and TCP/IP stack. This allows for the solution to simultaneously
            monitor physical security devices on the network for critical incidents and rogue IoT
            which may try to connect to the network.
          </p>
        </div>
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549926272/StealthEntry/IoT.jpg"
          alt="secure iot"
          class="responsive-img elevation-12"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "secure-iot",
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
@media screen and (max-width: 959px) {
  .flex-s {
    display: flex;
    flex-direction: column; /* Stack on top */
  }
  .verbiage {
    order: 2; /* Go down, bring Box B up */
  }
}
</style>