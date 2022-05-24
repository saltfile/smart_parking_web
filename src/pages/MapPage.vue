<template>
  <div class="aMap-wrapper">
    <el-amap
      class="amap-box"
      :zoom="zoom"
      :center="center"
      :mapStyle="mapStyle"
      style="height: 1000px; margin-right: 30px; margin-top: 20px"
    >
      <el-amap-marker
        v-for="marker in markers"
        :position="marker.position"
        :key="marker.id"
        :events="marker.events"
        :icon="marker.icon"
      ></el-amap-marker>
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
        :offset="window.offset"
        :events="window.events"
      />
    </el-amap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 6,
      center: [117.037107, 35.71569],
      showIndoorMap: false,
      mapStyle: "amap://styles/light", //修改地图的背景颜色
      markers: [],
      windows: [],
      window: "",
    };
  },
  methods: {
    point() {
      let markers = [];
      let windows = [];
      let that = this;
      let pointMarker = [
        {
          lng: 117.201509,
          lat: 39.085318,
          stationName: "xxx停车场",
          stationAddress: "天津市东100m", //站址
          parkingSpaces: 500, //流量
          Space: 240,
        },
        {
          lng: 121.126757,
          lat: 31.140653,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m", //站址
          parkingSpaces: 500, //流量
          Space: 240,
        },
        {
          lng: 121.126757,
          lat: 31.140653,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m", //站址
          parkingSpaces: 500, //流量
          Space: 240,
        },
        {
          lng: 113.672544,
          lat: 37.138809,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m", //站址
          parkingSpaces: 500, //流量
          Space: 240,
        },
        {
          lng: 112.065793,
          lat: 38.057122,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m", //站址
          parkingSpaces: 500, //流量
          Space: 240,
        },
      ];
      pointMarker.forEach((item, index) => {
        markers.push({
          position: [item.lng, item.lat],
          events: {
            click() {
              that.window = that.windows[index];
              that.$nextTick(() => {
                that.window.visible = true; //点击点坐标，出现信息窗体
              });
            },
            mouseout() {
              if (that.window.visible) {
                that.closeWindow();
              }
            },
          },
        });
        windows.push({
          position: [item.lng, item.lat],
          content:
            "" +
            "<div>" +
            "停车场名称：" +
            item.stationName +
            "</div>" +
            "<div>" +
            "停车场位置：" +
            item.stationAddress +
            "</div>" +
            "<div>" +
            "车位总数量：" +
            "<span style='color: #66A0FF'>" +
            item.parkingSpaces +
            "</span>" +
            "</div>" +
            "<div>" +
            "剩余车位数量：" +
            "<span style='color: #66A0FF'>" +
            item.Space +
            "</span>" +
            "</div>",
          offset: [5, -15], //窗体偏移
          visible: false, //初始是否显示
        });
      });
      //添加点标注
      this.markers = markers;
      //生成弹窗
      this.windows = windows;
    },
    closeWindow() {
      this.window.visible = false;
    },

  },
  mounted() {
    setTimeout(() => {
      this.point();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
</style>