<template>
  <main>
    <Home @startTheGame="startTheGame" v-if="showHome" />
    <Question
      v-if="gameStarted && quizData && !gameFinished"
      :quizData="this.quizData"
      @endGame="endGame"
    />
    <Final @questComplete="questComplete"
      v-if="gameFinished"
      :correctAnswers="correctAnswers"
      :numberOfQuestions="numberOfQuestions"
    />
  </main>
</template>

<script>
import Home from "@/components/UI/Home.vue";
import Question from "@/components/UI/Question.vue";
import Final from "@/components/UI/Final.vue";
import json from "./questions.json"

export default {
  name: "quiz",
  components: {
    Home,
    Question,
    Final,
  },
  emits: ['questComplete'],
  data() {
    return {
      showHome: true,
      gameStarted: false,
      gameFinished: false,
      quizData: undefined,
      numberOfQuestions: 0,
    };
  },
  methods: {
    questComplete() {
      this.$emit('questComplete', true)
    },
    startTheGame({ difficulty, categoryId, questions }) {
      this.makeRequest(difficulty, categoryId, questions);
      this.showHome = false;
      this.gameStarted = true;
    },
    async makeRequest(difficulty, categoryId, questions) {
      try {
        this.quizData = json;
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    },
    endGame({ numberOfQuestions, correctAnswers }) {
      this.numberOfQuestions = numberOfQuestions;
      this.correctAnswers = correctAnswers;
      this.gameFinished = true;
    },
  },
};
</script>
