<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.853858, 53.219066],
    zoom: 16
  });
  myMap.geoObjects
      .add(new ymaps.Placemark([56.853858, 53.219066], {
        balloonContent: 'Вы здесь, это конечная точка, спасибо за прохождение квеста!'
      }, {
        preset: 'islands#icon',
        iconColor: '#ff0000'
      }))
}
</script>

<template>
  <div className="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<style scoped>

</style>