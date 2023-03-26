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
        .then((response) => {
          localStorage.setItem('email', email)
          localStorage.setItem('name', userName)
          localStorage.setItem('surname', userSurname)
          localStorage.setItem('quest', '1')
          localStorage.setItem('score', '0')
          localStorage.road = JSON.stringify(false)
          actionOk.value = !actionOk.value
          console.log(response)
          setTimeout(() => {
            router.push({path: "/safety-rules"})
          }, 1000);
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
      <ok-pop-up v-if="actionOk"></ok-pop-up>
    </transition>
    <form @submit.prevent="register" class="form-auth">
      <input type="text" placeholder="Имя" autocomplete="name" class="form-input" v-model="userName">
      <input type="text" placeholder="Фамилия" autocomplete="family-name" class="form-input" v-model="userSurname">
      <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
      <input type="password" placeholder="Пароль" autocomplete="new-password" class="form-input" v-model="password">
      <AppButton @click="register" @submit.prevent class="bg-dark fz-24">Регистрация</AppButton>
    </form>
  </div>
</template>

<style scoped>

</style>