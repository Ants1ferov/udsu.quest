<template>
  <div class="main">
    <div class="title">Главная странница</div>
    <router-link class="my-button" to="auth">Регистрация</router-link>
  </div>
</template>

<script>
export default {
  name: "main"
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(-225deg, #b6ffea 0%, #ffc2f5 100%);
}
.title {
  padding-top: 100px;
  font-size: 64px;
  text-align: center;
}
.my-button {
  margin: 50px;
  height: 36px;
}
</style>