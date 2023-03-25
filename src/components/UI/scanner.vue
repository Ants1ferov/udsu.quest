<script setup>
import {Html5Qrcode, Html5QrcodeScanner} from "html5-qrcode";
import {onMounted} from "vue";

onMounted(() => {
  // function onScanSuccess(decodedText, decodedResult) {
  //   // handle the scanned code as you like, for example:
  //   console.log(`Code matched = ${decodedText}`, decodedResult);
  // }
  //
  // function onScanFailure(error) {
  //   // handle scan failure, usually better to ignore and keep scanning.
  //   // for example:
  //   console.warn(`Code scan error = ${error}`);
  // }
  //
  // let html5QrcodeScanner = new Html5QrcodeScanner(
  //     "reader",
  //     { fps: 10, qrbox: {width: 250, height: 250} },
  //     /* verbose= */ false);
  // html5QrcodeScanner.render(onScanSuccess, onScanFailure);


  // This method will trigger user permissions
  const html5QrCode = new Html5Qrcode("reader");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log(decodedText)
  };
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

  const fileinput = document.getElementById('qr-input-file');
  fileinput.addEventListener('change', e => {
    if (e.target.files.length == 0) {
      return;
    }
    const imageFile = e.target.files[0];
    html5QrCode.scanFile(imageFile, true)
        .then(decodedText => {
          console.log(decodedText);
        })
        .catch(err => {
          console.log(`Error scanning file. Reason: ${err}`)
        });
  });
})
</script>

<template>
  <div id="reader" width="600px"></div>
  <input type="file" id="qr-input-file" accept="image/*">
</template>

<style scoped>
#html5-qrcode-button-file-selection {
  content: 'Выберите изображение' !important;
}
</style>