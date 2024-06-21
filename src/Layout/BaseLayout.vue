<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menus from '@/components/Menus/index.vue'
</script>

<template>
  <div class="Layout">
    <header class="header">
      <Menus />
    </header>
    <div class="container">
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.Layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    flex: none;
    height: 60px;
    background: #e0e0e0;
  }
  .container {
    flex: 1;
    display: flex;
    main {
      /* flex: 1; */
      width: 100%;
      margin: 10px 0 0 10px;
      padding: 10px;
      box-shadow: -2px -2px 20px 0px #e8e8e8;
      overflow-y: auto;
    }
  }
}
</style>
