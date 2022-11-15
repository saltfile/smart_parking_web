<template>
  <div class="container">
    <div style="display: flex; flex-direction: row">
      <div style="flex: 1"></div>
      <Search :placeholder="placeholder" />
    </div>
    <!-- <TableAdd :addtable="addtable" /> -->
    <el-table
      :data="
        filterData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      :stripe="true"
      :fit="true"
      :row-key="getRowkey"
    >
      <TableColumn :columnsprops="columnsprops" :editRow="editRow" />
      <TableEdit
        :editRow="editRow"
        :handleSave="handleSave"
        :handleDelete="handleDelete"
        :handleEdit="handleEdit"
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
// import TableAdd from "../components/TableAdd.vue";
import TableColumn from "@/components/TableColumn.vue";
import Search from "@/components/SearchInput.vue";
import TablePagination from "@/components/TablePagination.vue";
import TableEdit from "@/components/TableEdit.vue";

import { nanoid } from "nanoid";
export default {
  components: {
    TableColumn,
    TablePagination,
    TableEdit,
    Search,
  },
  data() {
    return {
      placeholder: "输入城市 / 管理员用户名",
      searchVal: "",
      isSave: true,
      isDelete: true,
      pageSize: 10,
      currentPage: 1,
      editRow: null,
      //   （停车场省市区，停车场名，停车场管理员用户名，停车场车位数）
      columnsprops: [
        { prop: "id", label: "停车场编号" },
        { prop: "stopingname", label: "停车场名" },
        { prop: "city", label: "城市" },
        { prop: "carnumber", label: "停车场车位数" },
        { prop: "lng", label: "地点" },
        { prop: "lat", label: "价格" },
      ],
      tableData: [
        {
          id: nanoid(),
          stopingname: "天津市华润*家东停车场",
          city: "天津",
          userad: "123",
          carnumber: 360,
          lng: "天津市-河西区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "天职师大停车场",
          city: "天津",
          userad: "ssss",
          carnumber: 360,
          lng: "天津市-河西区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "中关村地下车库东",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "韵达国际酒店西车库",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "月季市场停车位",
          city: "河南",
          userad: "123",
          carnumber: 360,
          lng: "焦作市-解放区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "天津西站东地下停车场",
          city: "天津",
          userad: "ssss",
          carnumber: 360,
          lng: "天津市-河西区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "中关村地下车库西",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "韵达国际酒店北车库",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "天津市华润*家南停车场",
          city: "天津",
          userad: "123",
          carnumber: 360,
          lng: "天津市-河西区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "天职师大停车场",
          city: "天津",
          userad: "ssss",
          carnumber: 360,
          lng: "天津市-河西区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "中关村地下车库南",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
        },
        {
          id: nanoid(),
          stopingname: "韵达国际酒店北车库",
          city: "北京",
          userad: "ssss",
          carnumber: 360,
          lng: "北京市-海淀区",
          lat: "39",
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
    addtable() {
      const obj = {
        id: nanoid(),
        city: "",
        free: "",
        price: "",
        latitude: "",
        longitude: "",
      };
      this.tableData.push(obj);
    },
    handleEdit(row) {
      if (this.isSave !== false || this.isDelete !== false) {
        this.editRow = row;
        this.isSave = false;
        this.isDelete = false;
      } else {
        alert("还没有保存");
      }
    },
    handleSave() {
      this.editRow = null;
      this.isSave = true;
    },
    handleDelete(id) {
      this.tableData = this.tableData.filter((data) => data.id !== id);
      this.editRow = null;
      this.isDelete = true;
    },
  },
  computed: {
    filterData() {
      return this.tableData.filter((p) => {
        return (
          p.city.indexOf(this.searchVal) !== -1 ||
          p.userad.indexOf(this.searchVal) !== -1
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
