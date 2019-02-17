<template>
  <v-container fluid id="fullwidth" class="hero-background-circuit">
    <v-layout wrap justify-center align-center class="pa-3 partners-component">
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549899543/StealthEntry/partners/cisco.png"
              alt="cisco"
              class="responsive-img cisco"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549900611/StealthEntry/partners/ubiquiti.png"
              alt="ubiquiti"
              class="responsive-img ubiquiti"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250,q_100/v1549899542/StealthEntry/partners/project-hosts.png"
              alt="project-hosts"
              class="responsive-img project-hosts"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549899542/StealthEntry/partners/redseal.png"
              alt="redseal"
              class="responsive-img redseal"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549899542/StealthEntry/partners/thales.png"
              alt="thales"
              class="responsive-img thales"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549900848/StealthEntry/partners/imperva.png"
              alt="imperva"
              class="responsive-img imperva"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549901144/StealthEntry/partners/F5-Logo.png"
              alt="f5"
              class="responsive-img f5"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250/v1549901644/StealthEntry/partners/fortinet.png"
              alt="fortinet"
              class="responsive-img fortinet"
            >
          </v-card>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl3>
        <a href="#" target="_blank">
          <v-card class="card elevation12 text-xs-center ma-3">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_250,q_100/v1549899542/StealthEntry/partners/symantec.png"
              alt="symantec"
              class="responsive-img symantec"
            >
          </v-card>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PartnersComponent"
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
.partners-component {
  border-bottom: 2px solid var(--orange);
}
h2 {
  padding: 20px 0 30px;
  border-bottom: 1px solid var(--orange);
  margin-bottom: 0;
}
.card {
  height: 180px;
  .cisco {
    margin-top: 15px;
  }
  .ubiquiti {
    margin-top: 55px;
  }
  .project-hosts {
    margin-top: 55px;
  }
  .redseal {
    margin-top: 55px;
  }
  .thales {
    margin-top: 45px;
  }
  .imperva {
    margin-top: 65px;
  }
  .f5 {
    margin-top: 22px;
  }
  .fortinet {
    margin-top: 70px;
  }
  .symantec {
    margin-top: 40px;
  }
  .responsive-img elevation12 white {
    padding: 5px;
  }
}
</style>
