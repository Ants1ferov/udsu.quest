<template>
  <section class="home">
    <AppButton class="bg-dark-gray" @click="passEvent()">Начать</AppButton>
  </section>
</template>

<script>

import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "Home",
  components: {AppButton},
  data() {
    return {
      categories: [],
      selectedCategoryId: 12,
      difficulty: "medium",
      questions: 10,
    };
  },
  methods: {
    passEvent() {
      this.$emit("startTheGame", {
        difficulty: this.difficulty,
        categoryId: this.selectedCategoryId,
        questions: this.questions,
      });
    },
  },
};
</script>

<style scoped>

</style>