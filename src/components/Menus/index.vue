<script setup lang="ts">
import { menuType } from '.'
import { ref } from 'vue'
import { ArrowRightBold } from '@element-plus/icons-vue'

const menuList: menuType = [
  {
    lable: '主页',
    value: 'home',
    router: '/home',
  },
  {
    lable: 'Echarts',
    value: 'echarts',
    router: '/echarts',
  },
  {
    lable: '简历',
    value: 'resume',
    router: '/resume',
  },
]
</script>

<template>
  <div class="Menus">
    <el-icon><ArrowRightBold /></el-icon>
    <div class="menuList">
      <div v-for="item in menuList" class="menuItem">
        <span :key="item.value">{{ item.lable }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Menus {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .menuList {
    height: 100%;
    display: flex;
    align-items: center;
    /* padding: 0 20px; */
    .menuItem {
      height: 100%;
      padding: 0 15px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
