<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import router from "@/router";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";

let userName = ''
let userSurname = ''
let email = ''
let password = ''
let actionOk = ref(false)
let actionFail = ref(false)
let error0 = ref(false)
let error409 = ref(false)
let error503 = ref(false)

function error(code) {
  actionFail.value = true
  if (code === 0) {
    error0.value = true
  } else if (code === 409) {
    error409.value = true
  } else if (code === 503) {
    error503.value = true
  }
}

function cancel() {
  actionFail.value = !actionFail.value
}

function register() {
  if (userName !== '' && userSurname !== '' && email !== '' && password !== '') {
    axios
      .post('https://api.udgu.suslovd.ru:9443/api/add', {
        firstname: userName,
        secondname: userSurname,
        email: email,
        password: password,
        quest: 1,
        road: false
      })
      .then(() => {
        localStorage.setItem('email', email)
        localStorage.setItem('name', userName)
        localStorage.setItem('surname', userSurname)
        localStorage.setItem('quest', '0')
        localStorage.setItem('score', '0')
        localStorage.road = JSON.stringify(true)
        actionOk.value = !actionOk.value
        setTimeout(() => {
          router.push({path: "/safety-rules"})
        }, 1500);
      })
      .catch((reason) => {
        if (reason.response.status === 409) {
          error(409)
        } else if (reason.response.status === 503) {
          error(503)
        }
      })
  } else {
    error(0)
  }
}

</script>

<template>
  <div class="register">
    <transition name="ok">
      <error-pop-up v-if="actionFail" class="white">
        <p v-if="error0" class="fz-24">Вы заполнили не все поля</p>
        <p v-if="error409" class="fz-24">Этот email уже занят</p>
        <p v-if="error503" class="fz-24">Сервер не отвечает</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="actionOk"></ok-pop-up>
    </transition>
    <form class="form-auth" @submit.prevent="register">
      <input v-model="userName" autocomplete="name" class="form-input" placeholder="Имя" type="text">
      <input v-model="userSurname" autocomplete="family-name" class="form-input" placeholder="Фамилия"
             type="text">
      <input v-model="email" autocomplete="email" class="form-input" placeholder="Email" type="email">
      <input v-model="password" autocomplete="new-password" class="form-input" placeholder="Пароль"
             type="password">
      <AppButton class="bg-dark-gray fz-24" @click="register" @submit.prevent>Регистрация</AppButton>
    </form>
  </div>
</template>

<style scoped>
</style>