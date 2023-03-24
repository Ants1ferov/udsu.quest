<script setup>
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import router from "@/router";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import OkPopUp from "@/components/UI/okPopUp.vue";

let email = ''
let password = ''
let actionOk = ref(false)
let actionFail = ref(false)
function cancel() {
  actionFail.value = !actionFail.value
}
function register() {
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
          localStorage.setItem('quest', toString(quest))
          localStorage.setItem('road', JSON.stringify(road))
          actionOk.value = !actionOk.value
          setTimeout(() => {
              router.push({path: "/"})
          }, 750);
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
      <input type="email" placeholder="Email" autocomplete="email" class="form-input" v-model="email">
      <input type="password" placeholder="Пароль" autocomplete="new-password" class="form-input" v-model="password">
      <AppButton @click="register" @submit.prevent class="bg-dark fz-24">Вход</AppButton>
    </form>
  </div>
</template>

<style scoped>

</style>