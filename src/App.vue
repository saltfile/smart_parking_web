<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  min-width: 1900px;
  max-width: 100%;
  /* margin: 0 center; */
  background-color: rgb(248, 248, 248);
  /* position:relative */
  /* visibility: hidden; */
  width: 100%;
  height: 100%;
  min-height:1100px;
  /* 根据父级定位，配合transform用来居中 */
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  */

  /* background-color: red; */
  /* color: rgb(248, 248, 248); */
  /* 更改转换元素的位置 */
  transform-origin: left top;
  /* 超出隐藏 */
  /* overflow: hidden; */
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
