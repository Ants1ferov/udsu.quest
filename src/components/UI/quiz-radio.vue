<template>
  <label>{{answer.answer}}</label>
  <input type="radio" class="radio-button" name={{answer.id}}>
</template>

<script>
export default {
  name: "quiz-radio",
  props: {
    answer: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>