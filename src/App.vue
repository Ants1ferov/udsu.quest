<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/components/UI/AppHeader.vue";
</script>

<template>
  <RouterView />
</template>

<style>
body, h1, h2, h3, h4, p, a, button {
  margin: 0;
  font-size: 100%;
  font-weight: normal;
  font-family: "Zhizn", sans-serif;
  text-decoration: none;
}
input {
  font-family: "Zhizn", sans-serif;
}
a {
  all: unset;
  cursor: pointer;
}
body {
}
button {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
  border: 0;
}
@font-face {
  font-family: "Zhizn";
  font-style: normal;
  font-weight: 400;
  src: url("@/assets/fonts/ofont_ru_Zhizn.ttf")
}
</style>
