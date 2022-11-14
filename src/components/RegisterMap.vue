<template>
  <div class="amap-page-container" style="width: 30vw; height: 95%">
    <el-amap
      ref="map"
      vid="amapDemo"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :plugin="plugin"
      :events="events"
      class="amap-demo"
    >
    </el-amap>
  </div>
</template>
<script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  props: ["optionCity"],
  mounted() {
    this.$bus.$on("onSearchResult", this.onSearchResult);
    this.$bus.$on("sendCenter");
  },
  data() {
    const self = this;
    return {
      searchOption: {
        citylimit: false, //搜索范围//限制搜索范围
      },
      input: "",
      lng: "",
      lat: "",
      address: "",
      marker: "",
      amapManager,
      zoom: 12,
      center: [117.201509, 39.085318],
      events: {
        init: (o) => {
          o.getCity((result) => {});
        },
        click: (e) => {
          self.lng = e.lnglat.lng;
          self.lat = e.lnglat.lat;
          self.center = [self.lng, self.lat];

          let o = amapManager.getMap();
          if (!self.marker) {
            self.marker = new AMap.Marker({
              position: e.lnglat,
            });
            self.marker.setMap(o);
          }
          self.marker.setPosition(e.lnglat);
          let geocoder = new AMap.Geocoder({});

          geocoder.getAddress(e.lnglat, function (status, result) {
            if (status === "complete" && result.regeocode) {
              self.address = result.regeocode.formattedAddress;
              self.sendAddress(self.address);
            } else {
              console.log("根据经纬度查询地址失败");
            }
          });
        },
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                // console.log(JSON.stringify(result));
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.address = result.formattedAddress;
                  self.center = [self.lng, self.lat];
                  //   console.log(self.center, 99666);
                  let o = amapManager.getMap();
                  if (!self.marker) {
                    self.marker = new AMap.Marker({
                      position: self.center,
                    });
                    self.marker.setMap(o);
                  }
                  self.marker.setPosition(self.center);
                }
              });
            },
          },
        },
      ],
    };
  },
  methods: {
    onSearchResult() {
      var that = this;
      AMap.plugin("AMap.Geocoder", function () {
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: "",
        });
        var address = that.optionCity;
        geocoder.getLocation(address, function (status, result) {
          if (address) {
            var lnglat = result.geocodes[0].location;
            console.log(lnglat);
            that.lng = lnglat.lng;
            that.lat = lnglat.lat;
            that.center = [that.lng, that.lat];
            let o = amapManager.getMap();
            if (!that.marker) {
              that.marker = new AMap.Marker({
                position: that.center,
              });
              that.marker.setMap(o);
            }
          } else {
            console.log("根据地址查询位置失败");
          }
        });
      });
    },
    sendAddress(address) {
      this.$bus.$emit("submitAddress", address);
    },
  },
};
</script>
<style scoped>
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}
.amap-page-container {
  position: relative;
}
</style>
