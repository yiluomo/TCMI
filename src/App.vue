<template>
  <div class="appContainer">
    <Nav />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="less">
.appContainer {
  width: 100%;
  height: 1196px;
}
</style>

<script setup>
import Nav from '@/components/nav/index.vue';
</script>