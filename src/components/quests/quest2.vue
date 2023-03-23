<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import { ref, defineProps, defineEmits, watch } from 'vue';
const answer = [
  '',
  '',
  '',
  '',
  '',
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
        <input class="form-input mini" v-bind="answer[1]"> Черезов является выпускником школы №24.
        Родился он в <input class="form-input mini" v-bind="answer[2]"> году в посёлке Валамаз.
        Окончив семилетку, будущий лётчик перебрался в Ижевск, где продолжил учиться в школе № 24.
        Параллельно посещал <input class="form-input mini" v-bind="answer[3]">,
        который окончил с отличием в <input class="form-input mini" v-bind="answer[4]"> году.
        Затем Черезов поступил в Балашовскую <input class="form-input mini" v-bind="answer[5]"> школу.
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
.mini {
  height: 28px;
  width: 75px;
  margin: 0;
}
.audio::-webkit-media-controls-panel {
  color: white;
}
</style>