<template>
  <AppHeader></AppHeader>
  <div class="map" id="map-container">
    <yandex-maps></yandex-maps>
    <div class="block-btn">
      <AppButton @click="changeMap1" class="dark bold btn-dark m15">1</AppButton>
      <AppButton @click="changeMap2" class="dark bold btn-dark m15">2</AppButton>
      <AppButton @click="changeMap3" class="dark bold btn-dark m15">3</AppButton>
      <AppButton @click="changeMap4" class="dark bold btn-dark m15">4</AppButton>
      <AppButton @click="changeMap5" class="dark bold btn-dark m15">5</AppButton>
      <AppButton @click="changeMap6" class="dark bold btn-dark m15">6</AppButton>
      <AppButton @click="changeMap7" class="dark bold btn-dark m15">7</AppButton>
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/UI/AppHeader.vue";
import YandexMaps from "@/components/UI/yandex-maps.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "map",
  components: {AppButton, YandexMaps, AppHeader},
  data() {
    return {
      map: {
        map1: true,
        map2: false,
        map3: false,
        map4: false,
        map5: false,
        map6: false,
        map7: false
      }
    }
  },
  methods: {
    changeMap1() {

    },
    changeMap2() {

    },
    changeMap3() {

    },
    changeMap4() {

    },
    changeMap5() {

    },
    changeMap6() {

    },
    changeMap7() {

    }
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
</style>