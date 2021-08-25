import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from "firebase/app";

Vue.use(VueRouter);

const routerOptions = [
  {
    path: "/",
    name: "Home",
    component: "Home",
  },
  {
    path: "/about",
    name: "About",
    component: "About",
  },
  {
    path: "/s",
    name: "Splash Screen",
    component: "SplashScreen",
  },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`),
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
