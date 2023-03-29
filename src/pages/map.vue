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
import {gsap} from "gsap";
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
  let num = number.value
  localStorage.setItem('score', num)
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
  questCompleted.value = true
  road.value = true
  updateServerValue()
}
function scanOpen() {
  scanner.value = !scanner.value
}
</script>

<template>
  <div class="map">
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
        <AppButton class="bg-dark fz-42" @click="questEnd">Я на месте</AppButton>
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