<template>
  <div style="font-size: 16px">
    <div>停车场名称：{{ getItem.stationName }}</div>
    <div>停车场位置：{{ getItem.stationAddress }}</div>
    <div>
      车位总数量：<span style="color: #66a0ff">{{
        getItem.parkingSpaces
      }}</span>
    </div>
    <div>
      剩余车位数量：<span style="color: #66a0ff">{{ getItem.Space }}</span>
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
      >修改价格</el-button>
      <el-button style="margin-top: 10px" @click="savePrice()" v-else
      >保存</el-button>
  </div>
</template>

<script>
export default {
  props:['getItem','markerPrice'],
  data() {
    return {
      change: false,
      price:0
    };
  },
  methods: {
    changePrice() {
      this.price = this.getItem.price
      this.change = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    savePrice() {
      this.change = false;
      this.markerPrice(this.price)
    },
  },
};
</script>