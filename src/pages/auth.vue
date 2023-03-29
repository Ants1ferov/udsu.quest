<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import Register from "@/components/sections/register.vue";
import Login from "@/components/sections/login.vue";
import {onMounted, ref} from "vue";
import router from "@/router";

const regLog = ref(true)

onMounted(() => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован', localStorage.getItem('email'))
  } else {
    console.log('авторизован', localStorage.getItem('email'))
    router.push({path: "/"})
  }
})
</script>

<template>
  <div class="auth">
    <div class="logo-block">
      <img class="block-logo-image" src="./../assets/img/design/logo.png" alt="">
    </div>
    <div class="logo-text fz-20 bold">
      ИЖТРУДФРОНТ
      <img class="logo-cycle" src="./../assets/img/design/circle.svg" alt="">
      ИЖТРУДФРОНТ
    </div>
    <div class="auth-block">
      <register v-if="regLog"></register>
      <login v-if="!regLog"></login>
      <div class="button-block">
        <AppButton @click="regLog = !regLog" v-if="regLog" class="bdr-blk bold fz-16 btn-mn-auto">Уже есть аккаунт?</AppButton>
        <AppButton @click="regLog = !regLog" v-if="!regLog" class="bdr-blk bold fz-16 btn-mn-auto">Еще нет аккаунта?</AppButton>
      </div>
    </div>
    <div class="logo-btm">
      <img class="logo-leafs" src="./../assets/img/design/double-leaf.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.auth {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-block {
  margin: 0 auto;
  padding: 50px 0 30px 0;
}
.block-logo-image {
  width: 256px;
  height: 256px;
}
.logo-cycle {
  position: relative;
  width: 24px;
  top: 4px;
}
.btn-mn-auto {
  margin: 0 auto;
}
.logo-btm {
  display: flex;
  padding: 35px 0 50px 0;
  justify-content: center;
}
.logo-leafs {
  width: 50%;
  margin: 0 auto;
}
</style>