<template>
  <section class="final">
    <p class="fz-24"> {{ message }}</p>
    <p class="fz-20" v-html="result"></p>
    <div>
      <p class="fz-36 bold">{{ correctAnswers }}/{{ numberOfQuestions }}</p>
    </div>
    <AppButton @click="questComplete" class="bg-dark-gray">Продолжить</AppButton>
  </section>
</template>
<script>
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "Final",
  components: {AppButton},
  props: {
    correctAnswers: Number,
    numberOfQuestions: Number,
  },
  emits: ['questComplete'],
  data() {
    return {
      message: "",
      result: "",
      correctAnswersPercentage: 0,
      wrongAnswersPercentage: 0,
    };
  },
  mounted() {
    this.calculatePercentages();
    this.changeResultText();
  },
  methods: {
    questComplete() {
      this.$emit('questComplete', true)
    },
    calculatePercentages() {
      this.correctAnswersPercentage =
        (this.correctAnswers / this.numberOfQuestions) * 100;
      this.wrongAnswersPercentage = 100 - this.correctAnswersPercentage;
    },
    changeResultText() {
      if (
        this.correctAnswersPercentage >= 0 &&
        this.correctAnswersPercentage <= 30
      ) {
        this.message = "Вы читали задание?";
        this.result = `Вы ответили на ${this.correctAnswersPercentage}% всех вопросов правильно`;
      } else if (
        this.correctAnswersPercentage > 30 &&
        this.correctAnswersPercentage < 60
      ) {
        this.message = "Нормально";
        this.result = `Вы ответили на ${this.correctAnswersPercentage}% всех вопросов правильно. Неплохо, попробуйте лучше подготовиться`;
      } else if (
        this.correctAnswersPercentage >= 60 &&
        this.correctAnswersPercentage < 80
      ) {
        this.message = "Хорошо!";
        this.result = `Вы ответили на ${this.correctAnswersPercentage}% всех вопросов правильно. Хороший результат, но можно лучше`;
      } else if (
        this.correctAnswersPercentage >= 80 &&
        this.correctAnswersPercentage < 95
      ) {
        this.message = "Замечательно!";
        this.result = `Вы ответили на ${this.correctAnswersPercentage}% всех вопросов правильно, поздравляем!`;
      } else if (this.correctAnswersPercentage >= 95) {
        this.message = "Идеально!";
        this.result = `Вы ответили на ${this.correctAnswersPercentage}% всех вопросов правильно, поздравляем!`;
      }
    },
  },
};
</script>

<style scoped>
.final {
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>