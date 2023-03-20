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
.my-button {
  text-decoration: none;
  height: max-content;
  width: max-content;
  position: relative;
  border-radius: 20px;
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding: 7px 15px;
  transition: background-color 200ms ease-in-out,color 350ms ease-in-out;
  backdrop-filter: blur(10px);
  z-index: 1;
}
.my-button:hover {
  color: #f5f5f5;
  background-color: rgba(0, 0, 0, 0.55);
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
}

</style>
