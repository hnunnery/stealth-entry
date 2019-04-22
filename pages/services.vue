<template>
  <div>
    <CyberSecurityServices/>
    <SecurityAssessments/>
    <CloudService/>
    <CyberSecurityTraining/>
  </div>
</template>

<script>
import CyberSecurityServices from "@/components/CyberSecurityServices";
import SecurityAssessments from "@/components/SecurityAssessments";
import CloudService from "@/components/CloudService";
import CyberSecurityTraining from "@/components/CyberSecurityTraining";

export default {
  name: "services",
  components: {
    CyberSecurityServices,
    SecurityAssessments,
    CloudService,
    CyberSecurityTraining
  },
  head() {
    return {
      titleTemplate: "%s Services"
    };
  }
};
</script>

