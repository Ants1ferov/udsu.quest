<template>
  <div class="index">
    <h1 class="index-title">udsu quest</h1>
    <router-link class="button index-registration-button" to="auth">Регистрация</router-link>
  </div>
</template>
<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
.index {
  padding-top: 100px;
  height: 100vh;
}
.index-title {
  font-size: 48px;
  text-align: center;
}
.index-registration-button {
  font-size: 32px;
  padding: 5px 25px;
}

</style>
