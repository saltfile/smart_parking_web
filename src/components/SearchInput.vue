<template>
  <div class="search">
    <img
      src="../assets/search.png"
      alt=""
      style="height: 25px; width: 25px; margin-top: 7px"
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
  },
};
</script>

<style scoped>
.search {
  padding-left: 75%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
</style>