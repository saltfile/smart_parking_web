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
        v-for="(marker, index) in markers"
        :position="marker.position"
        :key="index"
        :events="marker.events"
        :icon="marker.icon"
      ></el-amap-marker>
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :offset="window.offset"
        :events="window.events"
        :content="window.content"
        :close-when-click-map="true"
      >
      </el-amap-info-window>
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
      mapStyle: "amap://styles/light",
      markers: [],
      windows: [],
      window: "",
      pointMarker: [
        {
          lng: 117.201509,
          lat: 39.085318,
          stationName: "xxx停车场",
          stationAddress: "天津市东100m",
          parkingSpaces: 500,
          Space: 240,
          price: 8,
        },
        {
          lng: 121.126757,
          lat: 31.140653,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m",
          parkingSpaces: 500,
          Space: 240,
          price: 5,
        },
        {
          lng: 121.126757,
          lat: 31.140653,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m",
          parkingSpaces: 500,
          Space: 240,
          price: 10,
        },
        {
          lng: 113.672544,
          lat: 37.138809,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m",
          parkingSpaces: 500,
          Space: 240,
          price: 8,
        },
        {
          lng: 112.065793,
          lat: 38.057122,
          stationName: "xxx停车场",
          stationAddress: "上海市牛头山路东100m",
          parkingSpaces: 500,
          Space: 240,
          price: 6,
        },
      ],
    };
  },
  created() {
    window.changePrice = this.changePrice;
    window.saveVal = this.saveVal; // content 中的点击事件方法
  },
  methods: {
    point() {
      let markers = [];
      let windows = [];
      let that = this;
      let infoWindow = new AMap.InfoWindow({
        content: that.$refs.infoWindow.$el,
      });
      let pointMarker = that.pointMarker;
      pointMarker.forEach((item, index) => {
        markers.push({
          position: [item.lng, item.lat],
          events: {
            click() {
              that.windows.forEach((window) => {
                window.visible = false; //关闭窗体
              });
              that.window = that.windows[index];
              that.$nextTick(() => {
                that.showinfoWindow = true;
                that.window.visible = true; //点击点坐标，出现信息窗体
              });
            },
          },
        });
        windows.push({
          position: [item.lng, item.lat],
          content: 
        `
          <div>停车场名称：${item.stationName}</div>
          <div>停车场位置：${item.stationAddress}</div>
          <div>车位总数量：<span style='color: #66A0FF'>${item.parkingSpaces}</span></div>
          <div>剩余车位数量：<span style='color: #66A0FF'>${item.Space}</span></div>
          <div>价格：<span v-if="!change" style='color: #66A0FF'>${item.price}</div>
          <button onclick="changePrice('${index}')">修改价格</button>`,
          offset: [5, -15],
          visible: false, //初始是否显示
        });
      });
      //添加点标注
      this.markers = markers;
      //生成弹窗
      this.windows = windows;
    },
    changePrice(item) {
      this.window.content = `
            <div>停车场名称：${this.pointMarker[item].stationName}</div>
            <div>停车场位置：${this.pointMarker[item].stationAddress}</div>
            <div>车位总数量：<span style='color: #66A0FF'>${this.pointMarker[item].parkingSpaces}</span></div>
            <div>剩余车位数量：<span style='color: #66A0FF'>${this.pointMarker[item].Space}</span></div>
            <div>价格： <input value='${this.pointMarker[item].price}' onkeydown="if(event.keyCode==13) saveVal(value,'${item}')"></input></div>`;
    },
    saveVal(value, index) {
      this.pointMarker[index].price = value;
      this.window.content = `
            <div>停车场名称：${this.pointMarker[index].stationName}</div>
            <div>停车场位置：${this.pointMarker[index].stationAddress}</div>
            <div>车位总数量：<span style='color: #66A0FF'>${this.pointMarker[index].parkingSpaces}</span></div>
            <div>剩余车位数量：<span style='color: #66A0FF'>${this.pointMarker[index].Space}</span></div>
            <div>价格：<span style='color: #66A0FF'>${this.pointMarker[index].price}</div>
            <button onclick="changePrice('${index}')">修改价格</button>`;
    },
  },
  mounted() {
    setTimeout(() => {
      this.point();
    }, 500);
    console.log(this)
  },

};
</script>

<style lang="scss" scoped>
</style>