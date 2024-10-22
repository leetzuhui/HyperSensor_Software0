<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  background-color: #f5f5f5;
  min-height: 100vh;
  /* 确保全屏显示 */
  display: flex;
  flex-direction: column;
}
</style>
