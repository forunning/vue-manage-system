<template>
    <div class>
        <div class="container">
            <el-collapse
                accordion
                style="overflow:auto;height:700px"
                class="infinite-list"
                v-infinite-scroll="load"
            >
                <el-collapse-item
                    v-for="item in change"
                    :key="item.id"
                    :title="item.time"
                    class="infinite-list-item"
                >
                    <div>{{item.message}}</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {
    name: 'changelog',
    data() {
        return {
            change: []
        };
    },
    created() {
        this.http.post(this.api.changelog,{now:0,count:2}).then(res => {
            if (res.status == 200) {
                this.change = res.data;
            }
        });
    },
    methods: {
        load() {
            console.log('自动加载');
        }
    },
    computed: {}
};
</script>

<style>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 100%;
}
</style>

