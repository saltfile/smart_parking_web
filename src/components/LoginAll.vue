<template>
  <form :class="isParking ? 'sign-in-form' : 'sign-up-form'">
    <h2 class="form-title">{{ loginswitch }}</h2>
    <input placeholder="用户名" />
    <input type="password" placeholder="密码" />
    <div class="submit-btn" @click.stop="parkinglogin">立即登录</div>
    <a
      href="javascript:void(0);"
      v-if="isParking"
      @click="gotoRegister"
      style="text-decoration: none"
      >还没有账号？立即注册</a
    >
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["loginswitch", "isParking"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setUserimg", "setloginState", "setloginAd"]),
    ...mapGetters(["getloginAd", "getToken"]),
    parkinglogin() {
      this.setloginState(true);
      if (this.isParking) {
        this.setloginAd("ParkingAd");
        // localStorage.clear();
        // localStorage.setItem("info", 1);
        // localStorage["flag"] = 1;
        // // localStorage.setItem('flag',1)
        // sessionStorage.clear();
        // // sessionStorage['userid']=JSON.stringify(res.data.userInfo.id)
        // sessionStorage.setItem("userid", JSON.stringify(this.getUser.id));
        // sessionStorage["token"] = JSON.stringify(this.getToken());
        // this.$message({
        //   message: "登录成功",
        //   type: "success",
        // });
        this.$router.push("/Home");
      } else {
        this.setloginAd("SuperAd");
        this.$router.push("/superhome");
      }
      this.setUserimg();
    },
    gotoRegister() {
      this.$router.push("/register");
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style scoped>
.sign-in-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  /* 将两个 form 布局在 grid 同一位置 */
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  transition: all 0.2s 0.7s;
  opacity: 1;
  z-index: 4;
}
.form-title {
  color: #8a7cf6;
}
.form-warp .sign-up-form {
  opacity: 0;
  z-index: 3;
}
.container.sign-up-mode .form-warp {
  left: 25%;
}
.container.sign-up-mode .sign-in-form {
  opacity: 0;
  z-index: 3;
}
.container.sign-up-mode .sign-up-form {
  opacity: 1;
  z-index: 4;
}
input,
.submit-btn {
  min-width: 300px;
  outline: none;
  padding: 12px 30px;
  line-height: 1;
  font-size: 16px;
  border-radius: 60px;
  color: #333;
  background-color: #6267f513;
  border: none;
}
input::placeholder {
  color: #cccc;
}
.submit-btn {
  background-color: #8a7cf6;
  color: #fff;
  text-align: center;
  min-width: 150px;
  font-size: initial;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
}
</style>
