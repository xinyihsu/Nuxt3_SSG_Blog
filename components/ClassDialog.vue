<template>
  <el-dialog
    v-model="dialogVisible"
    :title="props.classSelected.name"
    width="500"
  >
    <div class="flex flex-col gap-2">
      <span>Teacher: {{ props.classSelected.teacher }}</span>
      <span v-if="props.classSelected.time.length"
        >Time: {{ props.classSelected.time.join(", ") }}</span
      >
      <span>Room: {{ props.classSelected.location }}</span>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const dialogVisible = defineModel<boolean>();
const props = defineProps<{
  classSelected: Base.IClass;
}>();

// const emit = defineEmits<{
//   change: [dialogVisible: boolean];
// }>();
</script>
