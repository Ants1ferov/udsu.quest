<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";

let userName = ''
let userSurname = ''
let email = ''
let password = ''
let actionOk = ref(false)
let actionFail = ref(false)
function register() {
  if (userName !== '' && userSurname !== '' && email !== '' && password !== '') {
    axios
        .post('https://api.udgu.suslovd.ru:9443/api/add', {
          firstname: userName,
          secondname: userSurname,
          email: email,
          password: password,
        })
        .then((response) => {
          actionOk = true
          console.log(response.data)
          setTimeout(() => {
            this.$router.push('/safety-rules')
          }, 1000);
        })
        .catch((reason) => {
          actionFail = true
        })
  } else {
    actionFail = true
    console.log('false')
  }
}

</script>

<template>
  <div class="register">
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