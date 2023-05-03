<script setup xmlns="http://www.w3.org/1999/html">
import AppButton from "@/components/UI/AppButton.vue";
import FastPopUp from "@/components/UI/fastPopUp.vue";
import {defineEmits, reactive, ref} from "vue";

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
const answer = ref('')
let taskOk = ref(false)
let count = reactive({count: 0})
const emit = defineEmits(['questComplete', 'score'])
const wrongAns = ref(false)
const answerOk = ref(false)

function checkAnswer() {
  let countFor = ref(0)
  answer.value = answer.value.replace('ё', 'е')
  answer.value = answer.value.replace(' ', '')
  answer.value = answer.value.toLocaleLowerCase()
  console.log(answer.value)
  for (let i in answers) {
    countFor.value += 1
    if (answer.value === answers[i]) {
      if (count.count === 16) {
        count.count += 1
        setTimeout(() => {
          words[i].value = !words[i].value
        }, 1150)
        answer.value = ''
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
          answer.value = ''
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
          answer.value = ''
        }
        break
      }
    } else {
      if (countFor > 0) {
        break
      } else if (countFor.value > 16) {
        wrongAnswer()
      }
    }
  }
}

function wrongAnswer() {
  wrongAns.value = true
  setTimeout(() => {
    wrongAns.value = false
  }, 900)
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
      <div v-if="wrongAns" class="fast-pop-up-mini">
        <svg fill="none" height="64" viewBox="0 0 120 120" width="64" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 69.6L36 97.6C35.2 98.4 34.2667 98.8 33.2 98.8C32.1333 98.8 31.2 98.4 30.4 97.6C29.6 96.8
           29.2 95.8667 29.2 94.8C29.2 93.7333 29.6 92.8 30.4 92L58.4 64L30.4 36C29.6 35.2 29.2 34.2667 29.2
            33.2C29.2 32.1333 29.6 31.2 30.4 30.4C31.2 29.6 32.1333 29.2 33.2 29.2C34.2667 29.2 35.2 29.6 36
             30.4L64 58.4L92 30.4C92.8 29.6 93.7333 29.2 94.8 29.2C95.8667 29.2 96.8 29.6 97.6 30.4C98.4 31.2
              98.8 32.1333 98.8 33.2C98.8 34.2667 98.4 35.2 97.6 36L69.6 64L97.6 92C98.4 92.8 98.8 93.7333 98.8
               94.8C98.8 95.8667 98.4 96.8 97.6 97.6C96.8 98.4 95.8667 98.8 94.8 98.8C93.7333 98.8 92.8 98.4 92
                97.6L64 69.6Z" fill="#FF0000"/>
        </svg>
      </div>
    </transition>
    <transition name="top-dynamic">
      <div v-if="answerOk" class="fast-pop-up-mini">
        <svg height="64" viewBox="0 0 48 48" width="64" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9 35.1q-.3
         0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8
          18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95
           34.65q-.25.25-.5.35-.25.1-.55.1Z" fill="#adff00"/>
        </svg>
      </div>
    </transition>
    <div class="quest-title bold fz-56 black">Задание 1</div>
    <div class="quest-description fz-36 bold">Решите кроссворд</div>
    <div class="quest-task">
      <div class="crossword">
        <img alt="crossword" class="crossword-img" src="@/../src/assets/img/quest/crossword.svg">
        <img v-if="words[0].value" alt="" class="cross" src="@/assets/img/crossword/1.svg">
        <img v-if="words[1].value" alt="" class="cross" src="@/assets/img/crossword/2.svg">
        <img v-if="words[2].value" alt="" class="cross" src="@/assets/img/crossword/3.svg">
        <img v-if="words[3].value" alt="" class="cross" src="@/assets/img/crossword/4.svg">
        <img v-if="words[4].value" alt="" class="cross" src="@/assets/img/crossword/5.svg">
        <img v-if="words[5].value" alt="" class="cross" src="@/assets/img/crossword/6.svg">
        <img v-if="words[6].value" alt="" class="cross" src="@/assets/img/crossword/7.svg">
        <img v-if="words[7].value" alt="" class="cross" src="@/assets/img/crossword/8.svg">
        <img v-if="words[8].value" alt="" class="cross" src="@/assets/img/crossword/9.svg">
        <img v-if="words[9].value" alt="" class="cross" src="@/assets/img/crossword/10.svg">
        <img v-if="words[10].value" alt="" class="cross" src="@/assets/img/crossword/11.svg">
        <img v-if="words[11].value" alt="" class="cross" src="@/assets/img/crossword/12.svg">
        <img v-if="words[12].value" alt="" class="cross" src="@/assets/img/crossword/13.svg">
        <img v-if="words[13].value" alt="" class="cross" src="@/assets/img/crossword/14.svg">
        <img v-if="words[14].value" alt="" class="cross" src="@/assets/img/crossword/15.svg">
        <img v-if="words[15].value" alt="" class="cross" src="@/assets/img/crossword/16.svg">
        <img v-if="words[16].value" alt="" class="cross" src="@/assets/img/crossword/17.svg">
      </div>
      <div v-if="!taskOk" class="answer-check">
        <div class="block-input-flex">
          <input v-model="answer" :class="{ red: wrongAns }" class="form-input input-flex" placeholder="Слово"
                 type="text">
        </div>
        <AppButton :class="{ shake: wrongAns }"
                   class="answer-check bg-dark-gray fz-24 bold"
                   @click="checkAnswer">Проверить
        </AppButton>
      </div>
      <AppButton v-if="taskOk" class="bg-dark-gray k9fc" @click="taskComplete">Отправить</AppButton>
      <transition mode="out-in" name="adf">
        <div v-if="!taskOk">
          <div class="crossword-questions fz-24 non-copy">
            <transition-group name="crossword">
              <p key="30" class="bold mrg-25">Вопросы по вертикали:</p>
              <div v-if="!words[1].value" key="0">2. Команда стрелять?</div>
              <div v-if="!words[2].value" key="1">3. Знаки отличия военных?</div>
              <div v-if="!words[3].value" key="2">4. Больница для военных?</div>
              <div v-if="!words[4].value" key="3">5. Высшая награда?</div>
              <div v-if="!words[5].value" key="4">6. Остается от патрона после выстрела?</div>
              <div v-if="!words[7].value" key="5">8. Бегут с криком ура?</div>
              <div v-if="!words[10].value" key="6">11. Головной убор военного?</div>
              <div v-if="!words[11].value" key="7">12. Стреляет ядрами?</div>
              <div v-if="!words[13].value" key="8">14. С ним прыгают с самолета?</div>
              <div v-if="!words[15].value" key="9">16. Управляет самолетом?</div>
              <p key="31" class="bold mrg-25">Вопросы по горизонтали:</p>
              <div v-if="!words[0].value" key="10">1. Солдатская рубашка?</div>
              <div v-if="!words[16].value" key="11">6. Снаряд, который взрывается после броска?</div>
              <div v-if="!words[6].value" key="12">7. Бывает противотанковая?</div>
              <div v-if="!words[8].value" key="13">9. Военная машина на гусеницах?</div>
              <div v-if="!words[9].value" key="14">10. Место, где прячется солдат во время боя?</div>
              <div v-if="!words[12].value" key="15">13. Награда за отвагу?</div>
              <div v-if="!words[14].value" key="16">15. На чем сражались в небе?</div>
            </transition-group>
          </div>
        </div>
        <div v-else-if="taskOk" class="zb89f">
          <AppButton class="bg-dark-gray k9fc" @click="taskComplete">Отправить</AppButton>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.crossword-questions {
  text-align: left;
  padding: 15px 25px 50px 25px;
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
  transition: all 1s cubic-bezier(0.3, 1, .35, 1);
}

.adf-leave-to {
  opacity: 0;
  transform: translateX(+100%);
}

.adf-enter-active {
  transition: all 1s cubic-bezier(0.3, 1, .35, 1);
}

.adf-enter-from {
  opacity: 1;
  transform: translateX(+100%);
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.k9fc {
  box-shadow: 0 0 15px 10px #ADFF00;
}

.zb89f {
  display: flex;
  justify-content: center;
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
</style>