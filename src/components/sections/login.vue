<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import router from "@/router";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
import App from "@/App.vue";

let email = ''
let password = ''
let actionOk = ref(false)
let actionFail = ref(false)
let openRec = ref(false)

function cancel() {
  actionFail.value = !actionFail.value
}
function recovery() {
  if (password === '' && email === '') {

  } else {
    axios
        .post('https://api.udgu.suslovd.ru:9443/api/change', {
          email: email,
          password: password
        })
        .then((response) => {
          console.log(response)
          openRec.value = false
          console.log('Пароль изменен')
          setTimeout(() => {
            actionOk.value = true
            setTimeout(() => {
              actionOk.value = false
            }, 500);
          }, 1000);
        })
        .catch((reason) => {
          console.log(reason)
          actionFail.value = !actionFail.value
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
          console.log(response.data)
          localStorage.setItem('email', email)
          localStorage.setItem('name', firstname)
          localStorage.setItem('surname', secondname)
          localStorage.setItem('quest', quest)
          localStorage.setItem('score', '0')
          localStorage.road = JSON.stringify(road)
          actionOk.value = !actionOk.value
          setTimeout(() => {
              router.push({path: "/"})
          }, 1500);
        })
        .catch((reason) => {
          actionFail.value = !actionFail.value
        })
  } else {
    actionFail.value = !actionFail.value
    console.log('false')
  }
}
</script>

<template>
  <div class="login">
    <transition name="ok">
      <error-pop-up v-if="actionFail">
        <AppButton class="bg-dark-gray bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
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
      <div class="fast-pop-up-mini" v-if="actionOk">
        <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 48 48"><path d="M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z" fill="#adff00"/></svg>
      </div>
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