<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center class="flex-s">
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5 verbiage">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >Cyber Security Assessments</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            Stealth Entry’s team of Certified Penetration Testers has the credentials and experience
            to secure your network infrastructure and your applications. We conduct
            comprehensive Penetration Tests with actionable results. Our Security Consultants test
            your network infrastructure, systems, and/or applications with proven, industry
            standard methodologies such as the DoD Red Team methodology, NIST, NERC-CIP, and
            the Open community PTES standard! Our reports and collaborative consulting approach
            provide practical steps and guidance to increase your security posture and reduce your
            risk and vulnerability exposure. Stealth Entry provides: •Penetration Testing
            (infrastructure, systems, and applications) • Red Team Assessments• Web Application
            Security Assessments
          </p>
        </div>
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549425942/StealthEntry/monitors.jpg"
          alt="monitoring"
          class="responsive-img elevation-12"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "security-assessments",
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
.subheading {
  font-size: 1.3em !important;
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