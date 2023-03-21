<template>
  <div class="quest-block">
    <div class="quest-title bold fs-max black">Задание 2</div>
    <div class="quest-description fs-big">Прослушайте аудиофайл, и вставьте правильные слова в пропуски</div>
    <div class="quest-task">
      <audio class="audio" controls>
        <source src="@/../src/assets/audio/rickroll.mp3"/>
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "quest2"
}
</script>

<style scoped>
.audio {
  margin: 25px 0;
}
.audio::-webkit-media-controls-panel {

  color: white;
}
</style>