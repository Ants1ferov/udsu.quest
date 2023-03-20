<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "yandex-maps",
  mounted() {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [56.844301,53.212378],
        zoom: 16
      });
      var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
          // Тип геометрии - "Ломаная линия".
          type: "LineString",
          // Указываем координаты вершин ломаной.
          coordinates: [
            [56.844301,53.212378],
            [56.844132,53.212413],
            [56.844335,53.214665],
            [56.845787,53.214231],
            [56.846324,53.220463],
          ]
        },
        // Описываем свойства геообъекта.
        properties:{
          // Содержимое хинта.
          hintContent: "Я геообъект",
          // Содержимое балуна.
          balloonContent: "Меня можно перетащить"
        }
      }, {
        // Задаем опции геообъекта.
        // Включаем возможность перетаскивания ломаной.
        draggable: false,
        // Цвет линии.
        strokeColor: "#000",
        // Ширина линии.
        strokeWidth: 5
      });
      myMap.geoObjects
          .add(myGeoObject)
    }
  }
}
</script>

<style scoped>
  .ya-img {
  }
</style>