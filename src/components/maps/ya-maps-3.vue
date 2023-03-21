<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-3",
  mounted() {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [56.849242,53.214006],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.849242,53.214006],
            [56.849397, 53.218458],
            [56.849383, 53.218099],
            [56.850483, 53.217740],
            [56.850394, 53.216922],
            [56.850267, 53.216934],
          ]
        },
        properties:{
          hintContent: "Я геообъект"
        }
      }, {
        draggable: false,
        strokeColor: "#494949",
        strokeWidth: 5
      });
      myMap.geoObjects
          .add(myGeoObject)
          .add(new ymaps.Placemark([56.849242,53.214006], {
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
.ya-img {
}
.ymaps-2-1-79-controls__control_toolbar, .ymaps-2-1-79-copyright.ymaps-2-1-79-copyright_logo_no, .ymaps-2-1-79-map-copyrights-promo {
  display: none !important;
}
.ymaps-2-1-79-balloon__layout {
  border-radius: 15px;
  border: none;
}
.ymaps-2-1-79-balloon__content {
  font-size: 20px !important;
  font-family: sans-serif !important;
}
</style>