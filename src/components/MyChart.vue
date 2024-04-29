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
        getCmdUrl(act) {
            var ip = "172.27.137.1" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":59882/api/v2/device/name/" + this.deviceName + "/" + act
        },
        async getVelocity() {
            return await axios({
                method: 'get',
                url: this.getCmdUrl("velocity")
            })
                .then((response) => parseFloat(response.data.event.readings[0].value))
                .catch(error => console.log(error))
        },
        async drawMyChart() {
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
                            formatter: '{value} m/s',
                            color: 'inherit'
                        },
                        data: [
                            {
                                value: await this.getVelocity()
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
                                    value: await this.getVelocity()
                                }
                            ]
                        }
                    ]
                });
            }, 1000)
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