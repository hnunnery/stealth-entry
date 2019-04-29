<template>
  <v-container class="pt-2">
    <v-layout wrap justify-center>
      <v-flex xs12 xl8 offset-xl-2>
        <h2
          class="custom-size text-xs-center primary--text text-shadow font-weight-light display-3"
        >Contracts</h2>
        <v-divider></v-divider>
        <h4
          class="text-xs-center secondary--text body-2 my-3"
        >AUTHORIZED INFORMATION TECHNOLOGY SCHEDULE PRICELIST GENERAL PURPOSE COMMERCIAL INFORMATION TECHNOLOGY EQUIPMENT, SOFTWARE & SERVICES</h4>
        <div class="subheading secondary--text">
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D302</span> - IT Systems Development Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D306</span> - IT Systems Analysis Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D307</span> - Automated Information Systems Design and Integration Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D308</span> - Programming Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D311</span> - IT Data Conversion Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D317</span> - Creation/Retrieval of IT Related Automated News Services, Data Services, or Other Information Services
          </p>
          <p>
            <span class="primary--text font-weight-bold">FPDS Code D399</span> - Other Information Technology Services, Not Elsewhere Classified
          </p>
          <br>
          <p>Note 1: All non-professional labor categories must be incidental to and used solely to support hardware, software and/or professional services, and cannot be purchased separately.</p>
          <p>Note 2: Offerors and Agencies are advised that the Group 70 – Information Technology Schedule is not to be used as a means to procure services which properly fll under the Brooks Act. These services include but are not limited to, architectural, engineering, mapping, cartographic production, remote sensing, geographic information systems, and related services. FAR 36.6 distinguishes between mapping services of an A/E nature and mapping services which are not connected nor incidental to the traditionally accepted A/E Services.</p>
          <p>Note 3: This solicitation is not intended to solicit for the reselling of IT Professional Services, except for the provision of implementation, maintenance, integration, or training services in direct support of a product. Under such circumstances, the services must be a performance by the publisher or manufacturer or one of their authorized agents.</p>
        </div>
        <v-layout row wrap justify-center align-end class="mt-4">
          <v-flex xs12 sm6 class="text-xs-center">
            <h4 class="secondary--text pt-3">GSA IT Schedule 70: GS-35F-450CA</h4>
            <v-layout row wrap justify-center align-end>
              <v-flex xs12 lg6 class="text-xs-center">
                <a
                  href="https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-450CA&contractorName=STEALTH+ENTRY+LLC&executeQuery=YES"
                  target="_blank"
                >
                  <v-btn class="white--text gradient">VISIT GSA EBUY</v-btn>
                </a>
              </v-flex>

              <v-flex xs12 lg6 class="text-xs-center">
                <a href="/contracts.pdf" target="_blank" data-type="document">
                  <v-btn class="white--text gradient">REVIEW GSA CONTRACT</v-btn>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm6 class="text-xs-center">
            <h4 class="secondary--text pt-3">State of Ohio State Term Schedule (STS):</h4>
            <v-layout row wrap justify-center align-end>
              <v-flex xs12 lg6 class="text-xs-center">
                <a
                  href="https://www.carahsoft.com/buy/slg-contracts/ohio-state-contracts/Ohio534354"
                  target="_blank"
                >
                  <v-btn class="white--text gradient">Carahsoft 534354</v-btn>
                </a>
              </v-flex>

              <v-flex xs12 lg6 class="text-xs-center">
                <a
                  href="https://www.immixgroup.com/contract-vehicles/state/ohio-sts/534103/"
                  target="_blank"
                >
                  <v-btn class="white--text gradient">ImmixGroup 534103</v-btn>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "contracts"
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 220px;
  margin: 10px auto;
}
a {
  color: white !important;
}
@media screen and (max-width: 599px) {
  .custom-size {
    font-size: 2.35em !important;
  }
}
</style>


