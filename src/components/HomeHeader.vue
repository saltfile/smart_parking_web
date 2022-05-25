<template>
  <div class="myheader">
    <div class="header">
      <div class="headericon">
        <img
          :src="require(`../assets/${item}`)"
          v-for="(item, i) in icon"
          :key="i"
          style="height: 25px; width: 25px; margin-right: 15px"
        />
      </div>
      <div class="headeruser">
        <el-badge :value="12" class="item" type="warning">
          <img
            src="../assets/msg.png"
            alt=""
            style="height: 25px; width: 25px"
          />
        </el-badge>
        <div class="username" v-if="getLogin">
          <div class="name">{{ getUser.name }},</div>
          <div style="color: gery; font-size: 10px">hello!</div>
        </div>
        <div class="username" v-else>
          <div class="name">游客,</div>
          <div style="color: gery; font-size: 10px">hello!</div>
        </div>
        <div style="margin-left: 5px" v-if="getLogin">
          <el-dropdown trigger="click" @command="handleCommand">
            <el-avatar>
              <img
                :src="require(`../assets/titleimg/${getUser.img[getUserimg]}`)"
              />
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="c">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="margin-left: 5px" v-else>
          <el-dropdown trigger="click" @command="handleCommand">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">登录</el-dropdown-item>
              <el-dropdown-item command="b">注册</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      icon: ["myed.png", "like.png", "ques.png"],
    };
  },
  methods: {
    ...mapMutations(["setUser", "setIsLogin", "setloginState", "setUserimg"]),
    handleCommand(command) {
      if (command == "a") this.$router.push("/login");
      else if (command == "b") this.$router.push("/register");
      else if (command == "c") {
        this.setloginState(false);
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters(["getUser", "getLogin", "getUserimg", "getloginAd"]),
  },
};
</script>

<style scoped>
.myheader {
  background-color: white;
  margin-top: 30px;
  height: 60px;
  width: auto;
  color: #333;
  border-radius: 6px;
  margin-right: 20px;
  box-shadow: 0.2px 0.3px 0.5px rgba(0, 0, 0, 0.024),
    0.6px 0.8px 1.3px rgba(0, 0, 0, 0.035), 1.5px 1.8px 3px rgba(0, 0, 0, 0.046),
    5px 6px 10px rgba(0, 0, 0, 0.07);
}
.headericon {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
}
.header {
  height: 60px;
  display: flex;
  flex-direction: row;
}
.headeruser {
  width: auto;
  margin-right: 40px;
  height: 60px;
  display: flex;
  align-items: center;
}
.username {
  width: 70px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}
.name {
  font-weight: 500;
  font-size: 16px;
  color: #000;
}
</style>