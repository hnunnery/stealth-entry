<template>
  <v-container fluid id="fullwidth" class="pa-1">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 xl10 class="px-3">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <h2
              class="primary--text display-3 my-header font-weight-light text-xs-center pt-3"
            >Technology Integration</h2>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 md6>
            <v-layout wrap justify-center align-center class="pa-1 mt-4 partners-component">
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549899543/StealthEntry/partners/cisco.png"
                  alt="cisco"
                  class="responsive-img cisco"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549900611/StealthEntry/partners/ubiquiti.png"
                  alt="ubiquiti"
                  class="responsive-img ubiquiti"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220,q_100/v1549899542/StealthEntry/partners/project-hosts.png"
                  alt="project-hosts"
                  class="responsive-img project-hosts"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549899542/StealthEntry/partners/thales.png"
                  alt="thales"
                  class="responsive-img thales"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549900848/StealthEntry/partners/imperva.png"
                  alt="imperva"
                  class="responsive-img imperva"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549901144/StealthEntry/partners/F5-Logo.png"
                  alt="f5"
                  class="responsive-img f5"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220/v1549901644/StealthEntry/partners/fortinet.png"
                  alt="fortinet"
                  class="responsive-img fortinet"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_220,q_100/v1549899542/StealthEntry/partners/symantec.png"
                  alt="symantec"
                  class="responsive-img symantec"
                >
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-center py-3">
                <img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_100,w_200/v1550514965/StealthEntry/partners/dts_logo.jpg"
                  alt="dts"
                  class="responsive-img dts"
                >
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6>
            <v-card class="elevation12 my-4 white">
              <v-card-text>
                <form name="reseller" method="POST" data-netlify="true" class="pa-4">
                  <h2 class="secondary--text text-xs-center my-header display-2">Contact Sales</h2>
                  <!-- NETLIFY FORM NAME -->
                  <input type="hidden" name="form-name" value="reseller">
                  <input type="text" name="name" placeholder="Name" required class="my-4">
                  <input type="text" name="company" placeholder="Company" required class="my-4">
                  <input type="email" name="email" placeholder="Email" required class="my-4">
                  <div class="custom-select">
                    <label for="brands" class="grey--text text--darken-1">Brand:</label>
                    <div class="select font-weight-bold secondary--text">
                      <select name="brands" id="brands">
                        <option value disabled selected></option>
                        <option value="Cisco">Cisco</option>
                        <option value="Ubiquiti">Ubiquiti</option>
                        <option value="Project Hosts">Project Hosts</option>
                        <option value="Thales">Thales</option>
                        <option value="Imperva">Imperva</option>
                        <option value="F5">F5</option>
                        <option value="Fortinet">Fortinet</option>
                        <option value="Symantec">Symantec</option>
                        <option value="Dedicated Tech Services">Dedicated Tech Services</option>
                      </select>
                    </div>
                  </div>
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
</template>

<script>
export default {
  name: "partners-contact",
  data() {
    return {
      brands: [
        "Cisco",
        "Ubiquiti",
        "Project Hosts",
        "Thales",
        "Imperva",
        "F5",
        "Fortinet",
        "Symantec"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/* CSS for Select Component */
.custom-select select {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  -webkit-appearance: none;
  padding: 0 50px 0 20px;
  cursor: pointer;
  text-indent: 5px;
}

.custom-select .select {
  position: relative;
  background: #fff;
  border: 1px solid var(--orange);
  height: 50px;
  cursor: pointer;
}

.custom-select .select:focus {
  outline: none;
}

.custom-select .select:before {
  content: "";
  background: var(--orange);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 40px;
  pointer-events: none;
}

.custom-select .select:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 7px 0;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}

.custom-select .select::-ms-expand {
  display: none;
}
</style>


<style lang="scss" scoped>
#fullwidth {
  margin: 0;
  padding: 0;
  width: 100vw;
}
.hero-background-circuit {
  background-repeat: repeat;
}

.hidden {
  display: none;
}

/* CSS for Form */
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

@media screen and (max-width: 599px) {
  .container {
    padding: 10px !important;
  }
}
</style>