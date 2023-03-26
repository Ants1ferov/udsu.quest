<template>
  <div className="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-5",
  mounted() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [56.850453, 53.206431],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.850453, 53.206431],
            [56.850429, 53.206279],
            [56.851535, 53.206063],
            [56.851522, 53.205746],
            [56.852161, 53.205642],
            [56.852193, 53.206667],
            [56.852495, 53.206638],
            [56.852539, 53.207383],
            [56.852765, 53.207936],
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
        balloonContent: 'Это точка 5, а вам нужна точка 6'
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