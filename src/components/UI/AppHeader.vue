<template>
  <div class="header">
    <button name="button to open mobile menu" @click="open = !open" class="mobile-open-menu-button">
      <img id="top-btn-img" class="img-menu" src="@/assets/img/button/menu-open.svg" alt="">
    </button>
      <router-link to="/" class="mobile-top-menu-link img-main"></router-link>
  </div>
  <transition name="menu-block">
    <div v-if="open" class="mobile-menu-block">
      <router-link class="menu-block-link" @click="open =!open" to="/">Главная</router-link>
      <router-link class="menu-block-link" @click="open =!open" to="/">Карта</router-link>
      <router-link class="menu-block-link" @click="open =!open" to="/scanner">QR сканер</router-link>
      <router-link class="menu-block-link" @click="open =!open" to="/">Техника<br>безопасности</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  name: "AppHeader"
}
</script>

<style scoped>
.header {
  z-index: 13;
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
  background-image: url("@/assets/img/button/logo.svg");
  position: absolute;
  width: 42px;
  height: 42px;
  left: 50%;
  top: 15px;
  margin-left: -24px;
  text-align: center;
}
.mobile-menu-block {
  display: flex;
  flex-direction: column;
  position: fixed;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  width: 100%;
  height: 100%;
}
.menu-block-link {
  width: 70%;
  font-size: 36px;
  margin: 0 0 10px 0;
  color: white;
  text-align: center;
}
.menu-block-enter-active {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.menu-block-leave-active {
  transition: all 400ms ease-out;
}
.menu-block-enter-from,
.menu-block-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}
@media only screen and (max-width: 320px) {

}
@media only screen and (max-width: 380px) {

}
@media only screen and (max-width: 430px) {

}
</style>
