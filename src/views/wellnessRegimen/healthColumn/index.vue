<template>
  <Banner
    text1="养生专栏"
    text2='中药膳食疗以传统中医理论为指导，将药材与食材科学搭配， 达到调理身体、预防疾病、延年益寿的目的。'
    firstTitle="养生保健"
    secondTitle="养生专栏"
  />
  <main>
    <MainTitle
      title="中医情志调摄理论基础"
      subTitle="中医情志学说是中医学理论体系的重要组成部分，探讨七情与五脏的关系及情志致病的机理"
    />
  </main>
</template>

<script setup >
import Banner from "@/components/wrBanner/index.vue";
import MainTitle from "../compontents/mainTitle/index.vue";
</script>

<style lang='less' scoped>
@import "./index.less";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  width: 100%;
  height: 100%;
  background: #f5f5dc;
  border-radius: 0px 0px 0px 0px;
  padding: 1px;
}
</style>