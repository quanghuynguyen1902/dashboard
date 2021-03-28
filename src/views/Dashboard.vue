<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <div class="button-table">
              <CButton color="dark" size="sm" @click="openFilter = true">
                Filter
                <CIcon name="cil-filter" height="15"></CIcon>
              </CButton>
            </div>
            <CModal
              title="Options"
              :closeOnBackdrop="false"
              :show.sync="openFilter"
            >
              <filter-component></filter-component>
              <div slot="footer" class="w-100">
                <CButton
                  color="light"
                  class="ml-1 mr-1 float-right"
                  @click="openFilter = false"
                >
                  Cancel
                </CButton>
                <CButton
                  color="success"
                  class="ml-1 mr-1 float-right"
                  @click="filterFuntion"
                >
                  Apply
                </CButton>
              </div>
            </CModal>
          </CCardHeader>

          <CCardBody>
            <CDataTable
              :items="items"
              :fields="fields"
              items-per-page-select
              :items-per-page="10"
              hover
              sorter
              pagination
            >
              <template #status="{item}">
                <td>
                  <CBadge :color="getBadge(item.status)">
                    {{ item.status }}
                  </CBadge>
                </td>
              </template>
              <template #show_details="{item, index}">
                <td class="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    square
                    size="sm"
                    @click="toggleDetails(item, index)"
                  >
                    {{ Boolean(item._toggled) ? "Hide" : "Show" }}
                  </CButton>
                </td>
              </template>
              <template #details="{item}">
                <CCollapse
                  :show="Boolean(item._toggled)"
                  :duration="collapseDuration"
                >
                  <detail-request :item="item"></detail-request>
                </CCollapse>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
const items = [
  {
    username: "Samppa Nori",
    registered: "2012/01/01",
    role: "Member",
    status: "Active"
  },
  {
    username: "Estavan Lykos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned"
  },
  {
    username: "Chetan Mohamed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive"
  },
  {
    username: "Derick Maximinus",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending"
  },
  {
    username: "Friderik Dávid",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active"
  },
  {
    username: "Yiorgos Avraamu",
    registered: "2012/01/01",
    role: "Member",
    status: "Active"
  },
  {
    username: "Avram Tarasios",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned"
  },
  {
    username: "Quintin Ed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive"
  },
  {
    username: "Enéas Kwadwo",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending"
  },
  {
    username: "Agapetus Tadeáš",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active"
  },
  {
    username: "Carwyn Fachtna",
    registered: "2012/01/01",
    role: "Member",
    status: "Active"
  },
  {
    username: "Nehemiah Tatius",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned"
  },
  {
    username: "Ebbe Gemariah",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive"
  },
  {
    username: "Eustorgios Amulius",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending"
  },
  {
    username: "Leopold Gáspár",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active"
  },
  {
    username: "Pompeius René",
    registered: "2012/01/01",
    role: "Member",
    status: "Active"
  },
  {
    username: "Paĉjo Jadon",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned"
  },
  {
    username: "Micheal Mercurius",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive"
  },
  {
    username: "Ganesha Dubhghall",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending"
  },
  {
    username: "Hiroto Šimun",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active"
  },
  {
    username: "Vishnu Serghei",
    registered: "2012/01/01",
    role: "Member",
    status: "Active"
  },
  {
    username: "Zbyněk Phoibos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned"
  },
  {
    username: "Einar Randall",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive"
  },
  {
    username: "Félix Troels",
    registered: "2012/03/21",
    role: "Staff",
    status: "Active"
  },
  {
    username: "Aulus Agmundr",
    registered: "2012/01/01",
    role: "Member",
    status: "Pending"
  }
];

import FilterComponent from "@/components/FilterComponent";
import DetailRequest from "@/components/DetailRequest";
export default {
  name: "Dashboard",
  components: {
    FilterComponent,
    DetailRequest
  },
  data() {
    return {
      openFilter: false,
      collapseDuration: 0,
      items: items.map((item, id) => {
        return { ...item, id };
      }),
      fields: [
        { key: "username" },
        { key: "registered" },
        { key: "role" },
        { key: "status" },
        {
          key: "show_details",
          label: "Detail",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ]
    };
  },
  methods: {
    filterFuntion() {
      this.openFilter = false;
    },
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    }
  }
};
</script>

<style lang="scss">
.button-table {
  font-size: 25px;
  text-align: right;
}
</style>
