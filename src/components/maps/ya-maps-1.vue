<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-1",
  mounted() {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [56.844301,53.212378],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.844301,53.212378],
            [56.844132,53.212413],
            [56.844335,53.214665],
            [56.845787,53.214231],
            [56.846324,53.220463],
            [56.846625,53.220357]
          ]
        },
        properties:{
          hintContent: "Я геообъект",
          balloonContent: "Меня можно перетащить"
        }
      }, {
        draggable: false,
        strokeColor: "#000",
        strokeWidth: 5
      });
      myMap.geoObjects
          .add(myGeoObject)
          .add(new ymaps.Placemark([56.844301,53.212378], {
            balloonContent: '1 точка'
          }, {
            preset: 'islands#icon',
            iconColor: '#ff0000'
          }))
    }
  }
}
</script>

<style>
</style>