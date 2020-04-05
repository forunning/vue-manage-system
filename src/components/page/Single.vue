<template>
    <div class="dashWrap">
        <div class="dashboard-bottom">
            <span class="title">地区月份消费</span>
            <div class="block">
                <el-date-picker v-model="month" type="month" placeholder="选择月"></el-date-picker>
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
                <el-date-picker v-model="year" type="year" placeholder="选择年"></el-date-picker>
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
            year:''
        };
    },
    methods: {
        initPeopleChart() {
            let peopleEchart = this.$echarts.init(this.$refs.peopleEchart);
            peopleEchart.setOption({
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
                    data: ['一', '二', '三', '四', '五', '六', '七']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            });
        }, 
        initQuantChart() {
            let peopleEchart = this.$echarts.init(this.$refs.quantEchart);
            peopleEchart.setOption({
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
                    data: ['一', '二', '三', '四', '五', '六', '七']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            });
        },
        initYearChart() {
            let yearEchart = this.$echarts.init(this.$refs.yearEchart);
            yearEchart.setOption({
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
                    data: ['一', '二', '三', '四', '五', '六', '七']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    
                    {
                        name: '大一',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '大二',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '大三',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '大四',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            });
        },
        initCountChart() {
            let countEchart = this.$echarts.init(this.$refs.countEchart);
            countEchart.setOption({
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
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
            });
        },
        initPayChart() {
            let payEchart = this.$echarts.init(this.$refs.payEchart);
            payEchart.setOption({
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
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
            });
        },
        initTimeChart() {
            let timeEchart = this.$echarts.init(this.$refs.timeEchart);
            timeEchart.setOption({
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
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
            });
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
