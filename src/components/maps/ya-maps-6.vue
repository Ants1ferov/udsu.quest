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
        center: [56.850672,53.206719],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "LineString",
          coordinates: [
            [56.850672,53.206719],
            [56.850436, 53.206388],
            [56.850247, 53.203873],
            [56.852331, 53.203542],
            [56.852370, 53.203613],
            [56.852267, 53.203646],
            [56.852269, 53.203695],
            [56.852386, 53.203666],
            [56.852925, 53.210758],
            [56.852712, 53.211293],
            [56.852083, 53.211642],
            [56.852147, 53.212250],
            [56.852060, 53.217095],
            [56.852056, 53.217657],
            [56.852310, 53.217672],
            [56.852745, 53.218801],
            [56.852932, 53.219109],
            [56.853866, 53.219060],
          ]
        },
        properties: {
          hintContent: "Я геообъект"
        }
      }, {
        draggable: false,
        strokeColor: "#494949",
        strokeWidth: 5
      });
      myMap.geoObjects
          .add(myGeoObject)
          .add(new ymaps.Placemark([56.852787,53.207917], {
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