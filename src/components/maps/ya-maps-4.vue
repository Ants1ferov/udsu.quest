<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-4",
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
            [56.850483, 53.217740],
            [56.850394, 53.216922],
            [56.850267, 53.216934],
            [56.852052, 53.217155],
            [56.852130, 53.212191],
            [56.852089, 53.211682],
            [56.850638, 53.212111],
            [56.850433, 53.209496],
            [56.850633, 53.209331],
            [56.850441, 53.206506],
            [56.850672,53.206719]
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
          .add(new ymaps.Placemark([56.850262,53.216932], {
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