<template>
  <v-container fluid id="customers" class="mb-4">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 xl10 class="px-3">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <h2
              class="primary--text display-3 my-header font-weight-light text-xs-center pt-3"
            >Volunteer Organizations</h2>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 xl10>
            <v-layout wrap justify-center align-center class="pa-1 mt-4 partners-component">
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_270/v1550532353/StealthEntry/partners/vfw.jpg"
                  alt="vfw"
                  class="responsive-img"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_320/v1534824483/VOWAID/vowaid-logo.png"
                  alt="vowaid"
                  class="responsive-img"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_400/v1550531882/StealthEntry/partners/toys-for-tots.png"
                  alt="toys for tots"
                  class="responsive-img"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_400/v1550717566/StealthEntry/partners/safe_secure.png"
                  alt="safe secure online"
                  class="responsive-img"
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
  width: 100vw;
  min-height: 100vh;
}
.hero-background-circuit {
  background-repeat: repeat;
}
</style>