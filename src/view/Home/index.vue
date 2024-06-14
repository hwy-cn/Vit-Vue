<script setup lang="ts">
async function copyToClipboard() {
  var text = document.getElementById("copyText")!.innerText;
  try {
    await navigator.clipboard.writeText(text);
    console.log("复制成功: " + text);
  } catch (err) {
    console.error("复制失败", err);
  }
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices
  // console.log(copyText);
  // document.execCommand("copy");
}
</script>

<template>
  <div
    @click="
      () => {
        this.$router.push('/a');
      }
    "
  >
    home
  </div>
  <div>
    <div id="copyText">这是要复制的文本内容。</div>
    <br />
    <button @click="copyToClipboard()">点击复制</button>
  </div>
</template>

<style scoped></style>
