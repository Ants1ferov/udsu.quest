<template>
    <div class="sky-block">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: "sky-block",
}

</script>

<style scoped>
.sky-block {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 90%;
  height: 600px;
  margin: auto;
  top: 0; left: 0; bottom: 0; right: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(10px);
  z-index: 2;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
}
</style>