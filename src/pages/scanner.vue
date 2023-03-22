<script>
import {Html5QrcodeScanner} from "html5-qrcode";

export default {
  name: "scanner",
  props: {
    task: {
      type: String,
    }
  },
  emits: ['task'],
  mounted() {
    function onScanSuccess(decodedText, decodedResult) {
      if (decodedText === 'start') {
        this.task = '1'
      }
    }
    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 60, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }
}
</script>
<template>
  <div class="scanner">
    <div id="reader" class="scanner-block"></div>
  </div>
</template>

<style scoped>
.scanner {
  padding-top: 150px;
}
.scanner-block {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  border-radius: 35px;
  font-size: 32px;
  border: 6px solid #1e1e1e !important;
}
</style>
