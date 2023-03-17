<template>
  <div class="help">
    <button onclick="window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'" class="rick-roll">Кнопка</button>
  </div>
</template>

<script>
export default {
  name: "help"
}
</script>

<style scoped>
.help {
  display: flex;
  padding-top: 100px;
}
.rick-roll {
  margin: 0 auto;
  width: max-content;
  height: 60px;
  background-color: #1e1e1e;
  border-radius: 25px;
  font-size: 24px;
  color: white;
  padding: 10px 25px;
  font-family: sans-serif;
  box-shadow: 0 0 10px 5px #FF0000;
}
</style>