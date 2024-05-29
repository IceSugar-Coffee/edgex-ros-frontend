<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/bg_x.png">
    <getStart msg="Edge Computing Based Robot System"/>
  </div>
</template>

<script>
// @ is an alias to /src
import getStart from "../components/GettingStarted.vue"
export default {
  // name: 'HomeView',
  components: {
    getStart
  }
}
</script>

<style scoped>
.home {
  padding: 200px 0;
}
</style>
