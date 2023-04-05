<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.849245, 53.213994],
    zoom: 16
  });
  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: 'Это точка 3, здесь вы должны выполнить задание'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'pointB.png',
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