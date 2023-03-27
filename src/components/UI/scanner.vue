<script setup>
import {Html5Qrcode, Html5QrcodeScanner} from "html5-qrcode";
import {onMounted, ref} from "vue";
import AppButton from "@/components/UI/AppButton.vue";
import router from "@/router";

let cameraScan = ref(false)

const emit = defineEmits(['qrOk', 'qrFail'])

function cameraOpen() {
  cameraScan.value = !cameraScan.value
  setTimeout(() => {
    qrFromCamera()
  }, 1000);

}
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
          if (decodedText === 'dbn89f32') {
            emit('qrOk', 1)
          }
          else if (decodedText === 'xd32r3x2') {
            emit('qrOk', 2)
          }
          else if (decodedText === 'x23fr2qf') {
            emit('qrOk', 3)
          }
          else if (decodedText === 'v3Ww3r7f') {
            emit('qrOk', 4)
          }
          else if (decodedText === 'cW4H45V3') {
            emit('qrOk', 5)
          }
          else if (decodedText === 'vq4TC7f0') {
            emit('qrOk', 6)
          }
          else {

          }
        })
        .catch(err => {
          console.log(`Error scanning file. Reason: ${err}`)
        });
  });
})
</script>

<template>
  <AppButton class="bg-dark mrg-25" @click="cameraOpen">Сканировать камерой</AppButton>
  <div v-if="cameraScan" id="reader" class="reader bdr-wht"></div>
  <div id="readImage" v-if="!cameraScan"></div>
    <label class="input-file mrg-25">
      <input id="qr-input-file" type="file" name="file">
      <span class="app-button bg-dark">Сканировать из галереи</span>
    </label>
</template>

<style scoped>
.reader {
  width: 300px;
  height: 300px;
  border-radius: 25px;
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