<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CInput label="User" placeholder="Enter user" />
      </CCol>
      <CCol sm="6">
        <CSelect
          label="Method"
          :options="['GET', 'POST', 'PUT', 'DELETE', 'OPTION']"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6">
        <CInput label="Url" placeholder="Enter url" />
      </CCol>
      <CCol sm="6">
        <CSelect
          label="TimeFrame"
          :options="[
            'This past hour',
            'This past day',
            'This past week',
            'This past month',
            'This past year'
          ]"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      item: 1
    };
  }
};
</script>
