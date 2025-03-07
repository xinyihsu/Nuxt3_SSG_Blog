<template>
  <div :class="$attrs.class">
    <el-card shadow="hover" class="inline-block">
      <el-table :data="tableData" :span-method="spanMethod">
        <el-table-column prop="lesson" label="" width="50">
          <template #default="{ row }">
            <el-tooltip
              class="box-item"
              effect="light"
              :content="row.lessonTime"
              placement="right"
            >
              {{ row.lesson }}
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          v-for="day in weekDays"
          :key="day"
          :prop="day"
          :label="day"
          width="120"
          align="center"
          class="w-full h-full bg-blue"
          :body-style="{
            padding: '0',
            margin: '0',
            height: '100%',
            width: '100%',
          }"
        >
          <template #default="{ row }">
            <el-card
              v-if="row[day]"
              shadow="hover"
              class="w-full h-full flex items-center justify-center"
              :body-style="{ padding: 'auto', margin: '0', height: '100%' }"
              @click="selectClass(row[day])"
            >
              {{ row[day].name }}
            </el-card>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <ClassDialog v-model="dialogVisible" :classSelected="classSelected" />
  </div>
</template>

<script setup lang="ts">
import ClassDialog from "./ClassDialog.vue";

const dialogVisible = ref(false);

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const lessonTime = [
  "8:10-9:00",
  "9:10-10:00",
  "10:20-11:10",
  "11:20-12:10",
  "12:20-13:10",
  "13:20-14.10",
  "14:20-15:10",
  "15:30-16:20",
  "16:30-17:20",
  "17:30-18:20",
  "18:25-19:15",
  "19:20-20:10",
  "20:15-21:05",
  "21:10-22:00",
];
const classes: Base.IClass[] = [
  {
    name: "TA-幾率與統計",
    teacher: "陳冠宇",
    time: ["THU 10:20-11:10", "FRI 10:20-12:10"],
    location: "TR-312, TR-313",
    day: [
      [4, 3],
      [5, 3],
      [5, 4],
    ],
  },
  {
    name: "資料庫",
    teacher: "吳怡樂",
    time: ["TUE 15:30-17:20", "FRI 9:10-10:00"],
    location: "TR-313",
    day: [
      [2, 8],
      [2, 9],
      [5, 2],
    ],
  },
  {
    name: "編譯器",
    teacher: "黃元欣",
    time: ["TUE 13:20-15:10", "THU 10:20-11:10"],
    location: "TR-313, TR-309",
    day: [
      [2, 6],
      [2, 7],
      [4, 3],
    ],
  },
  {
    name: "會計學",
    teacher: "鄭寶菁",
    time: ["FRI 13:20-16:20"],
    location: "IB-610",
    day: [
      [5, 6],
      [5, 7],
      [5, 8],
    ],
  },
  {
    name: "保險學",
    teacher: "陳清源",
    time: ["TUE 18:25-21:05"],
    location: "TR-212",
    day: [
      [2, 11],
      [2, 12],
      [2, 13],
    ],
  },
  {
    name: "初級韓語",
    teacher: "金秀真",
    time: ["THU 15:30-17:20"],
    location: "TR-413-2",
    day: [
      [4, 8],
      [4, 9],
    ],
  },
];

const lessonMap = classes.reduce(
  (acc, _class) => {
    const { day, name } = _class;
    day.forEach(([week, lesson]) => {
      const lessonKey = lesson.toString();
      const weekKey = weekDays[week - 1];

      // 初始化該節次
      if (!acc[lessonKey]) {
        for (let i = 1; i <= lesson; i++) {
          if (!acc[i.toString()]) {
            acc[i.toString()] = {
              lesson: i.toString(),
              lessonTime: lessonTime[i - 1],
              Mon: "",
              Tue: "",
              Wed: "",
              Thu: "",
              Fri: "",
            };
          }
        }
      }

      // 填充對應的課程名稱
      if (weekKey) {
        acc[lessonKey][weekKey] = _class;
      }
    });

    return acc;
  },
  {} as Record<string, Record<string, Base.IClass | string>>
);
const tableData = Object.values(lessonMap);

// interface SpanMethodProps {
//   row: User
//   column: TableColumnCtx<User>
//   rowIndex: number
//   columnIndex: number
// }
const spanMethod = ({ row, column, rowIndex, columnIndex }: any) => {
  if (columnIndex === 0) return { rowspan: 1, colspan: 1 }; // 第一列(節次)不合併

  const currentLesson = row[column.property].name;
  if (!currentLesson) return { rowspan: 1, colspan: 1 }; // 空格子不合併

  // 只有第一個出現的相同課程才會進行合併
  if (rowIndex > 0) {
    const prevLesson = tableData[rowIndex - 1][column.property];
    if (typeof prevLesson === "object" && prevLesson.name === currentLesson) {
      return { rowspan: 0, colspan: 0 }; // 隱藏已合併的單元格
    }
  }

  // 計算有多少個連續的相同課程
  let rowspan = 1;
  for (let i = rowIndex + 1; i < tableData.length; i++) {
    const nextLesson = tableData[i][column.property];
    if (typeof nextLesson === "object" && nextLesson.name === currentLesson) {
      rowspan++;
    } else {
      break; // 如果遇到不同課程就停止合併計算
    }
  }

  return { rowspan, colspan: 1 };
};

const classSelected = ref<Base.IClass>({
  name: "預設課程",
  teacher: "預設老師",
  time: [],
  location: "預設地點",
  day: [[]],
});
const selectClass = (_class: Base.IClass) => {
  dialogVisible.value = true;
  classSelected.value = _class;
};
</script>

<style lang="scss" scoped>
.class-card {
  padding: 0;
}
</style>
