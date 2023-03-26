<template>
  <section class="question">
    <div class="fz-20 pdg-0-15">
      <span>{{ index + 1 }}</span>.
      <span v-html="questionText"></span>
    </div>
    <div class="timer">
      <span></span>
      <p class="fz-20 bold">0:{{ secondsLeft }}</p>
    </div>
      <div class="answers">
        <AppButton
            class="bdr-blk fz-24 e3x3"
            @click="checkAnswer($event)"
            :style="[roundEnded ? '' : { background: '#fff' }]"
            v-html="question1"
            v-if="question1 !== ''"
        ></AppButton>
        <AppButton
            class="bdr-blk fz-24 e3x3"
            @click="checkAnswer($event)"
            :style="[roundEnded ? '' : { background: '#fff' }]"
            v-html="question2"
            v-if="question2 !== ''"
        ></AppButton>
        <AppButton
            class="bdr-blk fz-24 e3x3"
            @click="checkAnswer($event)"
            :style="[roundEnded ? '' : { background: '#fff' }]"
            v-html="question3"
            v-if="question3 !== ''"
        ></AppButton>
        <AppButton
            class="bdr-blk fz-24 e3x3"
            @click="checkAnswer($event)"
            :style="[roundEnded ? '' : { background: '#fff' }]"
            v-html="question4"
            v-if="question4 !== ''"
        ></AppButton>
      </div>
      <div
          class="post-answer"
          :style="[roundEnded ? { display: 'flex' } : { display: 'none' }]">
        <p class="fz-24 f43fsa">
          {{ message }}
        </p>
        <AppButton
            class="bg-dark fz-28 "
            @click="goToNextQuestion"
            v-html="[
          index == numberOfQuestions - 1 ? 'Посмотреть результаты!' : 'Следующий вопрос',
        ]">
        </AppButton>
      </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
export default {
  name: "Question",
  components: {AppButton},
  props: {
    quizData: Object,
  },
  emits: ['score'],
  data() {
    return {
      gameFinished: false,
      correctAnswers: 0,
      secondsLeft: 0,
      index: 0,
      numberOfQuestions: 0,
      answers: [],
      questionText: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      userAnswered: false,
      roundEnded: false,
      isUserAnswerCorrect: undefined,
      message: "",
    };
  },
  mounted() {
    this.prepareQuestion();
  },
  methods: {
    prepareQuestion() {
      const questions = this.quizData.results;
      const index = this.index;
      this.numberOfQuestions = questions.length;
      this.answers.push(questions[index].correct_answer);
      questions[index].incorrect_answers.forEach((answer) => {
        this.answers.push(answer);
      });
      this.correctAnswer = questions[index].correct_answer;
      this.questionText = questions[index].question;
      this.question1 = this.getRandomAnswer();
      this.question2 = this.getRandomAnswer();
      this.question3 = this.getRandomAnswer();
      this.question4 = this.getRandomAnswer();
      this.countdown();
    },
    getRandomAnswer() {
      const randomNumber = Math.floor(Math.random() * this.answers.length);
      let answer = this.answers.splice(randomNumber, 1)[0];
      return answer;
    },
    countdown() {
      this.secondsLeft = 60;
      this.timer = setInterval(() => {
        if (!this.userAnswered) {
          if (this.secondsLeft > 0) this.secondsLeft--;
          else if (this.secondsLeft <= 0 || this.roundEnded) this.stopTimer();
          if (this.secondsLeft.toString().length < 2)
            this.secondsLeft = `0${this.secondsLeft}`;
        }
        if (this.secondsLeft <= 0 && !this.userAnswered) {
          this.message = "Время вышло!";
          this.roundEnded = true;
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    checkAnswer(event) {
      if (!this.roundEnded) {
        this.userAnswered = true;
        this.roundEnded = true;
        this.isUserAnswerCorrect =
          event.target.innerText == this.correctAnswer ? true : false;
        if (this.isUserAnswerCorrect === true) {
          this.$emit('score', true)
        }
        this.message = this.isUserAnswerCorrect
          ? "Молодец! 🐢"
          : "Не правильно, будь внимательнее";
        if (this.isUserAnswerCorrect) this.correctAnswers++;
        setTimeout(() => {
          event.target.style.background = this.isUserAnswerCorrect
            ? "#48ff00"
            : "#ff2424";
        }, 200);
      }
    },
    goToNextQuestion() {
      this.checkIfItIsTheLastRound();
      if (!this.gameFinished) {
        this.index++;
        this.roundEnded = false;
        this.userAnswered = false;
        this.isUserAnswerCorrect = undefined;
        this.answers = [];
        this.stopTimer();
        this.prepareQuestion();
      }
    },
    checkIfItIsTheLastRound() {
      if (this.index == this.numberOfQuestions - 1) {
        this.gameFinished = true;
        this.$emit("endGame", {
          numberOfQuestions: this.numberOfQuestions,
          correctAnswers: this.correctAnswers,
        });
      }
    },
  },
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.answers {
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  align-items: center;
}
.post-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.f43fsa {
  width: 240px;
}
.e3x3 {
  width: 260px;
}
.app-button {
  padding: 7px 10px;
  margin: 5px;
  box-shadow: 6px 6px 5px #aaaaaa;
}
</style>