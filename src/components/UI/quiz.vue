<script>

import QuizRadio from "@/components/UI/quiz-radio.vue";

export default {
  name: "quiz",
  components: {QuizRadio},
  props: {
    quiz: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<template>
  <div class="fz-24">{{ quiz.question}}</div>
    <fieldset class="fieldset" id="quiz.id">
      <quiz-radio
          v-for="answer in quiz"
          :key="quiz.answers.id"
          v-bind:answer="answer"
      />
    </fieldset>
</template>

<style scoped>

</style>