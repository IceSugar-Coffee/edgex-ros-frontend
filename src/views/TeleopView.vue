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

  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data(){
    return {
    }
  },
  mounted() {
    this.drawMyChart();
  },
  methods: {
    drawMyChart() {
      let chartDom = document.getElementById('main');
      let myChart = echarts.init(chartDom);
      let option;

      option = {
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'inherit',
              distance: 40,
              fontSize: 20
            },
            detail: {
              valueAnimation: true,
              formatter: '{value} m/s',
              color: 'inherit'
            },
            data: [
              {
                value: 70//默认是70 这里改数据
              }
            ]
          }
        ]
      };
      setInterval(function () {
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: +(Math.random() * 100).toFixed(2)
                }
              ]
            }
          ]
        });
      }, 2000);//每两秒生成一个随机数赋值value
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
@import '../assets/css/teleop.css';
</style>