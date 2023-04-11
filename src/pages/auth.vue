<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import AppButton from "@/components/UI/AppButton.vue";
import Register from "@/components/sections/register.vue";
import Login from "@/components/sections/login.vue";
import router from "@/router";
import axios from "axios";

const regLog = ref(true)

onMounted(() => {
  axios
    .get('https://api.udgu.suslovd.ru:9443/api/getusercount', {})
    .then((response) => {
      number.value += response.data.number
      if (response.status === 200) {
      } else if (response.status === 409) {
      }
    })
    .catch(() => {

    })
  if (localStorage.getItem('email') === null) {

  }
  else {
    router.push({path: "/"})
  }
})
let score = reactive({number: 0})
const number = ref(0)
watch(number, (n) => {
  gsap.to(score, {duration: 2, number: Number(n) || 0})
})
</script>

<template>
  <div class="auth">
    <div class="logo-block">
      <img alt="" class="block-logo-image" src="./../assets/img/design/logo.png">
    </div>
    <div class="logo-text">
      <p class="fz-20 bold">Зарегистрировано<br>пользователей: {{ score.number.toFixed(0) }}</p>
    </div>
    <div class="auth-block">
      <transition mode="out-in" name="auth">
        <register v-if="regLog"></register>
        <login v-else-if="!regLog"></login>
      </transition>
      <div class="button-block">
        <AppButton v-if="regLog" class="bdr-blk bold fz-16 btn-mn-auto" @click="regLog = !regLog">Уже есть
          аккаунт?
        </AppButton>
        <AppButton v-if="!regLog" class="bdr-blk bold fz-16 btn-mn-auto" @click="regLog = !regLog">Еще нет
          аккаунта?
        </AppButton>
      </div>
    </div>
    <div class="logo-btm">
      <img alt="" class="logo-leafs" src="@/assets/img/design/double-leaf.png">
    </div>
  </div>
</template>

<style scoped>
.auth {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-block {
  margin: 0 auto;
  padding: 15px 0 15px 0;
}

.block-logo-image {
  width: 256px;
  height: 256px;
}

.btn-mn-auto {
  margin: 0 auto;
}

.logo-btm {
  display: flex;
  padding: 35px 0 50px 0;
  justify-content: center;
}

.logo-text {
  text-align: center;
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