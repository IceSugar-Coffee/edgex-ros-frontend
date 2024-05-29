<template>
    <div class="chart3">
        <div id="main3" style="width: 400px;height:330px;"></div>
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
        async drawMyChart() {
            let chartDom = document.getElementById('main3')
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
                            distance: 30,
                            fontSize: 15
                        },
                        detail: {
                            valueAnimation: true,
                            formatter: '{value} cm/s',
                            color: 'black',
                            fontSize: 18
                        },
                        data: [
                            {
                                value: 15//await this.getVelocity()
                            }
                        ]
                    }
                ]
            }
            setInterval(async () => {
                myChart.setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: (Math.random()*(16.5-14) + 14).toFixed(2)// value: await this.getVelocity()
                                }
                            ]
                        }
                    ]
                });
            }, 300)
            myChart.setOption(option)
        },
    }
}
</script>

<style scoped>
.chart3 {
    font-size: 10px;
    display: flex;
    justify-content: center;
}
</style>