import Vue from "vue";
import Vuex from "vuex";
import core from "./modules/coreui";
import filter from "./modules/filter";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
    filter
  }
});
