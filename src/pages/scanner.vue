<template>
  <div class="scanner">
    <div id="reader" class="scanner-block"></div>
  </div>
</template>

<script>
import {Html5QrcodeScanner} from "html5-qrcode";

export default {
  name: "scanner",
  methods: {

  },
  mounted() {
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250} },
      /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
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
}
</style>
