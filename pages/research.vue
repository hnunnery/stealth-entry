<template>
  <div class="research">
    <Logo/>
    <ThreatIQ/>
    <SecureIoT/>
    <SecureBlockchain/>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import ThreatIQ from "@/components/ThreatIQ";
import SecureIoT from "@/components/SecureIoT";
import SecureBlockchain from "@/components/SecureBlockchain";

export default {
  name: "research",
  components: {
    Logo,
    ThreatIQ,
    SecureIoT,
    SecureBlockchain
  },
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | Stealth Research Labs"
  }
};
</script>

<style lang="scss" scoped>
</style>