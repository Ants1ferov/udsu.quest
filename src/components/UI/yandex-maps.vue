<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "yandex-maps",
  mounted() {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [56.844301,53.212378],
        zoom: 16
      });
    }
  }
}
</script>

<style scoped>
  .ya-img {
  }
</style>