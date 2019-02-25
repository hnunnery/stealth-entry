<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md10 xl8>
        <v-layout row wrap justify-center align-center class="secondary--text">
          <v-flex xs12 class="mb-4">
            <h2
              class="my-header primary--text display-1 font-weight-light py-3 text-xs-center"
            >Curious about hiring a Managed Security Service Provider?</h2>
            <h6 class="secondary--text title text-xs-center">Neal Saling - December 10, 2018</h6>
            <v-divider class="my-3"></v-divider>
            <div class="text-xs-left secondary--text">
              <p
                class="subheader"
              >MSSPs can operate completely in the cloud, manage equipment that is physically placed on your company network, or offer a hybrid solution, using cloud-based tools to manage on-premises equipment. Enterprise security cannot be procrastinated. No matter the size of your business or your specific industry, a security breach is not something any company wants to experience.</p>
            </div>
          </v-flex>
          <v-flex xs12 sm10 md8 xl8 class="mb-4">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,w_800/v1549425942/StealthEntry/monitors.jpg"
              alt="monitoring"
              class="responsive-img elevation-12"
            >
          </v-flex>
          <v-flex xs12 class="mb-4">
            <div class="text-xs-left secondary--text">
              <h5
                class="headline primary--text"
              >Three Key Benefits of hiring a MSSP with Stealth Entry:</h5>
              <ul>
                <li class="title">1. Access to security experts and latest tech</li>
                <li class="title">2. Increased flexibility & lower costs</li>
                <li class="title">3. Improved confidentially, compliance and business reputation</li>
              </ul>
              <br>
              <h5 class="headline primary--text">Safeguarding your business & reducing stress</h5>
              <p
                class="subheader"
              >Remember, you don't have to do security alone. With cybercrime on the rise, MSSPs can help extend your team, protect your organization and optimize your security resources. The right partner can play a critical role in improving customer experiences, innovation, and stakeholder value, and take the pressure off your team.</p>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  

<script>
export default {
  name: "Blog12172018",
  metaInfo: {
    titleTemplate: "%s | Blog"
  }
};
</script>

<style lang="scss" scoped>
.subheader {
  font-size: 1.2em;
}
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .container {
    padding: 10px !important;
  }
}
</style>