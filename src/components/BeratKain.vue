<template>
  <div class="card p-3 mt-3">
    <p v-for="(berat, i) in dataBerat" :key="i">{{ berat }}</p>
  </div>
</template>

<script>
export default {
  props: ["dataBerat"],
};
</script>

<style>
</style>