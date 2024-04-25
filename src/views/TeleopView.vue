<template>
  <div id="id" class="font">Please press wasd to drive the car</div>
  <div id="cmd" class="font">&nbsp;</div>
  <div id="speed" class="font">0.00 m/s</div>
  <div id="angular" class="font">Straight</div>
  <div class="btn">
    <button @click="forward()">Start</button>
    <button @click="stop()">Stop</button>
  </div>

  <div class="control-wrapper">
    <div class="control-btn control-top" @click="forward()"></div>
    <div class="control-btn control-left" @click="left()"></div>
    <div class="control-btn control-bottom" @click="backward()"></div>
    <div class="control-btn control-right" @click="right()"></div>
    <div class="control-round">
      <div class="control-round-inner" @click="stop()"></div>
    </div>
  </div>

  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
  data() {
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
    },
    getUrl(act) {
      //TODO 此处act和device profile并不对应, 需要修改 
      var ip = "172.19.140.143" //对应broker代理机的地址, edgex核心服务也要在这台机器上
      var devicename = "ros-test" //对应创建的设备名称
      return "http://" + ip + ":59882/api/v2/device/name/" + devicename + "/" + act
      // return "http://" + ip + ":59882/api/v2/device/name/" + devicename + "/run" //测试用
    },
    forward() {
      axios({
        method: 'put',
        url: this.getUrl("run"),
        data: {
          run: true
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    left() {
      axios({
        method: 'put',
        url: this.getUrl("left"),
        data: {
          left: true
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    right() {
      axios({
        method: 'put',
        url: this.getUrl("right"),
        data: {
          right: true
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    backward() {
      axios({
        method: 'put',
        url: this.getUrl("backward"),
        data: {
          backward: true
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    stop() {
      axios({
        method: 'put',
        url: this.getUrl("stop"),
        data: {
          stop: true
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
@import '../assets/css/teleop.css';
</style>