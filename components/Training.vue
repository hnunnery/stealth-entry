<template>
  <v-container fluid id="fullwidth" class="white">
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-flex xs12 class="text-xs-center black">
          <!-- Header -->
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_100,w_1400/v1550452190/StealthEntry/iclass-marketing-header.png"
            alt="iClass Infragard"
            width
            class="responsive-img"
          >
        </v-flex>
        <!-- What is iClass -->
        <v-flex xs12 class="mt-3">
          <h1 class="text-xs-center">What is iClass?</h1>
          <h3 class="text-xs-center">iClass is EC-Council’s Official delivery platform</h3>
          <p
            class="subheader text-xs-center mt-3 px-2"
          >What that means is that if you choose to attend iClass training, your exam will be incthe package and you will not have to apply and prove 2 years of IT Security experience in test!</p>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap justify-center align-center>
            <!-- Videos -->
            <v-flex xs12 md6 lg4 class="pt-4">
              <h5 class="my-2 secondary--text title text-xs-center">CEH Overview</h5>
              <p>
                <iframe
                  style="display:block; margin:0 auto;"
                  src="https://www.youtube.com/embed/MrJj9kRFPO0?rel=0&amp;showinfo=0"
                  width="260"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </p>
            </v-flex>
            <v-flex xs12 md6 lg4 offset-lg-2 class="pt-4">
              <h5 class="my-2 secondary--text title text-xs-center">Online iLabs Demo</h5>
              <p>
                <iframe
                  style="display:block; margin:0 auto;"
                  width="260px"
                  src="https://www.youtube.com/embed/iU_7zKypJZI?rel=0&amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- Training Options -->
        <v-flex xs12 lg10 offset-lg1>
          <v-layout row wrap justify-center align-center class="px-3">
            <v-flex xs12>
              <h2 class="headline mt-5 mb-2 text-xs-center">Choose Your Training Option:</h2>
            </v-flex>
            <v-flex xs12 md6 class="pa-3">
              <img
                style="display:block; float:left; padding:0 5px 0 0;"
                src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1551134826/StealthEntry/eccouncil/self-paced.png"
                alt="Self Paced Training"
              >
              <h5
                class="text-xs-center title"
                style="margin:4px 0;"
              >iLearn, Self-Paced Streaming Video</h5>
              <p
                style="margin:4px 0; font-size:14px; line-height:18px;"
              >Due to its reduced cost and flexibility, iLearn is by far the most requested by Canadian cyber security professionals. iLearn is an asynchronous, self-study environment that delivers EC-Council's IT Security training courses in a streaming video format. All lectures are delivered by a professional practitioner to assure a real-world perspective on the course concepts.</p>
            </v-flex>
            <v-flex xs12 md6 class="pa-3">
              <img
                style="display:block; float:left; padding:0 5px 0 0;"
                src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1551134826/StealthEntry/eccouncil/online.png"
                alt="Live Online Training"
              >
              <h5 class="text-xs-center title" style="margin:4px 0;">iWeek, Live, Online</h5>
              <p
                style="margin:4px 0; font-size:14px; line-height:18px;"
              >This solution is gaining popularity among Canadian cyber security professionals who still like to be in a a live course. This course is instructor-led and gives you the feel of a live course without the additional cost of travel. iWeek comes with a certification exam voucher and extended access to EC-Council's iLabs*, online lab platform.</p>
            </v-flex>
            <v-flex xs12 md6 class="pa-3">
              <img
                style="display:block; float:left; padding:0 5px 0 0;"
                src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1551134826/StealthEntry/eccouncil/in-person.png"
                alt="In Person Training"
              >
              <h5 class="text-xs-center title" style="margin:4px 0;">Instructor-Led Schedule</h5>
              <p style="margin:4px 0; font-size:14px; line-height:18px;">
                For those who want to come and join EC-Council for a live, in-person, Instructor-led course you can view our complete schedule of courses
                <a
                  style="color:#D75C37;"
                  href="https://iclass.eccouncil.org/schedule/"
                  target="_blank"
                >here</a>.
              </p>
            </v-flex>
            <v-flex xs12 md6 class="pa-3">
              <h5 class="text-xs-center title pb-2">Base Package Includes:</h5>
              <ul
                class="text-xs-left base-list"
                style="margin:0; padding:0; list-style-position:outside; font-size:14px;"
              >
                <li style="margin:3px 0;">Instructor led training modules (1 year access)</li>
                <li style="margin:4px 0;">Official e-courseware (1 year access)</li>
                <li style="margin:4px 0;">iLabs access (6 Months Access) (Not applicable to CCISO)</li>
                <li style="margin:4px 0;">Certificate of Completion for each course</li>
                <li style="margin:4px 0;">Exam Voucher</li>
              </ul>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="white--text option-bg text-xs-center pt-4 pb-2">
          <!-- What is iClass -->
          <h2 class="headline white--text pb-5">Choose Your Course:</h2>
          <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2>
            <v-layout row wrap justify-center>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/certified-ethical-hacker/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1551134832/StealthEntry/eccouncil/CEH-Cover-v10-2.jpg"
                      alt="CEH"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/ec-council-certified-chief-information-security-officer-cciso/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://iclass.eccouncil.org/wp-content/uploads/2017/04/CCISO-cover-main.jpg"
                      alt="CCISO"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/certified-network-defender-cnd/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1551134832/StealthEntry/eccouncil/CND-cover-main.jpg"
                      alt="CND"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/pen-testing-certified-security-analystlicensed-pen-tester/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_300/v1551134832/StealthEntry/eccouncil/ECSAV10-Cover.jpg"
                      alt="ECSA"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/computer-hacking-forensic-investigator/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://iclass.eccouncil.org/wp-content/uploads/2017/05/CHFI-cover-main.jpg"
                      alt="CHFI"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
              <v-flex xs6 sm4 md2 class="mb-4">
                <div>
                  <a
                    href="https://iclass.eccouncil.org/product/certified-secure-computer-user/"
                    target="_blank"
                  >
                    <img
                      style="width:100px; display:block; margin:0 auto;"
                      src="https://iclass.eccouncil.org/wp-content/uploads/2017/05/CSCU-cover-main.jpg"
                      alt="CSCU"
                    >
                    <p
                      style="border:1px solid #fff; padding:5px 10px; width:80px; display:block; margin:10px auto;"
                    >Select Options</p>
                  </a>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <!-- Contact -->
          <h2
            class="py-3"
            style="text-align:center; line-height:32px; letter-spacing:1px;"
          >For More Information Please Contact Your Service Representative</h2>
          <table width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td colspan="2" style="background:#222; padding:2px;">
                <div
                  style="height:15px; overflow:hidden; color:#fff; font-size:10px; letter-spacing:1px; text-align:center; font-weight:200;"
                >
                  ©EC-Council 2018 |
                  <a
                    style="color:#fff;"
                    href="https://iclass.eccouncil.org/"
                    target="_blank"
                  >iclass.eccouncil.org</a>
                </div>
              </td>
            </tr>
          </table>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
#fullwidth {
  margin: 0;
  padding: 0;
  width: 100vw;
}
.banner-bg {
  padding-bottom: 0;
  margin-bottom: 0;
}
@media screen and (min-width: 1130px) {
  .base-list {
    margin-left: 150px !important;
  }
}
.option-bg {
  background-color: #001c29;
}
</style>

