<script setup>
import Quiz from "@/components/sections/quiz.vue";
import qwe from "@/components/quests/quizzes/quest4.json"

const json = qwe
const emit = defineEmits(['questComplete', 'score'])

function questComplete() {
  emit('questComplete', true)
}

function score() {
  emit('score', 20)
}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 4</div>
    <div class="quest-description fz-24 bold">Прослушайте аудиофайл и пройдите тест</div>
    <div class="quest-task fz-24">
      <audio class="audio mrg-25" controls preload="auto">
        <source src="@/assets/audio/pointFour.mp3" type="audio/mpeg"/>
      </audio>
      <div class="test-block">
        <quiz v-bind:json="json" @questComplete="questComplete" @score="score"></quiz>
      </div>
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