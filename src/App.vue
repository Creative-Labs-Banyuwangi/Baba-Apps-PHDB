<template>
  <div class="h-100">
    <div class="container d-flex justify-content-between py-3">
      <div class="d-flex">
        <button
          class="btn btn-nav mr-4"
          @click="$router.push('/')"
          v-show="$route.path != '/' && $route.path != '/s'"
        >
          <i class="mdi mdi-chevron-left"></i>
        </button>
        <img src="/img/ristek.png" height="40px" class="mr-3" />
        <img src="/img/vokasi.png" height="40px" class="mr-3" />
        <img src="/img/logo-poliwangi.png" height="40px" class="mr-3" />
        <img src="/img/PHDB.png" height="40px" class="mr-3" />
        <img src="/img/robotika.jpg" height="40px" class="mr-3" />
      </div>
      <button
        class="btn btn-nav"
        style="margin-top: -3px"
        @click="$router.push('/about')"
        v-show="$route.path != '/about' && $route.path != '/s'"
      >
        <i class="mdi mdi-information-outline"></i>
      </button>
    </div>

    <router-view />

    <footer class="bg-secondary" :class="$route.path == '/s' ? 'absolute' : ''">
      <small>PHDB Robotika Poliwangi &copy; 2021</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    dark: true,
    routeName: "",
  }),

  created() {},
  mounted() {
    this.$router.afterEach((to, from) => {
      if (from.name == null) {
        this.$store.dispatch("setSplash", to.path);
        setTimeout(() => {
          this.$router.replace("/s");
        }, 200);
      }
    });
  },

  computed: {
    messages() {
      return this.$store.state.notificationCount;
    },
    hardwareData() {
      return this.$store.state.hardwareData;
    },
    dataBerat() {
      return this.$store.state.aturData.berat;
    },
  },
};
</script>

<style>
h6 {
  font-size: 1.1rem;
}
</style>
