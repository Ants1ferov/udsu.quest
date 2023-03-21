<template>
  <AppHeader></AppHeader>
  <div class="map" id="map-container">
    <yaMaps1 v-if="map1"></yaMaps1>
    <yaMaps2 v-if="map2"></yaMaps2>
    <yaMaps3 v-if="map3"></yaMaps3>
    <yaMaps4 v-if="map4"></yaMaps4>
    <yaMaps5 v-if="map5"></yaMaps5>
    <yaMaps6 v-if="map6"></yaMaps6>
    <div class="block-btn">
      <AppButton @click="changeMap1" class="dark bold btn-dark m15">1</AppButton>
      <AppButton @click="changeMap2" class="dark bold btn-dark m15">2</AppButton>
      <AppButton @click="changeMap3" class="dark bold btn-dark m15">3</AppButton>
      <AppButton @click="changeMap4" class="dark bold btn-dark m15">4</AppButton>
      <AppButton @click="changeMap5" class="dark bold btn-dark m15">5</AppButton>
      <AppButton @click="changeMap6" class="dark bold btn-dark m15">6</AppButton>
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

export default {
  name: "map",
  components: {YaMaps6, YaMaps5, YaMaps4, YaMaps3, yaMaps2, AppButton, yaMaps1, AppHeader},
  data() {
    return {
      map1: true,
      map2: false,
      map3: false,
      map4: false,
      map5: false,
      map6: false,
    }
  },
  methods: {
    changeMap1() {
      this.map1 = true
      this.map2 = false
      this.map3 = false
      this.map4 = false
      this.map5 = false
      this.map6 = false
    },
    changeMap2() {
      this.map1 = false
      this.map2 = true
      this.map3 = false
      this.map4 = false
      this.map5 = false
      this.map6 = false
    },
    changeMap3() {
      this.map1 = false
      this.map2 = false
      this.map3 = true
      this.map4 = false
      this.map5 = false
      this.map6 = false
    },
    changeMap4() {
      this.map1 = false
      this.map2 = false
      this.map3 = false
      this.map4 = true
      this.map5 = false
      this.map6 = false
    },
    changeMap5() {
      this.map1 = false
      this.map2 = false
      this.map3 = false
      this.map4 = false
      this.map5 = true
      this.map6 = false
    },
    changeMap6() {
      this.map1 = false
      this.map2 = false
      this.map3 = false
      this.map4 = false
      this.map5 = false
      this.map6 = true
    },
  }
}

</script>

<style scoped>
  .map {
    padding-top: 70px;
    width: 100%;
    height: 40vh;
  }
  .block-btn {
    display: flex;
    margin: 0 auto;
    width: 70%;
    justify-content: center;
    flex-wrap: wrap;
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
</style>