<template>
  <v-container fluid id="fullwidth" class="mb-5">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md8 offset-md-2 lg6>
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1549426148/StealthEntry/detected.jpg"
          alt="hacking detected"
          class="responsive-img elevation-12"
        >
      </v-flex>
      <v-flex xs12 md8 offset-md-2 lg6 class="md-and-up-padding-y5">
        <h2
          class="my-header primary--text text-xs-center display-3 mt-2 font-weight-light"
        >Cyber Security Services</h2>
        <v-divider class="my-2"></v-divider>
        <div class="text-xs-left secondary--text subheading px-2">
          <p>
            Our Cyber Intelligence operators and analysts are highly
            trained team members with years of experience in the Department of Defense and Industry Technology
            enterprises with high level industry security certifications, so you know you are getting quality
            professionals handling your cyber security needs!
          </p>
        </div>
        <v-layout>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs12 md6 class="text-xs-center">
                <ul>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet">
                        <v-btn slot="activator" class="white--text gradient">Penetration Testing</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Penetration Testing</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>Stealth Entry’s team of Certified Penetration Testers has the credentials and experience to secure your network infrastructure and your applications. We conduct comprehensive Penetration Tests with actionable results. Our Security Consultants test your network infrastructure, systems, and/or applications with proven, industry standard methodologies such as the Penetration Testing Execution Standard (PTES).</p>
                              <ul>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Testing of infrastructure, systems, and applications
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Red Team Assessments
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Web Application Security Assessments
                                </li>
                              </ul>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet2">
                        <v-btn
                          slot="activator"
                          class="white--text gradient"
                        >Vulnerability Assessment</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Vulnerability Assessment</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>Conducting a Vulnerability Assessment is a complex undertaking for any organization. Stealth Entry’s exceptional analysts will identify your exposure to risks and vulnerabilities and provide a quantitative analysis of all findings. Our analyses provide a realistic view of your organization’s risks and vulnerabilities and give insight into where to invest resources to reduce your risk exposure and increase your security posture.</p>
                              <ul>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Software Vulnerabilities
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Appliance Vulnerabilities
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Environment Risks
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Cyber Risks for Client's Industry
                                </li>
                              </ul>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet3">
                        <v-btn slot="activator" class="white--text gradient">Incident Response</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Incident Response</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>No matter how much planning and defense-in-depth is put into action, intruders sometimes get through the wire, compromising networks, servers, and applications. Stealth Entry’s highly experienced staff of digital forensics specialists and reverse engineers provide outstanding Incident Response services, either at the client’s site or remotely.</p>
                              <ul>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Digital Forensics
                                </li>
                                <li>
                                  <i class="fas fa-check primary--text"></i> Reverse Engineering
                                </li>
                              </ul>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                </ul>
              </v-flex>
              <v-flex xs12 md6 class="text-xs-center">
                <ul>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet4">
                        <v-btn slot="activator" class="white--text gradient">Application Security</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Application Security Management</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>Stealth Entry’s Application Security Consultants ensure your source code and third-party applications are written and deployed securely in your environment. We will discover vulnerabilities and design mitigating or compensating security measures before deployment, reducing your risk exposure.</p>
                              <p
                                class="text-xs-center primary--text"
                              >Code Review – we specialize in the following languages:</p>
                              <ul class="languages text-xs-center">
                                <li>Assembly</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>Ruby</li>
                              </ul>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet5">
                        <v-btn slot="activator" class="white--text gradient">Project Management</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Project Management</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>Stealth Entry is ready to assist you in initiating, planning, executing, controlling, and closing the work as a team. Our number one goal is to achieve specific goals and meet specific success criteria at the specified time.</p>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                  <li>
                    <div class="text-xs-center">
                      <v-bottom-sheet v-model="sheet6">
                        <v-btn slot="activator" class="white--text gradient">Software Development</v-btn>

                        <v-layout white justify-center align-center>
                          <v-flex xs12 class="penetration-testing text-xs-center py-4">
                            <h4
                              class="my-header primary--text text-xs-center display-1 font-weight-light pb-1"
                            >Software Development</h4>
                            <v-divider></v-divider>
                            <div class="text-xs-left secondary--text pt-2">
                              <p>Stealth Entry can assist you in the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.</p>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-bottom-sheet>
                    </div>
                  </li>
                </ul>
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
  name: "CyberSecurityServices",
  data() {
    return {
      sheet: false,
      sheet2: false,
      sheet3: false,
      sheet4: false,
      sheet5: false,
      sheet6: false
    };
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
  @media screen and (min-width: 960px) {
    margin-top: 50px;
  }
}
button {
  width: 240px;
}
.penetration-testing {
  max-width: 800px;
  padding: 20px;
  @media screen and (min-width: 960px) {
    padding: 50px;
  }
}
ul.languages li {
  display: inline-block;
  margin: 0 5px;
}
</style>
