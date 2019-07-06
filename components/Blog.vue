<template>
  <div>
    <v-layout row wrap align-center justify-center class="mx-3 mb-5">
      <v-flex xs12 class="text-xs-center">
        <h2 class="mb-1 display-1 font-weight-light my-header primary--text">Stealth Entry Blog</h2>
        <v-divider class="mx-4"></v-divider>
      </v-flex>
      <a
        href="https://myfox28columbus.com/news/local/ohio-ag-dave-yost-lancaster-couple-be-careful-when-using-peer-to-peer-payment-apps"
        target="_blank"
      >
        <v-flex xs12 class="mt-3">
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_540,w_1000/v1549426160/StealthEntry/hacker.jpg"
            alt="hacker"
            class="responsive-img elevation-12"
          ></v-img>
          <h2
            class="my-header primary--text text-xs-center display-1 mt-4 font-weight-light"
          >Ohio Attorney General Warns About Using "Peer to Peer" Payment Apps</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <div class="text-xs-left secondary--text subheading">
            <p>
              Ricki and David Chenault of Lancaster were trying to pay back their son for a vacation earlier this year when they logged on to their bank online, Chase, and used the QuickPay feature powered by Zelle. It wasn't their first time, so they clicked on their son's email address and off the cash went. Days later, they found out it didn't land.
              <span
                class="font-weight-bold"
              >Read More...</span>
            </p>
          </div>
        </v-flex>
      </a>
    </v-layout>
    <v-layout row wrap align-center justify-center class="mx-3 mb-5">
      <a
        href="https://abc6onyourside.com/news/local/wendys-credit-card-breach-getting-larger"
        target="_blank"
      >
        <v-flex xs12 class="mt-3">
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_540,w_1000/v1549926272/StealthEntry/IoT.jpg"
            alt="tech"
            class="responsive-img elevation-12"
          ></v-img>
          <h2
            class="my-header primary--text text-xs-center display-1 mt-4 font-weight-light"
          >Wendy's Credit Card Breach Getting Larger</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <div class="text-xs-left secondary--text subheading">
            <p>
              ​Five months after Dublin based Wendy's began investigating unusual activity involving customer credit cards, the fast-food chain is revealing it has discovered a second data breach.
              <span
                class="font-weight-bold"
              >Read More...</span>
            </p>
          </div>
        </v-flex>
      </a>
    </v-layout>
    <v-layout row wrap align-center justify-center class="mx-3 mb-5">
      <a
        href="https://abc6onyourside.com/news/local/upgrading-your-tech-heres-how-experts-say-to-clean-your-data-off-for-good"
        target="_blank"
      >
        <v-flex xs12 class="mt-3">
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_540,w_1000/v1549729001/StealthEntry/servers.jpg"
            alt="servers"
            class="responsive-img elevation-12"
          ></v-img>
          <h2
            class="my-header primary--text text-xs-center display-1 mt-4 font-weight-light"
          >Upgrading Your Tech? Here's How Experts Say to Clean Your Data Off for Good</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <div class="text-xs-left secondary--text subheading">
            <p>
              I​f you've ever gotten a new phone or computer, you know the drill; backup whatever you want to keep, save pictures and numbers, and reset factory settings to delete.
              <span
                class="font-weight-bold"
              >Read More...</span>
            </p>
          </div>
        </v-flex>
      </a>
    </v-layout>
    <v-layout row wrap align-center justify-center class="mx-3 mb-5">
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
  </div>
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
