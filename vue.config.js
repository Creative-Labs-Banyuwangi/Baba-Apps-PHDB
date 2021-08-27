module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "BABA Apps",
    themeColor: "#e6455a",
    start_url: "/",
    manifestOptions: {
      background_color: "#fff ",
      orientation: "portrait"
    },
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
};
