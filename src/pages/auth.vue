<template>
  <div class="auth">
    <div class="auth-block">
      <form @submit.prevent="registration" class="auth-form">
        <transition name="ok">
          <div class="sky-block" v-if="registerOk">
            <div class="register-ok-icon">
              <img class="register-ok-icon-img" src="@/assets/img/button/ok.svg">
            </div>
          </div>
        </transition>
        <input type="text" class="form-input" autocomplete="name" id="name" placeholder="Имя" v-model="name">
        <input type="text" class="form-input" autocomplete="family-name" id="surname" placeholder="Фамилия" v-model="surname">
        <input type="email" class="form-input" autocomplete="email" id="email" placeholder="Email" v-model="email">
        <input type="password" class="form-input" autocomplete="new-password" id="password" placeholder="Пароль" v-model="password">
        <div class="auth-block-button">
          <AppButton @submit.prevent class="reg-btn">Регистрация</AppButton>
        </div>
      </form>
      <div class="auth-block-button-recovery">
        <button class="recovery-button" @click="recoveryOpenBlock">Забыли пароль?</button>
        <transition name="ok">
          <div class="sky-block" v-if="recoveryOpen">
            <form @submit.prevent="checkValue" class="recovery-form">
              <div class="recovery-block-title">Восстановление пароля</div>
              <input type="email" class="form-input" autocomplete="email" id="email" placeholder="Email" :class="{ emailVoid: emailVoid }" v-model="email">
              <div class="captcha">
                <div class="captcha-title">Введите капчу:</div>
                <div class="captcha-value">{{ captchaValue }}</div>
                <input type="text" class="form-input captcha" placeholder="Капча" :class="{ captchaVoid: captchaVoid }" v-model="captchaUserValue">
                <AppButton class="recovery-button-end">Сбросить пароль</AppButton>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";
import App from "@/App.vue";

export default {
  name: "auth",
  components: {App, AppButton},
  data() {
    let captchaValue = '';
    let captchaUserValue = '';
    return {
      recoveryOpen: false,
      registerOk: false,
      name: '',
      surname: '',
      email: '',
      code: '',
      password: '',
      captchaUserValue,
      captchaValue,
      captchaVoid: false,
      emailVoid: false
    }
  },
  mounted() {
  },
  methods: {
    successful() {
      this.registerOk = this.registerOk === false;
/*
      this.registerOk = true
*/
    },
    registration() {
      if (this.email) {
        this.successful()
      }
      axios
          .post('http://sloth-1.suslovd.ru:8080/api/add', {
            firstname: this.name,
            secondname: this.surname,
            email: this.email,
            password: this.password,
          })
    },
    recoveryOpenBlock() {
      this.captchaValue = Math.floor(Math.random() * (9999 - 1000));
      this.recoveryOpen = true
    },
    recoveryOk() {
      console.log('Пароль сброшен')
    },
    checkValue() {
      if (this.captchaUserValue === '' && this.email === '') {
        this.captchaVoid = true
        this.emailVoid = true
        console.log('Введите капчу и email')
      }
      else if (this.captchaUserValue === '') {
        this.captchaVoid = true
        console.log('Введите капчу')
      }
      else if (this.email === '') {
        this.emailVoid = true
        console.log('Введите email!')
      }
      else {
        if (this.captchaUserValue == this.captchaValue) {
          console.log('Капча правильная')
          axios
              .post('http://sloth-1.suslovd.ru:8080/api/change', {
                email: this.email
              }).
              then(() => {
                this.recoveryOk()
              })
              .catch(() => {

              })
        } else {
          console.log('false')
        }
      }
    },
  }
}
</script>
<style>
  .auth {
    height: 100vh;
    width: 100%;
    background-color: white
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
  .sky-block {
    display: flex;
    position: absolute;
    width: 80%;
    height: 60%;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(10px);
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
  .form-input {
    background: #e3e5e3;
    color: #7a7c7a;
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
  .auth-block-button-recovery {
    margin: 100px auto;
    display: flex;
  }
  .recovery-button {
    color: #ffffff;
    font-size: 18px;
    background-color: #000000;
    border-radius: 25px;
    padding: 12px 20px;
    margin: 0 auto;
  }
  .recovery-form {
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .form-input.emailVoid::placeholder {
    color: red;
  }
  .recovery-block-title {
    font-size: 24px;
    color: #ffffff;
  }
  .captcha {

  }
  .form-input.captcha.captchaVoid::placeholder {
    color: red;
  }
  .captcha-title {
    color: white;
    font-size: 18px;
  }
  .form-input.captcha {
    width: 50%;
  }
  .captcha-value {
    font-size: 24px;
    color: #00ff15;
  }
  .recovery-button-end {
    margin: 10px 0;
    color: white;
    font-size: 20px;
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
  }
  @media only screen and (max-width: 350px) {
    .form-title {
      font-size: 40px;
    }
    .auth-block {
      padding: 175px 15px;
    }
  }
</style>
