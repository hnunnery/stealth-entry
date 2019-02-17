<template>
  <div class="blog-component hero-background-circuit">
    <div class="row">
      <!-- BLOG POST 1 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog12172018' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_crop,f_auto,g_north,w_1000,h_540,b_black,o_70/v1549426160/StealthEntry/hacker.jpg"
                alt="hacker"
              >
              <span class="card-title">What are the Biggest Cyber Security Threats to Your Business?</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- BLOG POST 2 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog12102018' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_1000,b_black,o_70/v1549426148/StealthEntry/detected.jpg"
                alt="detected"
              >
              <span class="card-title">Five Benefits of an MSSP</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- BLOG POST 3 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog121020182' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_crop,f_auto,g_north,h_540,w_1000,b_black,o_70/v1549425942/StealthEntry/monitors.jpg"
                alt="monitoring"
              >
              <span class="card-title">Curious about hiring a Managed Security Service Provider?</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- BLOG POST 1 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog12172018' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_1000,b_black,o_70/v1549926273/StealthEntry/tiq.jpg"
                alt="network"
              >
              <span class="card-title">Join the Generation of Information Security Leaders</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- BLOG POST 2 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog12102018' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_1000,b_black,o_70/v1549926272/StealthEntry/IoT.jpg"
                alt="iot"
              >
              <span class="card-title">What is your X-Factor?</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- BLOG POST 3 -->
      <div class="col s12 m6 l4">
        <div
          class="card elevation-12 hoverable"
          data-aos="flip-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <router-link :to="{ name: 'Blog121020182' }">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_1000,b_black,o_70/v1549926272/StealthEntry/blockchain.jpg"
                alt="chain"
              >
              <span class="card-title">Critical Incident Management</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- CLOSING TAG FOR ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent"
};
</script>

<style lang="scss" scoped>
.blog-component {
  min-height: 100vh;
  padding: 20px 10px;
  margin: 0;
  @media screen and (min-width: 922px) {
    padding: 40px;
  }
  h4 {
    margin: 0 auto;
  }
  h5 {
    margin: 10px auto;
  }
  p {
    font-size: 1.1em;
  }
  a {
    color: #616161;
  }
  .card-title {
    font-size: 1.7em;
  }
}
@media screen and (min-width: 992px) {
  .hoverable:hover {
    outline: 2px solid var(--orange);
  }
}
</style>
