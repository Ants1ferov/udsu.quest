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
  z-index: 8000;
  margin: 0 auto;
}

.count-score-block {
  background-color: black;
  padding: 9px 5px;
  border-radius: 25px;
}

.score-count {
  color: #ffffff;
}
</style>
