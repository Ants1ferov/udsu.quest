<template>
  <div class="quest-block">
    <div class="quest-title bold fs-max black">Задание 4</div>
    <div class="quest-description fs-big">Тест</div>
    <div class="test-block">
      <p class="fs-max">Вопрос</p>
    </div>
    <AppButton @click="check" class="quest-submit-button fs-big">Проверить</AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "quest4",
  data() {
    return {
      questions: [
        {
          id: 1,
          question: 'Какое сражение было самым крупным в Великой Отечественной войне?',
          answers: [
            {key: 1, value: 'битва за Берлин'},
            {key: 2, value: 'битва за Сталинград'},
            {key: 3, value: 'Битва за Москву'}
          ]
        },
        {
          id: 2,
          question: 'Высшая награда, присужденная М. Т. Калашникову за разработку АК-47:',
          answers: [
            {key: 1, value: 'Сталинская премия'},
            {key: 2, value: 'Орден за заслуги перед Отечеством'},
            {key: 3, value: 'Орден Александра Невского 1 степени'}
          ]
        },
      ]
      }
  },
  components: {AppButton},
  methods: {

  }
}
</script>

<style scoped>
.test-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>