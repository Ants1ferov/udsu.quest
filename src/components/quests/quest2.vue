<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import { ref, defineProps, defineEmits, watch } from 'vue';
const answer = [
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
  'Аркадий',
  '1923',
  'Аэроклуб',
  '1940',
  'Авиационную',
  '3672',
  '400',
  '24',
  '50',
]
function answerCheck() {

}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 2</div>
    <div class="quest-description fz-24 bold">Прослушайте аудиофайл, и вставьте правильные слова в пропуски</div>
    <div class="quest-task fz-24">
      <audio class="audio" controls>
        <source src="@/../src/assets/audio/rickroll.mp3"/>
      </audio>
      <div class="task-text">
        <input class="form-input text" v-bind="answer[0]"> Черезов является выпускником школы №24.
        Родился он в <input class="form-input number" v-bind="answer[1]"> году в посёлке Валамаз.
        Окончив семилетку, будущий лётчик перебрался в Ижевск, где продолжил учиться в школе № 24.
        Параллельно посещал <input class="form-input text" v-bind="answer[2]">,
        который окончил с отличием в <input class="form-input number" v-bind="answer[3]"> году.
        Затем Черезов поступил в Балашовскую <input class="form-input text" v-bind="answer[4]"> школу.<br><br>
        Врачи госпиталя <input class="form-input number" v-bind="answer[5]"> специализировались
        на черепно-мозговых травмах и повреждениях позвоночника.
        На первом этаже расположились перевязочная, процедурная, столовая, физиокабинет и кабинет рентгена,
        на втором лежали самые тяжелые больные, а на третьем и четвертом – те, кто уже шел на поправку.
        Одновременно в госпитале могло лечиться около <input class="form-input number" v-bind="answer[6]"> человек.<br><br>
        В годы войны здесь проводили уникальные операции для заживления
        черепа после трепанации и ранений головы. В стенах лицея <input class="form-input number" v-bind="answer[7]">
        было проведено около <input class="form-input number" v-bind="answer[8]"> таких операций
      </div>
    </div>
  </div>
</template>

<style scoped>
.audio {
  margin: 25px 0;
}
.task-text {
  text-align: left;
  padding: 0 25px;
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
.audio::-webkit-media-controls-panel {
  color: white;
}
</style>