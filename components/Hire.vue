<template>
  <v-container fluid id="fullwidth">
    <v-layout row wrap class="row justify-center align-center">
      <v-flex xs12 class="text-xs-center">
        <div class="orange accent"></div>
        <div class="hire-top secondary diagonal-div hero-background-circuit">
          <h4
            class="primary--text display-1 px-3 py-3 px-2"
          >Trust Stealth Entry as your Cyber Security as a Service (CSaaS)</h4>
          <v-btn class="gradient orange white--text my-4" to="/contact">Take Action Today</v-btn>
          <h5
            class="white--text headline py-3 px-3"
          >In a few easy steps, Stealth Entry can customize a cyber security solution just for you!</h5>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "hire",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#fullwidth,
div.layout {
  margin: 0;
  padding: 0;
  width: 100vw;
}
#fullwidth {
  @media screen and (max-width: 959px) {
    border-top: 1px solid var(--orange);
  }
}
.hire-top {
  border-bottom: 1px solid var(--orange);
}
.hero-background-circuit {
  background-repeat: repeat;
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .gradient {
    margin: 20px auto !important;
  }
}
// ORANGE DIAGONAL
.accent {
  @media screen and (min-width: 960px) {
    -webkit-clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
    height: 330px;
    margin-bottom: -330px;
  }
}
</style>

<style lang="scss">
// DIAGONAL DIV (GLOBAL)
.diagonal-div {
  @media screen and (min-width: 960px) {
    -webkit-clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
    /* height: 350px; */
    padding-top: 280px;
    padding-bottom: 40px;
  }
}
</style>
