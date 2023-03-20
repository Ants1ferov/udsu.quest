<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button"
}
</script>

<style>
.font-min {
  font-size: 16px;
}
.font-mid {
  font-size: 24px;
}
.font-max {
  font-size: 32px;
}
.my-button {
  text-decoration: none;
  height: max-content;
  width: max-content;
  position: relative;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  padding: 7px 15px;
  z-index: 1;
}
.btn-dark {
  background-color: #1e1e1e;
  color: white;
}

</style>
