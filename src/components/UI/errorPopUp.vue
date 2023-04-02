<template>
  <pop-up-block>
    <div>
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 69.6L36 97.6C35.2 98.4 34.2667 98.8 33.2 98.8C32.1333 98.8 31.2 98.4 30.4 97.6C29.6 96.8 29.2 95.8667 29.2 94.8C29.2 93.7333 29.6 92.8 30.4 92L58.4 64L30.4 36C29.6 35.2 29.2 34.2667 29.2 33.2C29.2 32.1333 29.6 31.2 30.4 30.4C31.2 29.6 32.1333 29.2 33.2 29.2C34.2667 29.2 35.2 29.6 36 30.4L64 58.4L92 30.4C92.8 29.6 93.7333 29.2 94.8 29.2C95.8667 29.2 96.8 29.6 97.6 30.4C98.4 31.2 98.8 32.1333 98.8 33.2C98.8 34.2667 98.4 35.2 97.6 36L69.6 64L97.6 92C98.4 92.8 98.8 93.7333 98.8 94.8C98.8 95.8667 98.4 96.8 97.6 97.6C96.8 98.4 95.8667 98.8 94.8 98.8C93.7333 98.8 92.8 98.4 92 97.6L64 69.6Z" fill="#FF0000"/>
      </svg>
    </div>
    <slot/>
  </pop-up-block>
</template>

<script>
import PopUpBlock from "@/components/UI/popUpBlock.vue";

export default {
  name: "errorPopUp",
  components: {PopUpBlock}
}
</script>

<style scoped>

</style>