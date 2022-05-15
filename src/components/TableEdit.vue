<template>
  <el-table-column fixed="right" label="操作">
    <template slot-scope="scope">
      <div style="display: flex; flex-direction: row">
        <div v-if="scope.$index == editRow">
          <el-button
            size="mini"
            @click="Save(scope.$index, scope.column)"
            type="warning"
            >保存</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="Delete(scope.row.id)"
            >删除</el-button
          >
        </div>
        <el-button v-else size="mini" @click="Edit(scope.$index)"
          >编辑</el-button
        >
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  props:['editRow',"handleSave","handleDelete","handleEdit"],
  methods: {
    Save(row,column){
      this.handleSave(row,column)
    },
    Delete(row){
      this.handleDelete(row)
    },
    Edit(row){
      this.handleEdit(row)
    }
  },
}
</script>