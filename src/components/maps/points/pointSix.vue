<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.852765, 53.207936],
    zoom: 16
  });
  myMap.geoObjects
      .add(new ymaps.Placemark([56.852765, 53.207936], {
        balloonContent: 'Вы здесь, выполните задание и вам откроется путь до точки 7'
      }, {
        preset: 'islands#icon',
        iconColor: '#ff0000'
      }))
}
</script>

<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<style scoped>

</style>