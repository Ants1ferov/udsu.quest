<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {defineEmits, reactive, ref} from "vue";

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
  'bug'
]
let words = [
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false),
  ref(false)
]
let answer = ''
let color = ref('')
let taskOk = ref(false)
let count = reactive({count: 0})
const emit = defineEmits(['questComplete'])

function answerCheck() {
  for (let i in answers) {
    if (answer === 'test') {
      for (let j in words) {
        words[j].value = true
      }
      taskOk.value = true
    }
    if (answer.toLowerCase() === answers[i]) {
      color.value = 'green'
      if (count.count === 17) {
        taskOk.value = true
      }
      count.count += 1
      words[i].value = !words[i].value
      answer = ''
    } else {
      color.value = 'red'
    }
  }
}
function taskComplete() {
  emit('questComplete', true)
}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 1</div>
    <div class="quest-description fz-36 bold">Решите кроссворд</div>
    <div class="quest-task">
      <div class="crossword">
        <img src="@/../src/assets/img/quest/crossword2.svg" alt="crossword">
        <img v-if="words[1].value" class="cross" src="@/../src/assets/img/crossword/1.svg" alt="">
        <img v-if="words[2].value" class="cross" src="@/../src/assets/img/crossword/2.svg" alt="">
        <img v-if="words[3].value" class="cross" src="@/../src/assets/img/crossword/3.svg" alt="">
        <img v-if="words[4].value" class="cross" src="@/../src/assets/img/crossword/4.svg" alt="">
        <img v-if="words[5].value" class="cross" src="@/../src/assets/img/crossword/5.svg" alt="">
        <img v-if="words[6].value" class="cross" src="@/../src/assets/img/crossword/6.svg" alt="">
        <img v-if="words[7].value" class="cross" src="@/../src/assets/img/crossword/7.svg" alt="">
        <img v-if="words[8].value" class="cross" src="@/../src/assets/img/crossword/8.svg" alt="">
        <img v-if="words[9].value" class="cross" src="@/../src/assets/img/crossword/9.svg" alt="">
        <img v-if="words[10].value" class="cross" src="@/../src/assets/img/crossword/10.svg" alt="">
        <img v-if="words[11].value" class="cross" src="@/../src/assets/img/crossword/11.svg" alt="">
        <img v-if="words[12].value" class="cross" src="@/../src/assets/img/crossword/12.svg" alt="">
        <img v-if="words[13].value" class="cross" src="@/../src/assets/img/crossword/13.svg" alt="">
        <img v-if="words[14].value" class="cross" src="@/../src/assets/img/crossword/14.svg" alt="">
        <img v-if="words[15].value" class="cross" src="@/../src/assets/img/crossword/15.svg" alt="">
        <img v-if="words[16].value" class="cross" src="@/../src/assets/img/crossword/16.svg" alt="">
        <img v-if="words[17].value" class="cross" src="@/../src/assets/img/crossword/17.svg" alt="">
      </div>
      <transition name="adf">
        <div v-if="!taskOk">
          <div class="block-input-flex">
            <input type="text" class="form-input" placeholder="Слово" v-model="answer">
          </div>
          <AppButton @click="answerCheck" class="answer-check bg-dark fz-24 bold"
                     :class="{colorGreen: color.value === 'green', colorRed: color.value === 'red'}">Проверить слово</AppButton>
          <div class="crossword-questions fz-24">
            <p class="bold mrg-25">Вопросы по вертикали:</p>
            2. Команда стрелять?<br>
            3. Знаки отличия военных?<br>
            4. Больница для военных?<br>
            5. Высшая награда?<br>
            6. Остается от патрона после выстрела?<br>
            8. Бегут с криком ура?<br>
            11. Головной убор военного?<br>
            12. Стреляет ядрами?<br>
            14. С ним прыгают с самолета?<br>
            16. Управляет самолетом?<br>
            <p class="bold mrg-25">Вопросы по горизонтали:</p>
            1. Солдатская рубашка?<br>
            6. Снаряд который взрывается после броска?<br>
            7. Бывает противотанковая?<br>
            9. Военная машина на гусеницах?<br>
            10. Место где прячется солдат во время боя?<br>
            13. Награда за отвагу?<br>
            15. На них сражались в небе?<br>
          </div>
        </div>
      </transition>
    </div>
    <AppButton @click="taskComplete" v-if="taskOk" class="bg-dark">Отправить</AppButton>
  </div>
</template>

<style scoped>
.crossword-questions {
  text-align: left;
  padding: 15px 25px;
}
.block-input-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: #c70000;
  color: white;
}
.answer-check {
  margin: 35px auto;
}
.adf-leave-active {
  transition: all 900ms cubic-bezier(0, 1, .15, 1);
}
.adf-leave-to {
  opacity: 0;
  transform: translateX(+50%);
}
</style>