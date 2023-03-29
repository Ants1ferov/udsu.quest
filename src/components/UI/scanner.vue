<script setup>
import {Html5Qrcode, Html5QrcodeScanner} from "html5-qrcode";
import {onMounted, ref} from "vue";
import AppButton from "@/components/UI/AppButton.vue";
import router from "@/router";

let cameraScan = ref(false)

const emit = defineEmits(['qr'])

function cameraOpen() {
  cameraScan.value = !cameraScan.value
  setTimeout(() => {
    qrFromCamera()
  }, 1000);
}
function qrSend(value) {
  if (value === 'dbn89f32') {
    emit('qr', 1)
  }
  else if (value === 'xd32r3x2') {
    emit('qr', 2)
  }
  else if (value === 'x23fr2qf') {
    emit('qr', 3)
  }
  else if (value === 'v3Ww3r7f') {
    emit('qr', 4)
  }
  else if (value === 'cW4H45V3') {
    emit('qr', 5)
  }
  else if (value === 'vq4TC7f0') {
    emit('qr', 6)
  }
  else {
    emit('qr', 0)
  }
}
function qrFromCamera() {
  const html5QrCode = new Html5Qrcode("reader");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    qrSend(decodedText)
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
          qrSend(decodedText)
        })
        .catch(err => {
          qrSend(0)
        });
  });
})
</script>

<template>
  <AppButton class="bg-dark mrg-25" v-if="!cameraScan" @click="cameraOpen">Сканировать камерой</AppButton>
  <div v-if="cameraScan" id="reader" class="reader bdr-wht"></div>
  <div v-if="!cameraScan">
  <div id="readImage"></div>
    <label class="input-file mrg-25">
      <input id="qr-input-file" type="file" name="file">
      <span class="app-button bg-dark">Сканировать из галереи</span>
    </label>
  </div>
</template>

<style scoped>
.reader {
  width: 300px;
  height: 400px;
  border-radius: 25px;
  margin: 25px 0;
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