<script setup>
import Quiz from "@/pages/quiz.vue";
const emit = defineEmits(['questComplete'])
function questComplete() {
  emit('questComplete', true)
}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 4</div>
    <div class="quest-description fz-36">Тест</div>
    <div class="test-block">
      <quiz @questComplete="questComplete"></quiz>
    </div>
  </div>
</template>

<style scoped>
.test-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
}
</style>