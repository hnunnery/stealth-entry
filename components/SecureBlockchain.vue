<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549948253/StealthEntry/tiq-with-logo.jpg"
          alt="tiq"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5">
        <h2
          class="my-header primary--text text-xs-center display-3 font-weight-light"
        >Secure Blockchain Technologies</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            ​Stealth Entry created a patent pending Blockchain encryption solution to ensure the
            integrity and confidentiality of data at rest and transit are secure! the technology gives
            the power of the Blockchain and smart contracts to ensure integrity and non-
            repudiation of transactions, but the power of the Blockchain can also provide verified
            geo-locking related to the rules of smart contracts. Service providers and users can add
            rules to ensure assets cannot be accessible other than in a specific verifiable location via
            GPS. The client is now empowered to deliver trusted peer-to-peer transfer of digital
            assets in compliance with Geo-locking requirements, allowing access control through
            proof of jurisdiction that can be verified for purposes of validating location in a court of
            law. Implications are substantial for duties and taxation. Parties can now freely use
            digital assets, while also being able to prove where transactions occurred and complying
            with applicable compliance requirements.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "secure-blockchain",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#fullwidth {
  @media screen and (max-width: 959px) {
    margin: 0;
    padding: 0;
    width: 100vw;
  }
}
</style>
