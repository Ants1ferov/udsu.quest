<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import router from "@/router";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";

let email = ''
let password = ''
let recoveryOk = ref(false)
let actionFail = ref(false)
let openRec = ref(false)
let error503 = ref(false)
let error0 = ref(false)
let error1 = ref(false)
let error2 = ref(false)

function error(code, ) {
  actionFail.value = true
  if (code === 0) {
    error0.value = true
  }
  else if (code === 1) {
    error1.value = true
  }
  else if (code === 2) {
    error2.value = true
  }
  else if (code === 503) {
    error503.value = true
  }
}
function cancel() {
  recoveryOk.value = false
  actionFail.value = false
  openRec.value = false
  error503.value = false
  error0.value =  false
  error1.value =  false
  error2.value =  false
}
function recovery() {
  openRec.value = false
  if (password === '' && email === '') {
    error(0)
  } else {
    axios
        .post('https://api.udgu.suslovd.ru:9443/api/change', {
          email: email,
          password: password
        })
        .then(() => {
          openRec.value = false
          recoveryOk.value = true
        })
        .catch((reason) => {
          if (reason.response.data.code === 2) {
            error(2)
          }
          else if (reason.response.status === 503) {
            error(503)
          }
        })
  }
}
function login() {
  if (email !== '' && password !== '') {
    axios
        .post('https://api.udgu.suslovd.ru:9443/api/login', {
          email: email,
          password: password,
        })
        .then((response) => {
          const {firstname, secondname, quest, road} = response.data
          localStorage.setItem('email', email)
          localStorage.setItem('name', firstname)
          localStorage.setItem('surname', secondname)
          localStorage.setItem('quest', quest)
          localStorage.setItem('score', '0')
          localStorage.road = JSON.stringify(road)
          setTimeout(() => {
            router.push({path: "/"})
          }, 500);
        })
        .catch((reason) => {
          if (reason.response.data.code === 1) {
            error(1)
          }
          else if (reason.response.data.code === 2) {
            error(2)
          }
          else if (reason.response.status === 503) {
            error(503)
          }
        })
  } else {
      error(0)
  }
}
</script>

<template>
  <div class="login">
    <transition name="ok">
      <error-pop-up v-if="actionFail" class="white">
        <p class="fz-24" v-if="error0">Вы заполнили не<br>все поля</p>
        <p class="fz-24" v-if="error1">Неверный логин<br>или пароль</p>
        <p class="fz-24" v-if="error2">Такого аккаунта<br>не существует</p>
        <p class="fz-24" v-if="error503">Сервер не отвечает</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <pop-up-block v-if="openRec">
        <form class="recovery" @submit.prevent="recovery">
          <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
          <input type="password" placeholder="Новый пароль" autocomplete="new-password" class="form-input" v-model="password">
          <AppButton @submit.prevent @click="recovery" class="bg-gray">Изменить</AppButton>
        </form>
      </pop-up-block>
    </transition>
    <transition name="top-dynamic">
      <ok-pop-up class="" v-if="recoveryOk">
        <p class="white fz-24">Пароль успешно<br>изменен</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </ok-pop-up>
    </transition>
    <form @submit.prevent="login" class="form-auth">
      <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
      <input type="password" placeholder="Пароль" autocomplete="password" class="form-input" v-model="password">
      <AppButton @click="login" @submit.prevent class="bg-dark-gray fz-24">Вход</AppButton>
    </form>
    <AppButton @click="openRec = !openRec" class="">Забыли пароль?</AppButton>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
}
.recovery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>