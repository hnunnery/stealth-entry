<template>
  <v-container fluid id="fullwidth">
    <v-layout>
      <v-flex xs12>
        <h2
          class="text-shadow display-3 primary--text font-weight-light text-xs-center mt-4 mb-2 mx-2"
        >Stealth Entry Careers</h2>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout class="hero-background-circuit">
      <v-layout row wrap>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card class="elevation12 px-3 pt-4 pb-3 ma-4 card">
            <div class="card-content">
              <h4 class="text-xs-center display-1 secondary--text">Web Developer</h4>
              <h5 class="primary--text text-xs-center headline mb-1">Location</h5>
              <v-divider></v-divider>
              <p
                class="secondary--text subheading text-xs-left mt-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam accusantium laudantium neque, repudiandae facere ab incidunt assumenda quos ad quo exercitationem veritatis, et architect.</p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "jobs"
};
</script>

<style lang="scss" scoped>
#fullwidth {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
}
.hero-background-circuit {
  background-repeat: repeat;
  padding-bottom: 300px;
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .hero-background-circuit {
    padding: 10px !important;
  }
  .card {
    margin: 8px 2px 2px !important;
  }
}
</style>
