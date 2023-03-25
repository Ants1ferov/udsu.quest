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
        center: [56.850250, 53.216939],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.850250, 53.216939],
            [56.850253, 53.216723],
            [56.849928, 53.216719],
            [56.849800, 53.216443],
            [56.849570, 53.216475],
            [56.849327, 53.216227],
            [56.849214, 53.216252],
            [56.848711, 53.210548],
            [56.850435, 53.209783],
            [56.850414, 53.209435],
            [56.850624, 53.209302],
            [56.850453, 53.206431],
          ]
        },
        properties:{
          balloonContent: "Я путь, проложенный яндекс.картами, которому вы должны следовать"
        }
      }, {
        draggable: false,
        strokeColor: "#000",
        strokeWidth: 5
      });
      const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Это точка 4, а вам нужна точка 5'
      }, {
        iconLayout: 'default#image',
        iconImageHref: './src/assets/img/button/ya.png',
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -60]
      });
      myMap.geoObjects
          .add(myGeoObject)
          .add(myPlacemark)
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