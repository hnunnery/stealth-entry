<template>
  <v-container fluid class="hero-background-circuit darkgrey">
    <v-layout row wrap justify-center align-center class="py-3">
      <v-flex xs12 lg10 offset-lg-1>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12>
            <h5
              class="text-xs-center white--text headline pb-4 px-3"
            >In a few easy steps, Stealth Entry can customize a cyber security solution just for you!</h5>
          </v-flex>
          <v-flex xs12 md4>
            <v-card
              class="white elevation-12 text-xs-center py-4 ma-2"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="card-content">
                <v-icon size="70px" class="darkgrey--text">fas fa-poll</v-icon>
                <h2 class="primary--text display-1 my-2">Run Assessment</h2>
                <p
                  class="secondary--text steps px-2"
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
                <v-icon size="70px" class="darkgrey--text">fas fa-shield-alt</v-icon>
                <h2 class="white--text display-1 my-2">Customize a Plan</h2>
                <p
                  class="secondary--text steps px-2"
                >We will discover vulnerabilities and design mitigating or compensating security measures before deployment, reducing your risk exposure.</p>
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
                <v-icon size="70px" class="darkgrey--text">fas fa-lock</v-icon>
                <h2 class="primary--text display-1 my-2">Maintain Security</h2>
                <p
                  class="secondary--text steps px-2"
                >We take pride in protecting all of your computer systems and networks through integrity, availability, and authentication.</p>
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
.card-content {
  @media screen and (min-width: 960px) {
    height: 240px;
  }
  @media screen and (min-width: 1450px) {
    height: 200px;
  }
}
.steps {
  font-size: 1.2em;
}
</style>
