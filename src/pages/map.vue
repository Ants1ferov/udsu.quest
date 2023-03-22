<template>
  <AppHeader></AppHeader>
  <div class="map" id="map-container">
    <ya-maps-dot1 v-if="task === '0'"></ya-maps-dot1>
    <yaMaps1 v-if="task === '1'"></yaMaps1>
    <yaMaps2 v-if="task === '2'"></yaMaps2>
    <yaMaps3 v-if="task === '3'"></yaMaps3>
    <yaMaps4 v-if="task === '4'"></yaMaps4>
    <yaMaps5 v-if="task === '5'"></yaMaps5>
    <yaMaps6 v-if="task === '6'"></yaMaps6>
    <div v-if="road" class="block-btn fs-big">
      Сканируйте QR код:
      <button @click="qrOpen">
        <img class="qr-img" src="@/../src/assets/img/button/qr.svg" alt="qr button">
      </button>
    </div>
    <transition name="ok">
      <sky-block v-if="qr">
        <p class="fs-big brs-15 br-wh white" @click="scan">Сканировал</p>
      </sky-block>
    </transition>

    <div class="quest">
      <quest1 v-if="task === '1'"></quest1>
      <quest2 v-if="task === '2'"></quest2>
      <quest3 v-if="task === '3'"></quest3>
      <quest4 v-if="task === '4'"></quest4>
      <quest5 v-if="task === '5'"></quest5>
      <quest6 v-if="task === '6'"></quest6>
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/UI/AppHeader.vue";
import AppButton from "@/components/UI/AppButton.vue";
import yaMaps1 from "@/components/maps/ya-maps-1.vue";
import yaMaps2 from "@/components/maps/ya-maps-2.vue";
import YaMaps3 from "@/components/maps/ya-maps-3.vue";
import YaMaps4 from "@/components/maps/ya-maps-4.vue";
import YaMaps5 from "@/components/maps/ya-maps-5.vue";
import YaMaps6 from "@/components/maps/ya-maps-6.vue";
import Quest1 from "@/components/quests/quest1.vue";
import Quest2 from "@/components/quests/quest2.vue";
import Quest3 from "@/components/quests/quest3.vue";
import Quest4 from "@/components/quests/quest4.vue";
import Quest5 from "@/components/quests/quest5.vue";
import Quest6 from "@/components/quests/quest6.vue";
import SkyBlock from "@/components/UI/sky-block.vue";
import Scanner from "@/pages/scanner.vue";
import YaMapsDot1 from "@/components/maps/yaMapsDot1.vue";
import {Html5QrcodeScanner} from "html5-qrcode";


export default {
  name: "map",
  components: {
    YaMapsDot1,
    Scanner,
    SkyBlock,
    Quest6,
    Quest5,
    Quest4,
    Quest3, Quest2, Quest1, YaMaps6, YaMaps5, YaMaps4, YaMaps3, yaMaps2, AppButton, yaMaps1, AppHeader
  },
  data() {
    return {
      qr: false,
      task: '0',
      road: true
    }
  },
  methods: {
    qrOpen() {
      this.qr = true
    },
    scan() {
      this.task = '1'
      this.road = false
      this.qr = false
    }
  }
}

</script>

<style scoped>
.scanner {
  padding-top: 150px;
}
.scanner-block {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  border-radius: 35px;
  font-size: 32px;
  border: 6px solid #1e1e1e !important;
}
  .map {
    padding-top: 70px;
    width: 100%;
    height: 40vh;
  }
  .block-btn {
    display: flex;
    margin: 35px auto;
    width: 70%;
    justify-content: center;
    text-align: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .ya-map {
    width: 100%;
    height: 100%;
  }
  .ya-img {
  }
  .ymaps-2-1-79-controls__control_toolbar, .ymaps-2-1-79-copyright.ymaps-2-1-79-copyright_logo_no, .ymaps-2-1-79-map-copyrights-promo {
    display: none !important;
  }
  .ymaps-2-1-79-balloon__layout {
    border-radius: 15px;
    border: none;
  }
  .ymaps-2-1-79-balloon__content {
    font-size: 20px !important;
    font-family: sans-serif !important;
  }
  .qr-img {
    width: 64px;
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
</style>