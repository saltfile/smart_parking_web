<template>
  <div>
    <div>停车场名称：{{ item.stationName }}</div>
    <div>停车场位置：{{ item.stationAddress }}</div>
    <div>
      车位总数量：<span style="color: #66a0ff">{{ item.parkingSpaces }}</span>
    </div>
    <div>
      剩余车位数量：<span style="color: #66a0ff">{{ item.parkingSpaces }}</span>
    </div>
    <div>
      价格： <span v-if="!change" style="color: #66a0ff">{{ item.price }}</span>
      <el-input v-else style="color: #66a0ff" v-model="item.price"></el-input>
    </div>
    <el-button onclick="changePrice()">修改价格</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            change:false
        }
    },
    methods: {
        changePrice(){
            this.change = true
        }
    },
}
</script>