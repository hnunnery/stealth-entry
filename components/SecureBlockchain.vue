<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549926272/StealthEntry/blockchain.jpg"
          alt="blockchain"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >Secure Blockchain Technologies</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>​Stealth Entry created a patent pending Blockchain encryption solution to ensure the integrity and confidentiality of data in transit and at rest! Our technology provides the power of the Blockchain and Smart contracts to ensure integrity and non- repudiation of transactions, but also it can also provide verified geo-fenced capabilities. Service providers and users can use policy to ensure digital assets can be geo tracked through verifiable locations which will empower clients to deliver trusted peer-to-peer transfer of digital assets using requirements based on policy enforcement for compliance. Parties can now freely use digital assets, while also being able to prove where transactions occurred and enforced by applicable compliance requirements.</p>
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
