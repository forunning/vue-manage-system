<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>超级管理员</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2020-3-04 19：12：56</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:252px;overflow:auto">
                    <div slot="header" class="clearfix">
                        <span>地区金额占比与排行</span>
                    </div>小时代
                    <el-progress :percentage="32.3" color="#42b983"></el-progress>第一食堂
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>第二食堂
                    <el-progress :percentage="20.7"></el-progress>桃李苑
                    <el-progress :percentage="9.5" color="#f56c6c"></el-progress>大礼堂
                    <el-progress :percentage="11.4" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户量/日</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>使用总次数/日</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>总金额/日</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-card shadow="hover" style="height:403px;">
                            <div :style="{height:'400px',width:'100%'}" ref="countchart"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-card shadow="hover">
                    <div :style="{height:'500px',width:'100%'}" ref="echart"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('username'),
            option: {
                title: {
                    text: '实时流量与金额动态统计图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    data: ['流量', '金额']
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function() {
                            var now = new Date();
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                                now = new Date(now - 2000);
                            }
                            return res;
                        })()
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function() {
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(10 - len - 1);
                            }
                            return res;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: '流量',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: '金额',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: '流量',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: (function() {
                            var res = [];
                            var len = 10;
                            while (len--) {
                                // res.push(Math.round(Math.random() * 1000));
                                res.push(0);
                            }
                            return res;
                        })()
                    },
                    {
                        name: '金额',
                        type: 'line',
                        data: (function() {
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                // res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                                res.push(0);
                                len++;
                            }
                            return res;
                        })()
                    }
                ]
            }
        };
    },
    mounted() {
        this.initPeopleChart();
        this.initCountChart();
    },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        },
        initPeopleChart() {
            let peopleEchart = this.$echarts.init(this.$refs.echart);
            peopleEchart.setOption({
                title: {
                    text: '校园实时消费动态图',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['消费总额', '平均消费']
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
                    data: [
                        '1:00',
                        '2:00',
                        '3:00',
                        '4:00',
                        '5:00',
                        '6:00',
                        '7:00',
                        '8:00',
                        '9:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                        '16:00',
                        '17:00',
                        '18:00',
                        '19:00',
                        '20:00',
                        '21:00',
                        '22:00',
                        '23:00',
                        '24:00'
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                color: ['#08979c', '#c41d7f'], //修改legend的颜色
                series: [
                    {
                        name: '客流量',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#08979c' //修改折线的颜色
                                }
                            }
                        },
                        data: [230, 210, 220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330]
                    },
                    {
                        name: '花费额',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#c41d7f'
                                }
                            }
                        },
                        data: [
                            100,
                            1820,
                            1910,
                            2340,
                            2900,
                            3300,
                            3100,
                            2820,
                            1910,
                            2340,
                            2900,
                            3300,
                            3100,
                            2200,
                            2220,
                            3820,
                            2110,
                            2340,
                            2400,
                            3100
                        ]
                    }
                ]
            });
        },
        initCountChart() {
            let myChart = this.$echarts.init(this.$refs.countchart);
            let count = 11;
            const _this = this;
            setInterval(function() {
                _this.http.post(_this.api.getcount).then(res => {
                    if (res.status == 200) {
                        var axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');

                        var data0 = _this.option.series[0].data;
                        var data1 = _this.option.series[1].data;

                        data0.shift();
                        data0.push(Math.round(Math.random() * 1000));
                        data1.shift();
                        // data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        data1.push(res.data);
                        _this.option.xAxis[0].data.shift();
                        _this.option.xAxis[0].data.push(axisData);
                        _this.option.xAxis[1].data.shift();
                        _this.option.xAxis[1].data.push(count++);

                        myChart.setOption(_this.option);
                    }
                });
            }, 2100);
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
</style>
