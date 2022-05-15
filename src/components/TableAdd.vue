<template>
  <div style="margin-top: 10px; float: right; margin-right: 20px">
    <el-button type="warning" plain @click="handleAdd"
      ><i class="el-icon-edit"></i>添加</el-button
    >
  </div>
</template>

<script>
export default {
  props:["addtable"],
  methods: {
    handleAdd(){
      this.addtable()
    }
  },
}
</script>