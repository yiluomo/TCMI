<template>
  <Banner text1="疾病百科" text2="探索传统中医学对各类疾病的认识、辨证与治疗，传承千年智慧，守护现代 健康" firstTitle="特色疗法" secondTitle="疾病百科" />
  <main>
    <div class="search">
      <input type="text" placeholder="搜索疾病名称、症状或病因...">
      <button>搜索</button>
    </div>
    <div class="mainTitle">
      <img src="./img/cloudLeft.png" alt="">&nbsp;
      <h1>
        疾病分类
      </h1>
      &nbsp;<img src="./img/cloudRight.png" alt="">
    </div>
    <div class="typeBox">
      <div class="type">
        <img src="./img/type1.png" alt="">
        心系疾病
      </div>
      <div class="type">
        <img src="./img/type2.png" alt="">
        肺系疾病
      </div>
      <div class="type">
        <img src="./img/type3.png" alt="">
        脾胃疾病
      </div>
      <div class="type">
        <img src="./img/type4.png" alt="">
        肝胆疾病
      </div>
      <div class="type">
        <img src="./img/type5.png" alt="">
        肾系疾病
      </div>
      <div class="type">
        <img src="./img/type6.png" alt="">
        更多分类
      </div>
    </div>
    <h2>
      热门疾病
      <span>查看全部 ></span>
    </h2>
    <div class="diseaseBox">
      <div class="diseaseItem">
        <img src="./img/img1.png" alt="">
        <h3>感冒</h3>
        <p>感冒是感受风邪或时行病毒，引起肺卫功能失调出现鼻塞、
          流涕、喷嚏、头痛、恶寒、发热、全...</p>
        <p><span>风寒感冒</span>
          <span>风热感冒</span>
          <span>暑湿感冒</span>
          <span>增强免疫</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="diseaseItem">
        <img src="./img/img2.png" alt="">
        <h3>失眠</h3>
        <p>失眠是以经常不能获得正常睡眠为特征的一类病证，
          主要表现为睡眠时间、深度的不足，轻者入….</p>
        <p><span>心脾两虚</span>
          <span>阴虚火旺</span>
          <span>内热</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="diseaseItem">
        <img src="./img/img3.png" alt="">
        <h3>胃痛</h3>
        <p>胃痛，又称胃脘痛，是指以上腹胃脘部近心窝处疼痛为主症的病证。
          多由外感寒邪、饮食所伤、情....</p>
        <p><span>寒邪客胃</span>
          <span>饮食伤胃</span>
          <span>肝气反胃</span>
        </p>
        <a href="">查看详情</a>
      </div>
    </div>
    <h2>
      疾病列表
      <span></span>
    </h2>
    <h3>
      筛选:
      <select name="" id="">
        <option value="">全部分类</option>
        <option value="">全部</option>
        <option value="">全部</option>
      </select>
      <select name="" id="">
        <option value="">全部证型</option>
        <option value="">全部</option>
        <option value="">全部</option>
      </select>
      <select name="" id="">
        <option value="">按热度</option>
        <option value="">全部</option>
        <option value="">全部</option>
      </select>
    </h3>
    <div class="disease">
      <div class="text">
        <h4>头痛</h4>
        <h5>
          头痛是指由于外感六淫或内伤杂病致使头部脉络拘急或失养，
          清窍不利所引起的，以自觉头部疼痛为主要临床表现的一种常见病证。
        </h5>
      </div>
      <span>外感头痛</span>
    </div>
    <div class="disease">
      <div class="text">
        <h4>咳嗽</h4>
        <h5>
          咳嗽是指肺失宣降，肺气上逆作声，咯吐痰液而言，
          为肺系疾病的主要证候之一。分别言之，有声无痰为咳，有痰无声为嗽。
        </h5>
      </div>
      <span>肺系疾病</span>
    </div>
    <div class="disease">
      <div class="text">
        <h4>泄泻</h4>
        <h5>
          泄泻是以排便次数增多，粪质稀溏或完谷不化，甚至泻出如水样为主症的病证。
          古有将大便溏薄而势缓者称为泄，大便清稀如水而势急者称为泻。
        </h5>
      </div>
      <span>脾胃疾病</span>
    </div>
    <div class="disease">
      <div class="text">
        <h4>眩晕</h4>
        <h5>
         眩晕是指眼花或眼前发黑，晕是指头晕甚或感觉自身或外界景物旋转。
         二者常同时并见，故统称为"眩晕”。轻者闭目即止;重者如坐车船。
        </h5>
      </div>
      <span>内伤杂病</span>
    </div>
    <div class="disease">
      <div class="text">
        <h4>腰痛</h4>
        <h5>
          腰痛又称"腰脊痛”，是指因外感、内伤或挫闪导致腰部气血运行不畅，或失于濡养，引起腰脊或脊旁部位疼痛为主要症状的一种病证。
        </h5>
      </div>
      <span>肾系疾病</span>
    </div>
    <div class="bottom">
      <h1>订阅中医健康资讯</h1>
      <p>定期获取中医养生知识、疾病防治方法和专家健康建议，守护您和家人的健康</p>
      <div>
        <input type="text" placeholder="请输入您的邮箱地址" >
        <button>合作咨询</button> 
      </div>
      <p>我们尊重您的隐私，不会向第三方分享您的信息</p>
    </div>
  </main>
</template>

<script setup>
import Banner from "@/components/stBanner/index.vue"

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
  padding: 1px;
  background: #f5f5dc;
}
</style>