<template>
  <div class="container">
    <el-table
      :data="
        filterData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      :stripe="true"
      :fit="true"
      :row-key="getRowkey"
    >
      <TableColumn :columnsprops="columnsprops" :editRow="editRow" />
    </el-table>
    <TablePagination
      :pageSize="pageSize"
      :currentPage="currentPage"
      :tableDatalength="tableData.length"
      :handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>
<script>
import TableColumn from "@/components/TableColumn.vue";
import TablePagination from "@/components/TablePagination.vue";

import { nanoid } from "nanoid";
export default {
  components: {
    TableColumn,
    TablePagination,
  },
  data() {
    return {
      searchVal: "",
      isSave: true,
      isDelete: true,
      pageSize: 18,
      currentPage: 1,
      editRow: null,
      columnsprops: [
        { prop: "city", label: "城市" },
        { prop: "entertime", label: "进入时间" },
        { prop: "leavetime", label: "离开时间" },
        { prop: "price", label: "价格" },
      ],
      tableData: [
        {
          id: nanoid(),
          city: "天津",
          price: "25",
          entertime: "2022-05-20 20:14:21",
          leavetime: "2022-05-10 21:20:34",
        },
        {
          id: nanoid(),
          city: "天津",
          price: "25",
          entertime: "2022-05-20 20:14:21",
          leavetime: "2022-05-10 21:20:34",
        },
        {
          id: nanoid(),
          city: "天津",
          price: "25",
          entertime: "2022-05-20 20:14:21",
          leavetime: "2022-05-10 21:20:34",
        },
        {
          id: nanoid(),
          city: "天津",
          price: "25",
          entertime: "2022-05-20 20:14:21",
          leavetime: "2022-05-10 21:20:34",
        },
        {
          id: nanoid(),
          city: "天津",
          price: "25",
          entertime: "2022-05-20 20:14:21",
          leavetime: "2022-05-10 21:20:34",
        },
      ],
    };
  },
  mounted() {
    this.$bus.$on("getSearchVal", this.getSearchVal);
  },
  beforeDestroy() {
    this.$bus.$off("getSearchVal");
  },
  methods: {
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    getSearchVal(Val) {
      this.searchVal = Val;
    },
    getRowkey(row) {
      return row.id;
    },
  },
  computed: {
    filterData() {
      return this.tableData.filter((p) => {
        return p.city.indexOf(this.searchVal) !== -1;
      });
    },
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  padding: 20px 20px 20px 20px;
  margin-top: 20px;
  margin-right: 20px;
  box-shadow: 0.2px 0.3px 0.5px rgba(0, 0, 0, 0.024),
    0.6px 0.8px 1.3px rgba(0, 0, 0, 0.035), 1.5px 1.8px 3px rgba(0, 0, 0, 0.046),
    5px 6px 10px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
</style>