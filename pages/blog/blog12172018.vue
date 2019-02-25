<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md10 xl8>
        <v-layout row wrap justify-center align-center class="secondary--text">
          <v-flex xs12 class="mb-4">
            <h2
              class="my-header primary--text display-1 font-weight-light py-3 text-xs-center"
            >What are the Biggest Cyber Security Threats to Your Business</h2>
            <h6 class="secondary--text title text-xs-center">Neal Saling - December 17, 2018</h6>
            <v-divider class="my-3"></v-divider>
            <div class="text-xs-left secondary--text description">
              <p
                class="subheader"
              >The cybersecurity landscape is constantly shifting and evolving as new cybersecurity threats and security solutions emerge. Security measures that work against the top cyber threats one day may be rendered obsolete by new types of cyber threats the next. For businesses to minimize their risk of a data security breach, they need to be constantly vigilant of the different types of cyber security threats that they face—both new and old.</p>
            </div>
          </v-flex>
          <v-flex xs12 sm10 md8 xl8 class="mb-4">
            <img
              src="https://res.cloudinary.com/missionwebdev/image/upload/c_crop,f_auto,g_center,w_800,h_432/v1549426160/StealthEntry/hacker.jpg"
              alt="hacker"
              class="responsive-img elevation-12"
            >
          </v-flex>
          <v-flex xs12 class="mb-4">
            <div class="text-xs-left secondary--text description">
              <p
                class="subheader"
              >However, it’s important to remember that there is no single “silver bullet” solution that can address every cyber threat your business faces. There are too many different kinds of cybersecurity threats out there for any one piece of technology to provide complete protection. As such, it’s important to create a comprehensive cybersecurity strategy to protect your business’ most sensitive data—one that covers the biggest cybersecurity threats to your business.</p>
              <ul>
                <li>
                  <h5
                    class="headline primary--text"
                  >Here are 5 Cybersecurity threats you should be aware of:</h5>
                </li>
                <li class="title">Cyber Security Threat #1: Insider Threat</li>
                <li class="title">Cyber Security Threat #2: Ransomware</li>
                <li class="title">Cyber Security Threat #3: Uneven Cybersecurity Protections</li>
                <li class="title">Cyber Security Threat #4: Unpatched Security Vulnerabilities/Bugs</li>
                <li class="title">Cyber Security Threat #5: DDoS Attacks</li>
              </ul>
              <p
                class="subheader mt-4"
              >Need help protecting your business network from all of the cybersecurity threats on this list? Or, just need advice for minimizing your security risks? Contact the experts at Stealth Entry for more information and advice.</p>
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