<template>
  <div class="not-found">
    <p style="font-size: 72px">404</p>
    <p class="fz-32">странно, вы попали куда-то не туда</p>
    <router-link to="/" class="app-button bg-dark-gray">обратно</router-link>
  </div>
</template>

<style scoped>
.not-found {
  height: 90vh;
  padding: 25px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>