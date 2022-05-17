<template>
  <div>
    <div>
      <!-- 高德地图 -->
      <div id="container"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.getLocation();
    }, 500);
  },
  methods: {
    getLocation() {
      // 从高德地图api获取浏览器定位
      const that = this;
      var geocoder = AMap.plugin("AMap.Geolocation", function () {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });
        geocoder.getLocation(city, function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // result中对应详细地理坐标信息
          }
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
        }

        function onError() {
          // 定位出错
          that.getLatLngLocation();
        }
      });
    },
    getLatLngLocation() {
      AMap.plugin("AMap.CitySearch", function () {
        let citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            AMap.plugin("AMap.Geocoder", function () {
              let geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode,
              });
              let lnglat = result.rectangle.split(";")[0].split(",");
              geocoder.getAddress(lnglat, function (status, data) {
                if (status === "complete" && data.info === "OK") {
                  // data为对应的地理位置详细信息
                }
              });
            });
          }
        });
      });
    },
  },
};
</script>
<style>
#container {
  width: 100%;
  height: 600px;
}
#search {
  z-index: 999;
  position: absolute;
  left: 100px;
  top: 30px;
  opacity: 0.8;
}
#details {
  z-index: 999;
  position: absolute;
  right: 0px;
  top: 0px;
  opacity: 0.8;
}
</style>