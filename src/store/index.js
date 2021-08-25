import Vue from "vue";
import Vuex from "vuex";
// import firebase from "firebase/app";
import { db } from "../firebase";
import "firebase/auth";
import "firebase/messaging";
import router from "@/router";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    loading: true,
    hardwareData: null
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
  },
  actions: {
    getData({ commit }) {
      commit(`setLoading`, true);
      db.ref('/').on("value", (data) => {
        commit(`setData`, data.val());
        commit(`setLoading`, false);
      });
    },
    setTarif(commit, payload) {
      db.ref("TARIF")
        .set(payload)
        .then(router.push("/"));
    },
  },
  modules: {},
});
