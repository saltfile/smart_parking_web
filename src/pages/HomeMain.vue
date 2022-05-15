<template>
  <div class="main">
    <div class="mainitem">
      <WelcomeCard v-if="islogin"/>
      <WelcomeCard v-else />
      <MainCard :index="0" />
      <MainCard :index="2" />
      <Echart />
      <MoneyCard />
    </div>
  </div>
</template>

<script>
import MainCard from "../components/MainCard.vue";
import Echart from "../components/EchartCard.vue";
import MoneyCard from "@/components/MoneyCard.vue";
import WelcomeCard from "@/components/WelcomeCard.vue";
export default {
  components: {
    MainCard,
    Echart,
    MoneyCard,
    WelcomeCard,
  },
  data() {
    return {
      islogin: false,
      uname: "",
      index: 0,
    };
  },
  mounted() {
    this.$bus.$on("getVal", this.getVal);
  },
  methods: {
    getVal(val){
      this.islogin = val
      console.log('我接收到了值')
    }
  },
  watch:{
  }
};
</script>

<style scoped>
.main {
  min-width: 1400px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-right: 20px;
  background-color: rgb(248, 248, 248);
}

.mainitem {
  margin-right: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
