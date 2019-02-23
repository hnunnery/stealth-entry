<template>
  <div class="hero-background-circuit page-wrapper">
    <v-container class="py-3">
      <v-layout wrap justify-center align-center>
        <v-flex xs12>
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
                  <a href="tel:614-423-9334">
                    <v-layout class="pb-4">
                      <v-flex xs3 class="text-xs-center">
                        <v-icon size="45px" class="primary--text">fas fa-mobile-alt</v-icon>
                      </v-flex>
                      <v-flex xs9>
                        <h4 class="secondary--text display-1">Give us a ring</h4>
                        <p class="secondary--text subheading">614-423-9334</p>
                      </v-flex>
                    </v-layout>
                  </a>
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
                      <p class="secondary--text subheading">171 Charring Cross Drive
                        <br>Westerville OH 43081
                      </p>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm9 md6 xl4>
              <v-card
                class="elevation12 my-4"
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <v-card-text>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    class="pa-4"
                  >
                    <!-- NETLIFY FORM NAME -->
                    <input type="hidden" name="form-name" value="contact">
                    <!-- NETLIFY BOT FIELD -->
                    <input type="text" name="bot-field" class="hidden">
                    <h2 class="secondary--text text-xs-center display-3">Contact Us</h2>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                      class="my-4"
                    >
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      class="my-4"
                    >
                    <input type="email" name="email" placeholder="Email" required class="my-4">
                    <textarea name="message" placeholder="Message" rows="4" required class="my-4"></textarea>
                    <!-- <div data-netlify-recaptcha="true"></div> -->
                    <div class="text-xs-center">
                      <v-btn type="submit" class="white--text gradient mt-4">Submit</v-btn>
                    </div>
                  </form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "contact-form"
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
}

@media screen and (max-width: 399px) {
  .container {
    padding: 5px !important;
  }
}

input,
textarea {
  width: 100%;
  display: block;
  border: none;
  padding: 30px 0 0 0;
  border-bottom: solid 1px var(--orange);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  &:focus,
  &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: var(--orange);
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
}
</style>