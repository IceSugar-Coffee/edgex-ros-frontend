<template>
  <div class="ros">
    <img alt="Vue logo" src="../assets/bg_x.png">
    <rosList/>
  </div>
</template>

<script>
import rosList from "@/components/RosList";

export default {
  name: "RosView",
  components: {
    rosList
  }
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
</style>