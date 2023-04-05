<template>
  <div class="fast-pop-up">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "fast-pop-up"
}
</script>

<style scoped>
.fast-pop-up {
  display: flex;
  align-items: center;
  position: fixed;
  width: 70%;
  height: 200px;
  padding: 20px;
  background-color: #1e1e1e;
  bottom: 300px;
  border-radius: 25px;
  z-index: 15;
}
</style>