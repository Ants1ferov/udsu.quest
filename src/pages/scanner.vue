<template>
  <div class="scanner">
    <div id="reader" class="scanner-block"></div>
  </div>
</template>

<script>

import {Html5Qrcode, Html5QrcodeScanner} from "html5-qrcode";

export default {
  name: "scanner",
  methods: {},
  mounted() {
    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 60, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);



/*      const html5QrCode = new Html5Qrcode("reader");
      html5QrCode.start(
          { facingMode: "environment" },
          {
            fps: 60, qrbox: { width: 250, height: 250 }
          }, (decodedText, decodedResult) => {
            console.log(decodedText)
            if (decodedText === 'test') {
              console.log('true')
            }
          }, (errorMessage) => {
            console.log(errorMessage)
          })
        .catch(err => {
          console.log(err)
    });*/
  }
}
</script>

<style scoped>
.scanner {
  padding-top: 150px;
}
.scanner-block {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 35px;
  font-size: 32px;
  border: 6px solid #1e1e1e !important;
}
</style>
