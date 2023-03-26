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
let actionOk = ref(false)
let actionFail = ref(false)
let openRec = ref(false)



function openRecovery() {
  openRec.value = true
}
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
  <div class="register">
    <transition name="ok">
      <error-pop-up v-if="actionFail">
        <AppButton class="bg-dark bold btn-mn-auto" type="button" @click="cancel">Закрыть</AppButton>
      </error-pop-up>
    </transition>
    <transition name="ok">
      <pop-up-block v-if="openRec">
        <form @submit.prevent="recovery">
          <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
          <input type="password" placeholder="Новый пароль" autocomplete="new-password" class="form-input" v-model="password">
          <button class="bg-dark">Изменить</button>
        </form>
      </pop-up-block>
    </transition>
    <transition name="ok">
      <ok-pop-up v-if="actionOk"></ok-pop-up>
    </transition>
    <form @submit.prevent="login" class="form-auth">
      <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
      <input type="password" placeholder="Пароль" autocomplete="password" class="form-input" v-model="password">
      <AppButton @click="login" @submit.prevent class="bg-dark fz-24">Вход</AppButton>
    </form>
    <AppButton @click="openRecovery" class="bdr-blk">Забыли пароль?</AppButton>
  </div>
</template>

<style scoped>

</style>