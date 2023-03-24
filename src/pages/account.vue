<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";
import axios from "axios";
import AppButton from "@/components/UI/AppButton.vue";
import PointOne from "@/components/maps/points/pointOne.vue";

const username = localStorage.getItem('name')
const surname = localStorage.getItem('surname')
const quest = parseInt(localStorage.getItem('quest'))
const road = JSON.parse(localStorage.getItem('road'))
localStorage.getItem('surname')








function setQuest1() {
  localStorage.setItem('quest', '1')
}
function setQuest2() {
  localStorage.setItem('quest', '2')
}
function setQuest3() {
  localStorage.setItem('quest', '3')
}
function setQuest4() {
  localStorage.setItem('quest', '4')
}
function setQuest5() {
  localStorage.setItem('quest', '5')
}
function setQuest6() {
  localStorage.setItem('quest', '6')
}
function setQuest7() {
  localStorage.setItem('quest', '7')
}


onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован')
    router.push({path: "/"})
  } else {
    console.log('авторизован')
  }
})
function logout() {
  localStorage.clear()
  router.push({path: "/auth"})
}
</script>
<template>
  <div class="account">
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
      <p class="fz-42">HESOYAM</p>
      <p class="fz-42">AEZAMKI</p>
      <p class="fz-42">BAGUVIX</p>
      <app-button @click="setQuest1" class="bg-dark">1 задание</app-button>
      <app-button @click="setQuest2" class="bg-dark">2 задание</app-button>
      <app-button @click="setQuest3" class="bg-dark">3 задание</app-button>
      <app-button @click="setQuest4" class="bg-dark">4 задание</app-button>
      <app-button @click="setQuest5" class="bg-dark">5 задание</app-button>
      <app-button @click="setQuest6" class="bg-dark">6 задание</app-button>
      <app-button @click="setQuest7" class="bg-dark">7 задание</app-button>
    </div>
    <app-button @click="logout" class="bg-dark">Выйти</app-button>
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