<template>
    <div class="dashWrap">
        <div class="dashboard-bottom">
            <span class="title">地区月份消费</span>
            <div class="block">
                <el-date-picker v-model="month" type="month" placeholder="选择月" @change="refresh"></el-date-picker>
            </div>
            <div id="people" :style="{height:height1,width:width1}" ref="peopleEchart"></div>
        </div>
        <div class="dashboard-bottom">
            <span class="title">地区月份流量</span>
            <div id="quant" :style="{height:height1,width:width1}" ref="quantEchart"></div>
        </div>
        <div class="dashboard-hot">
            <div class="hot-left">
                <div id="left" :style="{height:'100%',width:'100%'}" ref="countEchart"></div>
            </div>
            <div class="hot-right">
                <div id="right" :style="{height:'100%',width:'100%'}" ref="payEchart"></div>
            </div>
        </div>
        <div class="dashboard-bottom">
            <span class="title">地区月份消费</span>
            <div class="block">
                <el-date-picker v-model="year" type="year" placeholder="选择年" @change="refresh1"></el-date-picker>
            </div>
            <div id="year" :style="{height:height1,width:width1}" ref="yearEchart"></div>
        </div>
        <div class="dashboard-main-bottom">
            <p style="margin-top:40px;">Runningheart</p>
            <p>Copyright©2019caimaomao</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            activeName: 'first',
            width: '100%',
            height: '300px',
            isShow: true,
            saleData: [500, 600, 650, 700, 560, 740, 580, 640, 630, 704, 940, 590],
            height1: '550px',
            width1: '100%',
            month: '',
            year: '',
            opinion1:{
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['大一', '大二', '大三', '大四']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19',
                    '20','21','22','23','24','25','26','27','28','29','30']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    }
                ]
            },
            opinion2:{
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['大一', '大二', '大三', '大四']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19',
                    '20','21','22','23','24','25','26','27','28','29','30']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    }
                ]
            },
            opinion3:{
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['大一', '大二', '大三', '大四']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 12;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 12;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 12;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: (function() {
                            var res = [];
                            var len = 12;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    }
                ]
            },
            opinion4:{
                // title: {
                //     text: '某站点用户访问来源',
                //     subtext: '纯属虚构',
                //     left: 'center'
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['大一', '大二', '大三', '大四']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大一' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大二' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大三' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大四' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            opinion5:{
                // title: {
                //     text: '某站点用户访问来源',
                //     subtext: '纯属虚构',
                //     left: 'center'
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['大一', '大二', '大三', '大四']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大一' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大二' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大三' },
                            { value: (function() {
                            return Math.round(Math.random() * 1000);
                        })(), name: '大四' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        };
    },
    methods: {
        refresh() {
            console.log('fresh');
            let peopleEchart = this.$echarts.init(this.$refs.peopleEchart);
            peopleEchart.clear();
            let series = this.opinion1.series;
            for (let i = 0; i < series.length; i++) {
                let len = series[i].data.length;
                series[i].data = [];
                for (let k = 0; k < len; k++) {
                    series[i].data.push(Math.round(Math.random() * 1000));
                }
            }
            this.opinion1.series = series;
            peopleEchart.setOption(this.opinion1);

            let peopleEchart1 = this.$echarts.init(this.$refs.quantEchart);
            peopleEchart1.clear();
            let series2 = this.opinion2.series;
            for (let i = 0; i < series2.length; i++) {
                let len = series2[i].data.length;
                series2[i].data = [];
                for (let k = 0; k < len; k++) {
                    series2[i].data.push(Math.round(Math.random() * 1000));
                }
            }
            this.opinion2.series = series2;
            peopleEchart1.setOption(this.opinion2);

            let peopleEchart3 = this.$echarts.init(this.$refs.countEchart);
            peopleEchart3.clear();
            peopleEchart3.setOption(this.opinion4);
        },
        refresh1() {
            let peopleEchart2 = this.$echarts.init(this.$refs.yearEchart);
            peopleEchart2.clear();

            let series3 = this.opinion3.series;
            for (let i = 0; i < series3.length; i++) {
                let len = series3[i].data.length;
                series3[i].data = [];
                for (let k = 0; k < len; k++) {
                    series3[i].data.push(Math.round(Math.random() * 1000));
                }
            }
            this.opinion2.series = series3;
            peopleEchart2.setOption(this.opinion3);
        },
        initPeopleChart() {
            let peopleEchart = this.$echarts.init(this.$refs.peopleEchart);
            peopleEchart.setOption(this.opinion1);
        },
        initQuantChart() {
            let peopleEchart = this.$echarts.init(this.$refs.quantEchart);
            peopleEchart.setOption(this.opinion2);
        },
        initYearChart() {
            let yearEchart = this.$echarts.init(this.$refs.yearEchart);
            yearEchart.setOption(this.opinion3);
        },
        initCountChart() {
            let countEchart = this.$echarts.init(this.$refs.countEchart);
            countEchart.setOption(this.opinion4);
        },
        initPayChart() {
            let payEchart = this.$echarts.init(this.$refs.payEchart);
            payEchart.setOption(this.opinion5);
        },
        init() {
            //const self = this; //因为箭头函数会改变this指向，指向windows。所以先把this保存
            // setTimeout(() => {
            //   window.onresize = function() {
            //     self.chart = this.$echarts.init(self.$refs.saleEchart);
            //     self.chart.resize();
            //     alert('wufangjian');
            //   };
            // }, 1000);
        }
    },
    mounted() {
        this.initPeopleChart();
        this.initQuantChart();
        this.initYearChart();
        this.initCountChart();
        this.initPayChart();
        this.init();
    }
};
</script>
<style scoped>
.block {
    float: right;
}
.title {
    padding: 8px 8px 8px 12px;
    font-size: 22px;
    line-height: 1.5;
    color: #24292e;
    font-weight: 600;
}
.dashWrap {
    flex: 1;
    /*background:#fff;*/
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
.dashboard-top {
    flex: 0 0 180px;
    display: flex;
    margin: 10px;
}
.dash-detail {
    flex: 1;
    background: #fff;
    margin-right: 20px;
    padding: 20px;
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0 0 3px #ccc;
    color: #242f42;
}
.dash-detail-last {
    margin-right: 0;
}
.dashboard-center {
    flex: 0 0 400px;
    background: #fff;
    margin: 10px;
    padding: 10px;
}
.dashboard-hot {
    flex: 0 0 500px;
    margin: 10px;
    display: flex;
}
.hot-left {
    flex: 1;
    background: #fff;
    margin-right: 20px;
}
.hot-right {
    flex: 1;
    background: #fff;
}
.dashboard-bottom {
    flex: 0 0 600px;
    background: #fff;
    margin: 10px;
}
.dashboard-main-bottom {
    flex: 0 0 150px;
    text-align: center;
}
.dashboard-main-bottom p {
    line-height: 40px;
}
</style>
