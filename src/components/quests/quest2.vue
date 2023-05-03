<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import {defineEmits, ref} from 'vue';

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
    emit('score', 135)
    emit('questComplete', true)
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
    <div class="quest-description fz-24 bold">Прослушайте аудиофайл и вставьте правильные слова в пропуски</div>
    <div class="quest-task fz-24">
      <audio class="audio" controls preload="auto" style="width: 90%;">
        <source src="@/assets/audio/pointTwo.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
      <div class="task-text non-copy">
        <input v-model="answer[0]" class="form-input text"> Черезов является выпускником школы №24.
        Родился он в <input v-model="answer[1]" class="form-input number"> году в посёлке Валамаз.
        Окончив семилетку, будущий лётчик перебрался в Ижевск, где продолжил учиться в школе № 24.
        Параллельно посещал <input v-model="answer[2]" class="form-input text">,
        который окончил с отличием в <input v-model="answer[3]" class="form-input number"> году.
        Затем Черезов поступил в Балашовскую <input v-model="answer[4]" class="form-input long-text"> школу.<br><br>
        Врачи госпиталя № <input v-model="answer[5]" class="form-input number"> специализировались
        на черепно-мозговых травмах и повреждениях позвоночника.
        На первом этаже расположились перевязочная, процедурная, столовая, физиокабинет и кабинет рентгена,
        на втором лежали самые тяжелые больные, а на третьем и четвертом – те, кто уже шел на поправку.
        Одновременно в госпитале могло лечиться около <input v-model="answer[6]" class="form-input number"> человек.<br><br>
        В годы войны здесь проводили уникальные операции для заживления
        черепа после трепанации и ранений головы. В стенах лицея № <input v-model="answer[7]" class="form-input number">
        было проведено около <input v-model="answer[8]" class="form-input number" type="text"> таких операций
      </div>
    </div>
    <AppButton class="bg-dark-gray" @click="answerCheck">Отправить</AppButton>
  </div>
</template>

<style scoped>
.audio {
  margin: 25px 0;
}

.form-input {
  height: 28px;
  margin: 0;
  text-align: center;
}

.task-text {
  text-align: left;
  padding: 0 15px 0 25px;
}

.text {
  width: 90px;
}

.number {
  width: 50px;
}

.long-text {
  width: 130px;
}
</style>