<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/components/UI/AppHeader.vue";
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style>
body, h1, h2, h3, h4, p, a {
  margin: 0;
  font-size: 100%;
  font-weight: normal;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
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
</style>
