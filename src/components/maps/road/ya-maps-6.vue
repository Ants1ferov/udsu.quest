<template>
  <div>
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "ya-maps-6",
  mounted() {
    ymaps.ready(init);
    function init() {
      let myMap = new ymaps.Map("map", {
        center: [56.852765, 53.207936],
        zoom: 16
      });
      let myGeoObject = new ymaps.GeoObject({
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
      const myPlacemarkA = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Это точка 6, а вам нужна точка 7'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'pointA.png',
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -60]
      });
      const myPlacemarkB = new ymaps.Placemark([56.853858, 53.219066], {
        balloonContent: 'Это точка 7, вам сюда'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'pointB.png',
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -60]
      });
      myMap.geoObjects
          .add(myGeoObject)
          .add(myPlacemarkA)
          .add(myPlacemarkB)
    }
  }
}
</script>