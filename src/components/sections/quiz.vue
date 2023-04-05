<template>
  <main class="non-copy">
    <Home v-if="showHome" @startTheGame="startTheGame"/>
    <transition name="question">
      <Question
          v-if="gameStarted && quizData && !gameFinished"
          :quizData="this.quizData"
          @endGame="endGame"
          @score="score"
      />
    </transition>
    <Final
        v-if="gameFinished"
        :correctAnswers="correctAnswers"
        :numberOfQuestions="numberOfQuestions"
        class="mrg-25"
        @questComplete="questComplete"
    />
  </main>
</template>

<script>
import Home from "@/components/sections/Home.vue";
import Question from "@/components/sections/Question.vue";
import Final from "@/components/sections/Final.vue";

export default {
  name: "quiz",
  components: {
    Home,
    Question,
    Final,
  },
  emits: ['questComplete', 'score'],
  props: {
    json: {
      type: Object,
      default() {
        return {}
      }
    }

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
    questComplete() {
      this.$emit('questComplete', true)
    },
    score() {
      this.$emit('score', true)
    },
    startTheGame({difficulty, categoryId, questions}) {
      this.makeRequest(difficulty, categoryId, questions);
      this.showHome = false;
      this.gameStarted = true;
    },
    async makeRequest(difficulty, categoryId, questions) {
      try {
        this.quizData = this.json;
        console.log(this.json);
      } catch (error) {
        console.error(error);
      }
    },
    endGame({numberOfQuestions, correctAnswers}) {
      this.numberOfQuestions = numberOfQuestions;
      this.correctAnswers = correctAnswers;
      this.gameFinished = true;
    },
  },
};
</script>
