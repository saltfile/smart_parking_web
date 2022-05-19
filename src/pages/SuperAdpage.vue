<template>
  <el-container style="height: 1000px; border: 1px solid #eee">
    <Aside :menulist="menulist" :routers="routers" />
    <el-container style="display: flex !important; flex-direction: column">
      <Header />
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/HomeAside.vue";
import Header from "../components/HomeHeader.vue";
export default {
  components: {
    Aside,
    Header,
  },
  data() {
    return {
      menulist: [
        { name: "车位流量表", icon: "el-icon-s-data" },
        { name: "停车场查询", icon: "el-icon-edit" },
        { name: "订单记录", icon: "el-icon-shopping-bag-1" },
      ],
      routers: ["/superhome", "/superhome/map", "/superhome/HomeFourth"],
    };
  },
};
</script>



<style scoped>
* {
  margin: 0;
  position: relative;
  height: 1100px;
}
</style>