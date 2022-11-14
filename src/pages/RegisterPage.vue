<template>
  <div class="container">
    <div class="form-warp">
      <el-form
        class="sign-in-form"
        :model="regForm"
        :rules="regRules"
        ref="regForm"
      >
        <h2 class="form-title">注册</h2>
        <el-form-item prop="phone">
          <el-input
            placeholder="用户手机号码"
            maxlength="11"
            v-model="regForm.phone"
          />
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input
            type="text"
            v-model="regForm.captcha"
            placeholder="验证码"
            maxlength="5"
          />
        </el-form-item>
        <div>
          <div id="checkCode" class="code">{{ codeStr }}</div>
          <el-button
            type="text"
            style="margin-top: -150px; margin-left: 20px; color: #8a7cf6"
            @click="createCode"
            >看不清，换一张
          </el-button>
        </div>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="regForm.username"
            placeholder="用户名"
            maxlength="20"
          />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="regForm.pass"
            placeholder="密码"
            maxlength="20"
          />
        </el-form-item>
        <el-form-item prop="checkpass">
          <el-input
            type="password"
            v-model="regForm.checkpass"
            placeholder="确认密码"
            maxlength="20"
          />
        </el-form-item>
        <el-form-item prop="parkname">
          <el-input
            type="text"
            v-model="regForm.parkname"
            placeholder="停车场名"
            maxlength="20"
          />
        </el-form-item>
        <el-form-item>
          <div style="display: flex; flex-direction: row">
            <v-region @change="regionChange"></v-region>
            <el-button
              icon="el-icon-check"
              circle
              style="margin-left: 10px"
              @click="searchMap(), (drawer = true)"
            ></el-button>
          </div>
        </el-form-item>
        <el-button class="submit-btn" @click="register('regForm')"
          >注册</el-button
        >
      </el-form>
      <el-drawer
        title="我是标题"
        direction="ltr"
        :visible.sync="drawer"
        :with-header="false"
        :append-to-body="true"
        :modal-append-to-body="false"
      >
        <Map :optionCity="regForm.optionCity" />
        <el-button
          icon="el-icon-check"
          type="warning"
          @click="submitAddress"
          style="
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 2px;
            float: right;
          "
          >确认定位该地址</el-button
        >
      </el-drawer>
    </div>
    <div class="desc-warp">
      <LoginSwitch :loginimg="loginimg" :isParking="isParking" />
    </div>
  </div>
</template>

<script>
import LoginSwitch from "../components/LoginSwitch.vue";
import Map from "../components/RegisterMap.vue";
import Vue from "vue";
import { RegionSelects } from "v-region";
Vue.component("v-region", RegionSelects);
export default {
  components: {
    Map,
    LoginSwitch,
  },
  data() {
    var validatePhone = (rule, value, callback) => {
      const phoneRule = /^[1]([3-9])[0-9]{9}$/;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (!phoneRule.test(value)) {
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.checkPass !== "") {
          this.$refs.regForm.validateField("checkpass");
        }
        callback();
      }
    };
    var validateusername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.regForm.checkpass !== "") {
          this.$refs.regForm.validateField("checkpass");
        }
        callback();
      }
    };
    var validatecheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatecaptcha = (rule, value, callback) => {
      let code = this.codeStr;
      value = value.toLowerCase();
      code = code.toLowerCase();
      if (value != code) {
        callback(new Error("验证码不正确"));
      } else {
        callback();
      }
    };
    return {
      drawer: false,
      direction: "rtl",
      isParking: true,
      loginimg: "reg.svg",
      regForm: {
        phone: "",
        captcha: "",
        username: "",
        pass: "",
        checkpass: "",
        parkname: "",
        optionCity: "",
      },
      address: "",
      codeStr: "",
      codeChars: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      optionCity: "",
      regRules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkpass: [{ validator: validatecheckPass, trigger: "blur" }],
        username: [{ validator: validateusername, trigger: "blur" }],
        captcha: [{ validator: validatecaptcha, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    register(regForm) {
      this.$refs[regForm].validate((valid) => {
        if (valid) {
          this.$message({
            message: "hello",
            type: "success",
          });
          this.$router.push("/login");
          console.log(this.regForm);
        } else {
          alert("注册失败");
          return false;
        }
      });
    },
    createCode() {
      this.codeStr = "";
      for (let i = 0; i < 4; i++) {
        //获取随机验证码下标
        let charNum = Math.floor(Math.random() * 62);
        //组合成指定字符验证码
        this.codeStr = this.codeStr + this.codeChars[charNum];
      }
    },
    regionChange(data) {
      if (data.province && data.city && data.area) {
        this.regForm.optionCity =
          data.province.value + data.city.value + data.area.value;
        console.log(this.regForm.optionCity);
      }
    },
    searchMap() {
      this.$bus.$emit("onSearchResult");
    },
    submitAddress(address) {
      this.address = address;
      // this.$nextTick(function(){
      //   alert(this.address)
      // })
    },
  },
  mounted() {
    this.createCode();
    this.$bus.$on("submitAddress", this.submitAddress);
  },
  beforeDestroy() {
    this.$bus.$off("submitAddress", this.submitAddress);
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

.form-warp {
  width: 50%;
  position: absolute;
  z-index: 5;
  left: 75%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
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

.sign-in-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
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
  left: 50%;
}

.container.sign-up-mode .sign-in-form {
  opacity: 0;
  z-index: 3;
}

.container.sign-up-mode .sign-up-form {
  opacity: 1;
  z-index: 4;
}

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
.el-form-item {
  margin-bottom: 8px;
}
.el-input {
  min-width: 300px;
  font-size: 18px;
  height: 50px;
  width: 350px;
}
.el-input::placeholder {
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

.code {
  margin-top: -20px;
  font-family: Arial;
  font-style: italic;
  color: rgb(102, 0, 255);
  font-size: 30px;
  border: 0;
  padding: 2px 3px;
  letter-spacing: 3px;
  font-weight: bolder;
  float: left;
  cursor: pointer;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  background-color: #b5abfe;
}
.v-region {
  background-color: white;
}
</style>
