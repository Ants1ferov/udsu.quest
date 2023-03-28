<script setup>
</script>

<template>
  <div class="safety-rules">
    <div class="safety-title bold">Правила техники безопасности прохождения квеста</div>
    <div class="safety-value bold">
      <ol>
        <li class="safety-ol-value">Внимательно выслушать инструктаж по технике безопасности.<br></li>
        <li class="safety-ol-value">Надеть удобную одежду и обувь, не стесняющую движения и соответствующую сезону и погоде.<br></li>
        <li class="safety-ol-value">Убедиться в наличии аптечки и ее укомплектованности необходимыми медикаментами и перевязочными материалами.<br></li>
        <li class="safety-ol-value">Не начинать движение без указания главного.<br></li>
        <li class="safety-ol-value">При движении участники не должны нарушать построения группы: не перебегать, не обгонять товарищей, не кричать, не толкаться.<br></li>
        <li class="safety-ol-value">При переходе улиц, перекрестков соблюдать правила дорожного движения.<br></li>
        <li class="safety-ol-value">Группа должна идти по тротуару или пешеходным дорожкам, по обочине дороги, не выходя на проезжую часть.<br></li>
        <li class="safety-ol-value">Переходить дорогу по пешеходным переходам.<br></li>
        <li class="safety-ol-value">Своевременно информировать главного об ухудшении состояния здоровья или травмах.<br></li>
        <li class="safety-ol-value">Группа возвращается в полном составе, запрещается отпускать кого-либо по дороге.<br></li>
      </ol>
    </div>
    <div class="continue">
      <RouterLink class="app-button fz-36 bg-dark" to="/">Далее</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.safety-rules {
  display: flex;
  flex-direction: column;
  padding: 50px 15px;
  align-items: center;
}
.safety-title {
  font-size: 40px;
  text-align: center;
}
.safety-value {
  font-size: 24px;
}
.safety-ol-value {
  margin: 5px 0;
}
.continue {
  display: flex;
  padding-top: 25px;
}

</style>