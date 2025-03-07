<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="flex flex-row justify-start items-center"
    >
      <el-menu-item index="/">
        <NuxtLink to="/" class="hover:text-gray-300"> Home </NuxtLink>
      </el-menu-item>
      <el-menu-item index="/schedule">
        <NuxtLink to="/schedule" class="hover:text-gray-300">Schedule</NuxtLink>
      </el-menu-item>
      <!-- <div class="absolute right-4">
        <el-avatar :icon="UserFilled" />
      </div> -->
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue";
const route = useRoute();
const activeIndex = ref(route.path); // 直接綁定當前路由

// 監聽路由變化，確保 `activeIndex` 跟著更新
watch(route, (newRoute) => {
  activeIndex.value = newRoute.path;
});
</script>

<style lang="scss" scoped></style>
