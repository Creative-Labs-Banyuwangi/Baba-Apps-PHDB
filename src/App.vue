<template>
  <div class="h-100">
    <offline v-if="!isOnline" />
    <template v-else>
      <div class="container d-flex justify-content-between py-3">
        <div class="d-flex">
          <button
            class="btn btn-nav mr-4"
            @click="$router.push('/')"
            v-show="$route.path != '/'"
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
          @click="$router.push('/about')"
          v-show="$route.path != '/about' && $route.path != '/s'"
        >
          <i class="mdi mdi-information-outline"></i>
        </button>
      </div>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/s">Splash</router-link> -->
      <router-view />

      <footer class="bg-secondary">
        <small>PHDB Robotika Poliwangi &copy; 2021</small>
      </footer>
    </template>
  </div>
</template>

<script>
// import axios from "axios";
import Offline from "@/components/Offline";

export default {
  name: "App",

  components: {
    Offline,
  },

  data: () => ({
    dark: true,
    routeName: "",
  }),

  watch: {
    $route() {
      // console.log(this.$store.state.user);
    },
  },

  created() {
  },
  mounted() {
    console.log(this.$route);
    // this.$router.afterEach((to, from) => {
    //   if (from.name == null) {
    //     this.$router.push('/s');
    //   }
    // })
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

  methods: {},
};
</script>
