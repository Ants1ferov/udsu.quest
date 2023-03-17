<template>
  <div class="header">
    <button name="button to open mobile menu" @click="open = !open" class="mobile-open-menu-button">
      <img id="top-btn-img" class="img-menu" src="~assets/img/button/menu-open.svg" alt="">
    </button>
      <NuxtLink to="/" class="mobile-top-menu-link img-main"></NuxtLink>
    </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #1e1e1e70;
  backdrop-filter: blur(10px);
}
.mobile-open-menu-button {
  background-size: cover;
}
.mobile-top-menu-link {
  background-size: cover;
}
.img-menu {
  position: absolute;
  left: max(0px,env(safe-area-inset-left));
  top: 15px;
  background-color: rgba(0, 255, 255, 0);
  width: 42px;
  height: 42px;
  margin-left: 25px;
}
.img-main {
  position: absolute;
  width: 42px;
  height: 42px;
  left: 50%;
  top: 15px;
  margin-left: -24px;
  text-align: center;
}
@media only screen and (max-width: 320px) {

}
@media only screen and (max-width: 380px) {

}
@media only screen and (max-width: 430px) {

}
</style>
