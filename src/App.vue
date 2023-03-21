<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/components/UI/AppHeader.vue";
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style>
.quest-block {
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.quest-title {
  width: max-content;
}
.fs-max {
  font-size: 64px;
}
.fs-huge {
  font-size: 48px;
}
.fs-big {
  font-size: 36px;
}
.fs-mid {
  font-size: 24px;
}
.fs-small {
  font-size: 20px;
}
.fs-min {
  font-size: 16px;
}

.black {
  color: black;
}
.right-btn {
  margin: 10px auto auto 0;
  font-size: 24px;
  float: right;
  padding: 12px 25px;
}
.button {

}
.m15 {
  margin: 15px;
}
.bold {
  font-weight: bold;
}
.mn-mid-tb {
  margin: 50px auto;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.button-wt-bg {
  background-color: #00000000;
  font-size: 18px;
}
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
