<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 500ms;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 150ms;
}
.fade-leave-to {
  opacity: 0;
}
.right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.right-enter-active {
  transition: all 0.7s, transform 0.7s;
}
.right-enter-to {
  opacity: 1;
}
.right-leave-from {
  opacity: 1;
}
.right-leave-active {

}
.right-leave-to {
  opacity: 1;
}
</style>
