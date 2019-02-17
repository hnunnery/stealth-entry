<template>
  <v-container fluid id="fullwidth" class="hero-background-circuit pa-3">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 lg10 xl8>
        <v-layout wrap justify-center align-center>
          <v-flex xs12 md6>
            <h2 class="primary--text display-3 text-xs-center pt-3">Get in Touch</h2>
            <div class="py-4">
              <div
                class="text-xs-left"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <a href="mailto:info@stealthentry.com?subject=Website Mail">
                  <v-layout class="pb-4">
                    <v-flex xs3 class="text-xs-center">
                      <v-icon size="45px" class="primary--text">fas fa-envelope</v-icon>
                    </v-flex>
                    <v-flex xs9>
                      <h4 class="secondary--text display-1">
                        Send
                        <span class="hide-on-mobile">us</span> an email
                      </h4>
                      <p class="secondary--text subheading">info@stealthentry.com</p>
                    </v-flex>
                  </v-layout>
                </a>
              </div>
              <div
                class="col s12 text-xs-left"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <v-layout class="pb-4">
                  <v-flex xs3 class="text-xs-center">
                    <v-icon size="45px" class="primary--text">fas fa-mobile-alt</v-icon>
                  </v-flex>
                  <v-flex xs9>
                    <h4 class="secondary--text display-1">Give us a ring</h4>
                    <p class="secondary--text subheading">614-423-9334</p>
                  </v-flex>
                </v-layout>
              </div>
              <div
                class="col s12 text-xs-left"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <v-layout class="pb-4">
                  <v-flex xs3 class="text-xs-center">
                    <v-icon size="45px" class="primary--text">fas fa-map-marked-alt</v-icon>
                  </v-flex>
                  <v-flex xs9>
                    <h4 class="secondary--text display-1">
                      <span class="hide-on-mobile">Mailing</span> Address
                    </h4>
                    <p class="secondary--text subheading">1900 Polaris Pkwy, Suite 450
                      <br>Colombus, OH 43240
                    </p>
                  </v-flex>
                </v-layout>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-card
              class="elevation12 my-5"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <v-card-text>
                <v-form
                  lazy-validation
                  class="white pa-4 my-2"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <!-- NETLIFY FORM NAME -->
                  <input type="hidden" name="form-name" value="contact">
                  <div class="input-field col s12" hidden>
                    <input id="bot-field" type="text">
                    <label for="bot-field"></label>
                  </div>
                  <h2 class="secondary--text text-xs-center display-3">Contact Us</h2>
                  <v-text-field :name="first_name" label="First Name" required></v-text-field>
                  <v-text-field :name="last_name" label="Last Name" required></v-text-field>
                  <v-text-field :name="email" label="Email" required></v-text-field>
                  <v-textarea :name="message" label="Message"></v-textarea>
                  <div class="text-xs-center">
                    <v-btn type="submit" class="white--text gradient">Submit</v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "contact-form"
};
</script>

<style lang="scss" scoped>
#fullwidth {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
}
.hero-background-circuit {
  background-repeat: repeat;
}
</style>