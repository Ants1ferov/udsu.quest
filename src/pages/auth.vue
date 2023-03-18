<template>
  <div class="auth">
    <div class="auth-block">
      <form @submit.prevent="registration" class="auth-form">
        <transition name="ok">
          <div class="register-ok" v-if="registerOk">
            <div class="register-ok-icon">
              <img class="register-ok-icon-img" src="@/assets/img/button/ok.svg">
            </div>
          </div>
        </transition>
        <h1 class="form-title">Регистрация</h1>
        <input type="text" class="form-input" id="name" placeholder="Имя" v-model="name">
        <input type="text" class="form-input" id="surname" placeholder="Фамилия" v-model="surname">
        <input type="email" class="form-input" id="email" placeholder="Email" v-model="email">
        <input type="text" class="form-input" id="code" placeholder="Код" v-model="code">
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
        registerOk: false,
        name: '',
        surname: '',
        email: '',
        code: '',
        password: ''
    }
  },
  methods: {
    successful() {
      this.registerOk = this.registerOk === false;
/*
      this.registerOk = true
*/
    },
    registration() {
      if (this.code === '0') {
        this.successful()
      }
      axios
          .post('http://127.0.0.1:8000/api/test', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            code: this.code,
            password: this.password,
          })
    },

  }
}
</script>
<style>
  .auth {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(-225deg, #b6ffea 0%, #ffc2f5 100%);
  }
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
  .register-ok {
    display: flex;
    position: absolute;
    width: 80%;
    height: 60%;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
    text-align: center;
    background-color: #3d3d3d;
    z-index: 2;
    border-radius: 25px;
    align-items: center;
  }
  .register-ok-icon {
    margin: 0 auto;
  }
  .register-ok-icon-img {
    width: 128px;
    height: 128px;
  }
  .ok-enter-active {
    transition: all 750ms cubic-bezier(0, 1, .15, 1);
  }
  .ok-leave-active {
    transition: background-color 400ms ease-out;
  }
  .ok-enter-from,
  .ok-leave-to {
    opacity: 1;
    transform: translateY(-150%);
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
  @media only screen and (max-width: 420px) {
    .form-title {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 400px) {
    .form-title {
      font-size: 44px;
    }
    .auth-block {
      padding: 175px 25px;
    }
    @media only screen and (max-width: 350px) {
      .form-title {
        font-size: 40px;
      }
      .auth-block {
        padding: 175px 15px;
      }
    }
  }


</style>
