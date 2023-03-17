<template>
  <div class="auth">
    <div class="auth-block">
        <form @submit.prevent="registration" class="auth-form">
          <h1 class="form-title">Регистрация</h1>
          <input type="text" class="form-input" id="name" placeholder="Имя" v-model="name">
          <input type="text" class="form-input" id="surname" placeholder="Фамилия" v-model="surname">
          <input type="email" class="form-input" id="email" placeholder="Email" v-model="email">
          <input type="password" class="form-input" id="password" placeholder="Пароль" v-model="password">
          <div class="auth-block-button">
            <AppButton @submit.prevent class="reg-btn">Регистрация</AppButton>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";

export default {
  name: "auth",
  components: {AppButton},
  data() {
    return {
        name: '',
        surname: '',
        email: '',
        password: ''
    }
  },
  methods: {
    registration() {
      axios
          .post('http://127.0.0.1:8000/api/test', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
          })
    }
  }
}
</script>

<style>
  .auth {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);  }
  .auth-block {
    padding: 175px 35px;
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
    color: #1e1e1e;
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
  .reg-btn {
    margin: 10px auto auto 0;
    float: right;
  }
  @media only screen and (max-width: 390px) {
    .auth-block {
      margin: 0 25px;
    }
  }

</style>
