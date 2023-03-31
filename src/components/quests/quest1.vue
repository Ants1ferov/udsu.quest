<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {defineEmits, reactive, ref} from "vue";
import FastPopUp from "@/components/UI/fastPopUp.vue";
const answers = [
  'гимнастерка',
  'огонь',
  'погоны',
  'госпиталь',
  'орден',
  'гильза',
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
  ref(false)
]
const answerRepeatOpen = ref(false)
let answer = reactive({count: ''})
let taskOk = ref(false)
let count = reactive({count: 0})
const emit = defineEmits(['questComplete', 'score'])
const wrongAns = ref(false)
const answerOk = ref(false)

function wrongAnswer() {
  wrongAns.value = true
  setTimeout(() => {
    wrongAns.value = false
  }, 900)
}
function answerCheck() {
  let countFor = ref(0)
  for (let i in answers) {
    countFor.value += 1
    if (answer.count.toLowerCase() === answers[i]) {
      if (count.count === 16) {
        count.count += 1
        setTimeout(() => {
          words[i].value = !words[i].value
        }, 1150)
        answer.count = ''
        taskOk.value = true
        answerOk.value = true
        setTimeout(() => {
          answerOk.value = false
        }, 900)
      } else {
        if (words[i].value === true) {
          answerRepeatOpen.value = true
          setTimeout(() => {
            answerRepeatOpen.value = false
          }, 750)
          answer.count = ''
        } else {
          answerOk.value = true
          setTimeout(() => {
            answerOk.value = false
          }, 900)
          emit('score', 15)
          count.count += 1
          setTimeout(() => {
            words[i].value = !words[i].value
          }, 1150)
          answer.count = ''
        }
        break
      }
    } else {
      if (countFor > 0) {
        break
      }
      else if (countFor.value > 16) {
        wrongAnswer()
      }
    }
  }
}
function taskComplete() {
  emit('questComplete', true)
}
</script>

<template>
  <div class="quest-block">
    <transition name="ok">
      <fast-pop-up v-if="answerRepeatOpen">
        <div class="white bold fz-36">Вы уже вводили это слово!</div>
      </fast-pop-up>
    </transition>
    <transition name="top-dynamic">
      <div class="fast-pop-up-mini" v-if="wrongAns">
        <svg width="64" height="64" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 69.6L36 97.6C35.2 98.4 34.2667 98.8 33.2 98.8C32.1333 98.8 31.2 98.4 30.4 97.6C29.6 96.8 29.2 95.8667 29.2 94.8C29.2 93.7333 29.6 92.8 30.4 92L58.4 64L30.4 36C29.6 35.2 29.2 34.2667 29.2 33.2C29.2 32.1333 29.6 31.2 30.4 30.4C31.2 29.6 32.1333 29.2 33.2 29.2C34.2667 29.2 35.2 29.6 36 30.4L64 58.4L92 30.4C92.8 29.6 93.7333 29.2 94.8 29.2C95.8667 29.2 96.8 29.6 97.6 30.4C98.4 31.2 98.8 32.1333 98.8 33.2C98.8 34.2667 98.4 35.2 97.6 36L69.6 64L97.6 92C98.4 92.8 98.8 93.7333 98.8 94.8C98.8 95.8667 98.4 96.8 97.6 97.6C96.8 98.4 95.8667 98.8 94.8 98.8C93.7333 98.8 92.8 98.4 92 97.6L64 69.6Z" fill="#FF0000"/>
        </svg>
      </div>
    </transition>
    <transition name="top-dynamic">
      <div class="fast-pop-up-mini" v-if="answerOk">
        <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 48 48"><path d="M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z" fill="#adff00"/></svg>
      </div>
    </transition>
    <div class="quest-title bold fz-56 black">Задание 1</div>
    <div class="quest-description fz-36 bold">Решите кроссворд</div>
    <div class="quest-task">
      <div class="crossword">
        <img src="@/../src/assets/img/quest/crossword.svg" alt="crossword" class="crossword-img">
        <img v-if="words[0].value" class="cross" src="@/../src/assets/img/crossword/1.svg" alt="">
        <img v-if="words[1].value" class="cross" src="@/../src/assets/img/crossword/2.svg" alt="">
        <img v-if="words[2].value" class="cross" src="@/../src/assets/img/crossword/3.svg" alt="">
        <img v-if="words[3].value" class="cross" src="@/../src/assets/img/crossword/4.svg" alt="">
        <img v-if="words[4].value" class="cross" src="@/../src/assets/img/crossword/5.svg" alt="">
        <img v-if="words[5].value" class="cross" src="@/../src/assets/img/crossword/6.svg" alt="">
        <img v-if="words[6].value" class="cross" src="@/../src/assets/img/crossword/7.svg" alt="">
        <img v-if="words[7].value" class="cross" src="@/../src/assets/img/crossword/8.svg" alt="">
        <img v-if="words[8].value" class="cross" src="@/../src/assets/img/crossword/9.svg" alt="">
        <img v-if="words[9].value" class="cross" src="@/../src/assets/img/crossword/10.svg" alt="">
        <img v-if="words[10].value" class="cross" src="@/../src/assets/img/crossword/11.svg" alt="">
        <img v-if="words[11].value" class="cross" src="@/../src/assets/img/crossword/12.svg" alt="">
        <img v-if="words[12].value" class="cross" src="@/../src/assets/img/crossword/13.svg" alt="">
        <img v-if="words[13].value" class="cross" src="@/../src/assets/img/crossword/14.svg" alt="">
        <img v-if="words[14].value" class="cross" src="@/../src/assets/img/crossword/15.svg" alt="">
        <img v-if="words[15].value" class="cross" src="@/../src/assets/img/crossword/16.svg" alt="">
        <img v-if="words[16].value" class="cross" src="@/../src/assets/img/crossword/17.svg" alt="">
      </div>
      <transition name="adf">
        <div v-if="!taskOk">
          <div class="crossword-questions fz-24 non-copy">
            <transition-group name="crossword">
              <p key="30" class="bold mrg-25">Вопросы по вертикали:</p>
              <div key="0" v-if="!words[1].value">2. Команда стрелять?</div>
              <div key="1" v-if="!words[2].value">3. Знаки отличия военных?</div>
              <div key="2" v-if="!words[3].value">4. Больница для военных?</div>
              <div key="3" v-if="!words[4].value">5. Высшая награда?</div>
              <div key="4" v-if="!words[5].value">6. Остается от патрона после выстрела?</div>
              <div key="5" v-if="!words[7].value">8. Бегут с криком ура?</div>
              <div key="6" v-if="!words[10].value">11. Головной убор военного?</div>
              <div key="7" v-if="!words[11].value">12. Стреляет ядрами?</div>
              <div key="8" v-if="!words[13].value">14. С ним прыгают с самолета?</div>
              <div key="9" v-if="!words[15].value">16. Управляет самолетом?</div>
              <p key="31" class="bold mrg-25">Вопросы по горизонтали:</p>
              <div key="10" v-if="!words[0].value">1. Солдатская рубашка?</div>
              <div key="11" v-if="!words[16].value">6. Снаряд, который взрывается после броска?</div>
              <div key="12" v-if="!words[6].value">7. Бывает противотанковая?</div>
              <div key="13" v-if="!words[8].value">9. Военная машина на гусеницах?</div>
              <div key="14" v-if="!words[9].value">10. Место, где прячется солдат во время боя?</div>
              <div key="15" v-if="!words[12].value">13. Награда за отвагу?</div>
              <div key="16" v-if="!words[14].value">15. На чем сражались в небе?</div>
            </transition-group>
          </div>
        </div>
      </transition>
    </div>
    <div class="fixed-check" v-if="!taskOk">
      <div class="block-input-flex">
        <input type="text" class="form-input" placeholder="Слово" :class="{ red: wrongAns }" v-model="answer.count">
      </div>
      <AppButton @click="answerCheck" class="answer-check bg-dark-gray fz-24 bold"
                 :class="{ shake: wrongAns }">Проверить</AppButton>
    </div>
    <AppButton @click="taskComplete" v-if="taskOk" class="bg-dark-gray k9fc">Отправить</AppButton>
  </div>
</template>

<style scoped>
.crossword-questions {
  text-align: left;
  padding: 15px 25px 300px 25px;
}
.block-input-flex {

}
.crossword {
  display: flex;
}
.crossword-img {
  width: 100%;
}
.cross {
  position: absolute;
  width: 100%;
}
.adf-leave-active {
  transition: all 900ms cubic-bezier(0, 1, .15, 1);
}
.adf-leave-to {
  opacity: 0;
  transform: translateX(+50%);
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
.fixed-check {
  position: fixed;
  bottom: 5%;
  display: flex;
  flex-direction: column;
}
.form-input {
  background-color: #1e1e1e;
  margin: 0;
  color: white;
  font-size: 24px;
}
.form-input::placeholder {
  color: #dadada;
}
.answer-check {
  margin: 10px auto;
}
.shake {
  animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
.red {
  color: orangered;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.k9fc {
    box-shadow: 0 0 30px 15px #ADFF00;
  }
</style>