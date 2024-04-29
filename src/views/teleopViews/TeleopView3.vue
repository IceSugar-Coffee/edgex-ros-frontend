<template>
  <TeleopHead deviceName="device3" />
  <div class="container">
    <div class="left-panel">
      <imageShow deviceName="device3" />
    </div>
    <div class="right-panel">
      <controller deviceName="device3" />
      <chart deviceName="device3" />
      <velocityForm deviceName="device3" />
    </div>
  </div>
</template>

<script>
import imageShow from "../../components/imageShow.vue"
import chart from "../../components/MyChart.vue"
import controller from "../../components/carController.vue"
import TeleopHead from "../../components/TeleopHead.vue"
import velocityForm from "../../components/velocityButton.vue"

export default {
  components: {
    chart,
    imageShow,
    controller,
    TeleopHead,
    velocityForm
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
@import '../../assets/css/teleop.css';

.container {
  display: flex;
  justify-content: center;
}

.left-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chart {
  flex: 1;
  justify-content: center;
}

.imageShow {
  flex: 1;
  justify-content: center;
}

.controller {
  flex: 1;
  justify-content: center;
}

.velocityForm {
  justify-content: center;
  flex: 1;
}
</style>
