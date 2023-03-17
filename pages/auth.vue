<template>
  <div class="auth">
    <div class="auth-block">
        <form class="auth-form">
          <h1 class="form-title">Регистрация</h1>
          <input type="text" class="form-input" id="username" placeholder="Никнейм" >
          <input type="password" class="form-input" id="password" placeholder="Пароль" >
          <app-button class="reg-btn" type="submit">Регистрация</app-button>
        </form>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/AppButton.vue";

export default {
  name: "auth",
  components: {AppButton}
}
</script>

<style scoped>
  .auth {
    height: 100vh;
    width: 100%;
    background-color: #818181;
  }
  .auth-block {
    padding: 250px 25px;
  }
  .auth-form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 200px;
    max-width: 500px;
  }
  .form-title {
    margin-bottom: 15px;
    font-size: 48px;
    color: white;
    text-align: center;
  }
  .form-input {
    background: #1e1e1e;
    color: #ffffff;
    border: 0;
    font-family: Inter, sans-serif;
    padding: 5px 20px;
    font-size: 20px;
    border-radius: 17px;
    outline: none;
    height: 50px;
    margin: 10px 0;
    max-width: 500px;
  }
  @media only screen and (max-width: 390px) {
    .auth-block {
      margin: 0 25px;
    }
  }

</style>
