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
  }
  else if (code === 409) {
    error409.value = true
  }
  else if (code === 503) {
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
        <p class="fz-24" v-if="error0">Вы заполнили не все поля</p>
        <p class="fz-24" v-if="error409">Этот email уже занят</p>
        <p class="fz-24" v-if="error503">Сервер не отвечает</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="actionOk"></ok-pop-up>
    </transition>
    <form @submit.prevent="register" class="form-auth">
      <input type="text" placeholder="Имя" autocomplete="name" class="form-input" v-model="userName">
      <input type="text" placeholder="Фамилия" autocomplete="family-name" class="form-input" v-model="userSurname">
      <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
      <input type="password" placeholder="Пароль" autocomplete="new-password" class="form-input" v-model="password">
      <AppButton @click="register" @submit.prevent class="bg-dark-gray fz-24">Регистрация</AppButton>
    </form>
  </div>
</template>

<style scoped>

</style>