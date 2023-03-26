<script setup>
import {Html5Qrcode, Html5QrcodeScanner} from "html5-qrcode";
import {onMounted} from "vue";
import AppButton from "@/components/UI/AppButton.vue";
import router from "@/router";
function qrFromCamera () {
  const html5QrCode = new Html5Qrcode("reader");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log(decodedText)
  };
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}
onMounted(() => {
  const html5QrCode = new Html5Qrcode("readImage");

  const fileinput = document.getElementById('qr-input-file');
  fileinput.addEventListener('change', e => {
    if (e.target.files.length == 0) {
      return;
    }

    const imageFile = e.target.files[0];
    html5QrCode.scanFile(imageFile, true)
        .then(decodedText => {
          if (decodedText) {
            
          }
        })
        .catch(err => {
          console.log(`Error scanning file. Reason: ${err}`)
        });
  });
})
</script>

<template>
  <AppButton class="bg-dark">Сканировать камерой</AppButton>
  <div v-if="cameraScan" id="reader" class="reader"></div>
  <div id="readImage"></div>
    <label class="input-file">
      <input id="qr-input-file" type="file" name="file">
      <span class="app-button bg-dark">Сканировать из галереи</span>
    </label>
</template>

<style scoped>
.reader {
  width: 300px;
  height: 300px;
}
.input-file {
  position: relative;
  display: inline-block;
}
.input-file input[type=file] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}
.input-file:active .input-file-btn {
  background-color: #3a3a3a;
}
</style>