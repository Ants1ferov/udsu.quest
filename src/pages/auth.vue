<template>
  <div class="auth">
    <div class="logo-block">
      <img class="logo-img" src="./../assets/img/design/logo.svg">
      <p class="logo-title">
        ИЖТРУДФРОНТ
        <img class="logo-cycle" src="./../assets/img/design/cycle.svg">
        ИЖТРУДФРОНТ
      </p>
    </div>
    <div class="auth-block">
      <form @submit.prevent="registration" class="auth-form">
        <transition name="ok">
          <sky-block v-if="registerOk">
            <div class="register-ok-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 48 48">
                <path d="M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z" fill="#adff00"/>
              </svg>
            </div>
          </sky-block>
        </transition>
        <transition name="ok">
          <sky-block v-if="registerFail">
            <div class="register-ok-icon">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 69.6L36 97.6C35.2 98.4 34.2667 98.8 33.2 98.8C32.1333 98.8 31.2 98.4 30.4 97.6C29.6 96.8 29.2 95.8667 29.2 94.8C29.2 93.7333 29.6 92.8 30.4 92L58.4 64L30.4 36C29.6 35.2 29.2 34.2667 29.2 33.2C29.2 32.1333 29.6 31.2 30.4 30.4C31.2 29.6 32.1333 29.2 33.2 29.2C34.2667 29.2 35.2 29.6 36 30.4L64 58.4L92 30.4C92.8 29.6 93.7333 29.2 94.8 29.2C95.8667 29.2 96.8 29.6 97.6 30.4C98.4 31.2 98.8 32.1333 98.8 33.2C98.8 34.2667 98.4 35.2 97.6 36L69.6 64L97.6 92C98.4 92.8 98.8 93.7333 98.8 94.8C98.8 95.8667 98.4 96.8 97.6 97.6C96.8 98.4 95.8667 98.8 94.8 98.8C93.7333 98.8 92.8 98.4 92 97.6L64 69.6Z" fill="#D3474C"/>
              </svg>
              <p class="reg-error-text">Ошибка</p>
              <AppButton class="close-block" type="button" @click="closeBlock">Закрыть</AppButton>
            </div>
          </sky-block>
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
          <sky-block v-if="recoveryOpen">
            <form @submit.prevent="checkValue" class="recovery-form">
              <div class="recovery-block-title">Восстановление пароля</div>
              <div class="captcha-title">Введите свой email:</div>
              <input type="email" class="form-input" autocomplete="email" id="email" placeholder="Email" :class="{ emailVoid: emailVoid }" v-model="email">
              <div class="captcha">
                <div class="captcha-title">Введите новый пароль:</div>
                <input type="text" class="form-input" placeholder="Новый пароль" :class="{newPasswordVoid: newPasswordVoid}" v-model="newPassword">
                <AppButton class="recovery-button-end">Сбросить пароль</AppButton>
              </div>
            </form>
          </sky-block>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";
import App from "@/App.vue";
import SkyBlock from "@/components/UI/sky-block.vue";

export default {
  name: "auth",
  components: {SkyBlock, App, AppButton},
  data() {
    return {
      newPassword: '',
      recoveryOpen: false,
      registerOk: false,
      registerFail: false,
      name: '',
      surname: '',
      email: '',
      code: '',
      password: '',
      newPasswordVoid: false,
      emailVoid: false
    }
  },
  mounted() {
  },
  methods: {
    registration() {
      if (this.name !== '' && this.surname !== '' && this.email !== '' && this.password !== '') {
        axios
            .post('https://api.udgu.suslovd.ru:9443/api/add', {
              firstname: this.name,
              secondname: this.surname,
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              this.registerOk = true
              console.log(response.data)
              setTimeout(() => {
                this.$router.push('/safety-rules')
              }, 1000);
            })
            .catch((reason) => {
              this.registerFail = true
            })
      } else {
        this.registerFail = true
      }
    },
    recoveryOpenBlock() {
      if (this.recoveryOpen === false) {
        this.recoveryOpen = true
      } else {
        this.recoveryOpen = false
      }
    },
    closeBlock() {
      if (this.registerFail === true) {
        this.registerFail = false
      } else {
        this.registerFail = true
      }
    },
    recoveryOk() {
      console.log('Пароль сброшен')
    },
    checkValue() {
      if (this.newPassword === '' && this.email === '') {
        this.newPasswordVoid = true
        this.emailVoid = true
        console.log('Введите новый пароль и email')
      } else if (this.newPassword === '') {
        this.newPasswordVoid = true
        console.log('Введите новый пароль')
      } else if (this.email === '') {
        this.emailVoid = true
        console.log('Введите email')
      } else {
        axios
            .post('https://api.udgu.suslovd.ru:9443/api/remind', {
              email: this.email,
              password: this.newPassword
            })
            .then((response) => {
              this.recoveryOpen = false
              this.recoveryOk()
              console.log(response.data)
            })
            .catch((reason) => {
              console.log(reason)
            })
      }
    }
  }
}
</script>
<style>
.logo-block {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center
}
.logo-img {
  width: 256px;
  height: 260px;
}
.logo-title {
  margin-top: 35px;
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: bolder;
}
.logo-cycle {
  position: relative;
  top: 5px;
  width: 24px;
}
  .auth {
    height: 100vh;
    width: 100%;
    background-color: white
  }
  .auth-block {
    padding: 50px 35px;
  }
  .auth-form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 200px;
    max-width: 500px;
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
    transition: all 1500ms cubic-bezier(0, 1, .15, 1);
  }
  .ok-enter-from {
    opacity: 1;
    transform: translateY(-150%);
  }
  .ok-leave-to {
    opacity: 0;
    transform: translateY(+150%);
  }
  .reg-error-text {
    font-size: 20px;
    color: white;
  }
  .form-input {
    background: #e3e5e3;
    color: #7a7c7a;
    border: 0;
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
  .close-block {
    font-size: 20px;
    margin-top: 35px;
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
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 35px;
  }
  .captcha {

  }
  .form-input.newPasswordVoid::placeholder {
    color: red;
  }
  .captcha-title {
    color: white;
    font-size: 18px;
    text-align: left;
  }
  .form-input.captcha {
    width: 50%;
  }
  .captcha-value {
    font-size: 24px;
    color: #00ff15;
  }
  .recovery-button-end {
    margin: 25px 0;
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
      padding: 35px 25px;
    }
  }
  @media only screen and (max-width: 350px) {
    .form-title {
      font-size: 40px;
    }
    .auth-block {
      padding: 25px 15px;
    }
  }
</style>
