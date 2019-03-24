<template>
  <v-container fluid id="customers" class="mb-4">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 xl10 class="px-3">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <h2
              class="primary--text display-3 my-header font-weight-light text-xs-center pt-5"
            >Strategic Partners</h2>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 xl10>
            <v-layout wrap justify-center align-center class="pa-1 mt-4 partners-component">
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1553436168/StealthEntry/partners/SAIC_-_Logo.png"
                  alt="saic"
                  class="responsive-img dts"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1553436320/StealthEntry/partners/Raytheon_-_Logo.png"
                  alt="raytheon"
                  class="responsive-img dts"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1550520876/StealthEntry/partners/Parsons_-_Logo.png"
                  alt="parsons"
                  class="responsive-img dts"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1550520877/StealthEntry/partners/Inner-View_-_Logo.png"
                  alt="inner-view"
                  class="responsive-img inner-view"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_100,w_250/v1550514965/StealthEntry/partners/dts_logo.jpg"
                  alt="dts"
                  class="responsive-img dts"
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
}
.hero-background-circuit {
  background-repeat: repeat;
}
</style>