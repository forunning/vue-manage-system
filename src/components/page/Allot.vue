<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">小时代</div>
                <div class="item-ul" id="list" name="小时代">
                    <div
                        v-for="(item,index) in items"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">第一食堂</div>
                <div class="item-ul" id="list1" name="第一食堂">
                    <div
                        v-for="(item,index) in items1"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">第二食堂</div>
                <div class="item-ul" id="list2" name="第二食堂">
                    <div
                        v-for="(item,index) in items2"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">大礼堂</div>
                <div class="item-ul" id="list3" name="大礼堂">
                    <div
                        v-for="(item,index) in items3"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">桃李苑</div>
                <div class="item-ul" id="list4" name="桃李苑">
                    <div
                        v-for="(item,index) in items4"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" class="drag-box-item">
                <div class="item-title">未划分</div>
                <div class="item-ul" id="list5" name="未划分">
                    <div
                        v-for="(item,index) in items5"
                        :key="index"
                        :value="item.id"
                        class="drag-list"
                    >
                        <p>
                            <b>{{item.nm}}</b>
                        </p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Sortable from 'sortablejs';
export default {
    data() {
        return {
            uwasc: true,
            idx: '1',
            items: [
                {
                    id: 1,
                    nm: '一号机'
                },
                {
                    id: 2,
                    nm: '二号机'
                }
            ],
            items1: [
                {
                    id: 7,
                    nm: '七号机'
                },
                {
                    id: 8,
                    nm: '八号机'
                }
            ],
            items2: [
                {
                    id: 5,
                    nm: '五号机'
                },
                {
                    id: 6,
                    nm: '六号机'
                }
            ],
            items3: [
                {
                    id: 3,
                    nm: '三号机'
                },
                {
                    id: 4,
                    nm: '四号机'
                }
            ],
            items4: [
                {
                    id: 9,
                    nm: '九号机'
                },
                {
                    id: 10,
                    nm: '十号机'
                }
            ],
            items5: [
                {
                    id: 11,
                    nm: '十一号机'
                },
                {
                    id: 12,
                    nm: '十二号机'
                }
            ]
        };
    },
    mounted() {
        var _this = this;
        var $ul = document.getElementById('list');
        new Sortable($ul, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
        var $ul1 = document.getElementById('list1');
        new Sortable($ul1, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
        var $ul2 = document.getElementById('list2');
        new Sortable($ul2, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
        var $ul3 = document.getElementById('list3');
        new Sortable($ul3, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
        var $ul4 = document.getElementById('list4');
        new Sortable($ul4, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
        var $ul5 = document.getElementById('list5');
        new Sortable($ul5, {
            group: 'share',
            animation: 150,
            onEnd: function(/**Event*/ evt) {
                setTimeout(() => {
                    var itemEl = evt.item; // dragged HTMLElement
                    console.log(evt);
                    console.log(itemEl.getAttribute('value'));
                    _this.$message({
                        // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                        message: '移动成功',
                        type: 'success'
                    });
                }, 1000);
            }
        });
    },
    methods: {
        btnUp(index) {
            var item = this.items[index];
            this.items.splice(index, 1);
            this.items.unshift(item);
        }
    }
};
</script>
<style scoped>
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.drag-box {
    display: flex;
    user-select: none;
}
.drag-box-item {
    background-color: #eff1f5;
    border-radius: 6px;
    border: 1px #e1e4e8 solid;
}
.item-title {
    padding: 8px 8px 8px 12px;
    font-size: 20px;
    line-height: 1.5;
    color: #24292e;
    font-weight: 600;
}
.item-ul {
    padding: 0 8px 8px;
    height: 500px;
    overflow-y: scroll;
}
.item-ul::-webkit-scrollbar {
    width: 0;
}
.drag-list {
    border: 1px #e1e4e8 solid;
    padding: 10px;
    margin: 5px 0 10px;
    list-style: none;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    -webkit-transition: border 0.3s ease-in;
    transition: border 0.3s ease-in;
}
.drag-list:hover {
    border: 1px solid #20a0ff;
}
.drag-title {
    font-weight: 400;
    line-height: 25px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.ghost-style {
    display: block;
    color: transparent;
    border-style: dashed;
}
</style>
