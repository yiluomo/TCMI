<template>
  <div class="mainTitle">
    <h1>{{ title }}</h1>
    <div class="line"></div>
    <h2>{{ subTitle }}</h2>
  </div>
</template>

<script setup >
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>


<style lang='less' scoped>
.line {
  margin: 16px auto;
  width: 119px;
  height: 2px;
  background: #1a3d2e;
  border-radius: 0px 0px 0px 0px;
}
.mainTitle { 
  padding: 1px;
  width: 1200px;
  margin: 0 auto;
}
h1 {
  margin-top: 30px;
  font-family: Microsoft YaHei, Microsoft YaHei;
  font-weight: bold;
  font-size: 34px;
  color: #1a3d2e;
  text-align: center;
  font-style: normal;
  text-transform: none;
}
h2 {
  width: 657px;
  margin: 0 auto;
  margin-bottom: 30px;
  font-family: Microsoft YaHei, Microsoft YaHei;
  font-weight: 400;
  font-size: 12px;
  color: #b4a580;
  line-height: 24px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}
</style>