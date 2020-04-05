
<template>
    <div class="content">
        <div class="amap-wrapper">
            <el-amap class="amap-box" :zoom="zoom" :center="center">
                <el-amap-marker
                    v-for="(marker, index) in markers"
                    :position="marker.position"
                    :vid="index"
                    :key="index"
                    rotateEnable="true"
                ></el-amap-marker>
                <el-amap-polygon
                    v-for="(polygon, index) in polygons"
                    :vid="index"
                    :key="index"
                    :ref="`polygon_${index}`"
                    :path="polygon.path"
                    :draggable="polygon.draggable"
                    fillColor="FFFFFF"
                    fillOpacity=0
                ></el-amap-polygon>
            </el-amap>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            center: [118.379259, 31.285229], //地图中心点坐标
            zoom: 16, //初始化地图显示层级
            // mapStyle: 'amap://styles/8b6be8ec497009e17a708205348b899a' //设置地图样式
            markers: [
                {
                    position: [118.38164, 31.284881],
                    events: {
                        click: () => {
                            alert('click marker');
                        },
                        dragend: e => {
                            console.log('---event---: dragend');
                            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                        }
                    },
                    visible: true,
                    draggable: false,
                    template: '<span>1</span>'
                }
            ],
            polygons: [
                {
                    draggable: false,
                    path: [
                        [118.374323, 31.275262],
                        [118.385868, 31.276582],
                        [118.38119, 31.292903],
                        [118.373251, 31.292096],
                        [118.374323, 31.275262]
                    ]
                }
            ]
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.amap-wrapper {
    width: 100%;
    height: 800px;
}
</style>