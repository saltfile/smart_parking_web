<template>
  <div class="container">
    <TableAdd :addtable="addtable" />
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
import TableAdd from "../components/TableAdd.vue";
import TableColumn from "@/components/TableColumn.vue";
import TableEdit from "@/components/TableEdit.vue";
import TablePagination from "@/components/TablePagination.vue";

import { nanoid } from "nanoid";
export default {
  components: {
    TableAdd,
    TableColumn,
    TableEdit,
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
        { prop: "id", label: "车位编号" },
        { prop: "city", label: "城市" },
        { prop: "free", label: "是否免费" },
        { prop: "price", label: "价格" },
        { prop: "latitude", label: "纬度" },
        { prop: "longitude", label: "经度" },
      ],
      tableData: [
        {
          id: nanoid(),
          city: "天津",
          free: "true",
          price: "25",
          latitude: "15",
          longitude: "20",
        },
        {
          id: nanoid(),
          city: "天津",
          free: "true",
          price: "25",
          latitude: "15",
          longitude: "20",
        },
        {
          id: nanoid(),
          city: "天津",
          free: "true",
          price: "25",
          latitude: "15",
          longitude: "20",
        },
        {
          id: nanoid(),
          city: "天津",
          free: "true",
          price: "25",
          latitude: "15",
          longitude: "20",
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
        return p.id.indexOf(this.searchVal) !== -1;
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