module.exports = {
  pwa: {
    name: "BaBa Apps",
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
