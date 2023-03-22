<template>
  <div class="quest-block">
    <div class="quest-title bold fs-max black">Задание 1</div>
    <div class="quest-description fs-big">Решите кроссворд</div>
    <div class="quest-task">
      <div class="crossword">
        <img src="@/../src/assets/img/quest/crossword2.svg" alt="crossword">
        <img v-if="words[1]" class="cross" src="@/../src/assets/img/crossword/1.svg" alt="">
        <img v-if="words[2]" class="cross" src="@/../src/assets/img/crossword/2.svg" alt="">
        <img v-if="words[3]" class="cross" src="@/../src/assets/img/crossword/3.svg" alt="">
        <img v-if="words[4]" class="cross" src="@/../src/assets/img/crossword/4.svg" alt="">
        <img v-if="words[5]" class="cross" src="@/../src/assets/img/crossword/5.svg" alt="">
        <img v-if="words[6]" class="cross" src="@/../src/assets/img/crossword/6.svg" alt="">
        <img v-if="words[7]" class="cross" src="@/../src/assets/img/crossword/7.svg" alt="">
        <img v-if="words[8]" class="cross" src="@/../src/assets/img/crossword/8.svg" alt="">
        <img v-if="words[9]" class="cross" src="@/../src/assets/img/crossword/9.svg" alt="">
        <img v-if="words[10]" class="cross" src="@/../src/assets/img/crossword/10.svg" alt="">
        <img v-if="words[11]" class="cross" src="@/../src/assets/img/crossword/11.svg" alt="">
        <img v-if="words[12]" class="cross" src="@/../src/assets/img/crossword/12.svg" alt="">
        <img v-if="words[13]" class="cross" src="@/../src/assets/img/crossword/13.svg" alt="">
        <img v-if="words[14]" class="cross" src="@/../src/assets/img/crossword/14.svg" alt="">
        <img v-if="words[15]" class="cross" src="@/../src/assets/img/crossword/15.svg" alt="">
        <img v-if="words[16]" class="cross" src="@/../src/assets/img/crossword/16.svg" alt="">
        <img v-if="words[17]" class="cross" src="@/../src/assets/img/crossword/17.svg" alt="">
      </div>
      <input type="text" class="form-input" placeholder="Слово" v-model="answer">
      <AppButton @click="check" class="answer-check" :class="{colorGreen: colorGreen, colorRed: colorRed}">Проверить</AppButton>
      <div v-if="!taskOk" class="crossword-questions fs-mid">
        <p class="bold">Вопросы по вертикали:</p><br>
        <p class="bold">2.</p>Команда стрелять?
        <p class="bold">3.</p>Знаки отличия военных?
        <p class="bold">4.</p>Больница для военных?
        <p class="bold">5.</p>Высшая награда?
        <p class="bold">6.</p>Остается от патрона после выстрела?
        <p class="bold">8.</p>Бегут с криком ура?
        <p class="bold">11.</p> Головной убор военного?
        <p class="bold">12.</p> Стреляет ядрами?
        <p class="bold">14.</p> С ним прыгают с самолета?
        <p class="bold">16.</p> Управляет самолетом?
        <p class="bold">Вопросы по горизонтали:</p>
        <p class="bold">1.</p>Солдатская рубашка?
        <p class="bold">6.</p>Снаряд который взрывается после броска?
        <p class="bold">7.</p>Бывает противотанковая?
        <p class="bold">9.</p>Военная машина на гусеницах?
        <p class="bold">10.</p>Место где прячется солдат во время боя?
        <p class="bold">13.</p>Награда за отвагу?
        <p class="bold">15.</p>На них сражались в небе?<br><br>
      </div>
    </div>
    <AppButton @click="answerCheck" class="answer-check">Отправить</AppButton>
  </div>
</template>

<script>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "quest1",
  components: {AppButton},
  data() {
    const answers = [
        'test',
        'гимнастерка',
        'пуск',
        'медали',
        'госпиталь',
        'орден',
        'гильзы',
        'мина',
        'атака',
        'танк',
        'окоп',
        'фуражка',
        'пушка',
        'медаль',
        'парашют',
        'самолет',
        'пилот',
        'граната',
    ]
    return {
      answers: [
          'test',
        'гимнастерка',
        'пуск',
        'медали',
        'госпиталь',
        'орден',
        'гильзы',
        'мина',
        'атака',
        'танк',
        'окоп',
        'фуражка',
        'пушка',
        'медаль',
        'парашют',
        'самолет',
        'пилот',
        'граната'],
      answer: '',
      words: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      colorGreen: false,
      colorRed: false,
      count: 16,
      taskOk: false
    }
  },
  props: {
    task: {
      type: String,
      default() {
      }
    }
  },
  methods: {
    check() {
      for (let i in this.answers) {
        if (this.answer === 'test') {
          for (let j in this.words) {
            this.words[j] = true
          }
          this.taskOk = true
        }
        if (this.answer.toLowerCase() === this.answers[i]) {
          if (this.count === 17) {
            this.taskOk = true
          }
          this.count += 1
          this.colorRed = false
          this.colorGreen = true
          this.words[i] = true
          this.answer = ''
        } else {
          this.colorGreen = false
          this.colorRed = true
        }
      }
    },
    answerCheck() {
      if (this.taskOk === true) {
        this.task = '2'
        // axios
        //     .post('', {
        //       email: this.email,
        //       quest: this.task,
        //     })
        //     .then((response) => {
        //       console.log(response.status)
        //       if (response.status === 200) {
        //
        //       }
        //       else if (response.status === 409) {
        //
        //       }
        //     })
        //     .catch((reason) => {
        //
        //     })
      } else {

      }
      }
    }
}
</script>
<style scoped>
.quest-task {
  width: 100%;
}
.crossword-questions {
  text-align: left;
  padding: 15px 25px;
}
.crossword {
  display: flex;
}
.cross {
  position: absolute;
  width: 100%;
}
.colorGreen {
  background-color: #adff2b;
  color: black;
}
.colorRed {
  background-color: darkred;
  color: white;
}
.answer-check {
  margin: 35px auto;
}
</style>