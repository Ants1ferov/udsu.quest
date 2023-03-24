<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.844301, 53.212378],
    zoom: 16
  });
  myMap.geoObjects
      .add(new ymaps.Placemark([56.844301, 53.212378], {
        balloonContent: 'Вы здесь'
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