<template>
     <div class="breadLink" :style="{ color: color }">
            <router-link to="/"><a href="">首页</a></router-link>
            >
            <span>{{ firstTitle }}</span>
            >
            <a href="">{{ secondTitle}}</a>
        </div>
</template>

<script setup>
defineProps({
    firstTitle: String,
    secondTitle: String,
    color: {
        type: String,
        default: '#966338'
    }
})
</script>
<style lang="less" scoped>

a {
    text-decoration: none;
    color: inherit; /* 继承父元素的颜色 */
    outline: none; /* 移除点击时的轮廓 */
}
.breadLink {
    position: absolute;
    top: 123px;
    left: 360px;
    height: 22px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    font-style: normal;
    opacity: 0.8;
    z-index: 1;
}
</style>