<template>
  <div id="id" class="font">Please press wasd to drive the car</div>
  <div id="cmd" class="font">&nbsp;</div>
  <div id="speed" class="font">0.00 m/s</div>
  <div id="angular" class="font">Straight</div>
  <div class="btn">
    <button onclick="forward()">Start</button>
    <button onclick="stop()">Stop</button>
  </div>

  <div class="control-wrapper">
    <div class="control-btn control-top" onclick="forward()"></div>
    <div class="control-btn control-left" onclick="left()"></div>
    <div class="control-btn control-bottom" onclick="backward()"></div>
    <div class="control-btn control-right" onclick="right()"></div>
    <div class="control-round">
      <div class="control-round-inner" onclick="stop()"></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/css/teleop.css';
</style>