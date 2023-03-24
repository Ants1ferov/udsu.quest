<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import YaMaps1 from "@/components/maps/road/ya-maps-1.vue";
import YaMaps2 from "@/components/maps/road/ya-maps-2.vue";
import YaMaps3 from "@/components/maps/road/ya-maps-3.vue";
import YaMaps4 from "@/components/maps/road/ya-maps-4.vue";
import YaMaps5 from "@/components/maps/road/ya-maps-5.vue";
import YaMaps6 from "@/components/maps/road/ya-maps-6.vue";
// import YaMapsPoint1 from "@/components/maps/point/YaMapsPoint1.vue";
// import YaMapsPoint2 from "@/components/maps/point/YaMapsPoint2.vue";
// import YaMapsPoint3 from "@/components/maps/point/YaMapsPoint3.vue";
// import YaMapsPoint4 from "@/components/maps/point/YaMapsPoint4.vue";
// import YaMapsPoint5 from "@/components/maps/point/YaMapsPoint5.vue";
// import YaMapsPoint6 from "@/components/maps/point/YaMapsPoint6.vue";
// import YaMapsPoint7 from "@/components/maps/point/YaMapsPoint7.vue";
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

let scanner = ref(false)
let questCompleted = ref(false)
let actionFail = ref(false)

let road = ref({count: JSON.parse(localStorage.getItem('road'))})

let score = reactive({count: 0})
console.log(road.value)
console.log(road)
let quest = ({count: parseInt(localStorage.getItem('quest'))})
if (quest.count === 2) {
  score.count += 85
}
onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован', localStorage.getItem('email'))
    router.push({path: "/"})
  } else {
    console.log('авторизован', localStorage.getItem('email'))
  }
})

function cancel() {
  actionFail.value = false
  questCompleted.value = false
}

 function animatedNumber()
{
  return score.count.toFixed(0)
}

function start() {
  quest.count += 1
}



function scan() {
  quest.count += 1
  road.value = ! road.value
  localStorage.setItem('quest', quest.count)
  localStorage.setItem('road', road.value)
  scanner.value = !scanner.value
}
const change = () => {
  console.log('задание выполнено')
  questCompleted.value = true
  road.value = true
  score.count += 10
  localStorage.setItem('road', road.value)
  localStorage.setItem('quest', quest.count)
  localStorage.setItem('score', score.count)
};
function scanOpen() {
  scanner.value = !scanner.value
}
</script>

<template>
  <div class="map">
    <transition name="ok">
      <error-pop-up v-if="actionFail">
        <AppButton class="bg-dark bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="questCompleted">
        <div class="white fz-32">Задание №{{ quest.count }} выполнено
        </div>
        <AppButton class="bg-dark bold btn-mn-auto" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
    </transition>
    <div class="block-1">
      <count-score>
        <router-link class="test" to="/account">
          {{ score.count }}
        </router-link>
      </count-score>

      <div class="maps">
<!--        <ya-maps-point1 v-if="quest.count === 1 && !road"></ya-maps-point1>-->
<!--        <yaMaps1 v-if="quest.count === 1 && road"></yaMaps1>-->
<!--        <ya-maps-point2 v-if="quest.count === 2 && !road"></ya-maps-point2>-->
<!--        <yaMaps2 v-if="quest.count === 2 && road"></yaMaps2>-->
<!--        <ya-maps-point3 v-if="quest.count === 3 && !road"></ya-maps-point3>-->
<!--        <yaMaps3 v-if="quest.count === 3 && road"></yaMaps3>-->
<!--        <ya-maps-point4 v-if="quest.count === 4 && !road"></ya-maps-point4>-->
<!--        <yaMaps4 v-if="quest.count === 4 && road"></yaMaps4>-->
<!--        <ya-maps-point5 v-if="quest.count === 5 && !road"></ya-maps-point5>-->
<!--        <yaMaps5 v-if="quest.count === 5 && road"></yaMaps5>-->
<!--        <ya-maps-point6 v-if="quest.count === 6 && !road"></ya-maps-point6>-->
<!--        <yaMaps6 v-if="quest.count === 6 && road"></yaMaps6>-->
<!--        <ya-maps-point7 v-if="quest.count === 7"></ya-maps-point7>-->
        <point-zero v-if="quest.count === 0"></point-zero>
        <point-one v-if="quest.count === 1 && !road"></point-one>
        <yaMaps1 v-if="quest.count === 1 && road"></yaMaps1>
        <yaMaps2 v-if="quest.count === 2 && !road"></yaMaps2>
        <yaMaps2 v-if="quest.count === 2 && road"></yaMaps2>
        <yaMaps3 v-if="quest.count === 3 && !road"></yaMaps3>
        <yaMaps3 v-if="quest.count === 3 && road"></yaMaps3>
        <yaMaps4 v-if="quest.count === 4 && !road"></yaMaps4>
        <yaMaps4 v-if="quest.count === 4 && road"></yaMaps4>
        <yaMaps5 v-if="quest.count === 5 && !road"></yaMaps5>
        <yaMaps5 v-if="quest.count === 5 && road"></yaMaps5>
        <yaMaps6 v-if="quest.count === 6 && !road"></yaMaps6>
        <yaMaps6 v-if="quest.count === 6 && road"></yaMaps6>
        <yaMaps6 v-if="quest.count === 7"></yaMaps6>
      </div>
      <AppButton class="fz-42" @click="start" v-if="quest.count === 0">Начать квест</AppButton>
      <div class="on-the-road" v-if="road">
        <p class="fz-32 mrg-25">Следуйте до точки {{ quest.count + 1}}</p>
        <AppButton class="qr-block bold bdr-blk" @click="scanOpen">
          <div>Сканировать</div>
          <img class="qr-img" src="@/../src/assets/img/button/qr.svg" alt="qr button">
        </AppButton>
        <transition name="ok">
          <pop-up-block v-if="scanner">
            <AppButton class="fz-32 bg-dark" @click="scan">Сканировал</AppButton>
          </pop-up-block>
        </transition>
      </div>
    </div>
    <div class="quests">
      <quest1 v-if="quest.count === 1 && !road"></quest1>
      <quest2 v-if="quest.count === 2 && !road"></quest2>
      <quest3 v-if="quest.count === 3 && !road"></quest3>
      <quest4 v-if="quest.count === 4 && !road"></quest4>
      <quest5 v-if="quest.count === 5 && !road"></quest5>
      <quest6 v-if="quest.count === 6 && !road"></quest6>
    </div>
    <div class="block-2">
      <AppButton v-if="!road" @click="change" class="bg-dark">Отправить</AppButton>

    </div>
  </div>
</template>

<style>
.block-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test {
  width: 100px;
  padding: 7px 45px;
}
.block-2 {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
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
.ok-enter-active {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.ok-leave-active {
  transition: all 1500ms cubic-bezier(0, 1, .15, 1);
}
.ok-enter-from {
  opacity: 1;
  transform: translateY(-150%);
}
.ok-leave-to {
  opacity: 0;
  transform: translateY(+150%);
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