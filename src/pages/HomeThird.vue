<template>
  <div class="container">
    <Search :placeholder="placeholder" />
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
import Search from "@/components/SearchInput.vue";

import { nanoid } from "nanoid";
export default {
  components: {
    TableColumn,
    TablePagination,
    Search,
  },
  data() {
    return {
      placeholder: "输入进入时间 / 离开时间 / 车牌号",
      searchVal: "",
      isSave: true,
      isDelete: true,
      pageSize: 10,
      currentPage: 1,
      editRow: null,
      columnsprops: [
        { prop: "stat", label: "车辆状态" },
        { prop: "price", label: "地点" },
        { prop: "id", label: "订单号" },
        { prop: "start", label: "进入时间" },
        { prop: "leave", label: "离开时间" },
      ],
      tableData: [
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-21 20:14:21",
          leave: "2022-05-21 22:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 21:11:25",
          leave: "2022-05-20 23:40:24",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 16:14:21",
          leave: "2022-05-21 07:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 19:34:51",
          leave: "2022-05-23 22:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 22:14:21",
          leave: "2022-06-02 00:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-04-01 10:14:21",
          leave: "2022-04-05 22:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-03-20 20:14:21",
          leave: "2022-05-07 22:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 16:14:21",
          leave: "2022-05-20 21:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 20:14:21",
          leave: "2022-05-23 21:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 22:14:21",
          leave: "2022-05-20 23:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-21 20:14:21",
          leave: "2022-05-21 22:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-19 20:14:21",
          leave: "2022-05-20 22:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 16:14:21",
          leave: "2022-05-20 21:20:34",
          stat: "已离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 20:14:21",
          leave: "2022-05-23 21:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-20 22:14:21",
          leave: "2022-05-20 23:20:34",
          stat: "未离开",
        },
        {
          id: nanoid(),
          price: "天津市华润*家东停车场",
          start: "2022-05-21 20:14:21",
          leave: "2022-05-21 22:20:34",
          stat: "已离开",
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
        return (
          p.start.indexOf(this.searchVal) !== -1 ||
          p.leave.indexOf(this.searchVal) !== -1 ||
          p.id.indexOf(this.searchVal) !== -1
        );
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
