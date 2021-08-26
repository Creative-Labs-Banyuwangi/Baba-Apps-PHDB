<template>
  <div class="container d-flex" style="height: 80vh">
    <div class="d-flex flex-column m-auto">
      <div
        class="
          border border-5 border-dark
          rounded-circle
          logo-splash
          m-auto
          mt-5
          d-flex
        "
      >
        <img src="/img/gajah-oling.png" alt="" class="h-100 p-3 mx-auto" />
      </div>
      <div
        class="text-center border border-5 border-dark p-3 mt-4"
        style="border-radius: 12px"
      >
        <h1>BABA Apps</h1>
        <h5>Batik Batara Apps</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      let path = this.$store.state.splashFrom;
      this.$router.replace(path == "/s" ? "/" : path);
      setTimeout(() => {
        this.$store.dispatch("setSplash", false);
      }, 100);
    }, 3000);
  },
};
</script>

<style>
</style>