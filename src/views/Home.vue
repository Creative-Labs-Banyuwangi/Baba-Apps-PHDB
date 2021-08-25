<template>
  <div class="container">
    <div class="d-flex">
      <img
        src="/img/gajah-oling.png"
        alt=""
        class="logo-between-text left p-3 mx-auto"
      />
      <div class="text-center">
        <h1>Baba Apps</h1>
        <small>Batik Batara Aplikasi</small>
        <div class="text-left card p-3 mt-3">
          <p>
            Baba Apps adalah sebuah Aplikasi yang digunakan untuk memonitoring
            suhu, konsumsi listrik, dan monitoring berat kain untuk memastikan
            kain batik sudah kering atau belum pada alat Batik Smart Dryer.
          </p>
        </div>
      </div>
      <img
        src="/img/gajah-oling.png"
        alt=""
        class="logo-between-text right p-3 mx-auto"
      />
    </div>

    <temperature-gauge :suhu="suhu" />
    <daya-listrik :data_listrik="{arus, frekuensi, tegangan, daya, tarif}"/>
    <berat-kain :dataBerat="berat" />
  </div>
</template>

<script>
import TemperatureGauge from "@/components/TemperatureGauge";
import DayaListrik from "@/components/DayaListrik";
import BeratKain from "@/components/BeratKain";
export default {
  name: "Home",
  components: { TemperatureGauge, DayaListrik, BeratKain },
  created() {
    this.$store.dispatch("getData");
  },
  mounted() {
    // this.$store.dispatch("requestPermission");
  },
  data: () => ({
    progressColor: {
      brown: "#FDAE20",
      blue: "#108fca",
    },
  }),
  computed: {
    kadarAir() {
      if (this.hardwareData.beratTimbangan < this.dataBerat.kering) {
        return "off";
      } else {
        const percentage =
          ((this.hardwareData.beratTimbangan - this.dataBerat.kering) /
            (this.dataBerat.basah - this.dataBerat.kering)) *
          100;
        if (percentage == 0) return 0.01;
        else return percentage.toFixed(2);
      }
    },
    tingkatKekeringan() {
      if (this.kadarAir == 0) return 100;
      else if (this.kadarAir == 100) return 0.001;
      else return (100 - this.kadarAir).toFixed(2);
    },
    suhu() {
      return this.$store.state.hardwareData?.SUHU;
    },
    tarif() {
      return this.$store.state.hardwareData?.TARIF;
    },
    arus() {
      return this.$store.state.hardwareData?.ARUS;
    },
    frekuensi() {
      return this.$store.state.hardwareData?.FREKUENSI;
    },
    tegangan() {
      return this.$store.state.hardwareData?.TEGANGAN;
    },
    daya() {
      return this.$store.state.hardwareData?.DAYA;
    },
    berat() {
      return [1, 2, 3, 4, 5].map((val) => {
        return this.$store.state.hardwareData?.[`BERAT_${val}`] ?? 0;
      });
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    openToolCover() {
      if (this.isOpened) {
        this.$store.dispatch("setToolData", 0);
      } else this.$store.dispatch("setToolData", 1);
    },
  },
};
</script>
