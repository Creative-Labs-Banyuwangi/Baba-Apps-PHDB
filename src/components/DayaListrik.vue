<template>
  <div class="card p-3 mt-3">
    <h3>Monitoring Daya Listrik</h3>
    <div class="d-flex">
      <div class="w-50">
        <p>Arus</p>
        <small>{{ data_listrik.arus }}</small>
      </div>
      <div class="w-50">
        <p>Frekuensi</p>
        <small>{{ data_listrik.frekuensi }}</small>
      </div>
    </div>
    <div class="d-flex">
      <div class="w-50">
        <p>Tegangan</p>
        <small>{{ data_listrik.tegangan }}</small>
      </div>
      <div class="w-50">
        <p>Daya</p>
        <small>{{ data_listrik.daya }}</small>
      </div>
    </div>
    <div class="">
      <p>Biaya</p>
      <small>{{ data_listrik.tarif }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data_listrik"],
};
</script>

<style>
</style>