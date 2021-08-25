<template>
  <JqxGauge
    ref="myGauge"
    @valueChanged="valueChanged($event)"
    @valueChanging="valueChanging($event)"
    :value="0"
    :colorScheme="'scheme04'"
    :animationDuration="1500"
    :ranges="ranges"
    :border="{ visible: false }"
    :ticksMinor="ticksMinor"
    :ticksMajor="ticksMajor"
    :labels="{ visible: false, position: 'outside' }"
    :styleProperty="style"
    :caption="caption"
    :cap="'radius: 0.04'"
    :max="70"
  >
  </JqxGauge>
</template>

<script>
import JqxGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgauge.vue";
export default {
  components: {
    JqxGauge,
  },
  props: ["suhu"],
  watch: {
    suhu(val) {
      this.$refs.myGauge.val(val);
      let label = document.querySelector(".jqx-gauge-caption");
      let attrs = {
        x: "50%",
        "dominant-baseline": "middle",
        "text-anchor": "middle",
      };
      for (var key in attrs) {
        label.setAttribute(key, attrs[key]);
      }
    },
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    ticksMinor() {
      return { interval: 5, size: "5%" };
    },
    ticksMajor() {
      return { interval: 10, size: "10%" };
    },
    style() {
      return { stroke: "#ffffff", "stroke-width": "1px", fill: "#eeeee" };
    },
    caption() {
      return { offset: [0, -25], value: "", position: "bottom" };
    },
    ranges() {
      return [
        {
          startValue: 0,
          endValue: 30,
          style: { fill: "#3599DC", stroke: "#3599DC" },
          // startDistance: "5%",
          // endDistance: "5%",
          endWidth: 20,
          startWidth: 20,
        },
        {
          startValue: 31,
          endValue: 50,
          style: { fill: "#F7CC2F", stroke: "#F7CC2F" },
          // startDistance: "5%",
          // endDistance: "5%",
          endWidth: 20,
          startWidth: 20,
        },
        {
          startValue: 51,
          endValue: 70,
          style: { fill: "#EF3A38", stroke: "#EF3A38" },
          // startDistance: "5%",
          // endDistance: "5%",
          endWidth: 20,
          startWidth: 20,
        },
      ];
    },
  },
  mounted() {
    this.$refs.myGauge.value = this.suhu;
  },
  methods: {
    valueChanged(e) {
      console.log("changed", e.args.value);
      this.caption.value = this.suhu;
      this.$refs.myGauge.caption.value = this.suhu;
      console.log(this.$refs.myGauge.caption.value);
      console.log(this.$refs.myGauge);
    },
    valueChanging(e) {
      document.querySelector(".jqx-gauge-caption").innerHTML =
        parseFloat(e.args.value).toFixed(2) + " °C";
    },
  },
};
</script>
<style>
#svgChart circle {
  display: none;
}
</style>