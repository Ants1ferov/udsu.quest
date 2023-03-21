<template>
  <div class="auth">
    <div class="logo-block">
      <img class="logo-img" src="./../assets/img/design/logo.svg" alt="">
      <p class="logo-title">
        ИЖТРУДФРОНТ
        <img class="logo-cycle" src="./../assets/img/design/circle.svg" alt="">
        ИЖТРУДФРОНТ
      </p>
    </div>
    <div class="auth-block">
      <register v-if="register"></register>
      <login v-if="login"></login>
    </div>
    <div class="flex-center mn-mid-tb">
      <AppButton v-if="register" class="my-button button-wt-bg bold font-min" @click="forgotPassword">Уже есть аккаунт?</AppButton>
      <button v-if="login" class="my-button button-wt-bg bold font-min" @click="forgotPassword">Еще нет аккаунта?</button>
    </div>
    <div class="footer">
      <img class="logo-leafs" src="./../assets/img/design/double-leaf.png" alt="">
    </div>
  </div>
</template>

<script>
import SkyBlock from "@/components/UI/sky-block.vue";
import Login from "@/pages/login.vue";
import Register from "@/pages/register.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "auth",
  components: {AppButton, Register, Login, SkyBlock},
  data() {
    return {
      register: true,
      login: false,
      err4: false,
      err3: false,
      newPassword: '',
      recoveryOpen: false,
      registerOk: false,
      registerFail: false,
      name: '',
      surname: '',
      email: '',
      password: '',
      newPasswordVoid: false,
      emailVoid: false
    }
  },
  mounted() {
  },
  methods: {
    forgotPassword() {
      if (this.register === true) {
        this.register = false
        this.login = true
      }
      else {
        this.register = true
        this.login = false
      }
    },


    closeBlock() {
      if (this.registerFail === true) {
        this.registerFail = false
      } else {
        this.registerFail = true
      }
    },

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
