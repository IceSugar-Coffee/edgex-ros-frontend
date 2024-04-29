<template>
  <TeleopHead deviceName="device2"/>
  <imageShow deviceName="device2"/>
  <controller deviceName="device2"/>
  <chart deviceName="device2"/>
</template>

<script>



import imageShow from "../../components/imageShow.vue"
import chart from "../../components/MyChart.vue"
import controller from "../../components/carController.vue"
import TeleopHead from "../../components/TeleopHead.vue"
export default {
  components: {
    chart,
    imageShow,
    controller,
    TeleopHead
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