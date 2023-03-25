<template>
  <div className="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-6",
  mounted() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [56.852765, 53.207936],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.852765, 53.207936],
            [56.852593, 53.208131],
            [56.852681, 53.210073],
            [56.852459, 53.211395],
            [56.852096, 53.211657],
            [56.852054, 53.217109],
            [56.852226, 53.217211],
            [56.852235, 53.217526],
            [56.852763, 53.218770],
            [56.853858, 53.219066],
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
        balloonContent: 'Это точка 6, а вам нужна точка 7'
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