<template>
  <div
    :class="
      isParking ? 'desc-warp-item sign-up-desc' : 'desc-warp-item sign-in-desc'
    "
  >
    <div class="content" v-if="loginswitch">
      <button id="sign-up-btn" @click="switchlogin">{{ loginswitch }}</button>
    </div>
    <img :src="require(`../assets/${loginimg}`)" alt="" />
  </div>
</template>
<script>
export default {
  props: ["loginswitch", "loginimg", "isParking", "loginsuper", "loginstopad"],
  data() {
    return {};
  },
  methods: {
    switchlogin() {
      if (this.loginsuper) {
        this.loginsuper();
      } else {
        this.loginstopad();
      }
    },
  },
};
</script>
<style scoped>
.sign-in-desc {
  pointer-events: none;
}
.sign-up-mode .sign-in-desc {
  pointer-events: all;
}
.sign-up-mode .sign-up-desc {
  pointer-events: none;
}
/* 事件穿透 END */
.content {
  width: 550px;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}
.sign-in-desc img,
.sign-in-desc .content {
  transform: translateX(800px);
}
.sign-up-mode .sign-in-desc img,
.sign-up-mode .sign-in-desc .content {
  transform: translateX(0);
}

.sign-up-mode .sign-up-desc img,
.sign-up-mode .sign-up-desc .content {
  transform: translateX(-800px);
}

button {
  outline: none;
  padding: 6px 8px;
  min-width: 100px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #fff;
  background: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:active {
  /*//白色*/
  background: rgba(255, 255, 255, 0.1);
}
img {
  width: 100%;
  display: block;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.5s;
}
a {
  text-decoration: none;
}
</style>