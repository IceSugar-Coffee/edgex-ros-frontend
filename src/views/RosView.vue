<template>
  <div class="roslist">
    <img alt="Vue logo" src="../assets/bg_x.png">
    <rosList msg="Welcome To Ros-view!"/>
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

</style>