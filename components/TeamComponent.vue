<template>
  <v-container fluid id="fullwidth" class="hero-background-circuit pa-3 container">
    <v-layout wrap justify-center align-center class="py-4 row">
      <v-flex xs12 class="mt-3 mb-4">
        <h2 class="text-shadow display-3 primary--text text-xs-center">Our Team</h2>
      </v-flex>
      <!-- Israel Profile -->
      <v-flex xs12 lg8>
        <v-card class="elevation12 pa-2 card">
          <v-layout wrap justify-center align-center>
            <v-flex xs12 md5>
              <v-img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_320/v1538693517/VOWAID/hunter.jpg"
                height="320px"
                contain
              ></v-img>
            </v-flex>
            <v-flex xs12 md7>
              <v-card-title>
                <div>
                  <div class="display-2 secondary--text text-xs-center">Israel Arroyo, Jr</div>
                  <div class="headline primary--text text-xs-center pt-1 pb-2">Founder and CEO</div>
                  <v-divider></v-divider>
                  <div
                    class="secondary--text subheading pt-2"
                  >Israel Arroyo, Jr. is a results-driven Information Security Professional, United States Marine Corps Veteran and Active Reservist with over 20 years of computer network operations and military signals intelligence experience. While on active duty and continuing into his reserve duty, he has been a key participant in the planning and implementation of Cyber Security solutions in direct support of forwarding deployed assets domestically and abroad. In his transition from the battlefield to the business environment, he has carried the same tenacity, drive, and technical expertise to create business requirements with an emphasis on team collaboration in meeting the business’s goals, objectives and budgets. This has translated into successful execution and management of initiatives for the Department of Defense, defense contractors, and Fortune 1000 companies.</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TeamComponent"
};
</script>

<style lang="scss" scoped>
#fullwidth {
  margin: 0;
  padding: 0;
  width: 100vw;
}
.hero-background-circuit {
  background-repeat: repeat;
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .container {
    padding: 10px !important;
  }
  .row {
    padding-top: 0 !important;
  }
  .card {
    padding-left: 2px !important;
    padding-right: 2px !important;
  }
}
</style>
