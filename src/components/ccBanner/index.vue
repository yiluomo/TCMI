<template>
    <BreadLink :firstTitle="firstTitle" :secondTitle="secondTitle" color="#ffffff" />
    <div class="banner">
        <div class="text1">{{ text1 }}</div>
        <div class="text2">{{ text2 }}</div>
    </div>
</template>

<script setup>
import BreadLink from '@/components/breadLink/index.vue'
defineProps({
    text1: String,
    text2: String,
    firstTitle: String,
    secondTitle: String,
});
</script>
<style lang="less" scoped>
.banner {
    width: 100%;
    height: 564px;
    background-image: url('/image/ccbanner.png');
    background-size: 100% 100%;
    position: relative;
}

@font-face {
    font-family: 'HYCuSong-J';
    src: url('/font/HYCuSong.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

.banner .text1 {
    width: 1200px;
    margin: 0 auto;
    font-size: 70px;
    font-family: 'HYCuSong-J';
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
    text-align: right;
    padding-top: 192px;
}

.banner .text2 {
    width: 1200px;
    margin: 0 auto;
    font-size: 24px;
    font-family: 'HYCuSong-J';
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
    text-align: right;
    padding-top: 32px;
}
</style>