<script setup>
import {Html5Qrcode} from "html5-qrcode";
import {onMounted, ref} from "vue";
import AppButton from "@/components/UI/AppButton.vue";

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
  } else if (value === 'xd32r3x2') {
    emit('qr', 2)
  } else if (value === 'x23fr2qf') {
    emit('qr', 3)
  } else if (value === 'v3Ww3r7f') {
    emit('qr', 4)
  } else if (value === 'cW4H45V3') {
    emit('qr', 5)
  } else if (value === 'vq4TC7f0') {
    emit('qr', 6)
  } else if (value === -1){
    emit('qr', -1)
  } else {
    emit('qr', 0)
  }
}

function qrFromCamera() {
  const html5QrCode = new Html5Qrcode("reader");
  const qrCodeSuccessCallback = (decodedText) => {
    html5QrCode.stop()
    qrSend(decodedText)
  };
  const config = {fps: 10, qrbox: {width: 250, height: 250}};
  html5QrCode.start({facingMode: "environment"}, config, qrCodeSuccessCallback)
    .catch(() => {
      qrSend(-1)
    })
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
      .catch(() => {
        qrSend(0)
      });
  });
})
</script>

<template>
  <div class="scanner">
    <AppButton v-if="!cameraScan" class="bg-gray" @click="cameraOpen">Сканировать камерой</AppButton>
    <div v-if="cameraScan" class="reader-block">
      <p class="white fz-24 permission-request">Предоставьте доступ<br> к камере</p>
      <div id="reader" class="reader"></div>
    </div>
    <div v-if="!cameraScan">
      <div id="readImage"></div>
      <label class="input-file">
        <input id="qr-input-file" name="file" type="file">
        <AppButton class="app-button bg-gray">Сканировать<br> из галереи</AppButton>
      </label>
    </div>
  </div>
</template>

<style scoped>
.reader-block {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.permission-request {
  position: absolute;
}

.scanner {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
}

.reader {
  width: 300px;
  height: 400px;
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