<script setup>
const props = defineProps(['data', 'point'])
const dots = props.data
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: dots[0],
    zoom: 16
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "LineString",
      coordinates: props.data
    },
    properties: {
      balloonContent: "Я путь, проложенный яндекс.картами, которому вы должны следовать"
    }
  }, {
    draggable: false,
    strokeColor: "#000",
    strokeWidth: 5
  });
  const myPlacemarkA = new ymaps.Placemark(dots[0], {
    balloonContent: `Это точка ${props.point}, а вам нужна точка ${props.point + 1}`
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'pointA.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -60]
  });
  const myPlacemarkB = new ymaps.Placemark(dots[dots.length - 1], {
    balloonContent: `Это точка ${props.point + 1}, вам сюда`
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
</script>

<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>