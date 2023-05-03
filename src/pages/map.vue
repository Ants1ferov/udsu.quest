<script setup>
import UniPoint from "@/components/maps/points/UniPoint.vue";
import UniMaps from "@/components/maps/road/UniMaps.vue";
import {onMounted, reactive, ref, watch} from "vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import AppButton from "@/components/UI/AppButton.vue";
import Quest1 from "@/components/quests/quest1.vue";
import Quest2 from "@/components/quests/quest2.vue";
import Quest3 from "@/components/quests/quest3.vue";
import Quest4 from "@/components/quests/quest4.vue";
import Quest5 from "@/components/quests/quest5.vue";
import Quest6 from "@/components/quests/quest6.vue";
import CountScore from "@/components/UI/countScore.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";
import router from "@/router";
import axios from "axios";
import Quest7 from "@/components/quests/quest7.vue";
import Account from "@/components/sections/account.vue";
import Scanner from "@/components/UI/scanner.vue";

onMounted(() => {
  if (localStorage.getItem('email') === null) {
    router.push({path: "auth"})
  } else if (localStorage.getItem('email') === 'udsu.test@list.ru')
    {test.value = true
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
let qrPerFail = ref(false)
const points = [
  {a : '56.844301', b: '53.212378'},
  {a : '56.844301', b: '53.212378'},
  {a : '56.846569', b: '53.220352'},
  {a : '56.849245', b: '53.213994'},
  {a : '56.850250', b: '53.216939'},
  {a : '56.850453', b: '53.206431'},
  {a : '56.852765', b: '53.207936'},
  {a : '56.853858', b: '53.219066'},
]
const maps = [
  [
    [56.844301, 53.212378],
    [56.844132, 53.212413],
    [56.844335, 53.214665],
    [56.845787, 53.214231],
    [56.846324, 53.220463],
    [56.846625, 53.220357]
  ],
  [
    [56.846625, 53.220357],
    [56.846328, 53.220450],
    [56.846250, 53.219499],
    [56.849397, 53.218401],
    [56.849040, 53.214527],
    [56.849162, 53.214363],
  ],
  [
    [56.849242, 53.214006],
    [56.849001, 53.214125],
    [56.849203, 53.216254],
    [56.849552, 53.216200],
    [56.849611, 53.216487],
    [56.849810, 53.216445],
    [56.850233, 53.216734],
    [56.850250, 53.216939],
  ],
  [
    [56.850250, 53.216939],
    [56.850253, 53.216723],
    [56.849928, 53.216719],
    [56.849800, 53.216443],
    [56.849570, 53.216475],
    [56.849327, 53.216227],
    [56.849214, 53.216252],
    [56.848711, 53.210548],
    [56.850435, 53.209783],
    [56.850414, 53.209435],
    [56.850624, 53.209302],
    [56.850453, 53.206431],
  ],
  [
    [56.850453, 53.206431],
    [56.850429, 53.206279],
    [56.851535, 53.206063],
    [56.851522, 53.205746],
    [56.852161, 53.205642],
    [56.852193, 53.206667],
    [56.852495, 53.206638],
    [56.852539, 53.207383],
    [56.852765, 53.207936],
  ],
  [
    [56.852765, 53.207936],
    [56.852593, 53.208131],
    [56.852681, 53.210073],
    [56.852459, 53.211395],
    [56.852096, 53.211657],
    [56.852054, 53.217109],
    [56.852226, 53.217211],
    [56.852235, 53.217526],
    [56.852763, 53.218770],
    [56.853858, 53.219066],
  ]
]
const score = reactive({number: parseInt(localStorage.getItem('score'))})
const number = ref(parseInt(localStorage.getItem('score')))
watch(number, (n) => {
  gsap.to(score, {duration: 1.5, number: Number(n) || 0})
})

function qrCheckOK() {
  quest.count += 1
  road.value = !road.value
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
  } else if (count === -1) {
    scanner.value = !scanner.value
    qrPerFail.value = true
  } else if (quest.count === count - 1) {
    qrCheckOK()
  } else {
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
      if (response.status === 200) {
      } else if (response.status === 409) {
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
  qrPerFail.value = false
}

function nextQuest() {
  localStorage.setItem('score', number.value)
  questCompleted.value = true
  road.value = true
  updateServerValue()
}

function scanOpen() {
  scanner.value = !scanner.value
}

const test = ref(false)
const tools = ref(false)

function setQuest(val) {
  localStorage.setItem('quest', val)
  router.push({path: '/auth'})
}

function roadTrueFalse() {
  road.value = !road.value
  localStorage.setItem('road', road.value)
  router.push({path: '/'})
}

</script>

<template>
  <div class="map">
    <div v-if="test" class="tools" @click="tools = !tools">
      <img src="@/assets/img/button/setting.svg" alt="setting button">
    </div>
    <transition name="ok">
      <div v-if="tools" class="testing">
        <app-button class="bg-gray" @click="roadTrueFalse">road: {{ road }}</app-button>
        <app-button class="bg-gray" @click="setQuest(1)">1 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(2)">2 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(3)">3 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(4)">4 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(5)">5 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(6)">6 задание</app-button>
        <app-button class="bg-gray" @click="setQuest(7)">7 задание</app-button>
      </div>
    </transition>
    <transition name="account">
      <account v-if="account"></account>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="questCompleted">
        <template v-slot:val>
          <div class="white fz-32">Задание №{{ quest.count }} выполнено</div>
        </template>
        <AppButton class="white bdr-wht bold" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
      <error-pop-up v-else-if="qrRepeat">
        <template v-slot:val>
          <p class="fz-28 white">Вы отсканировали<br>qr-код прошлого задания!</p>
        </template>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Эххх</AppButton>
      </error-pop-up>
      <error-pop-up v-else-if="qrFail">
        <template v-slot:val>
          <p class="fz-36 white">Неправильный qr!😔</p>
        </template>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Ну блин</AppButton>
      </error-pop-up>
      <error-pop-up v-else-if="qrPerFail">
        <template v-slot:val>
          <p class="fz-36 white">Не выдан доступ к камере</p>
        </template>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Ну вот</AppButton>
      </error-pop-up>
      <ok-pop-up v-else-if="qrOk">
        <template v-slot:val>
          <div class="white fz-32">QR-код успешно отсканирован</div>
        </template>
        <AppButton class="bg-gray bold" type="button" @click="cancel">Прекрасно</AppButton>
      </ok-pop-up>
      <pop-up-block v-else-if="scanner" class="scan-block">
        <scanner @qr="qrCheck"></scanner>
        <AppButton class="bdr-wht white bold" @click="cancel">Закрыть</AppButton>
      </pop-up-block>
    </transition>
    <div class="block-1">
      <count-score>
        <div class="score-block" @click="account = !account">
          {{ score.number.toFixed(0) }}
        </div>
      </count-score>
      <div class="maps">
        <UniPoint v-if="!road || (road && quest.count === 0)" :data="points[quest.count]" :point="quest.count"></UniPoint>
        <UniMaps v-if="road && quest.count > 0" :data="maps[quest.count - 1]" :point="quest.count"></UniMaps>
      </div>
      <div v-if="road && quest.count < 7" class="on-the-road">
        <p class="fz-32 mrg-25">Следуйте до точки {{ quest.count + 1 }}</p>
        <AppButton v-if="road && quest.count <= 5 && (quest.count !== 2 && road.value !== true)"
                   class="qr-block bold bdr-blk" @click="scanOpen">
          <div>Сканировать</div>
          <img alt="qr button" class="qr-img" src="@/../src/assets/img/button/qr.svg">
        </AppButton>
        <transition name="ok">

        </transition>
      </div>
      <div v-if="quest.count === 6 && road || quest.count === 2 && road">
        <AppButton class="bg-dark-gray fz-42" @click="questEnd">Я на месте</AppButton>
      </div>
    </div>
    <div class="quests">
      <quest1 v-if="quest.count === 1 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest1>
      <quest2 v-if="quest.count === 2 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest2>
      <quest3 v-if="quest.count === 3 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest3>
      <quest4 v-if="quest.count === 4 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest4>
      <quest5 v-if="quest.count === 5 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest5>
      <quest6 v-if="quest.count === 6 && !road" @questComplete="nextQuest" @score="scoreUpdate"></quest6>
      <quest7 v-if="quest.count === 7"></quest7>
    </div>
  </div>
</template>

<style>
.tools {
  position: fixed;
  top: 40px;
  left: 25px;
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

.scan-block {
  height: 560px !important;
}
</style>
