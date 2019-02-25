<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549729001/StealthEntry/servers.jpg"
          alt="servers"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >Secure Cloud Service</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            Stealth Entry is your number one choice as a Security Complaint Cloud Services Provider.
            If your organization is currently planning to migrate your corporate digital assets to the
            Cloud, we can fully support your project throughout its full lifecycle! Our Cloud Security
            and Cloud Architects can secure and manage your applications providing full HIPAA
            Compliant, HITRUST Certified Healthcare Clouds and FedRAMP Compliant Government
            Clouds with your company’s required or regulatory standards at the application level.
            We also provide IaaS and PaaS security compliance to include all software and data
            running in the cloud – saving you hundreds of thousands of dollars, and months of time
            and effort.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "cloud-service",
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
.subheading {
  font-size: 1.3em !important;
}
</style>
