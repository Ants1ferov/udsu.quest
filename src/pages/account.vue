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

onMounted( () => {
  if (localStorage.getItem('email') === null) {
    console.log('не авторизован')
    router.push({path: "/"})
  } else {
    console.log('авторизован')
  }
})
</script>
<template>
  <div class="account">
    <div class="name fz-42 bold">{{ username }}</div>
    <div class="surname fz-42 bold">{{ surname }}</div>
    <div class="quest fz-32">Вы находитеcь на
      <div v-if="!road">задании №{{ quest }}</div>
      <div v-if="road">пути к заданию №{{ quest + 1 }}</div>
      </div>
    <router-link to="/map">
      <AppButton class="bg-dark">Обратно</AppButton>
    </router-link>
  </div>
</template>

<style scoped>
.account {
  padding: 150px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>