<template>
  <div class="darkgrey hero-background-circuit">
    <v-container class="pa-3">
      <v-layout wrap justify-center align-center class="py-4 row">
        <!-- <v-flex xs12 class="mt-3 mb-4">
        <h2 class="text-shadow display-3 primary--text text-xs-center font-weight-light">Our Team</h2>
        </v-flex>-->
        <!-- Israel Profile -->
        <v-flex xs12 xl10>
          <v-card class="elevation12 pa-4 card">
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 md5 class="mb-3">
                <v-img
                  src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_320,q_100/v1550460580/StealthEntry/team/israel.webp"
                  height="250px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs12 md7>
                <div class="display-2 secondary--text text-xs-center mt-2">Israel Arroyo, Jr</div>
                <div class="title secondary--text text-xs-center pt-1 pb-2">M.S., CISSP, GPEN, CEH</div>
                <div class="headline primary--text text-xs-center pt-1 pb-2">Founder and CEO</div>
                <v-divider></v-divider>
                <div class="secondary--text subheading pt-2 px-3">
                  <p>
                    Mr. Arroyo is the Founder and President of Stealth Entry LLC,
                    Cyber Security Solutions, a Small Business Administration
                    Disadvantaged 8(a) Small Business, a State of Ohio Minority
                    Business Enterprise, Veterans Business Enterprise and Service
                    Disabled Veteran Owned Small Business with offices in Dayton
                    and Columbus Ohio. Stealth Entry specializes in supporting
                    Corporate, Government, Military and Intelligence Community
                    customers.
                  </p>
                </div>
              </v-flex>
              <v-flex xs12 class="secondary--text subheading px-3">
                <p>
                  Mr. Arroyo is a result driven Information Security
                  Professional and United States Marine Corp Reservist with over
                  20 years of experience in computer network operations and military signals intelligence. Israel has
                  notable success managing a broad range of Department of Defense, Corporate and Retail
                  Information Security initiatives. His hard work and initiative is a key multiplier in the planning
                  and implementation of Cyber Security solutions in direct support of forward deployed assets and
                  business requirements with an emphasis on team collaboration to meet business goals, objectives
                  and budgets.
                </p>
              </v-flex>
              <v-flex xs12 class="secondary--text subheading px-3">
                <p>
                  As a decorated veteran of the enlisted Active Duty ranks in the United States Marine Corps, Israel
                  proudly earned the rank of Staff Sergeant. Israel continues to serve in his promotion rank of
                  Gunnery Sergeant as a Global Cyber Threat Intelligence Analyst in the United States Marine Corps
                  Reserves. His duties consist of conducting strategic computer network operations from both
                  Wright Patterson Air Force Base, Dayton OH and European Command JIOCEUR. Israel’s tactical
                  computer network operations and intelligence experience comes from leading teams performing
                  tactical data communications and wireless network operations while deployed to regions of the
                  Middle East, Balkans and Africa. Israel’s past ventures also include working with the National
                  Security Agencies Information Assurance Directorate in both his Military and Civilian Contractor
                  roles. Israel currently supports the European Command JIOCEUR, and United States Cyberspace
                  Command in his Senior ranking reserve role.
                </p>
                <p>
                  After honorably serving his country, Israel has been fortunate to hold various sensitive government
                  contracting positions supporting Department of Defense Cyber Security initiatives. He then accepted a position as a Senior Level Cyber Security Engineer at a nationally recognized 2 billion-
                  dollar Columbus, Ohio based retail corporation. There he gained the in-depth knowledge necessary to implement a secure infrastructure that meets many of today’s Regulatory Compliance Standards.
                  Israel innovatively deployed the experience and security knowledge gained from government and
                  Department of Defense compliance standards and practices, to successfully create and manage the
                  Enterprise Vulnerability Management, Enterprise Encryption and Penetration Testing Programs,
                  which is still followed as of this day by members of the IT Security Staff. Since then, Israel has
                  supported some of the largest financial, retail, insurance, State of Ohio and Department of Defense
                  customers in the Columbus and Dayton Ohio areas.
                </p>

                <p>
                  Israel is an Alum from both Saint Leo University, where he earned his Bachelor of Arts Degree in
                  Criminology, and Capitol College, where he earned his Master’s Degree in Information Assurance
                  and Graduate Certificate in Network Protection. Israel also currently holds the CISSP, GPEN,
                  GWAPT, CEH and CompTIA Security + certifications in good standing.
                </p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TeamComponent"
};
</script>

<style lang="scss" scoped>
/* Mobile Phone Styling */
@media screen and (max-width: 599px) {
  .container {
    padding: 2px !important;
  }
  .card {
    padding-left: 2px !important;
    padding-right: 2px !important;
  }
}
.subheading {
  font-size: 1.3em !important;
}
</style>
