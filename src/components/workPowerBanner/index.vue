<template>
    <div class="banner">
        <div class="text1">{{ text1 }}</div>
        <div class="text2">{{ text2 }}</div>
    </div>
</template>

<script setup>
defineProps({
    text1: String,
    text2: String
});
</script>
<style scoped>
.banner {
    width: 100%;
    height: 440px;
    background-image: url('/image/wpBanner.png');
    background-size: 100% 100%;
}

@font-face {
    font-family: 'HYCuSong-J';
    src: url('/font/HYCuSong.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

.banner .text1 {
    font-size: 66px;
    font-family: 'HYCuSong-J';
    font-weight: normal;
    color: #966338;
    text-align: center;
    padding-top: 114px;
}

.banner .text2 {
    width: 925px;
    margin: 0 auto;
    font-size: 24px;
    font-family: 'HYCuSong-J';
    font-weight: normal;
    color: #E0A26D;
    text-align: center;
    padding-top: 32px;
}
</style>