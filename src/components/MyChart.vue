<template>
    <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
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
    }
}
</script>