<script setup>
import {reactive, ref} from "vue";
import YaMaps1 from "@/components/maps/road/ya-maps-1.vue";
import YaMaps2 from "@/components/maps/road/ya-maps-2.vue";
import YaMaps3 from "@/components/maps/road/ya-maps-3.vue";
import YaMaps4 from "@/components/maps/road/ya-maps-4.vue";
import YaMaps5 from "@/components/maps/road/ya-maps-5.vue";
import YaMaps6 from "@/components/maps/road/ya-maps-6.vue";
import YaMapsPoint1 from "@/components/maps/point/YaMapsPoint1.vue";
import YaMapsPoint2 from "@/components/maps/point/YaMapsPoint2.vue";
import YaMapsPoint3 from "@/components/maps/point/YaMapsPoint3.vue";
import YaMapsPoint4 from "@/components/maps/point/YaMapsPoint4.vue";
import YaMapsPoint5 from "@/components/maps/point/YaMapsPoint5.vue";
import YaMapsPoint6 from "@/components/maps/point/YaMapsPoint6.vue";
import YaMapsPoint7 from "@/components/maps/point/YaMapsPoint7.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import AppButton from "@/components/UI/AppButton.vue";
import Quest1 from "@/components/quests/quest1.vue";
import Quest2 from "@/components/quests/quest2.vue";
import Quest3 from "@/components/quests/quest3.vue";
import Quest4 from "@/components/quests/quest4.vue";
import Quest5 from "@/components/quests/quest5.vue";
import Quest6 from "@/components/quests/quest6.vue";
import CountScore from "@/components/UI/countScore.vue";

let score = reactive({count: 0})
let road = ref(false)
let quest = ({count: 1})
let scanner = ref(false)
function scan() {
  quest.count += 1
  road.value = ! road.value
  scanner.value = !scanner.value
}
const change = () => {
  console.log('задание выполнено')
  road.value = !road.value
  score.count += 10
};
function scanOpen() {
  scanner.value = !scanner.value
}
</script>

<template>
  <div class="map">
    <div class="block-1">
      <count-score>{{ score.count }}</count-score>
      <div class="maps">
        <yaMapsPoint1 v-if="quest.count === 1 && !road"></yaMapsPoint1>
        <yaMaps1 v-if="quest.count === 1 && road"></yaMaps1>
        <yaMapsPoint2 v-if="quest.count === 2 && !road"></yaMapsPoint2>
        <yaMaps2 v-if="quest.count === 2 && road"></yaMaps2>
        <yaMapsPoint3 v-if="quest.count === 3 && !road"></yaMapsPoint3>
        <yaMaps3 v-if="quest.count === 3 && road"></yaMaps3>
        <yaMapsPoint4 v-if="quest.count === 4 && !road"></yaMapsPoint4>
        <yaMaps4 v-if="quest.count === 4 && road"></yaMaps4>
        <yaMapsPoint5 v-if="quest.count === 5 && !road"></yaMapsPoint5>
        <yaMaps5 v-if="quest.count === 5 && road"></yaMaps5>
        <yaMapsPoint6 v-if="quest.count === 6 && !road"></yaMapsPoint6>
        <yaMaps6 v-if="quest.count === 6 && road"></yaMaps6>
        <yaMapsPoint7 v-if="quest.count === 7"></yaMapsPoint7>
      </div>
      <AppButton class="qr-block bold" v-if="road" @click="scanOpen">Сканировать
      </AppButton>
      <transition name="ok">
        <pop-up-block v-if="scanner">
          <AppButton class="fz-32 bg-dark" @click="scan">Сканировал</AppButton>
        </pop-up-block>
      </transition>
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