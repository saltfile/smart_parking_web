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
  min-width: 1800px;
  max-width: 100%;
  min-height: 1100px;
  max-height: 100%;
  background-color: rgb(248, 248, 248) ;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
