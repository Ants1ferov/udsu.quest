<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import router from "@/router";
import axios from "axios";
import {ref} from "vue";

const emit = defineEmits(['auth'])

let email = ''
let password = ''
let recoveryOk = ref(false)
let actionFail = ref(false)
let openRec = ref(false)
let error503 = ref(false)
let error0 = ref(false)
let error1 = ref(false)
let error2 = ref(false)

function error(code,) {
  actionFail.value = true
  if (code === 0) {
    error0.value = true
  } else if (code === 1) {
    error1.value = true
  } else if (code === 2) {
    error2.value = true
  } else if (code === 503) {
    error503.value = true
  }
}

function cancel() {
  recoveryOk.value = false
  actionFail.value = false
  openRec.value = false
  error503.value = false
  error0.value = false
  error1.value = false
  error2.value = false
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
        } else if (reason.response.status === 503) {
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
        emit('auth')
        setTimeout(() => {
          router.push({path: "/"})
        }, 500);
      })
      .catch((reason) => {
        if (reason.response.data.code === 1) {
          error(1)
        } else if (reason.response.data.code === 2) {
          error(2)
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
  <div class="login">
    <transition name="ok">
      <error-pop-up v-if="actionFail" class="white">
        <p v-if="error0" class="fz-24">Вы заполнили не<br>все поля</p>
        <p v-if="error1" class="fz-24">Неверный логин<br>или пароль</p>
        <p v-if="error2" class="fz-24">Такого аккаунта<br>не существует</p>
        <p v-if="error503" class="fz-24">Сервер не отвечает</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
      <pop-up-block v-else-if="openRec">
        <form class="recovery" style="position: relative; top: 50px">
          <p class="white fz-28">Смена пароля</p>
          <input v-model="email" autocomplete="email" class="form-input" placeholder="Email" type="email">
          <input v-model="password" autocomplete="new-password" class="form-input" placeholder="Новый пароль"
                 type="password">
          <AppButton class="bg-gray" @click="recovery" @submit.prevent>Изменить</AppButton>
        </form>
        <AppButton class="white" style="margin: 0; padding: 0" type="button" @click="cancel">Отмена</AppButton>
      </pop-up-block>
    </transition>
    <transition name="top-dynamic">
      <ok-pop-up v-if="recoveryOk" class="">
        <p class="white fz-24">Пароль успешно<br>изменен</p>
        <AppButton class="bg-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </ok-pop-up>
    </transition>
    <form class="form-auth" @submit.prevent="login">
      <input v-model="email" autocomplete="email" class="form-input" placeholder="Email" type="email">
      <input v-model="password" autocomplete="password" class="form-input" placeholder="Пароль" type="password">
      <AppButton class="bg-dark-gray fz-24" @click="login" @submit.prevent>Вход</AppButton>
    </form>
    <AppButton class="" @click="openRec = !openRec">Забыли пароль?</AppButton>
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