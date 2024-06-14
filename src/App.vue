<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <header></header>
    <div class="container">
      <div class="menu"></div>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header {
    flex: none;
    height: 60px;
    background: #e0e0e0;
  }
  .container {
    flex: 1;
    display: flex;
    .menu {
      flex: none;
      width: 60px;
      background: #e0e0e0;
    }
    main {
      flex: 1;
      margin: 10px 0 0 10px;
      padding: 10px;
      box-shadow: -2px -2px 20px 0px #e8e8e8;
      overflow-y: auto;
    }
  }
}
</style>
