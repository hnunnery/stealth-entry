<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center class="flex-s">
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5 verbiage">
        <h2
          class="my-header primary--text text-xs-center display-3 font-weight-light"
        >Cyber Security Training</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            As an Authorized Training Center for the EC-Council, our certified instructors are
            authorized to teach, and we offer a wealth of EC-Council courses in the disciplines of
            Ethical Hacking, Forensics, and Incident Response. The EC-Council curriculum is a
            comprehensive answer to the training requirement of bringing personnel up to the skill
            level required for certification to be certified of Computer Network Security Operators
            and Analysts. ​Our Certified Instructors have years of practical experience in both the
            Department of Defense and Corporate industries. This way you can rest assured you are
            being taught by professionals currently working within the Information Security Arena.
            Our instructors can provide the training you need in a mixture of delivery options.
          </p>
        </div>
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549501975/StealthEntry/brief.jpg"
          alt="monitoring"
          class="responsive-img elevation-12"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "cyber-security-training",
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
@media screen and (max-width: 959px) {
  .flex-s {
    display: flex;
    flex-direction: column; /* Stack on top */
  }
  .verbiage {
    order: 2; /* Go down, bring Box B up */
  }
}
</style>