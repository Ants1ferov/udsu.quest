<template>
  <div class="name">{{ name }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "account",
  data() {
    return {
      userName: '',
      userSurname: ''
    }
  },
  mounted() {
    // axios
    //     .get('')
    //     .then()
  }
}
</script>

<style scoped>

</style>