<template>
  <v-layout row wrap align-center justify-center class="mx-3 mb-5">
    <v-flex xs12 class="text-xs-center">
      <h2 class="mb-1 display-1 font-weight-light my-header primary--text">Stealth Entry Blog</h2>
      <v-divider class="mx-4"></v-divider>
    </v-flex>
    <nuxt-link to="/blog/what-is-csaas">
      <v-flex xs12 class="mt-3">
        <v-img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549426148/StealthEntry/detected.jpg"
          alt="hacking detected"
          class="responsive-img elevation-12"
        ></v-img>
        <h2
          class="my-header primary--text text-xs-center display-1 mt-4 font-weight-light"
        >What is Cyber Security as a Service (CSaaS)?</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <div class="text-xs-left secondary--text subheading">
          <p>
            ​You may be familiar with Software as a Service (SaaS), which includes cloud computing, infrastructure as a service (IaaS), and platform as a service (PaaS). Cyber Security as a Service, or CSaaS, is similar. With CSaaS, a company like Stealth Entry Cyber Security Solutions will handle that very important and specialized part of your business for you, allowing you to focus on other things and rest easy knowing that you are protected.
            <span
              class="font-weight-bold"
            >Read More...</span>
          </p>
        </div>
      </v-flex>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .layout {
    margin: 0px !important;
    padding: 0px !important;
  }
  p,
  .v-divider {
    margin-left: 5px;
    margin-right: 5px;
  }
  .layout {
    margin-bottom: 60px !important;
  }
}
</style>
