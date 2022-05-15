<template>
  <el-container style="height: 1000px; border: 1px solid #eee">
    <Aside />
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
};
</script>



<style scoped>
* {
  margin: 0;
  position: relative;
  height: 1100px;
}
</style>