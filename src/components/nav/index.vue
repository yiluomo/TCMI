<template>
    <header>
        <div class="nav">
            <div class="logo">
                <img src="/image/logo1.png" alt="">
            </div>
            <ul class="nav-list">
                <li class="active"><router-link to="/"> 网站首页</router-link></li><img src="/image/Line 589.png" alt="">
                <li>从业者赋能<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/educationing">
                            <li> 继续教育</li>
                        </router-link>
                        <router-link to="/learnResource">
                            <li> 学术资源</li>
                        </router-link>
                        <router-link to="/toolCenter">
                            <li> 工具中心</li>
                        </router-link>
                        <router-link to="/industryExchange">
                            <li> 行业交流</li>
                        </router-link>
                        <router-link to="/careerDevelopment">
                            <li> 职业发展</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>技术创新<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/aiHelpUse">
                            <li> AI辅助应用</li>
                        </router-link>
                        <router-link to="/webMedical">
                            <li> 互联网医疗</li>
                        </router-link>
                        <router-link to="/smartHardware">
                            <li> 智能硬件</li>
                        </router-link>
                        <router-link to="/numberSource">
                            <li> 数字化资源</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>交流专区<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/paitentCc">
                            <li>病友交流区</li>
                        </router-link>
                        <router-link to="/healthCheck">
                            <li>养生打卡</li>
                        </router-link>
                        <router-link to="/expertLive">
                            <li>专家直播</li>
                        </router-link>
                        <router-link to="/actiety">
                            <li>活动发布与报名</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>全民知识库<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/basicTheory">
                            <li>中医基础理论</li>
                        </router-link>
                        <router-link to="/herbalEncyclopedia">
                            <li>药材百科</li>
                        </router-link>
                        <router-link to="/classicPrescription">
                            <li>经典方剂</li>
                        </router-link>
                        <router-link to="/zhongChengYao">
                            <li>中成药指南</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>特色疗法<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/diagnosis">
                            <li>中医诊断</li>
                        </router-link>
                        <router-link to="/specialTherapy">
                            <li>特色疗法</li>
                        </router-link>
                        <router-link to="/specialNavigation">
                            <li>专科导航</li>
                        </router-link>
                        <router-link to="/diseaseWiki">
                            <li>疾病百科</li>
                        </router-link>
                        <router-link to="/classicStudy">
                            <li>经典研读</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>养生保健<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/seasonalHealth">
                            <li>四季养生</li>
                        </router-link>
                        <router-link to="/bodyHealth">
                            <li>体质养生</li>
                        </router-link>
                        <router-link to="/populationHealth">
                            <li>人群养生</li>
                        </router-link>
                        <router-link to="/medicalFood">
                            <li>药膳食疗</li>
                        </router-link>
                        <router-link to="/physicalGuidance">
                            <li>运动引导</li>
                        </router-link>
                        <router-link to="/emotionalregulation">
                            <li>情志调摄</li>
                        </router-link>
                        <router-link to="/healthColumn">
                            <li>养生专栏</li>
                        </router-link>
                    </ul>
                </li><img src="/image/Line 589.png" alt="">
                <li>便民服务<div class="arow"></div>
                    <ul class="submenu">
                        <router-link to="/doctorMap">
                            <li>名医地图</li>
                        </router-link>
                        <router-link to="/intelligentDiagnosis">
                            <li>智能导诊</li>
                        </router-link>
                        <router-link to="/medicinePrice">
                            <li>药材价格查询</li>
                        </router-link>
                    </ul>
                </li>
            </ul>
            <div class="search">
                <img src="/image/search.png" alt="">
            </div>
            <div class="text">
                <div class="up">
                    <img src="/image/image.png" class="imgHead" alt="头像">
                    <span>中医信息网</span>
                    <img src="/image/down.png" alt="箭头">
                </div>
                <div class="down">
                    <img src="/image/address.png" alt="地址">
                    <span>{{ address }}</span>
                    <img src="/image/rf.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';
import Axios from 'axios';
import { ref } from 'vue';

const address = ref('');

// 修改：使用 HTTPS 协议而不是 HTTP 协议来避免重定向和CORS问题
const getUserInfo = async () => {
    try {
        const res = await Axios.get('https://zhongguojiaoyunet.com/api/index/getipaddr');
        address.value = res.data.data;
        console.log(res.data.data);
    } catch (error) {
        console.error('获取用户信息失败:', error);
        address.value = '中国 河南省 郑州市 金水区';
    }
}

onMounted(() => {
    getUserInfo();
});
</script>
<style scoped>
@import "./nav.css";
</style>