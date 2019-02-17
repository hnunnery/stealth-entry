<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center class="py-3">
      <v-flex xs12 lg10 offset-lg-1>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md4>
            <v-card
              class="white elevation-12 text-xs-center py-4 ma-2"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="card-content">
                <v-icon size="70px">fas fa-poll</v-icon>
                <h2 class="primary--text display-1">Run Assessment</h2>
                <p
                  class="secondary--text subheading px-2"
                >Stealth Entry’s exceptional analysts will identify your exposure to risks and vulnerabilities and provide a quantitative analysis of all findings.</p>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card
              class="orange elevation-12 text-xs-center py-4 ma-2"
              data-aos="zoom-out-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="card-content">
                <v-icon size="70px">fas fa-shield-alt</v-icon>
                <h2 class="white--text display-1">Customize a Plan</h2>
                <p
                  class="secondary--text subheading px-2"
                >We will discover vulnerabilities and design mitigating or compensating security measures before deployment,reducing your risk exposure.</p>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card
              class="white elevation-12 text-xs-center py-4 ma-2"
              data-aos="zoom-out-left"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="card-content">
                <v-icon size="70px">fas fa-lock</v-icon>
                <h2 class="primary--text display-1">Maintain Security</h2>
                <p
                  class="secondary--text subheading px-2"
                >We take pride in protecting all of your computer systems and networks through integrity, availability andauthentication.</p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "process"
};
</script>


<style lang="scss" scoped>
.container {
  background-repeat: repeat;
  border-top: 1px solid var(--orange);
  border-bottom: 1px solid var(--orange);
}
h2 {
  margin: 5px 0 10px;
}
.card-content {
  @media screen and (min-width: 960px) {
    height: 240px;
  }
  @media screen and (min-width: 1450px) {
    height: 200px;
  }
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .row {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
