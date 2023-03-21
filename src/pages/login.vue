<template>
  <form @submit.prevent="logIn" class="auth-form">
    <transition name="ok">
      <sky-block v-if="authOk">
        <div class="auth-ok-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 48 48">
            <path d="M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z" fill="#adff00"/>
          </svg>
        </div>
      </sky-block>
    </transition>
    <transition name="ok">
      <error-sky-block v-if="authFail">
      </error-sky-block>
    </transition>
    <input type="email" class="form-input" autocomplete="email" id="email" placeholder="Email" v-model="email">
    <input type="password" class="form-input" autocomplete="new-password" id="password" placeholder="Пароль" v-model="password">
    <div class="auth-block-button">
      <AppButton @submit.prevent class="right-btn btn-dark bold">Вход</AppButton>
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
          <div class="captcha-title">Введите новый пароль:</div>
          <input type="password" autocomplete="password"  class="form-input" :class="{newPasswordVoid: newPasswordVoid}" placeholder="Новый пароль" v-model="newPassword">
          <AppButton class="recovery-button-end">Сбросить пароль</AppButton>
        </form>
      </sky-block>
    </transition>
  </div>
</template>

<script>
import SkyBlock from "@/components/UI/sky-block.vue";
import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";
import ErrorSkyBlock from "@/components/UI/error-sky-block.vue";

export default {
  name: "login",
  components: {ErrorSkyBlock, SkyBlock, AppButton},
  data() {
    return {
      authFail: false,
      authOk: false,
      email: '',
      password: '',
      register: true,
      login: false,
      err4: false,
      err3: false,
      newPassword: '',
      recoveryOpen: false,
      newPasswordVoid: false,
      emailVoid: false
    }
  },
  mounted() {
  },
  methods: {
    logIn() {
      if (this.email !== '' && this.password !== '') {
        axios
            .post('https://api.udgu.suslovd.ru:9443/api/login', {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              console.log(response.status)
              if (response.status === 200) {
                this.authOk = true
                setTimeout(() => {
                  this.$router.push('/map')
                }, 1000);
              }
            else if (response.status === 409) {
                this.authFail = true
                console.log('логин или пароль неверный')
              }
            })
            .catch((reason) => {
              this.authFail = true
            })
      } else {
        this.authFail = true
      }
    },
    recoveryOpenBlock() {
      if (this.recoveryOpen === false) {
        this.recoveryOpen = true
      } else {
        this.recoveryOpen = false
      }
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
            .post('https://api.udgu.suslovd.ru:9443/api/change', {
              email: this.email,
              password: this.newPassword
            })
            .then((response) => {
              // пока что кидает на карту сразу
              this.recoveryOpen = false
              console.log('Пароль изменен')
              console.log(response)
              setTimeout(() => {
                this.$router.push('/map')
              }, 300);
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
.footer {
  display: flex;
  padding: 35px 0 50px 0;
  justify-content: center;
}
.logo-leafs {
  width: 50%;
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
.bottom-to-top-enter-active {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.bottom-to-top-leave-active {
  transition: all 1500ms cubic-bezier(0, 1, .15, 1);
}
.bottom-to-top-enter-from {
  opacity: 1;
  transform: translateY(100%);
}
.bottom-to-top-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.reg-error-text {
  font-size: 20px;
  color: white;
}
.form-input {
  background: #e3e5e3;
  color: #252525;
  font-weight: bold;
  border: 0;
  padding: 5px 20px;
  font-size: 20px;
  border-radius: 17px;
  outline: none;
  height: 50px;
  margin: 10px 0;
  max-width: 500px;
}
.form-input::placeholder {
  color: #888888;
  font-weight: bold;
}
.reg-btn {
  margin: 10px auto auto 0;
  font-size: 24px;
  float: right;
  padding: 12px 25px;
}
.close-block {
  font-size: 20px;
  margin-top: 35px;
}
.auth-block-button-recovery {
  margin: 50px auto 25px auto;
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
  align-items: center;
}
.form-input.emailVoid::placeholder {
  color: red;
}
.recovery-block-title {
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 35px;
}
.form-input.newPasswordVoid::placeholder {
  color: red;
}
.captcha-title {
  color: white;
  font-size: 18px;
  text-align: left;
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
    padding: 35px 25px 0 25px;
  }
}
@media only screen and (max-width: 350px) {
  .form-title {
    font-size: 40px;
  }
  .auth-block {
    padding: 25px 15px 0 15px;
  }
}
</style>