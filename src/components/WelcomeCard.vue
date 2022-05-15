<template>
  <div class="welcome">
    <el-avatar v-if="getLogin" :size="70" style="margin-top: 60px">
      <img :src="require(`../assets/titleimg/${getUser.img[getUserimg]}`)" />
    </el-avatar>
    <el-avatar
      :size="70"
      :src="circleUrl"
      style="margin-top: 60px"
      v-else
    ></el-avatar>
    <h1
      style="
        color: white;
        margin-top: 50px;
        font-size: 30px;
        font-family: Arial;
        font-weight: 400;
      "
    >
      welcome {{ getLogin ? getUser.name : "游客" }}!
    </h1>
    <h2
      style="color: white; margin-top: 20px; font-size: 18px; font-weight: 400"
    >
      A special and healing way to pursue dreams
    </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  computed: {
    ...mapGetters(["getUser", "getLogin","getUserimg"]),
  },
};
</script>

<style scoped>
.welcome {
  border-radius: 8px;
  height: 350px;
  width: 640px;
  background-image: linear-gradient(
      to top,
      rgb(180, 167, 255),
      rgba(255, 255, 255, 0)
    ),
    url("../assets/welcome.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0.2px 0.3px 0.5px rgba(0, 0, 0, 0.024),
    0.6px 0.8px 1.3px rgba(0, 0, 0, 0.035), 1.5px 1.8px 3px rgba(0, 0, 0, 0.046),
    5px 6px 10px rgba(0, 0, 0, 0.07);
}
</style>>