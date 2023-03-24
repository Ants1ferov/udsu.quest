<template>
  <div>
    <AppButton class="bg-dark" @click="check">{{ test }}</AppButton>
  </div>
</template>

<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";

const test = ref(true)

function check() {
  if (test.value === true) {
    test.value = false
  } else {
    test.value = true
  }
}
</script>

<style scoped>

</style>