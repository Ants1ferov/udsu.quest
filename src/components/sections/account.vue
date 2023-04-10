<script setup>
import {ref} from "vue";
import router from "@/router";
import AppButton from "@/components/UI/AppButton.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";

const username = localStorage.getItem('name')
const surname = localStorage.getItem('surname')
const quest = parseInt(localStorage.getItem('quest'))
const road = JSON.parse(localStorage.getItem('road'))
localStorage.getItem('surname')

let logoutAlert = ref(false)

function logoutAlertAction() {
  logoutAlert.value = !logoutAlert.value
}

function logout() {
  localStorage.clear()
  router.push({path: "/auth"})
}
</script>
<template>
  <div class="account">
    <transition name="ok">
      <pop-up-block v-if="logoutAlert" class="ge5ye">
        <div class="white fz-32 mrg-25 mrg-s-15">Вы уверены, что хотите выйти из аккаунта?</div>
        <AppButton class="pdg-lr-35 bold btn-mn-auto bg-red" type="button" @click="logout">Да</AppButton>
        <AppButton class="bdr-wht pdg-lr-35 bold btn-mn-auto white" type="button" @click="logoutAlertAction">Нет</AppButton>
      </pop-up-block>
    </transition>
    <div class="name fz-42 bold">{{ username }}<br>{{ surname }}</div>
    <div class="quest fz-28">Вы находитеcь на
      <div v-if="!road">задании №{{ quest }}</div>
      <div v-if="road">пути к заданию №{{ quest + 1 }}</div>
    </div>
    <div class="logout" @click="logoutAlertAction">
      <svg height="32" viewBox="0 96 960 960" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43
         102-102H375v-60h348L621 444l43-43 176 176-174 174Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.account {
  color: white;
  position: fixed;
  padding: 115px 0 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 8000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: #000000C0;
}

.name {
  line-height: 1.15;
}

.account-enter-active {
  transition: all 1000ms cubic-bezier(0, 1, .15, 1);
}

.account-leave-active {
  transition: all 2500ms cubic-bezier(0, 1, .15, 1);
}

.account-enter-from {
  opacity: 1;
  transform: translateY(-150%);
}

.account-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}

.logout {
  position: absolute;
  top: 40px;
  right: 20px;
}

.ge5ye {
  position: absolute;
  left: auto;
  bottom: auto;
  right: auto;
  height: 375px;
  top: 70%;
  background-color: #1e1e1e;
}
</style>