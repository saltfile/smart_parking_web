<template>
  <div class="container" :class="isShow?'sign-up-mode':''">
    <div class="form-warp">
      <Login :loginswitch="loginswitch[0]" :isParking="isParking" />
      <Login :loginswitch="loginswitch[1]" :isParking="!isParking"/>

    </div>
    <div class="desc-warp">
      <LoginSwitch :loginswitch="loginswitch[1]" :loginimg="loginimg[0]" :isParking="isParking" :loginsuper="loginsuper" />
      <LoginSwitch :loginswitch="loginswitch[0]" :loginimg="loginimg[1]" :isParking="!isParking" :loginstopad="loginstopad"/>
  
    </div>
  </div>
</template>

<script>
import Login from '../components/LoginAll.vue'
import LoginSwitch from '../components/LoginSwitch.vue';
export default {
  components: {
    Login,
    LoginSwitch
    
},
  data() {
    return {
      isShow: false,
      isParking:true,
      loginswitch:['停车场管理员登录','超级管理员登录'],
      loginimg:['log.svg','register.svg']
    };
  },
  methods: {
    loginsuper() {
      this.isShow = true
    },
    loginstopad() {
      this.isShow = false
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.container::before {
  content: " ";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-image: linear-gradient(-45deg, #8a7cf6 0%, #d3ccff 100%);
  transition: 1.8s ease-in-out;
  z-index: 6;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
}

.container.sign-up-mode::before {
  transform: translate(100%, -50%);
}

.form-warp {
  width: 50%;
  position: absolute;
  z-index: 5;
  left: 75%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  transition: 1s 0.7s ease-in-out;
}

.form-warp form {
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

.desc-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.desc-warp-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  padding: 3rem 17% 2rem 12%;
  z-index: 6;
}

</style>
