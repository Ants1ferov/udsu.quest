<template>
  <AppHeader></AppHeader>
  <slot/>
</template>

<script>
import Auth from "@/pages/auth.vue";
import AppHeader from "@/App.vue";

export default {
  name: "reg",
  components: {AppHeader, Auth}
}
</script>

<style scoped>

</style>