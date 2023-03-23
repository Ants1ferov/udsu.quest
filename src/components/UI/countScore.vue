<script setup>
</script>

<template>
  <div class="count-score">
    <div class="count-score-block">
      <div class="score-count fz-24">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.count-score {
  position: fixed;
  padding: 35px 0;
  z-index: 15;
  margin: 0 auto;
}
.count-score-block {
  background-color: black;
  padding: 7px 45px;
  border-radius: 25px;
}
.score-count {
  color: #ffffff;
  font-family: sans-serif;
}
</style>