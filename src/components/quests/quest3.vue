<script setup>
import AppButton from "@/components/UI/AppButton.vue";
const emit = defineEmits(['questComplete', 'score'])
function questComplete() {
  emit('questComplete', true)
  emit('score', 100)
}
</script>

<template>
  <div class="quest-block">
    <div class="quest-title bold fz-56 black">Задание 3</div>
    <div class="quest-description fz-24 bold mrg-25">
      Игра. Так как во время войны в здании школы располагался военный госпиталь №3777 предлагаю
      вам ощутить на себе оказание первой помощи не стандартными методами, как делалось это раньше, в годы ВОВ.
    </div>
    <AppButton @click="questComplete" class="bg-dark">Продолжить</AppButton>
  </div>
</template>

<style scoped>
.quest-description {
  padding: 0 15px;
}
</style>