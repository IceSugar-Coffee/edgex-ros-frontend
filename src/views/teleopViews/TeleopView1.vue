<template>
  <imageShow deviceName="device1"/>
  <controller deviceName="device1"/>
  <chart deviceName="device1"/>
</template>

<script>



import imageShow from "../../components/imageShow.vue"
import chart from "../../components/MyChart.vue"
import controller from "../../components/carController.vue"
export default {
  components: {
    chart,
    imageShow,
    controller
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import '../../assets/css/teleop.css';
</style>