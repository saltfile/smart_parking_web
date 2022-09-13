<template>
  <div style="font-size: 14px">
    <div>
      停车场名称：<span v-if="!change">{{ getItem.stationName }}</span>
      <el-input
        v-else
        style="width: auto"
        v-model="name"
        ref="input"
      ></el-input>
    </div>
    <div>
      停车场位置：<span v-if="!change">{{ getItem.stationAddress }}</span>
      <el-input
        v-else
        style="width: auto"
        v-model="address"
        ref="input"
      ></el-input>
    </div>
    <div>
      车位总数量：<span v-if="!change" style="color: #66a0ff">{{
        getItem.parkingSpaces
      }}</span>
      <el-input
        v-else
        style="width: auto"
        v-model="allspaces"
        ref="input"
      ></el-input>
    </div>
    <div>
      剩余车位数量：<span v-if="!change" style="color: #66a0ff">{{
        getItem.Space
      }}</span>
      <el-input
        v-else
        style="width: auto"
        v-model="onlyspaces"
        ref="input"
      ></el-input>
    </div>
    <div @keyup.enter="savePrice()">
      价格：
      <span v-if="!change" style="color: #66a0ff">{{ getItem.price }}</span>
      <el-input
        v-else
        style="width: 70%"
        v-model="price"
        ref="input"
      ></el-input>
    </div>
    <el-button style="margin-top: 10px" @click="changePrice()" v-if="!change"
      >修改</el-button
    >
    <el-button style="margin-top: 10px" @click="savePrice()" v-else
      >保存</el-button
    >
  </div>
</template>

<script>
export default {
  props: ["getItem", "markerPrice",],
  data() {
    return {
      change: false,
      name:"",
      address:"",
      allspaces:"",
      onlyspaces:"",
      price: 0,
    };
  },
  methods: {
    changePrice() {
      this.price = this.getItem.price;
      this.name = this.getItem.stationName;
      this.address = this.getItem.stationAddress;
      this.allspaces = this.getItem.parkingSpaces;
      this.onlyspaces = this.getItem.Space
      this.change = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    savePrice() {
      this.change = false;
      this.markerPrice(this.price,this.name,this.address,this.allspaces,this.onlyspaces );
    },
  },
};
</script>

<style scoped>
.el-input{
  margin-bottom:5px;
}
</style>