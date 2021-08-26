<template>
  <div class="mt-3">
    <h6 class="font-weight-bold">Monitoring Berat Kain</h6>
    <div class="card py-1 px-4 mt-2 mb-4">
      <div class="py-3 separator-line" v-for="(berat, i) in dataBerat" :key="i">
        <div class="d-flex justify-content-between">
          <b>Kain {{ i + 1 }}</b>
          <b>{{ berat }} gram</b>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%"></div>
        </div>
        <div class="d-flex justify-content-between">
          <b class="text-primary">Basah</b>
          <b class="text-danger">Kering</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataBerat"],
};
</script>
