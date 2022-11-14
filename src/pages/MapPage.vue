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
        :content="window.content"
        :offset="window.offset"
        :events="window.events"
        :close-when-click-map="true"
      >
        <MapContent
          v-show="showInfoWindow"
          :getItem="getItem"
          :markerPrice="markerPrice"
          :window="window"
        />
      </el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
import MapContent from "@/components/MapContent.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      showInfoWindow: false,
      zoom: 6,
      center: [117.037107, 35.71569],
      showIndoorMap: false,
      mapStyle: "amap://styles/light",
      markers: [],
      windows: [],
      window: "",
      windowkey: "",
    };
  },
  methods: {
    ...mapMutations([
      "setPrice",
      "setItem",
      "setIndex",
      "setName",
      "setAddress",
      "setParkingSpaces",
      "setSpace",
    ]),
    point() {
      let markers = [];
      let windows = [];
      let that = this;
      let pointMarker = that.getMarker;
      pointMarker.forEach((item, index) => {
        markers.push({
          position: [item.lng, item.lat],
          events: {
            click() {
              that.windows.forEach((window) => {
                window.visible = false; //关闭窗体
              });
              that.window = that.windows[index];
              that.setItem(item);
              that.setIndex(index);
              that.$nextTick(() => {
                that.showInfoWindow = true;
                // that.showinfoWindow = true;
                that.window.visible = true;
              });
            },
          },
        });
        windows.push({
          position: [item.lng, item.lat],
          offset: [5, -15],
          visible: false, //初始是否显示
        });
      });
      //添加点标注
      this.markers = markers;
      //生成弹窗
      this.windows = windows;
    },
    markerPrice(price, name, address, allspaces, onlyspaces) {
      this.setPrice(price);
      this.setName(name);
      this.setAddress(address);
      this.setParkingSpaces(allspaces);
      this.setSpace(onlyspaces);
    },
  },
  mounted() {
    setTimeout(() => {
      this.point();
    }, 500);
  },
  computed: {
    ...mapGetters(["getMarker", "getItem"]),
  },
  components: { MapContent },
};
</script>

<style lang="scss" scoped></style>
