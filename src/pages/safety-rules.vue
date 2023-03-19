<template>
  <AppHeader></AppHeader>
  <div class="safety-rules">
    <div class="safety-title">Правила<br>безопасности</div>
    <div class="safety-value">
      <ol>
        <li class="safety-ol-value">Внимательно выслушать инструктаж по технике безопасности.<br></li>
        <li class="safety-ol-value">Надеть удобную одежду и обувь, не стесняющую движения и соответствующую сезону и погоде.<br></li>
        <li class="safety-ol-value">Убедиться в наличии аптечки и ее укомплектованности обходимыми медикаментами и перевязочными материалами.<br></li>
        <li class="safety-ol-value">Не начинать движение без указания главного.<br></li>
        <li class="safety-ol-value">При движении участники не должны нарушать построения группы: не перебегать, не обгонять товарищей, не кричать, не толкаться.<br></li>
        <li class="safety-ol-value">При переходе улиц, перекрестков соблюдать правила дорожного движения.<br></li>
        <li class="safety-ol-value">Группа должна идти по тротуару или пешеходным дорожкам, по обочине дороги, не выходя на проезжую часть.<br></li>
        <li class="safety-ol-value">Переходить дорогу по пешеходным переходам.<br></li>
        <li class="safety-ol-value">Своевременно информировать главного об ухудшении состояния здоровья или травмах.<br></li>
        <li class="safety-ol-value">Группа возвращается в полном составе, запрещается отпускать кого-либо по дороге.<br></li>
      </ol>
    </div>
    <div class="help">
      <button onclick="window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'" class="rick-roll">Ознакомлен</button>
    </div>
  </div>
</template>

<script>



import AppHeader from "@/components/UI/AppHeader.vue";

export default {
  name: "safe-rules",
  components: {AppHeader},
}
</script>

<style scoped>
.safety-rules {
  display: flex;
  flex-direction: column;
  padding: 100px 25px 100px 15px;
}
.safety-title {
  font-size: 48px;
  text-align: center;
}
.safety-value {
  font-size: 20px;
}
.safety-ol-value {
  margin: 5px 0;
}
.help {
  display: flex;
  padding-top: 25px;
}
.rick-roll {
  margin: 0 auto;
  width: max-content;
  height: 60px;
  background-color: #1e1e1e;
  border-radius: 25px;
  font-size: 24px;
  color: white;
  padding: 10px 25px;
  font-family: sans-serif;
}
</style>