<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-row items-center justify-center gap-4 my-5">
      <img src="/png/title.png" width="300" />
      <h1>Hi, I'm Xin.</h1>
    </div>
    <h1>Project</h1>
    <div class="flex flex-row justify-center gap-8">
      <el-card style="max-width: 400px" shadow="hover">
        <template #header>Chrome Extension</template>
        <img src="/png/chrome_extension.png" />
        <p>#vite #ts #Shadcn #tailwind</p>
      </el-card>
      <div class="flex flex-col justify-center gap-4">
        <el-card style="max-width: 430px" shadow="hover">
          <template #header>Dayflow</template>
          <img src="/png/dayflow.png" />
          <p>#react #AntDesign #tailwind</p>
        </el-card>
        <el-card style="max-width: 430px" shadow="hover">
          <template #header>Word Conquest</template>
          <img src="/png/WordConquest.png" />
          <p>#ReactNative #ts #ElementUI</p>
        </el-card>
      </div>
    </div>

    <h1 class="my-10">About</h1>
    <div>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in experience"
          :key="index"
          :timestamp="activity.detail"
        >
          {{ activity.title }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <h1>Contact me</h1>
    <div>
      <p>Email: xinyihsu1458@gmail.com</p>
      <p>
        Telegram:
        <a href="https://t.me/VUP_U6"> @VUP_U6 </a>
      </p>
    </div>
    <div class="h-10rem"></div>
    <div class="mb-2rem text-xl">
      <p>難熬的時候終歸是難熬的 <br />過了這段時間會是一片彩虹</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const experience = [
  {
    title: "Photon Future 光速未來",
    detail: "前端工程師",
  },
  {
    title: "Study",
    detail: "台科大資工系 大三",
  },
];
</script>

<style lang="scss" scoped></style>
