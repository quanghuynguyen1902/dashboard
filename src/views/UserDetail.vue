<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardHeader>
          Requests
        </CCardHeader>
        <CCardBody>
          <method-chart></method-chart>
          <br />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
import MethodChart from "@/components/charts/MethodChart";
export default {
  name: "UserDetail",
  components: {
    MethodChart
  }
};
</script>
