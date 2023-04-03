<script setup>

</script>

<template>
  <div class="app-button">
    <slot></slot>
  </div>
</template>

<style>
  .app-button {
    text-decoration: none;
    height: max-content;
    width: max-content;
    position: relative;
    border-radius: 20px;
    font-size: 24px;
    text-align: center;
    padding: 10px 20px;
    z-index: 1;
    margin: 10px 0;
  }
</style>