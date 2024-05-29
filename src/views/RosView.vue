<template>
  <div class="ros">
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

.ros{
  padding: 200px 0;
  width: 1500px;
  margin-left: auto;
  margin-right: auto;
}
</style>