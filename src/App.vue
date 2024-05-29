<template>
  <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <img style="height:80%" src="./assets/bg_x.png" alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/"><el-icon><HomeFilled /></el-icon>主页</el-menu-item>
    <el-menu-item index="/roslist"><el-icon><Operation /></el-icon>设备列表</el-menu-item>
    <el-menu-item index="/map"><el-icon><MapLocation /></el-icon>三维地图</el-menu-item>
  </el-menu>
  <router-view />
</template>
<script>
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

.el-menu--horizontal>.el-menu-item {
  font-size: 20px;
}

</style>
