<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import RadioButton from "@/components/UI/radioButton.vue";
import Quiz from "@/components/UI/quiz.vue";

const quizzes = [
  {id: 1, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Какое сражение было самым крупным в Великой Отечественной войне?'},
  {id: 2, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'В теплое время года советские солдаты свертывали ее в трубку и носили через плечо, на привалах использовали ее как подушку, так же ее называли скаткой. Что это?'},
  {id: 3, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'С какого по какой год шла Великая Отечественная Война?'},
  {id: 4, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Что такое «Дорога жизни»'},
  {id: 5, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Из какой песни этот фрагмент: «Дни и ночи у мартеновских печей Не смыкала наша Родина очей. Дни и ночи битву трудную вели — Этот день мы приближали, как могли».'},
  {id: 6, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'В каком городе поставлен памятник советскому солдату с девочкой на руках?'},
  {id: 7, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'В каком городе состоялся первый Парад Победы?'},
  {id: 8, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Войска Германии потратили на захват этого города 250 дней, а советская армия освободила его за 5 дней. Что это за город?'},
  {id: 9, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Самое трудное место при строительстве ж/д Ижевск-Балезино:'},
  {id: 10, answers : [{id: 1, answer: 'битва за Берлин '}, {id: 2, answer: 'битва за Сталинград'}, {id: 3, answer: 'Битва за Москву'}], question: 'Высшая награда, присужденная М. Т. Калашникову за разработку АК-47:'}
]

</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 4</div>
    <div class="quest-description fz-36">Тест</div>
    <div class="test-block">
      <quiz
          v-for="quiz in quizzes"
          :key="quizzes.id"
          v-bind:quiz="quiz"
      />
    </div>
  </div>
</template>

<style scoped>
.test-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fieldset {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>