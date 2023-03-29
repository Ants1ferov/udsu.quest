<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {ref, defineEmits} from 'vue';
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
let answer = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
const answers = [
  'аркадий',
  '1923',
  'аэроклуб',
  '1940',
  'авиационную',
  '3672',
  '400',
  '24',
  '50',
]
const emit = defineEmits(['questComplete', 'score'])
let questFailed = ref(false)
function cancel() {
  questFailed.value = false
}
function answerCheck() {
  let count = 0
  for (let i in answers) {
    if (answer[i].toLowerCase() === answers[i])
      count += 1
  }
  if (count === 9) {
    emit('questComplete', true)
    emit('score', 135)
  } else {
    questFailed.value = true
  }
}
</script>

<template>
  <div class="quest-block">
    <transition name="ok">
      <error-pop-up v-if="questFailed">
        <div class="fz-42 white">Не все ответы верны</div>
        <AppButton class="bdr-wht white bold" type="button" @click="cancel">Ну ладно</AppButton>
      </error-pop-up>
    </transition>
    <div class="quest-title bold fz-56 black">Задание 2</div>
    <div class="quest-description fz-24 bold">Прослушайте аудиофайл, и вставьте правильные слова в пропуски</div>
    <div class="quest-task fz-24">
      <audio class="audio" controls>
        <source src="@/../src/assets/audio/pointTwo.mp3"/>
      </audio>
      <div class="task-text non-copy">
        <input class="form-input text" v-model="answer[0]"> Черезов является выпускником школы №24.
        Родился он в <input class="form-input number" v-model="answer[1]"> году в посёлке Валамаз.
        Окончив семилетку, будущий лётчик перебрался в Ижевск, где продолжил учиться в школе № 24.
        Параллельно посещал <input class="form-input text" v-model="answer[2]">,
        который окончил с отличием в <input class="form-input number" v-model="answer[3]"> году.
        Затем Черезов поступил в Балашовскую <input class="form-input text" v-model="answer[4]"> школу.<br><br>
        Врачи госпиталя <input class="form-input number" v-model="answer[5]"> специализировались
        на черепно-мозговых травмах и повреждениях позвоночника.
        На первом этаже расположились перевязочная, процедурная, столовая, физиокабинет и кабинет рентгена,
        на втором лежали самые тяжелые больные, а на третьем и четвертом – те, кто уже шел на поправку.
        Одновременно в госпитале могло лечиться около <input class="form-input number" v-model="answer[6]"> человек.<br><br>
        В годы войны здесь проводили уникальные операции для заживления
        черепа после трепанации и ранений головы. В стенах лицея <input class="form-input number" v-model="answer[7]">
        было проведено около <input type="text" class="form-input number" v-model="answer[8]"> таких операций
      </div>
    </div>
    <AppButton @click="answerCheck" class="bg-dark-gray">Отправить</AppButton>
  </div>
</template>

<style scoped>
.audio {
  margin: 25px 0;
}
.task-text {
  text-align: left;
  padding: 0 15px 0 25px;
}
.text {
  height: 28px;
  width: 90px;
  margin: 0;
}
.number {
  height: 28px;
  width: 50px;
  margin: 0;
}
.d3ed2f3 {
  display: flex;
}
</style>