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

onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован', localStorage.getItem('email'))
    router.push({path: "auth"})
  } else {
    console.log('авторизован', localStorage.getItem('email'))
  }
})

let scanner = ref(false)
let questCompleted = ref(false)
let actionFail = ref(false)
let score = reactive({count: 0})

let road = ref(JSON.parse(localStorage.getItem('road')))

let quest = ({count: parseInt(localStorage.getItem('quest'))})
if (quest.count === 1 && road.value === true) {
  score.count = 85
}
// else if (quest.count === 2 && road.value === false) {
//   score.count = 85
// }
// else if (quest.count === 2 && road.value === true) {
//   score.count = 130
// }
// else if (quest.count === 3 && road.value === false) {
//   score.count = 130
// }
// else if (quest.count === 3 && road.value === true) {
//   score.count = 180
// }
// else if (quest.count === 4 && road.value === false) {
//   score.count = 180
// }
// else if (quest.count === 4 && road.value === true) {
//   score.count = 230
// }
// else if (quest.count === 5 && road.value === false) {
//   score.count = 230
// }
// else if (quest.count === 5 && road.value === true) {
//   score.count = 320
// }
// else if (quest.count === 6 && road.value === false) {
//   score.count = 320
// }
// else if (quest.count === 6 && road.value === true) {
//   score.count = 370
// }
// else if (quest.count === 7) {
//   score.count = 500
// }


function cancel() {
  actionFail.value = false
  questCompleted.value = false
}





function scan() {
  if (quest.count > 7) {
    router.push({path: 'account'})
  }
  quest.count += 1
  road.value = ! road.value
  localStorage.setItem('quest', quest.count)
  localStorage.setItem('road', road.value)
  scanner.value = !scanner.value
}
function nextQuest() {
  console.log('задание выполнено')
  questCompleted.value = true
  road.value = true
  localStorage.setItem('road', road.value)
  localStorage.setItem('quest', quest.count)
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
function scanOpen() {
  scanner.value = !scanner.value
}
</script>

<template>
  <div class="map">
    <transition name="ok">
      <ok-pop-up v-if="questCompleted">
        <div class="white fz-32">Задание №{{ quest.count }} выполнено
        </div>
        <AppButton class="bg-dark bold" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
    </transition>
    <div class="block-1">
      <count-score>
        <router-link class="score-block" to="/account">
          {{ score.count }}
        </router-link>
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
      <AppButton class="fz-42" v-if="quest.count === 0">Начало квеста</AppButton>
      <div class="on-the-road" v-if="road">
        <p class="fz-32 mrg-25">Следуйте до точки {{ quest.count + 1}}</p>
        <AppButton class="qr-block bold bdr-blk" @click="scanOpen">
          <div>Сканировать</div>
          <img class="qr-img" src="@/../src/assets/img/button/qr.svg" alt="qr button">
        </AppButton>
        <transition name="ok">
          <pop-up-block v-if="scanner">
            <scanner></scanner>
            <AppButton class="fz-32 bg-dark" @click="scan">Сканировал</AppButton>
          </pop-up-block>
        </transition>
      </div>
    </div>
    <div class="quests">
      <quest1 @questComplete="nextQuest" v-if="quest.count === 1 && !road"></quest1>
      <quest2 @questComplete="nextQuest" v-if="quest.count === 2 && !road"></quest2>
      <quest3 @questComplete="nextQuest" v-if="quest.count === 3 && !road"></quest3>
      <quest4 @questComplete="nextQuest" v-if="quest.count === 4 && !road"></quest4>
      <quest5 @questComplete="nextQuest" v-if="quest.count === 5 && !road"></quest5>
      <quest6 @questComplete="nextQuest" v-if="quest.count === 6 && !road"></quest6>
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
  width: 100px;
  padding: 7px 45px;
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
  font-size: 20px !important;
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
}
.qr-img {
  width: 64px;
  margin-top: 10px;
}
.quest-block {
  margin: 35px 0;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.quest-task {
  width: 100%;
}
</style>