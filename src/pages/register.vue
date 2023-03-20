<template>
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
      <error-sky-block v-if="authFail">
      </error-sky-block>
    </transition>
    <input type="text" class="form-input" autocomplete="name" id="name" placeholder="Имя" v-model="name">
    <input type="text" class="form-input" autocomplete="family-name" id="surname" placeholder="Фамилия" v-model="surname">
    <input type="email" class="form-input" autocomplete="email" id="email" placeholder="Email" v-model="email">
    <input type="password" class="form-input" autocomplete="new-password" id="password" placeholder="Пароль" v-model="password">
    <div class="auth-block-button">
      <AppButton @submit.prevent class="right-btn btn-dark bold">Регистрация</AppButton>
    </div>
  </form>

</template>
<script>
import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";
import SkyBlock from "@/components/UI/sky-block.vue";
import ErrorSkyBlock from "@/components/UI/error-sky-block.vue";
export default {
  name: "register",
  components: {ErrorSkyBlock, SkyBlock, AppButton},
  data() {
    return {
      err4: false,
      err3: false,
      newPassword: '',
      recoveryOpen: false,
      registerOk: false,
      authFail: false,
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
            .post('https://api.udgu.suslovd.ru:9443/api/remind', {
              email: this.email,
              password: this.newPassword
            })
            .then((response) => {
              this.recoveryOpen = false
              console.log('Пароль сброшен')
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

<style scoped>

</style>