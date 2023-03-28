<template>
  <div class="quest-block">
    <div class="quest-title bold fs-max black">Задание 5</div>
    <div class="quest-description fs-big">Правильно собрать фразу</div>
    <AppButton @click="questComplete" class="bg-dark">Отправить</AppButton>
  </div>
</template>

<script setup>
import AppButton from "@/components/UI/AppButton.vue";
const emit = defineEmits(['questComplete', 'score'])
function questComplete() {
  emit('questComplete', true)
  emit('score', 100)
}
</script>

<style scoped>

</style>