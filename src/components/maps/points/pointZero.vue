<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.844301, 53.212378],
    zoom: 16
  });
  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: 'Это точка 0'
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