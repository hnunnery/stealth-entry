<template>
  <div class="post">
    <div class="center">
      <div class="row">
        <div class="col m10 offset-m1 l8 offset-l2 verbiage">
          <h2
            class="my-header primary--text"
          >Curious about hiring a Managed Security Service Provider?</h2>
          <h6 class="secondary--text">Neal Saling - December 10, 2018</h6>
          <div class="divider"></div>
          <div class="text-xs-left secondary--text description">
            <p
              class="flow-text"
            >MSSPs can operate completely in the cloud, manage equipment that is physically placed on your company network, or offer a hybrid solution, using cloud-based tools to manage on-premises equipment.</p>
          </div>
        </div>
        <div class="col m10 offset-m1 l8 offset-l2 image">
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,w_800/v1549425942/StealthEntry/monitors.jpg"
            alt="monitoring"
            class="responsive-img elevation-12 hoverable"
          >
        </div>
        <div class="col m10 offset-m1 l8 offset-l2 verbiage">
          <div class="text-xs-left secondary--text description">
            <p
              class="flow-text"
            >Enterprise security cannot be procrastinated. No matter the size of your business or your specific industry, a security breach is not something any company wants to experience.</p>
            <br>
            <h5>Three Key Benefits of hiring a MSSP with Stealth Entry:</h5>
            <ol>
              <li class="flow-text">Access to security experts and latest tech</li>
              <li class="flow-text">Increased flexibility & lower costs</li>
              <li class="flow-text">Improved confidentially, compliance and business reputation</li>
            </ol>
            <br>
            <h5>Safeguarding your business & reducing stress</h5>
            <p
              class="flow-text"
            >Remember, you don't have to do security alone. With cybercrime on the rise, MSSPs can help extend your team, protect your organization and optimize your security resources. The right partner can play a critical role in improving customer experiences, innovation, and stakeholder value, and take the pressure off your team.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog12102018",
  metaInfo: {
    titleTemplate: "%s | Blog"
  }
};
</script>

<style lang="scss" scoped>
.post {
  min-height: 100vh;
  .image {
    padding: 0;
    margin: 0;
  }
  @media screen and (min-width: 601px) {
    margin-top: 30px;
  }
  h5 {
    font-size: 1.4em;
    font-weight: 500;
  }
  .divider {
    margin-bottom: 20px;
  }
  .description {
    font-size: 1.2em;
  }
}
</style>