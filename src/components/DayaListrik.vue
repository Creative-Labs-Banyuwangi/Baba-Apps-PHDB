<template>
  <div class="mt-3">
    <h6 class="font-weight-bold">Monitoring Daya Listrik</h6>
    <div class="card p-3 mt-2 mb-4">
      <div class="d-flex">
        <div class="w-50 mb-3 text-center">
          <p>Arus</p>
          <p class="h4">{{ data_listrik.arus }} A</p>
        </div>
        <div class="w-50 mb-3 text-center">
          <p>Frekuensi</p>
          <p class="h4">{{ data_listrik.frekuensi }} Hz</p>
        </div>
      </div>
      <div class="d-flex">
        <div class="w-50 mb-2 text-center">
          <p>Tegangan</p>
          <p class="h4">{{ data_listrik.tegangan }} V</p>
        </div>
        <div class="w-50 mb-2 text-center">
          <p>Daya</p>
          <p class="h4">{{ data_listrik.daya }} W</p>
        </div>
      </div>
      <div class="m-1">
        <p>Tetapan Biaya (Rp.)</p>
        <div class="d-flex">
          <input
            type="number"
            class="form-control"
            placeholder="Atur berdasarkan data"
            v-model.number="tarif"
            @keyup="setTarif()"
          />
          <button
            class="btn btn-primary ml-3 px-3"
            @click="setTarif()"
            :disabled="loading"
          >
            {{ loading ? "Loading" : "Simpan" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data_listrik"],
  data() {
    return {
      loading: false,
      tarif: this.data_listrik.tarif,
    };
  },
  watch: {
    data_listrik(val) {
      this.tarif = val.tarif;
    },
  },
  methods: {
    setTarif() {
      this.loading = true;
      this.$store.dispatch("setTarif", this.tarif).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style>
p {
  padding: 0;
  margin: 0;
}
</style>