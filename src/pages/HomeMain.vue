<template>
  <div class="main">
    <div class="mainitem">
      <WelcomeCard />
      <MainCard v-if="getloginAd() !== 'ParkingAd'" :index="1" />
      <MainCard v-else :index="0" />
      <MainCard :index="2" />
      <Echart v-if="getloginAd() !== 'ParkingAd'" :ParkingAd="getParkingAd()"/>
      <Echart v-else :ParkingAd="getParkingAd()"/>
      <MoneyCard />
    </div>
  </div>
</template>

<script>
import MainCard from "../components/MainCard.vue";
import Echart from "../components/EchartCard.vue";
import MoneyCard from "@/components/MoneyCard.vue";
import WelcomeCard from "@/components/WelcomeCard.vue";
import { mapGetters } from "vuex";
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
    ...mapGetters(["getloginAd"]),
    getVal(val) {
      this.islogin = val;
    },
    getParkingAd(){
      return this.getloginAd()
    }
  },
};
</script>

<style scoped>
.main {
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
  justify-content: space-around;
}
</style>
