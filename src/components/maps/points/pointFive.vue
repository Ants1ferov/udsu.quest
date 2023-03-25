<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.850453, 53.206431],
    zoom: 16
  });
  myMap.geoObjects
      .add(new ymaps.Placemark([56.850453, 53.206431], {
        balloonContent: 'Вы здесь, выполните задание и вам откроется путь до точки 6'
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