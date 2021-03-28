<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardHeader>
          Requests
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CRow>
                <CCol sm="12">
                  <CCallout color="success">
                    <small class="text-muted">Organic</small><br />
                    <strong class="h4">49,123</strong>
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="mt-0" />
              <ul class="horizontal-bars type-2">
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon name="cil-globe-alt" class="progress-group-icon" />
                    <span class="title">Organic Search</span>
                    <span class="ml-auto font-weight-bold">
                      191,235 <span class="text-muted small">(56%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="56"
                      color="success"
                    />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      name="cib-facebook"
                      height="17"
                      class="progress-group-icon"
                    />
                    <span class="title">Facebook</span>
                    <span class="ml-auto font-weight-bold">
                      51,223 <span class="text-muted small">(15%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="15"
                      color="success"
                    />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      name="cib-twitter"
                      height="17"
                      class="progress-group-icon"
                    />
                    <span class="title">Twitter</span>
                    <span class="ml-auto font-weight-bold">
                      37,564 <span class="text-muted small">(11%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="11"
                      color="success"
                    />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      name="cib-linkedin"
                      height="17"
                      class="progress-group-icon"
                    />
                    <span class="title">LinkedIn</span>
                    <span class="ml-auto font-weight-bold">
                      27,319 <span class="text-muted small">&nbsp;(8%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="8" color="success" />
                  </div>
                </div>
                <div class="divider text-center">
                  <CButton color="link" size="sm" class="text-muted">
                    <CIcon name="cil-options" />
                  </CButton>
                </div>
              </ul>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CRow>
                <CCol sm="12">
                  <CCallout color="info">
                    <small class="text-muted">New Clients</small><br />
                    <strong class="h4">9,123</strong>
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="mt-0" />
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" color="info" :value="34" />
                  <CProgress class="progress-xs" color="danger" :value="78" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="56" color="info" />
                  <CProgress class="progress-xs" :value="94" color="danger" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="12" color="info" />
                  <CProgress class="progress-xs" :value="67" color="danger" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="43" color="info" />
                  <CProgress class="progress-xs" :value="91" color="danger" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="22" color="info" />
                  <CProgress class="progress-xs" :value="73" color="danger" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="53" color="info" />
                  <CProgress class="progress-xs" :value="82" color="danger" />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="9" color="info" />
                  <CProgress class="progress-xs" :value="69" color="danger" />
                </div>
              </div>
              <div class="legend text-center">
                <small>
                  <sup><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                  New clients &nbsp;&nbsp;
                  <sup><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                  Recurring clients
                </small>
              </div>
            </CCol>
          </CRow>
          <br />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
export default {
  name: "UserDetail"
};
</script>
