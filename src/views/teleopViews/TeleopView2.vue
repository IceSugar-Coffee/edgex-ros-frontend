<template>
  <TeleopHead deviceName="device2" />
  <div class="container">
    <div class="left-panel">
      <!-- <imageShow deviceName="device2" /> -->
    </div>
    <div class="right-panel">
      <controller deviceName="device2" />
      <chart deviceName="device2" />
      <velocityForm deviceName="device2" />
      <gensui2/>
    </div>
  </div>
</template>

<script>
// import imageShow from "../../components/imageShow.vue"
import chart from "../../components/MyChart.vue"
import controller from "../../components/carController.vue"
import TeleopHead from "../../components/TeleopHead.vue"
import velocityForm from "../../components/velocityButton2.vue"
import gensui2 from "../../components/genSui2.vue"


export default {
  components: {
    chart,
    // imageShow,
    controller,
    TeleopHead,
    velocityForm,
    gensui2
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
  width: 1000px;
  /* flex: 1; */
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

/* .imageShow {
  flex: 1;
  justify-content: center;
} */

.controller {
  flex: 1;
  justify-content: center;
}

.velocityForm {
  justify-content: center;
  flex: 1;
}
.TeleopHead {
  margin-bottom-end: 200px;
}
</style>
