<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";
import AppButton from "@/components/UI/AppButton.vue";
import PopUpBlock from "@/components/UI/popUpBlock.vue";
const username = localStorage.getItem('name')
const surname = localStorage.getItem('surname')
const quest = parseInt(localStorage.getItem('quest'))
const road = JSON.parse(localStorage.getItem('road'))
localStorage.getItem('surname')

let logoutAlert = ref(false)

function setQuest1() {
  localStorage.setItem('quest', '1')
  router.push({path: '/'})
}
function setQuest2() {
  localStorage.setItem('quest', '2')
  router.push({path: '/'})
}
function setQuest3() {
  localStorage.setItem('quest', '3')
  router.push({path: '/'})
}
function setQuest4() {
  localStorage.setItem('quest', '4')
  router.push({path: '/'})
}
function setQuest5() {
  localStorage.setItem('quest', '5')
  router.push({path: '/'})
}
function setQuest6() {
  localStorage.setItem('quest', '6')
  router.push({path: '/'})
}
function setQuest7() {
  localStorage.setItem('quest', '7')
  router.push({path: '/'})
}


onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован')
    router.push({path: "/"})
  } else {
    console.log('авторизован')
  }
})
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
      <pop-up-block v-if="logoutAlert">
        <div class="white fz-32 mrg-25 mrg-s-15">Вы уверены, что хотите выйти из аккаунта?
        </div>
        <AppButton class="bg-dark pdg-lr-35 bold btn-mn-auto bg-red" type="button" @click="logout">Да</AppButton>
        <AppButton class="bdr-wht pdg-lr-35 bold btn-mn-auto white" type="button" @click="logoutAlertAction">Нет</AppButton>
      </pop-up-block>
    </transition>
    <div class="name fz-42 bold">{{ username }}</div>
    <div class="surname fz-42 bold">{{ surname }}</div>
    <div class="quest fz-32">Вы находитеcь на
      <div v-if="!road">задании №{{ quest }}</div>
      <div v-if="road">пути к заданию №{{ quest + 1 }}</div>
      </div>
    <router-link to="/">
      <AppButton class="bg-dark">Обратно</AppButton>
    </router-link>
    <div class="testing">
      <p class="fz-42">Читы:</p>
      <app-button @click="setQuest1" class="bg-dark">1 задание</app-button>
      <app-button @click="setQuest2" class="bg-dark">2 задание</app-button>
      <app-button @click="setQuest3" class="bg-dark">3 задание</app-button>
      <app-button @click="setQuest4" class="bg-dark">4 задание</app-button>
      <app-button @click="setQuest5" class="bg-dark">5 задание</app-button>
      <app-button @click="setQuest6" class="bg-dark">6 задание</app-button>
      <app-button @click="setQuest7" class="bg-dark">7 задание</app-button>
    </div>
    <app-button @click="logoutAlertAction" class="bg-dark">Выйти</app-button>
  </div>
</template>

<style scoped>
.account {
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testing {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>