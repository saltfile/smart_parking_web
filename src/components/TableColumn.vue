<template>
  <div>
    <el-table-column
      :prop="p.prop"
      :label="p.label"
      v-for="(p, i) in columnsprops"
      :key="i"
    >
      <template slot-scope="scope">
        <el-input
          v-if="scope.$index == editRow"
          v-model="scope.row[p.prop]"
          :disabled="i == 0 ? true : false"
        ></el-input>
        <div v-else>
          <span v-if="scope.row[p.prop] == '进行中'" style="color: blue"
            >进行中</span
          >
          <span v-else-if="scope.row[p.prop] == '已完成'" style="color: green"
            >已完成</span
          >
          <span v-else-if="scope.row[p.prop] == '未支付'" style="color: red"
            >未支付</span
          >
          <span v-else-if="scope.row[p.prop] == '等待中'" style="color: gold"
            >等待中</span
          >
          <el-button
            v-else-if="scope.column.property == 'delaybton'"
            round
            type="success"
            >延时按钮</el-button
          >
          <el-button
            v-else-if="
              scope.column.property == 'cancelbton' && scope.row[p.prop] == '0'
            "
            round
            >取消按钮</el-button
          >
          <el-button
            v-else-if="
              scope.column.property == 'cancelbton' && scope.row[p.prop] == '1'
            "
            round
            disabled="selections.length == 0"
            ><p style="color: darkgray">取消按钮</p></el-button
          >

          <span v-else>{{ scope.row[p.prop] }}</span>
        </div>
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  props: ["columnsprops", "editRow", "ispay"],
};
</script>
