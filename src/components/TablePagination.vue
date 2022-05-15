<template>
  <div class="block">
    <el-pagination
      layout="total, prev, pager, next, jumper"
      :page-size="pageSize"
      align="center"
      @current-change="CurrentChange"
      :current-page="currentPage"
      :total="tableDatalength"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props:["pageSize","currentPage","tableDatalength","handleCurrentChange"],
  methods: {
    CurrentChange(val){
      this.handleCurrentChange(val)
    }
  },
}
</script>