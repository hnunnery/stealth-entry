<template>
  <v-container fluid id="customers">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 xl10 class="px-3">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <h2
              class="primary--text display-3 my-header font-weight-light text-xs-center pt-5"
            >Emerging Technology</h2>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 xl10>
            <v-layout wrap justify-center align-center class="pa-1 mt-4 partners-component">
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1550717799/StealthEntry/tiq.png"
                  alt="threat iq"
                  class="responsive-img dts"
                >
              </v-flex>
              <v-flex xs12 sm6 lg4 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1550520877/StealthEntry/partners/Inner-View_-_Logo.png"
                  alt="inner-view"
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