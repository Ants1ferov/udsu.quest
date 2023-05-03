<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import ErrorPopUp from "@/components/UI/errorPopUp.vue";
import router from "@/router";
import axios from "axios";
import {ref} from "vue";

const emit = defineEmits(['auth'])

let userName = ''
let userSurname = ''
let email = ''
let password = ''
let actionFail = ref(false)
let error0 = ref(false)
let error409 = ref(false)
let error503 = ref(false)
let metRul = ref(false)
let red = ref(false)

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

function metrikaRules() {
  red.value = false
  metRul.value = !metRul.value
}

function register() {
  if (userName !== '' && userSurname !== '' && email !== '' && password !== '') {
    if (metRul.value === true) {
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
          emit('auth')
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
      red.value = true
      setTimeout(() => {
        red.value = false
      }, 1000);

    }
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
    <form class="form-auth" @submit.prevent="register">
      <input v-model="userName" autocomplete="name" class="form-input" placeholder="Имя" type="text">
      <input v-model="userSurname" autocomplete="family-name" class="form-input" placeholder="Фамилия"
             type="text">
      <input v-model="email" autocomplete="email" class="form-input" placeholder="Email" type="email">
      <input v-model="password" autocomplete="new-password" class="form-input" placeholder="Пароль"
             type="password">
      <div class="metrika">
        <button :class="{red: red}" class="mtrk-btn-check" type="button" @click="metrikaRules">
          <svg v-if="metRul" class="mtrk-btn-check-mark" fill="none" height="24" viewBox="0 0 18 18" width="24"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.0876 13.1625C7.0126 13.1625 6.94385 13.15 6.88135 13.125C6.81885 13.1 6.75635 13.0563 6.69385 12.9938L3.3001 9.60005C3.1876 9.48755 3.13135 9.35005 3.13135 9.18755C3.13135 9.02505 3.1876 8.88755 3.3001 8.77505C3.4126 8.66255 3.54385 8.6063 3.69385 8.6063C3.84385 8.6063 3.9751 8.66255 4.0876 8.77505L7.0876 11.775L13.8938 4.9688C14.0063 4.8563 14.1407 4.80005 14.297 4.80005C14.4532 4.80005 14.5876 4.8563 14.7001 4.9688C14.8126 5.0813 14.8688 5.21567 14.8688 5.37192C14.8688 5.52817 14.8126 5.66255 14.7001 5.77505L7.48135 12.9938C7.41885 13.0563 7.35635 13.1 7.29385 13.125C7.23135 13.15 7.1626 13.1625 7.0876 13.1625Z"
                fill="black"/>
          </svg>
        </button>
        <router-link class="mtrk-btn-rules fz-18" to="/metrika-rules" type="button">Принимаю условия</router-link>
      </div>
      <AppButton class="bg-dark-gray fz-24" @click="register" @submit.prevent>Регистрация</AppButton>
    </form>
  </div>
</template>

<style scoped>
.metrika {
  width: 100%;
  margin: 5px 0 10px 0;
  display: flex;
  align-items: center;
}

.mtrk-btn-check {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #e3e5e3;
  border-radius: 7px;
}

.mtrk-btn-rules {
  margin-left: 7px;
}

.red {
  animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    background-color: #ff2929;
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    background-color: #ff7a7a;
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    background-color: #ffbebe;
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    background-color: #ff5353;
    transform: translate3d(4px, 0, 0);
  }
}
</style>