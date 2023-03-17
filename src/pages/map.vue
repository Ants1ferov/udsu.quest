<template>
  <div class="map-block">
    <iframe class="ya-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b70dc865bbde0245160718afaabdda239ae5f43006246da27ace42e303ac0a1&amp;source=constructor"></iframe>
  </div>
</template>

<script>

export default {
  name: "map"
}
</script>

<style scoped>
  .map-block {
    padding-top: 70px;
    width: 100%;
    height: 85vh;
  }
  .ya-map {
    width: 100%;
    height: 100%;
  }
</style>