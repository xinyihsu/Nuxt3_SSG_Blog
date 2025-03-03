<template>
  <el-card shadow="hover" class="inline-block">
    <el-table :data="tableData">
      <el-table-column prop="lesson" label="" width="50" />

      <el-table-column prop="Mon" label="Mon" width="100" align="center" />
      <el-table-column prop="Tue" label="Tue" width="100" align="center" />
      <!-- <template #default="scope" class="w-auto">
            <el-card shadow="hover" width="auto">
              {{ scope.row.Tue }}
            </el-card>
          </template>
        </el-table-column> -->
      <el-table-column prop="Wed" label="Wed" width="100" align="center" />
      <el-table-column prop="Thu" label="Thu" width="100" align="center" />
      <el-table-column prop="Fri" label="Fri" width="100" align="center" />
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
const tableData = [
  {
    lesson: "1",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "2",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "資料庫",
  },
  {
    lesson: "3",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "編譯器",
    Fri: "",
  },
  {
    lesson: "4",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "5",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "6",
    Mon: "",
    Tue: "編譯器",
    Wed: "",
    Thu: "",
    Fri: "會計學",
  },
  {
    lesson: "7",
    Mon: "",
    Tue: "編譯器",
    Wed: "",
    Thu: "",
    Fri: "會計學",
  },
  {
    lesson: "8",
    Mon: "",
    Tue: "資料庫",
    Wed: "",
    Thu: "初級韓語",
    Fri: "會計學",
  },
  {
    lesson: "9",
    Mon: "",
    Tue: "資料庫",
    Wed: "",
    Thu: "初級韓語",
    Fri: "",
  },
  {
    lesson: "10",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "A",
    Mon: "",
    Tue: "保險學",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "B",
    Mon: "",
    Tue: "保險學",
    Wed: "",
    Thu: "",
    Fri: "",
  },
  {
    lesson: "C",
    Mon: "",
    Tue: "保險學",
    Wed: "",
    Thu: "",
    Fri: "",
  },
];
</script>
