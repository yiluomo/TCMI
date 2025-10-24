<template>
  <Banner
    text1="药膳食疗"
    text2="中药膳食疗以传统中医理论为指导，将药材与食材科学搭配， 达到调理身体、预防疾病、延年益寿的目的。"
    firstTitle="养生保健"
    secondTitle="药膳食疗"
  />
  <main>
    <MainTitle
      title="按功效分类"
      subTitle="根据不同的调理需求，为您推荐合适的药膳食疗方案"
    />
    <div class="typeBox">
      <span class="active">全部</span>
      <span>内科相关</span>
      <span>外科相关</span>
      <span>妇儿相关</span>
      <span>骨伤相关</span>
      <span>其他专科</span>
      <span>其他专科</span>
    </div>
    <div class="typeContainer">
      <div class="typeItem">
        <img src="./img/img1.png" alt="" />
        <h1>黄芪炖牛肉</h1>
        <p>补气健脾，增强免疫力</p>
        <p><span>补气养血</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img2.png" alt="" />
        <h1>莲子百合粥</h1>
        <p>清心安神，改善睡眠</p>
        <p><span>安神助眠</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img1.png" alt="" />
        <h1>绿豆汤</h1>
        <p>清热解毒，消暑解渴</p>
        <p><span>清热解毒</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img2.png" alt="" />
        <h1>银耳雪梨汤</h1>
        <p>滋阴润燥，润肺止咳</p>
        <p><span>滋阴润燥</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img1.png" alt="" />
        <h1>杜仲腰花</h1>
        <p>补肾壮阳，强筋健骨</p>
        <p><span>补肾壮阳</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img2.png" alt="" />
        <h1>四神汤</h1>
        <p>健脾养胃，祛湿化痰</p>
        <p><span>健脾养胃</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img1.png" alt="" />
        <h1>红枣桂圆茶</h1>
        <p>补血益气，改善贫血</p>
        <p><span>补气养血</span> <img src="./img/love.png" alt="" /></p>
      </div>
      <div class="typeItem">
        <img src="./img/img2.png" alt="" />
        <h1>酸枣仁粥</h1>
        <p>养心安神，缓解焦虑</p>
        <p><span>安神助眠</span> <img src="./img/love.png" alt="" /></p>
      </div>
    </div>
    <MainTitle
      title="百病食疗大全"
      subTitle="精选经典有效的中药食疗配方，简单易做，适合家庭日常调理"
    />
    <div class="madicalBox">
      <div class="madicalItem">
        <img src="./img/img3.png" alt="" />
        <h1>当归红枣乌鸡汤</h1>
        <p>乌鸡营养丰富，搭配当归、红枣、枸杞等中药材，具有补血养颜、调经止痛的功效，适合女性日常调理。</p>
        <p>
          <span>乌鸦</span>
          <span>当归</span>
          <span>红枣</span>
          <span>增强免疫力</span>
        </p>
        <h2>
          <span><img src="./img/clock.png" alt="">准备时间: 15分钟</span>
          <span><img src="./img/cook.png" alt="">烹饪时间: 90分钟</span>
        </h2>
        <button>查看详细做法</button>
      </div>
      <div class="madicalItem">
        <img src="./img/img3.png" alt="" />
        <h1>莲子百合粥</h1>
        <p>莲子和百合均有养心安神的功效，搭配糯米熬制而成的粥品，口感软糯香甜，适合失眠多梦、心神不宁者食用。</p>
        <p>
          <span>莲子</span>
          <span>百合</span>
          <span>糯米</span>
          <span>冰糖</span>
        </p>
        <h2>
          <span><img src="./img/clock.png" alt="">准备时间: 15分钟</span>
          <span><img src="./img/cook.png" alt="">烹饪时间: 90分钟</span>
        </h2>
        <button>查看详细做法</button>
      </div>
      <div class="madicalItem">
        <img src="./img/img3.png" alt="" />
        <h1>山药薏米粥</h1>
        <p>山药健脾养胃，薏米利水消肿，两者搭配煮粥，适合脾胃虚弱、消化不良、体内湿气重者日常调理食用。</p>
        <p>
          <span>山药</span>
          <span>薏米</span>
          <span>糯米</span>
          <span>茯苓</span>
        </p>
        <h2>
          <span><img src="./img/clock.png" alt="">准备时间: 15分钟</span>
          <span><img src="./img/cook.png" alt="">烹饪时间: 90分钟</span>
        </h2>
        <button>查看详细做法</button>
      </div>
    </div>
    <MainTitle
      title="体质食疗推荐"
      subTitle="中医讲究辨证施食，根据不同体质选择合适的药腾，才能达到最佳调理效果"
    />
    <div class="bodyMedical">
      <div class="item">
        <h1>平和体质</h1>
        <p>身体阴阳平衡，面色红润，精力充沛，是最理想的体质。 </p>
        <h2>食疗原则：</h2>
        <p>饮食均衡，不偏食，不过度食用寒凉或温热食物</p>
        <a href="">推荐药膳 ></a>
      </div>
      <div class="item">
        <h1>湿热体质</h1>
        <p>面部油腻，易生痤疮，口苦口臭，大便黏滞，小便黄赤 </p>
        <h2>食疗原则：</h2>
        <p>清热利湿，忌食辛辣、油腻、甜食，多食清热利湿食物。</p>
        <a href="">推荐药膳 ></a>
      </div>
      <div class="item">
        <h1>痰湿体质</h1>
        <p>体型肥胖，面部油脂多，多汗且黏，胸闷，痰多，易困倦。 </p>
        <h2>食疗原则：</h2>
        <p>健脾利湿，化痰泄浊，少食肥甘厚味，多食健脾利湿食物.</p>
        <a href="">推荐药膳 ></a>
      </div>
      <div class="item">
        <h1>阳虚体质</h1>
        <p>怕冷，手足不温，喜欢热饮，易腹泻，精神不振。 </p>
        <h2>食疗原则：</h2>
        <p>温补阳气，忌食生冷寒凉食物，多食温热性食物。</p>
        <a href="">推荐药膳 ></a>
      </div>
      <div class="item">
        <h1>阴虚体质</h1>
        <p>怕热，口干舌燥，手足心热，便秘，睡眠差。 </p>
        <h2>食疗原则：</h2>
        <p>滋阴润燥，总食辛辣刺激性食物，多食阴食物。</p>
        <a href="">推荐药膳 ></a>
      </div>
      <div class="item">
        <h1>气虚体质</h1>
        <p>容易疲劳，气短懒言，易出汗，免疫力低下，易感冒。 </p>
        <h2>食疗原则：</h2>
        <p>补气健脾，忌食生冷寒凉食物，多食补气食物，</p>
        <a href="">推荐药膳 ></a>
      </div>
    </div>
    <Form />
  </main>
</template>

<script setup >
import Banner from "@/components/wrBanner/index.vue";
import MainTitle from "../compontents/mainTitle/index.vue";
import Form from "@/components/Form/index.vue";
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