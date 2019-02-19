<template>
  <div>
    <Hero/>
    <Hire/>
    <CyberSecurityServices/>
    <SecurityAssessments/>
    <CloudService/>
    <CyberSecurityTraining/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Hire from "@/components/Hire";
import CyberSecurityServices from "@/components/CyberSecurityServices";
import SecurityAssessments from "@/components/SecurityAssessments";
import CloudService from "@/components/CloudService";
import CyberSecurityTraining from "@/components/CyberSecurityTraining";

export default {
  name: "index",
  components: {
    Hero,
    Hire,
    CyberSecurityServices,
    SecurityAssessments,
    CloudService,
    CyberSecurityTraining
  },
  data() {
    return {};
  }
};
</script>