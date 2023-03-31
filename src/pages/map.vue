<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import YaMaps1 from "@/components/maps/road/ya-maps-1.vue";
import YaMaps2 from "@/components/maps/road/ya-maps-2.vue";
import YaMaps3 from "@/components/maps/road/ya-maps-3.vue";
import YaMaps4 from "@/components/maps/road/ya-maps-4.vue";
import YaMaps5 from "@/components/maps/road/ya-maps-5.vue";
import YaMaps6 from "@/components/maps/road/ya-maps-6.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import AppButton from "@/components/UI/AppButton.vue";
import Quest1 from "@/components/quests/quest1.vue";
import Quest2 from "@/components/quests/quest2.vue";
import Quest3 from "@/components/quests/quest3.vue";
import Quest4 from "@/components/quests/quest4.vue";
import Quest5 from "@/components/quests/quest5.vue";
import Quest6 from "@/components/quests/quest6.vue";
import CountScore from "@/components/UI/countScore.vue";
import PointOne from "@/components/maps/points/pointOne.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";
import router from "@/router";
import PointZero from "@/components/maps/points/pointZero.vue";
import PointTwo from "@/components/maps/points/pointTwo.vue";
import PointThree from "@/components/maps/points/pointThree.vue";
import PointFour from "@/components/maps/points/pointFour.vue";
import PointFive from "@/components/maps/points/pointFive.vue";
import PointSix from "@/components/maps/points/pointSix.vue";
import PointSeven from "@/components/maps/points/pointSeven.vue";
import axios from "axios";
import Scanner from "@/components/UI/scanner.vue";
import Quest7 from "@/components/quests/quest7.vue";
import Account from "@/components/sections/account.vue";

onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован', localStorage.getItem('email'))
    router.push({path: "auth"})
  } else {
    console.log('авторизован', localStorage.getItem('email'))
  }
})

const account = ref(false)
let scanner = ref(false)
let qrRepeat = ref(false)
let qrFail = ref(false)
let qrOk = ref(false)
let questCompleted = ref(false)
let actionFail = ref(false)
let road = ref(JSON.parse(localStorage.getItem('road')))
let quest = ({count: parseInt(localStorage.getItem('quest'))})

const score = reactive({number: parseInt(localStorage.getItem('score'))})
const number = ref(parseInt(localStorage.getItem('score')))
watch(number, (n) => {
  gsap.to(score, { duration: 1.5, number: Number(n) || 0})
})
function qrCheckOK() {
  quest.count += 1
  road.value = ! road.value
  scanner.value = !scanner.value
  updateServerValue()
  setTimeout(() => {
    qrOk.value = true
  }, 250);
}
function qrCheck(count) {
  if (count === 0) {
    scanner.value = !scanner.value
    qrFail.value = true
  }
  else if (count === 1 && quest.count === 0) {
    qrCheckOK()
  }
  else if (count === 2 && quest.count === 1) {
    qrCheckOK()
  }
  else if (count === 3 && quest.count === 2) {
    qrCheckOK()
  }
  else if (count === 4 && quest.count === 3) {
    qrCheckOK()
  }
  else if (count === 5 && quest.count === 4) {
    qrCheckOK()
  }
  else if (count === 6 && quest.count === 5) {
    qrCheckOK()
  }
  else {
    scanner.value = false
    setTimeout(() => {
      qrRepeat.value = true
    }, 250);
  }
}
function updateServerValue() {
  localStorage.setItem('quest', quest.count)
  localStorage.setItem('road', road.value)
  axios
      .post('https://api.udgu.suslovd.ru:9443/api/complete', {
        email: localStorage.getItem('email'),
        quest: quest.count,
        road: road.value
      })
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          console.log('данные сохранены')
        }
        else if (response.status === 409) {
        }
      })
      .catch((reason) => {
      })
}
function questEnd() {
  quest.count += 1
  road.value = false
  updateServerValue()
}
function scoreUpdate(count) {
  number.value += count
}
function cancel() {
  actionFail.value = false
  questCompleted.value = false
  qrRepeat.value = false
  scanner.value = false
  qrOk.value = false
  qrFail.value = false
}
function nextQuest() {
  let num = number.value
  localStorage.setItem('score', num)
  questCompleted.value = true
  road.value = true
  updateServerValue()
}
function scanOpen() {
  scanner.value = !scanner.value
}
// --------------------------------------------
const test = ref(false)
function setQuest1() {
  localStorage.setItem('quest', '1')
  router.push({path: '/auth'})
}
function setQuest2() {
  localStorage.setItem('quest', '2')
  router.push({path: '/auth'})
}
function setQuest3() {
  localStorage.setItem('quest', '3')
  router.push({path: '/auth'})
}
function setQuest4() {
  localStorage.setItem('quest', '4')
  router.push({path: '/auth'})
}
function setQuest5() {
  localStorage.setItem('quest', '5')
  router.push({path: '/auth'})
}
function setQuest6() {
  localStorage.setItem('quest', '6')
  router.push({path: '/auth'})
}
function setQuest7() {
  localStorage.setItem('quest', '7')
  router.push({path: '/auth'})
}
function roadTrueFalse() {
  road.value = !road.value
  localStorage.setItem('road', road.value)
  router.push({path: '/'})
}
// --------------------------------------------
</script>

<template>
  <div class="map">
    <!--  -------------------------------------------  -->
    <div @click="test = !test" class="test">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M27.3 44h-6.6q-.55 0-.975-.35-.425-.35-.525-.9l-.8-5.05q-.95-.35-2-.95t-1.85-1.25L9.9
         37.65q-.55.25-1.1.075T7.95 37l-3.3-5.85q-.3-.5-.15-1.05t.6-.9l4.3-3.15q-.1-.45-.125-1.025Q9.25
          24.45 9.25 24q0-.45.025-1.025T9.4 21.95L5.1 18.8q-.45-.35-.6-.9-.15-.55.15-1.05L7.95 11q.3-.55.85-.725.55-.175
           1.1.075l4.65 2.15q.8-.65 1.85-1.25t2-.9l.8-5.1q.1-.55.525-.9Q20.15 4 20.7 4h6.6q.55 0 .975.35.425.35.525.9l.8
            5.05q.95.35 2.025.925Q32.7 11.8 33.45 12.5l4.65-2.15q.55-.25 1.1-.075t.85.725l3.3 5.8q.3.5.175
             1.075t-.625.925l-4.3 3.05q.1.5.125 1.075.025.575.025 1.075t-.025 1.05q-.025.55-.125 1.05l4.3
              3.1q.45.35.6.9.15.55-.15 1.05L40.05 37q-.3.55-.85.725-.55.175-1.1-.075l-4.65-2.15q-.8.65-1.825
               1.275-1.025.625-2.025.925l-.8 5.05q-.1.55-.525.9-.425.35-.975.35ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9
                1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6
                 1.9Zm0-3q-1.45 0-2.475-1.025Q20.5 25.45 20.5 24q0-1.45 1.025-2.475Q22.55 20.5 24 20.5q1.45 0
                  2.475 1.025Q27.5 22.55 27.5 24q0 1.45-1.025 2.475Q25.45 27.5 24 27.5Zm0-3.5Zm-2.2
                   17h4.4l.7-5.6q1.65-.4 3.125-1.25T32.7 32.1l5.3 2.3 2-3.6-4.7-3.45q.2-.85.325-1.675.125-.825.125-1.675
                    0-.85-.1-1.675-.1-.825-.35-1.675L40 17.2l-2-3.6-5.3 2.3q-1.15-1.3-2.6-2.175-1.45-.875-3.2-1.125L26.2
                     7h-4.4l-.7 5.6q-1.7.35-3.175 1.2-1.475.85-2.625 2.1L10 13.6l-2 3.6 4.7 3.45q-.2.85-.325
                      1.675-.125.825-.125 1.675 0 .85.125 1.675.125.825.325 1.675L8 30.8l2 3.6 5.3-2.3q1.2
                       1.2 2.675 2.05Q19.45 35 21.1 35.4Z"/>
      </svg>
    </div>
    <transition name="ok">
      <div class="testing" v-if="test">
        <p class="fz-42 white">Читы:</p>
        <app-button @click="roadTrueFalse" class="bg-gray">road: {{ road }}</app-button>
        <app-button @click="setQuest1" class="bg-gray">1 задание</app-button>
        <app-button @click="setQuest2" class="bg-gray">2 задание</app-button>
        <app-button @click="setQuest3" class="bg-gray">3 задание</app-button>
        <app-button @click="setQuest4" class="bg-gray">4 задание</app-button>
        <app-button @click="setQuest5" class="bg-gray">5 задание</app-button>
        <app-button @click="setQuest6" class="bg-gray">6 задание</app-button>
        <app-button @click="setQuest7" class="bg-gray">7 задание</app-button>
      </div>
    </transition>
    <!--  -------------------------------------------  -->
    <transition name="account">
      <account v-if="account"></account>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="questCompleted">
        <div class="white fz-32">Задание №{{ quest.count }} выполнено
        </div>
        <AppButton class="white bdr-wht bold" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
    </transition>
    <transition name="ok">
      <error-pop-up v-if="qrRepeat">
        <p class="fz-36 white">Вы отсканировали qr-код прошлого задания!</p>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Ну блин</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <error-pop-up v-if="qrFail">
        <p class="fz-36 white">Неправильный qr!😔</p>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Ну блин</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="qrOk">
        <div class="white fz-32">QR-код успешно отсканирован
        </div>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
    </transition>
    <div class="block-1">
      <count-score>
        <div class="score-block" @click="account = !account">
          {{ score.number.toFixed(0) }}
        </div>
      </count-score>
      <div class="maps">
        <point-zero v-if="quest.count === 0"></point-zero>
        <point-one v-if="quest.count === 1 && !road"></point-one>
        <yaMaps1 v-if="quest.count === 1 && road"></yaMaps1>
        <point-two v-if="quest.count === 2 && !road"></point-two>
        <yaMaps2 v-if="quest.count === 2 && road"></yaMaps2>
        <point-three v-if="quest.count === 3 && !road"></point-three>
        <yaMaps3 v-if="quest.count === 3 && road"></yaMaps3>
        <point-four v-if="quest.count === 4 && !road"></point-four>
        <yaMaps4 v-if="quest.count === 4 && road"></yaMaps4>
        <point-five v-if="quest.count === 5 && !road"></point-five>
        <yaMaps5 v-if="quest.count === 5 && road"></yaMaps5>
        <point-six v-if="quest.count === 6 && !road"></point-six>
        <yaMaps6 v-if="quest.count === 6 && road"></yaMaps6>
        <point-seven v-if="quest.count === 7"></point-seven>
      </div>
      <div class="on-the-road" v-if="road && quest.count < 7">
        <p class="fz-32 mrg-25">Следуйте до точки {{ quest.count + 1}}</p>
        <AppButton v-if="road && quest.count <= 5 && (quest.count !== 2 && road.value !== true)" class="qr-block bold bdr-blk" @click="scanOpen">
          <div>Сканировать</div>
          <img class="qr-img" src="@/../src/assets/img/button/qr.svg" alt="qr button">
        </AppButton>
        <transition name="ok">
          <pop-up-block v-if="scanner">
            <scanner @qr="qrCheck"></scanner>
            <AppButton @click="cancel" class="bdr-wht white bold">Закрыть</AppButton>
          </pop-up-block>
        </transition>
      </div>
      <div v-if="quest.count === 6 && road || quest.count === 2 && road">
        <AppButton class="bg-dark-gray fz-42" @click="questEnd">Я на месте</AppButton>
      </div>
    </div>
    <div class="quests">
      <quest1 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 1 && !road"></quest1>
      <quest2 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 2 && !road"></quest2>
      <quest3 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 3 && !road"></quest3>
      <quest4 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 4 && !road"></quest4>
      <quest5 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 5 && !road"></quest5>
      <quest6 @questComplete="nextQuest" @score="scoreUpdate" v-if="quest.count === 6 && !road"></quest6>
      <quest7 v-if="quest.count === 7"></quest7>
    </div>
  </div>
</template>

<style>
/* ------------------------------------- */
.test {
  position: fixed;
  top: 40px;
  left: 15px;
  z-index: 10000;
}
.testing {
  padding: 25px;
  border-radius: 35px;
  position: fixed;
  height: max-content;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10000;
  right: 0;
}
/* ------------------------------------- */
.block-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.score-block {
  text-align: center;
  width: 100px;

  z-index: 9000;
}
.maps {
  width: 100%;
  height: 50%;
}
.ymaps-2-1-79-balloon__layout {
  border-radius: 15px;
  border: none;
}
.ymaps-2-1-79-balloon__content {
  font-size: 16px !important;
  font-family: sans-serif !important;
}
.ymaps-2-1-79-controls__control_toolbar, .ymaps-2-1-79-copyright.ymaps-2-1-79-copyright_logo_no, .ymaps-2-1-79-map-copyrights-promo {
  display: none !important;
}
#id_167974419086094789939 {
  text-align: center;
  font-weight: bold;
}
.on-the-road {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.qr-img {
  width: 64px;
  margin-top: 10px;
}
.quest-task {
  width: 100%;
}
</style>