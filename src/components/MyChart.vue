<template>
    <div class="chart">
        <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';
export default {
    data() {
        return {
        }
    },
    props: {
        deviceName: String
    },
    mounted() {
        this.drawMyChart()
    },
    methods: {
        getCmdUrl() {
            var ip = "localhost" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":8080/" + this.deviceName + "/getVelocity"
        },
        async getVelocity() {
            return await axios({
                method: 'get',
                url: this.getCmdUrl()
            })
                .then((response) => parseFloat(response.data.event.readings[0].value))
                .catch(error => console.log(error))
        },
        drawMyChart() {
            let chartDom = document.getElementById('main')
            let myChart = echarts.init(chartDom)
            let option = {
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
                            formatter: '{value} cm/s',
                            color: 'black'
                        },
                        data: [
                            {
                                value: 0//await this.getVelocity()
                            }
                        ]
                    }
                ]
            }
            myChart.setOption(option)
            console.log("time" + Date.now())
            setTimeout(() => {
                console.log("thimeout" + Date.now())
                setInterval(() => {
                    myChart.setOption({
                        series: [
                            {
                                data: [
                                    {
                                        value: (Math.random() * (16.5 - 14.8) + 14.8).toFixed(2)// value: await this.getVelocity()
                                    }
                                ]
                            }
                        ]
                    });
                }, 300)
            }, 16500)
            myChart.setOption(option)
        },

    }
}
</script>

<style scoped>
.chart {
    display: flex;
    justify-content: center;
}
</style>