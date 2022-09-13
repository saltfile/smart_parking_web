<template>
  <div class="search">
    <el-button @click="getAll()">查看全部</el-button>
    <img
      src="../assets/search.png"
      alt=""
      style="height: 25px; width: 25px; margin-top: 7px;margin-left: 20px;"
      @click="getvalue(input)"
    />
    <div style="width: 280px; margin-left: 15px" @keyup.enter="getvalue(input)">
      <el-input :placeholder="placeholder" v-model="input" clearable>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      isSearch: false,
      input: "",
    };
  },
  methods: {
    getvalue(input) {
      this.$bus.$emit("getSearchVal", input);
    },
    getAll() {
      this.$bus.$emit("getSearchVal", "");
    },
  },
};
</script>

<style scoped>
.search {
  padding-left: 70%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
</style>