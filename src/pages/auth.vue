<script setup>
import {reactive, watch} from "vue";
import AppButton from "@/components/UI/AppButton.vue";
import Register from "@/components/sections/register.vue";
import Login from "@/components/sections/login.vue";
import {onMounted, ref} from "vue";
import router from "@/router";

const regLog = ref(true)

onMounted(() => {
  if (localStorage.getItem('email') === null) {
  } else {
    router.push({path: "/"})
  }
})
const score = reactive({number: 750})
const number = ref(750)
watch(number, (n) => {
  gsap.to(score, { duration: 1.5, number: Number(n) || 0})
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
      <p class="fz-20">Зарегистрировано<br>пользователей: {{ score.number.toFixed(0) }}</p>
    </div>
    <div class="auth-block">
      <transition name="auth" mode="out-in">
        <register v-if="regLog"></register>
        <login v-else-if="!regLog"></login>
      </transition>
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
.auth-enter-active {
  transition: all 500ms cubic-bezier(.2, 1, .15, 1);
}
.auth-leave-active {
  transition: all 500ms cubic-bezier(1, 1, .15, 1);
}
.auth-enter-from {
  opacity: 1;
  transform: translateX(-150%);
}
.auth-leave-to {
  opacity: 0;
  transform: translateX(+150%);
}
</style>