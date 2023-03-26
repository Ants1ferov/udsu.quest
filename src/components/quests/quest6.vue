<script setup>
import Quiz from "@/components/sections/quiz.vue";
import qwe from "@/components/quests/quizzes/quest6.json"
const json = qwe
const emit = defineEmits(['questComplete', 'score'])
function questComplete() {
  emit('questComplete', true)
}
function score() {
  emit('score', 25)
}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 6</div>
    <div class="quest-description fz-36">Тест</div>
    <div class="test-block">
      <quiz v-bind:json="json" @questComplete="questComplete" @score="score"></quiz>
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