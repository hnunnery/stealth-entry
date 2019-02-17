
<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center class="flex-s overlap">
      <v-flex xs12 class="text-xs-center logos pt-3 pb-5">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_60,q_100/v1549850162/StealthEntry/gsa.jpg"
              alt="gsa"
              class="responsive-img"
            >
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_50,q_100/v1549850170/StealthEntry/sba8a.webp"
              alt="sba8a"
              class="responsive-img"
            >
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,h_60,q_100/v1549850173/StealthEntry/sdvosb.webp"
              alt="sdvosb"
              class="responsive-img"
            >
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_60,q_100/v1549850791/StealthEntry/MBE_2019_black-01.png"
              alt
              class="responsive-img"
            >
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_60,q_100/v1549850791/StealthEntry/EDGE_2019_white-01.png"
              alt
              class="responsive-img"
            >
          </li>
        </ul>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md8 offset-md-2 lg6>
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549501975/StealthEntry/brief.jpg"
              alt="monitoring"
              class="responsive-img elevation-12"
            >
          </v-flex>
          <v-flex xs12 md10 offset-md-1 lg6 class="md-and-up-padding-y5">
            <h2
              class="my-header primary--text text-xs-center display-2 font-weight-light mt-2"
            >Cyber Security as a Service (CSaaS)</h2>
            <v-divider class="my-2"></v-divider>
            <div class="text-xs-left secondary--text subheading px-2">
              <p>The Stealth Entry Cyber Threat Operations Center (CTOC) takes a FULL HOLISTIC view of your organization’s security threat-scape using the latest Threat Hunting, Vulnerability Analysis, Reverse Engineering, Insider Threat, Forensic chain of custody, patch management, and incident response techniques. Our goal is to support our customers cyber security initiatives by providing above and beyond the status quo Threat Hunting, Digital Forensics and Incident Response monitoring you might receive from other organizations! We offer a tiered subscription plan that works for your individual organization’s security and compliance needs.</p>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#fullwidth {
  padding-top: 0;
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
  .logos {
    order: 2; /* Go down, bring Box B up */
  }
}
.logos {
  li {
    display: inline-block;
    margin: 0 3px;
    @media screen and (min-width: 1050px) {
      margin: 0 10px;
    }
    @media screen and (min-width: 1200px) {
      margin: 0 23px;
    }
    @media screen and (min-width: 1400px) {
      margin: 0 37px;
    }
  }
}
.overlap {
  margin-bottom: 30px;
  @media screen and (min-width: 960px) {
    margin-bottom: -70px;
  }
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .container,
  .row {
    margin-bottom: 0 !important;
  }
}
</style>
