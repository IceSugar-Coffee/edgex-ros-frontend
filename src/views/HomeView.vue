<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/bg_x.png">
    <getStart msg="Welcome To Our Edgex-ROS App!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import getStart from "../components/GettingStarted.vue"
export default {
  name: 'HomeView',
  components: {
    getStart
  }
}
</script>
