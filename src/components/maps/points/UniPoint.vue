<script setup>
import {ref} from "vue";

const props = defineProps(['data', 'point'])
let crd = ref([props.data['a'], props.data['b']])
const contentFirst = 'Это точка '
const contentSecond = ref(', здесь вы должны выполнить задание')

let point = ref(props.point)
if (point.value < 1) {
  contentSecond.value = ', вам сюда'
} else if (point.value > 6) {
  contentSecond.value = ', квест закончен'
}

console.log(props.point)
ymaps.ready(init);

const content = contentFirst + point.value + contentSecond.value

function init() {
  var myMap = new ymaps.Map("map", {
    center: [(parseFloat(crd.value[0])), (parseFloat(crd.value[1]))],
    zoom: 16
  });
  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: content
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'pointB.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -60]
  });
  myMap.geoObjects
    .add(myPlacemark)
}
</script>
<template>
  <div class="ya-img">
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>
<style scoped>
</style>