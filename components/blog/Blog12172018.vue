<template>
  <div class="post">
    <div class="center">
      <div class="row">
        <div class="col m10 offset-m1 l8 offset-l2 verbiage">
          <h2
            class="my-header primary--text"
          >What are the Biggest Cyber Security Threats to Your Business</h2>
          <h6 class="secondary--text">Neal Saling - December 17, 2018</h6>
          <div class="divider"></div>
          <div class="text-xs-left secondary--text description">
            <p
              class="flow-text"
            >The cybersecurity landscape is constantly shifting and evolving as new cybersecurity threats and security solutions emerge. Security measures that work against the top cyber threats one day may be rendered obsolete by new types of cyber threats the next. For businesses to minimize their risk of a data security breach, they need to be constantly vigilant of the different types of cyber security threats that they face—both new and old.</p>
          </div>
        </div>
        <div class="col m10 offset-m1 l8 offset-l2 image">
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_crop,f_auto,g_center,w_800,h_432/v1549426160/StealthEntry/hacker.jpg"
            alt="hacker"
            class="responsive-img elevation-12 hoverable"
          >
        </div>
        <div class="col m10 offset-m1 l8 offset-l2 verbiage">
          <div class="text-xs-left secondary--text description">
            <p
              class="flow-text"
            >However, it’s important to remember that there is no single “silver bullet” solution that can address every cyber threat your business faces. There are too many different kinds of cybersecurity threats out there for any one piece of technology to provide complete protection. As such, it’s important to create a comprehensive cybersecurity strategy to protect your business’ most sensitive data—one that covers the biggest cybersecurity threats to your business.</p>
            <ul>
              <li>
                <h5>Here are 5 Cybersecurity threats you should be aware of:</h5>
              </li>
              <li class="flow-text">Cyber Security Threat #1: Insider Threat</li>
              <li class="flow-text">Cyber Security Threat #2: Ransomware</li>
              <li class="flow-text">Cyber Security Threat #3: Uneven Cybersecurity Protections</li>
              <li
                class="flow-text"
              >Cyber Security Threat #4: Unpatched Security Vulnerabilities/Bugs</li>
              <li class="flow-text">Cyber Security Threat #5: DDoS Attacks</li>
            </ul>
            <p
              class="flow-text"
            >Need help protecting your business network from all of the cybersecurity threats on this list? Or, just need advice for minimizing your security risks? Contact the experts at Stealth Entry for more information and advice.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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