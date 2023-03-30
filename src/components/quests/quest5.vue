<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {reactive, ref} from "vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
const emit = defineEmits(['questComplete', 'score'])
const questOk = ref(false)
const questFail = ref(false)
let words = reactive([
  {show: true, id: 0, value: 'не'},
  {show: true, id: 1, value: 'защиты'},
  {show: true, id: 2, value: 'Я'},
  {show: true, id: 3, value: 'для'},
  {show: true, id: 4, value: 'оружие'},
  {show: true, id: 5, value: 'людей'},
  {show: true, id: 6, value: 'своего'},
  {show: true, id: 7, value: 'для'},
  {show: true, id: 8, value: 'изобрел'},
  {show: true, id: 9, value: 'убийства'},
  {show: true, id: 10, value: 'Отечества'},
  {show: true, id: 11, value: 'а'},
])
const answers = reactive([
])
const answer = [
    2,
    4,
    8,
    0,
    3,
    9,
    5,
    11,
    7,
    1,
    6,
    10
]
function questComplete() {
  emit('score', 100)
  emit('questComplete', true)
}
function wrongAnswer() {
  questFail.value = !questFail.value
}
function questCheck() {
  let count = 0
  for (let i in answers) {
    if (answers[i].id === answer[i]) {
      count += 1
      console.log(count)
    }
  }
  if (count >= 10) {
    questComplete()
  } else {
    wrongAnswer()
  }
}
function unselectWord(id) {
  for (let i in answers) {
    if (answers[i].id === id) {
      answers.splice(parseInt(i), 1)
    }
  }
  words[id].show = true
}
function selectWord(id) {
  answers.push({id: id,value: words[id].value})
  words[id].show = false
  if (answers.length === 12) {
    console.log('все')
    questCheck()
  }
}
</script>

<template>
  <div class="quest-block">
    <transition name="ok">
      <error-pop-up v-if="questFail">
        <p class="fz-28 white">Фраза составлена неправильно</p>
        <AppButton class="bg-gray bold" type="button" @click="wrongAnswer">Ну блин</AppButton>
      </error-pop-up>
    </transition>
    <div class="quest-title bold fz-56 black">Задание 5</div>
    <div class="quest-description fz-36">Правильно собрать известную фразу<br>М. Т. Калашникова</div>
    <div class="quest-block">
      <div class="for">
        <div class="fz-36" v-if="answers.length > 0">&#171;</div>
        <transition-group name="crossword">
          <div
              class="f3ct4 fz-36 bold"
              @click="unselectWord(answer.id)"
              v-for="answer in answers"
              key="id"
          >
            {{ answer.value }}</div>
        </transition-group>
        <div class="fz-36" v-if="answers.length > 0">&#187;</div>
      </div>
      <div class="for">
        <transition-group name="crossword">
          <div
              v-for="word in words"
              key="id"
          >
            <AppButton @click="selectWord(word.id)" class="bg-dark-gray f5yac" v-if="word.show">{{ word.value }}</AppButton>
          </div>
        </transition-group>
      </div>
    </div>
    <AppButton @click="questCheck" class="bg-dark-gray" v-if="questOk">Отправить</AppButton>
  </div>
</template>

<style scoped>
.for {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px 0;
}
.f5yac {
  margin: 5px 5px;
}
.f3ct4 {
  margin: 0 5px;
}
.crossword-move,
.crossword-enter-active,
.crossword-leave-active {
  transition: all 0.5s ease;
}
.crossword-enter-from,
.crossword-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.crossword-leave-active {
  position: absolute;
}
</style>