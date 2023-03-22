<template>
  <div class="quest-block">
    <div class="quest-title bold fs-max black">Задание 3</div>
    <div class="quest-description fs-big">Вставить правильные слова в пропуски</div>
    <div class="quest-task">
      <input class="task-input" placeholder="имя" v-bind="answer1"> Черезов является выпускником школы №24.
      Родился он в <input class="task-input" placeholder="год" v-bind="answer2"> году в посёлке Валамаз.
      Окончив семилетку, будущий лётчик перебрался в Ижевск, где продолжил учиться в школе № 24.
      Параллельно посещал <input class="task-input" placeholder="название" v-bind="answer3">,
      который окончил с отличием в <input class="task-input" placeholder="год" v-bind="answer4"> году.
      Затем Черезов поступил в <input class="task-input" placeholder="название" v-bind="answer5">
    </div>
  </div>
</template>

<script>
export default {
  name: "quest3",
  data() {
    let answer1 = ''
    let answer2 = ''
    let answer3 = ''
    let answer4 = ''
    let answer5 = ''
    return {
      answer1,
      answer2,
      answer3,
      answer4,
      answer5
    }
  }
}
</script>

<style scoped>

</style>