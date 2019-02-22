<template>
  <v-container fluid id="hire">
    <v-layout row wrap class="row justify-center align-center">
      <v-flex xs12 class="text-xs-center">
        <div class="orange accent"></div>
        <div class="hire-top darkgrey diagonal-div hero-background-circuit">
          <h4
            class="primary--text display-1 px-3 py-3 px-2"
          >Trust Stealth Entry as your Cyber Security as a Service (CSaaS)</h4>
          <v-btn class="gradient orange white--text mt-4 mb-0" to="/contact">Take Action Today</v-btn>
          <Process/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Process from "@/components/Process";

export default {
  name: "hire",
  components: {
    Process
  }
};
</script>

<style lang="scss" scoped>
#hire,
div.layout {
  margin: 0;
  padding: 0;
  width: 100vw;
}
#hire {
  @media screen and (max-width: 959px) {
    border-top: 1px solid var(--orange);
  }
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
    -webkit-clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);
    height: 300px;
    margin-bottom: -300px;
  }
}
</style>

<style lang="scss">
// DIAGONAL DIV (GLOBAL)
.diagonal-div {
  @media screen and (min-width: 960px) {
    -webkit-clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    /* height: 350px; */
    padding-top: 180px;
    padding-bottom: 10px;
  }
}
</style>
