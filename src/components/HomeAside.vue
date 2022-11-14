<template>
  <el-aside>
    <div class="logo_test">
      <div class="logo">
        <img src="../assets/logo.png" style="height: 50px; width: 50px" />
      </div>
      <div class="title">玉衡系统</div>
      <div class="icon">
        <img
          src="../assets/parking.png"
          style="height: 25px; width: 25px; margin-top: 5px; margin-left: 20px"
        />
      </div>
    </div>
    <el-menu
      v-for="(item, i) in menulist"
      :key="i"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      text-color="#858585"
      active-text-color="#A96DFB"
      @select="switchTo(i)"
    >
      <el-menu-item :index="String(i)">
        <template slot="title">
          <i
            class="icon"
            :class="item.icon"
            style="
              pointer-events: none;
              font-size: 18px !important;
              margin-right: 10px;
            "
          ></i>
          <span
            class="text"
            slot="title"
            style="pointer-events: none; font-size: 18px !important"
            >{{ item.name }}</span
          >
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: ["menulist", "routers"],
  data() {
    return {
      activeIndex: this.getindex(),
    };
  },
  methods: {
    switchTo(index) {
      this.activeIndex = String(index);
      this.$router.push(this.routers[index]);
    },
    getindex() {
      for (let i = 0; i < this.routers.length; i++) {
        if (this.$route.path == this.routers[i]) {
          return String(i);
        }
      }
    },
  },
  watch: {
    $route() {
      for (let i = 0; i < this.routers.length; i++) {
        if (this.$route.path == this.routers[i]) {
          this.activeIndex = String(i);
        }
      }
    },
  },
};
</script>

<style scoped>
.el-aside {
  background-color: white;
  margin-right: 30px;
  width: 290px;
  border-radius: 10px;
  box-shadow: 0.1px 0px 0.3px rgba(0, 0, 0, 0.024),
    0.3px 0.1px 0.8px rgba(0, 0, 0, 0.035),
    0.6px 0.3px 1.8px rgba(0, 0, 0, 0.046), 2px 1px 6px rgba(0, 0, 0, 0.07);
}

.logo_test {
  background-color: white;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo {
  height: 60px;
  width: 60px;
  margin-left: 20px;
}

.title {
  color: #877ae7;
  font-weight: 500;
  line-height: 60px;
  font-size: 25px;
  height: 60px;
  width: 120px;
  margin-left: 15px;
}

.el-menu {
  height: 60px;
  line-height: 60px;
  margin: 10px 10px 10px 10px;
}

.el-menu-item:focus,
.el-menu-item:hover {
  margin-left: 10px;
  margin-right: 10px;
  background-image: linear-gradient(
    to bottom right,
    rgba(117, 79, 231, 0.845),
    rgba(166, 145, 241, 0.786)
  );
  border-radius: 6px;
  box-shadow: 0.4px 0.3px 0.2px rgba(0, 0, 0, 0.022),
    1px 0.7px 0.6px rgba(0, 0, 0, 0.031), 1.9px 1.4px 1.2px rgba(0, 0, 0, 0.039),
    4px 2.9px 2.6px rgba(0, 0, 0, 0.048), 11px 8px 7px rgba(0, 0, 0, 0.07);
}
.el-menu-item:hover .icon {
  color: white;
}
.el-menu-item:hover .text {
  color: white;
}
.el-menu-item:focus .icon {
  color: white;
}
.el-menu-item:focus .text {
  color: white;
}
</style>
