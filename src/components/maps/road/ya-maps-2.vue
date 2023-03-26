<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-2",
  mounted() {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [56.846625,53.220357],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.846328, 53.220450],
            [56.846250, 53.219499],
            [56.849397, 53.218401],
            [56.849040, 53.214527],
            [56.849162, 53.214363],
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
        balloonContent: 'Это точка 2, а вам нужна точка 3'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'ya.png',
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