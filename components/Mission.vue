<template>
  <v-container fluid class="pt-2 mb-4">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12>
        <v-layout row wrap justify-center class="text-xs-center">
          <v-flex xs12 md10 lg5 class="mx-3">
            <h2 class="primary--text display-2 pt-5 pb-3 text-shadow font-weight-light">Core Values</h2>
            <v-divider class="mb-3"></v-divider>
            <v-layout row wrap justify-center class="mt-3">
              <v-flex xs12 sm6 class="text-xs-left secondary--text display-1 my-2">
                <v-icon class="primary--text ml-4 mr-2 mb-1">fas fa-check</v-icon>Integrity
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-left secondary--text display-1 my-2">
                <v-icon class="primary--text ml-4 mr-2 mb-1">fas fa-check</v-icon>Respect
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-left secondary--text display-1 my-2">
                <v-icon class="primary--text ml-4 mr-2 mb-1">fas fa-check</v-icon>Dependability
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-left secondary--text display-1 my-2">
                <v-icon class="primary--text ml-4 mr-2 mb-1">fas fa-check</v-icon>Humility
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md10 lg5 class="mx-3 widen">
            <h2 class="primary--text display-2 pt-5 pb-3 text-shadow font-weight-light">Vision</h2>
            <v-divider class="mb-3"></v-divider>
            <p
              class="secondary--text text-xs-left subheading"
            >Born from a vision to strengthen companies and government agencies with their cyber security needs, founder Israel Arroyo, Jr. made it a personal mission to change how the cyber security industry is perceived, while implementing practical security programs with results driven data.</p>
          </v-flex>
          <v-flex xs12 md10>
            <h2 class="primary--text display-2 pt-5 pb-3 text-shadow font-weight-light">Mission</h2>
            <v-divider class="mb-3"></v-divider>
            <p
              class="secondary--text text-xs-left subheading"
            >Stealth Entry’s mission is to partner with our clients and provide relevant, actionable solutions and exceptional services as required through security best practices, regulatory compliance and business requirements. Through our work, we will tenaciously and consistently exceed expectations to maintain high availability for mission-critical military systems, government operations, and corporate environments using top industry talent, strong ethics, and integrity.</p>
            <p
              class="secondary--text text-xs-left subheading"
            >Our philosophy is to build trust on a foundation of strong trusted working relationships with our clients. We accomplish this by employing the highest ethics, integrity, respect, and industry talent. Understanding our customers’ requirements is imperative to our success, and every effort is made to assist the clients in meeting their business and security objectives. By doing so, Stealth Entry acts as a trusted and reliable partner fulfilling your Cyber Security and network architecture needs.</p>
            <p
              class="secondary--text text-xs-left subheading"
            >Stealth Entry now serves satisfied customers all over the United States, with plans to expand globally. We proudly serve organizations such as the Department of Defense, State and Local Governments, Insurance, Healthcare, Financial and Retail markets.</p>
            <p
              class="secondary--text text-xs-left subheading"
            >The choice for Cyber Security is important, yet simple — allow our highly qualified Information Security Professionals to become a trusted part of your team and deliver undeniable results that speak volumes.</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
j
<script>
export default {
  name: "Mission"
};
</script>

<style lang="scss" scoped>
.subheading {
  font-size: 1.4em !important;
}
@media screen and (max-width: 1263px) {
  .widen {
    margin-left: 1px !important;
    margin-right: 1px !important;
  }
}
@media screen and (min-width: 1264px) and (max-width: 1350px) {
  .display-1 {
    font-size: 2em !important;
  }
}
</style>
