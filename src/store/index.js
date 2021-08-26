import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import "firebase/auth";
import "firebase/messaging";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    loading: true,
    hardwareData: null,
    splashFrom: "",
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setTarif(state, payload) {
      state.tarif = payload;
    },
    setData(state, payload) {
      state.hardwareData = payload;
    },
    setSplash(state, payload) {
      state.splashFrom = payload;
    },
  },
  actions: {
    getData({ commit }) {
      commit("setLoading", true);
      db.ref("/").on("value", (data) => {
        commit("setData", data.val());
        commit("setLoading", false);
      });
    },
    setTarif({ commit }, payload) {
      return new Promise((resolve) => {
        db.ref("TARIF")
          .set(payload)
          .then(() => {
            commit("setTarif", payload);
            resolve(payload);
          });
      });
    },
    setSplash({ commit }, payload) {
      commit("setSplash", payload);
    },
  },
  modules: {},
});
