<template>
  <main>
    <Home @startTheGame="startTheGame" v-if="showHome" />
    <Question
      v-if="gameStarted && quizData && !gameFinished"
      :quizData="this.quizData"
      @endGame="endGame"
    />
    <Final
      v-if="gameFinished"
      :correctAnswers="correctAnswers"
      :numberOfQuestions="numberOfQuestions"
      @resetGame="resetGame"
    />
  </main>
</template>

<script>
import Home from "@/components/UI/Home.vue";
import Question from "@/components/UI/Question.vue";
import Final from "@/components/UI/Final.vue";
import axios from "axios";

export default {
  name: "quiz",
  components: {
    Home,
    Question,
    Final,
  },
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
    startTheGame({ difficulty, categoryId, questions }) {
      this.makeRequest(difficulty, categoryId, questions);
      this.showHome = false;
      this.gameStarted = true;
    },
    async makeRequest(difficulty, categoryId, questions) {
      try {
        const { data } = await axios.get('http://localhost:8000/test');
        this.quizData = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    endGame({ numberOfQuestions, correctAnswers }) {
      this.numberOfQuestions = numberOfQuestions;

      this.correctAnswers = correctAnswers;
      this.gameFinished = true;
    },
    resetGame() {
      this.showHome = true;
      this.gameStarted = false;
      this.gameFinished = false;
      this.quizData = undefined;
      this.numberOfQuestions = 0;
    },
  },
};
</script>
