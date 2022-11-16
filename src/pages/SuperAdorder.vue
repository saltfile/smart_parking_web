<template>
  <div class="container">
    <Search :placeholder="placeholder" />
    <el-table
      :data="
        filterData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      :stripe="true"
      :fit="true"
      :border="true"
      :row-key="getRowkey"
    >
      <TableColumn
        :columnsprops="columnsprops"
        :editRow="editRow"
        :pay="ispay"
      />
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
import { mapGetters } from "vuex";
import { nanoid } from "nanoid";
export default {
  components: {
    TableColumn,
    TablePagination,
    Search,
  },

  data() {
    return {
      placeholder: "输入停车场名 / 停车场编号 / 订单编号",
      ispay: true,
      searchVal: "",
      isSave: true,
      isDelete: true,
      pageSize: 10,
      currentPage: 1,
      editRow: null,
      columnsprops: [
        { prop: "id", label: "车牌号" },
        { prop: "orderid", label: "订单编号" },
        { prop: "parkingid", label: "停车场编号" },
        { prop: "parkingname", label: "停车场名" },
        { prop: "phone", label: "手机号" },
        { prop: "start", label: "起始时间" },
        { prop: "leave", label: "离开时间" },
        { prop: "state", label: "状态" },
        { prop: "pay", label: "支付金额" },
      ],
      tableData: [
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "天津市华润*家东停车场",
          phone: 15464545125,
          id: "鄂P11515",
          start: "2022-04-19 13:23:28",
          leave: "2022-04-20 18:13:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "天津市华润*家东停车场",
          phone: 13878454525,
          id: "蒙K4Y9A8",
          start: "2022-04-19 13:23:28",
          leave: "2022-04-20 18:13:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "天津市华润*家东停车场",
          phone: 13645484546,
          id: "苏H52A27",
          start: "2022-04-19 13:23:28",
          leave: "2022-04-20 18:13:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "天职师大停车场",
          phone: 11254648795,
          id: "吉C17795",
          start: "2022-05-19 15:00:28",
          leave: "2022-05-20 18:13:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "中关村地下车库东",
          phone: 14526558495,
          id: "闽C8923Z",
          start: "2022-05-19 14:33:58",
          leave: "2022-05-20 18:13:28",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "中关村地下车库东",
          phone: 15645496784,
          id: "藏C51603",
          start: "2022-05-19 06:30:28",
          leave: "2022-05-20 20:56:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "韵达国际酒店西车库",
          phone: 14234554678,
          id: "皖E0W3V3",
          start: "2022-05-19 16:54:58",
          leave: "2022-05-20 13:05:28",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "月季市场停车位",
          phone: 17232654516,
          id: "陕B61704",
          start: "2022-05-19 11:00:28",
          leave: "2022-05-20 18:46:48",
          state: "已完成",
          pay: "40",
        },
        {
          orderid: nanoid(),
          parkingid: nanoid(),
          parkingname: "月季市场停车位",
          phone: 19532545462,
          id: "赣L70T70",
          start: "2022-05-19 08:34:15",
          leave: "2022-05-20 17:52:26",
          state: "已完成",
          pay: "40",
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
    ...mapGetters(["getloginAd"]),
    filterData() {
      return this.tableData.filter((p) => {
        return (
          p.parkingname.indexOf(this.searchVal) !== -1 ||
          p.orderid.indexOf(this.searchVal) !== -1 ||
          p.parkingid.indexOf(this.searchVal) !== -1
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
