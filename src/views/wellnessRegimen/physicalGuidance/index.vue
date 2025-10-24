<template>
  <Banner
    text1="运动引导"
    text2="中药膳食疗以传统中医理论为指导，将药材与食材科学搭配， 达到调理身体、预防疾病、延年益寿的目的。"
    firstTitle="养生保健"
    secondTitle="运动引导"
  />
  <main>
    <MainTitle
      title="传统中医运动疗法"
      subTitle="中医运动疗法源于古代养生之道，通过调节身形、呼吸和心神，达到疏通经络、调和气血、平衡阴阳的目的。"
    />
    <div class="methodContainer">
      <div class="methodItem">
        <img src="./img/img1.png" alt="" />
        <h3>太极拳</h3>
        <p>站立是运动中的基础动作，保持站立可以增强身体的力量和耐力。</p>
        <p>
          <span>适合各年龄段</span>
          <a href="">了解详情 &nbsp;></a>
        </p>
      </div>
      <div class="methodItem">
        <img src="./img/img2.png" alt="" />
        <h3>八段锦</h3>
        <p>
          由八个动作组成，针对不同脏腑和经络进行调理，能增强体质，预防疾病，特别适合办公室人群
        </p>
        <p>
          <span>10分钟/套</span>
          <a href="">了解详情 &nbsp;></a>
        </p>
      </div>
      <div class="methodItem">
        <img src="./img/img3.png" alt="" />
        <h3>五禽戏</h3>
        <p>
          模仿虎、鹿、熊、猿、鸟五种动物的动作，能增强脏腑功能，提高免疫力，改善身体灵活性。
        </p>
        <p>
          <span>增强体质</span>
          <a href="">了解详情 &nbsp;></a>
        </p>
      </div>
    </div>
    <MainTitle
      title="精选功法练习指南"
      subTitle="专业中医师精心设计的练习方案，适合不同人群和健康需求，循序渐进，安全有效。"
    />
    <div class="typeBox">
      <span class="active">八段锦</span>
      <span>太极拳</span>
      <span>五禽戏</span>
      <span>易筋经</span>
    </div>
    <div class="LiveBox">
      <div class="video">
        <video src="./img/八段锦.mp4" controls></video>
      </div>
      <div class="text">
        <div class="left">
          <h3>八段锦</h3>
          <p>
            由八个动作组成，针对不同脏腑和经络进行调理，能增强体质，预防疾病，特别适合办公室人群
          </p>
        </div>
        <div class="right">
          <img src="./img/star.png" alt="">收藏
        </div>
      </div>
    </div>
    <div class="pathBox">
      <div class="pathItem">
        <div class="num">1</div>
        <h1>两手托天理三焦</h1>
        <p>双手十指交叉，掌心向上缓慢举过头顶，同时踮起脚尖，吸气，然后缓慢放下，呼云</p>
        <img src="./img/path1.png" alt="">
      </div>
      <div class="pathItem">
        <div class="num">2</div>
        <h1>左右开弓似射雕</h1>
        <p>左手前伸，右手拉至胸前，如拉弓状，目视左手，左右交替进行配合呼吸</p>
        <img src="./img/path2.png" alt="">
      </div>
      <div class="pathItem">
        <div class="num">3</div>
        <h1>调理脾胃须单举</h1>
        <p>左手向上托举，右手下按，如托起千斤重物，左右交替，感受身体拉伸</p>
        <img src="./img/path3.png" alt="">
      </div>
      <div class="pathItem">
        <div class="num">4</div>
        <h1>五劳七伤往后瞧</h1>
        <p>双手又腰，缓慢向左右转头，目视后方，调节颈部气血，缓解疲劳，</p>
        <img src="./img/path4.png" alt="">
      </div>
    </div>
    <button class="skill">查看完整八段锦教程 <img src="./img/arrow.png" alt=""></button>
    <MainTitle
      title="中医专家建议"
      subTitle="来自资深中医师的专业指导，帮助您正确练习，避免误区，获得最佳效果。"
    />
    <div class="doctorBox">
      <div class="doctor">
        <div class="info">
          <img src="./img/avatar1.png" alt="" />
          <div class="text">
            <h1>张明教授</h1>
            <p>北京中医药大学</p>
          </div>
        </div>
        <em
          >“四李养生的关键在于顺应自然变化，
          春养肝、夏养心、秋养肺、冬养，每个季节都有其重点。但需注意，养生应因人而异，不可一概而论。”</em
        >
        <img src="./img/doctorStar.png" alt="">
      </div>
      <div class="doctor">
        <div class="info">
          <img src="./img/avatar2.png" alt="" />
          <div class="text">
            <h1>李华医师</h1>
            <p>上海中医医院</p>
          </div>
        </div>
        <em
          >"饮食调理在四季养生中至关重要。春季直甘温，夏季宜甘凉，秋李宜滋润，冬季直温补。合理搭配饮食，才能更好地适应季节变化。</em
        >
       <img src="./img/doctorStar.png" alt="">
      </div>
        <div class="doctor">
          <div class="info">
            <img src="./img/avatar1.png" alt="" />
            <div class="text">
              <h1>王丽医师</h1>
              <p>广州中医药研究院</p>
            </div>
          </div>
          <em
            >运动养生应顺应四季特点，
            春季宜散步踏青，夏李宣清晨锻炼，秋李宜登高望远，冬季宜室内静养。适度运动才能达到养生效果，不可过度劳累。</em
          >
          <img src="./img/doctorStar.png" alt="">
        </div>
    </div>
    <div class="liveLink">
      <div class="left">
        <h1>专家在线直播教学</h1>
        <h2>每周三、周六晚7点，中医专家在线直播教学，实时指导动作，解答疑问。</h2>
        <button style="background: #FFFFFF; color: rgba(50, 128, 54, 1);">查看直播日程</button>
        <button>开启提醒</button>
      </div>
      <div class="right">
        <img src="./img/live1.png" alt="" class="liveImg1">
        <img src="./img/live2.png" alt="" class="liveImg2">
      </div>
    </div>
    <Form />
  </main>
</template>

<script setup >
import Banner from "@/components/wrBanner/index.vue";
import MainTitle from "../compontents/mainTitle/index.vue";
import Form from "@/components/form/index.vue";

import { ref, onMounted } from "vue";

const typelist = ref([]);
onMounted(() => {
  typelist.value = document.querySelectorAll(".typeBox span");
  typelist.value.forEach((item) => {
    item.addEventListener("click", () => handleClick(item));
  });
});

const handleClick = (index) => {
  typelist.value.forEach((item, i) => {
    item.classList.remove("active");
  });
  index.classList.add("active");
};
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