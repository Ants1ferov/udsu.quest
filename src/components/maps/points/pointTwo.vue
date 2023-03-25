<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.846569, 53.220352],
    zoom: 16
  });
  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: 'Это точка 2, здесь вы должны выполнить задание'
  }, {
    iconLayout: 'default#image',
    iconImageHref: './src/assets/img/button/ya.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -60]
  });
  myMap.geoObjects
      .add(myPlacemark)
}
</script>

<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<style scoped>

</style>