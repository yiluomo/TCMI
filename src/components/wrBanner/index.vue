<template>
  <BreadLink
    :firstTitle="firstTitle"
    :secondTitle="secondTitle"
    color="rgba(150, 99, 56, 1)"
  />
  <div class="banner">
    <div class="text">
      <div class="text1">{{ text1 }}</div>
      <div class="text2">{{ text2 }}</div>
    </div>
  </div>
</template>

<script setup>
import BreadLink from "@/components/breadLink/index.vue";
defineProps({
  text1: String,
  text2: String,
  text3: String,
  firstTitle: String,
  secondTitle: String,
});
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 440px;
  background-image: url("/image/wrBanner.png");
  background-size: 100% 100%;
}

@font-face {
  font-family: "HYCuSong-J";
  src: url("/font/HYCuSong.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

.text {
  width: 1800px;
  margin: 0 auto;
  padding-top: 114px;
  .text1 {
    width: 740px;
    font-size: 66px;
    font-family: "HYCuSong-J";
    font-weight: normal;
    color: #966338;
    text-align: center;
    margin-bottom: 15px;
  }
  .text2 {
    width: 740px;
    box-sizing: border-box;
    font-family: HYCuSong, HYCuSong;
    font-weight: normal;
    font-size: 26px;
    color: rgba(150, 99, 56, 0.6);
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}
</style>