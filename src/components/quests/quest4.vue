<script setup>

import Quiz from "@/pages/quiz.vue";

</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 4</div>
    <div class="quest-description fz-36">Тест</div>
    <div class="test-block">
      <quiz></quiz>
    </div>
  </div>
</template>

<style scoped>
.test-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>