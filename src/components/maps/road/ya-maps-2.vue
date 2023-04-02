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
            [56.846625, 53.220357],
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
      const myPlacemarkA = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Это точка 2, а вам нужна точка 3'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'pointA.png',
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -60]
      });
      const myPlacemarkB = new ymaps.Placemark([56.849162, 53.214363], {
        balloonContent: 'Это точка 3, вам сюда'
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