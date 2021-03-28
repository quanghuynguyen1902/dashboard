<template>
  <CCardBody style="background-color: #fffaf1">
    <CRow>
      <CCol sm="3">
        <span class="d-block font-weight-bold">User</span>
        <span class="d-block">{{ item.username }}</span>
      </CCol>
      <CCol sm="3">
        <span class="d-block font-weight-bold">Register</span>
        <span class="d-block">{{ item.registered }}</span>
      </CCol>
      <CCol sm="3">
        <span class="d-block font-weight-bold">Role</span>
        <span class="d-block">{{ item.role }}</span>
      </CCol>
      <CCol sm="3">
        <span class="d-block font-weight-bold">Status</span>
        <span class="d-block">{{ item.status }}</span>
      </CCol>
    </CRow>
  </CCardBody>
</template>

<script>
export default {
  name: "DetailRequest",
  props: {
    item: {
      type: Object
    }
  }
};
</script>
