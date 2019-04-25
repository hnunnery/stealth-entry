<template>
  <v-container fluid id="customers" class="pt-3 pb-5 grey darken-3">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 xl10 class="px-3">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <h2
              class="primary--text display-3 my-header custom-size font-weight-light text-xs-center pt-3"
            >Volunteer Organizations</h2>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 xl10>
            <v-layout wrap justify-center align-center class="pa-1 mt-4 partners-component">
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1556149907/StealthEntry/partners/VFW-logo.png"
                  alt="vfw"
                  class="responsive-img mb-4"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_320/v1534824483/VOWAID/vowaid-logo.png"
                  alt="vowaid"
                  class="responsive-img mb-4"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_370/v1550531882/StealthEntry/partners/toys-for-tots.png"
                  alt="toys for tots"
                  class="responsive-img mb-4"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_400/v1550717376/StealthEntry/partners/safe_secure_logo.png"
                  alt="safe secure online"
                  class="responsive-img mb-4"
                >
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
#customers {
  margin: 0;
  padding: 0;
}
.hero-background-circuit {
  background-repeat: repeat;
}
@media screen and (max-width: 599px) {
  .custom-size {
    font-size: 2.3em !important;
  }
}
</style>