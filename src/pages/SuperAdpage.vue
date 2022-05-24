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
        { name: "主页", icon: "el-icon-s-data" },
        { name: "停车场分布图", icon: "el-icon-edit" },
        { name: "停车场信息", icon: "el-icon-shopping-bag-1" },
        { name: "订单信息", icon: "el-icon-s-finance" },
      ],
      routers: ["/superhome", "/superhome/map", "/superhome/table","/superhome/order"],
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