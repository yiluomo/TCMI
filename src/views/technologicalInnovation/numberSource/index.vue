<template>
  <Banner text1="数字化资源" text2="传承千年智慧，融合现代科技，构建中医数字化传承与创新平台" firstTitle="技术创新" secondTitle="数字化资源" />

  <main>
    <h1>
      <img src="./img/hLeft.png" alt="">
      中医数字化资源建设意义
      <img src="./img/hright.png" alt="">
    </h1>
    <div class="line"></div>
    <div class="contentContainer">
      <p>
        中医数字化资源是依托现代信息技术，
        对传统中医理论、临床经验、药材数据、古籍文献等核心资产进行"数字化采集、结构化存储、智能化关联、便捷化应用"的综合性资源体系。
      </p>
      <div class="contentBox">
        <div class="Item">
          <div class="img"> <img src="./img/ys.png" alt=""></div>
          <h2>破解传承痛点</h2>
          <p>解决中医古籍易损毁、经验难量化、知识难共享的问题，实现中医文化与技术的"永久保存、高效传承'</p>
        </div>
        <div class="Item">
          <div class="img"> <img src="./img/ys.png" alt=""></div>
          <h2>赋能临床应用</h2>
          <p>为基层中医师提供标准化的诊疗参考、药材鉴别、方剂查询工具，提升中医临床服务效率与准确性</p>
        </div>
        <div class="Item">
          <div class="img"> <img src="./img/ys.png" alt=""></div>
          <h2>支撑科研创新</h2>
          <p>为中医药科研机构提供结构化数据样本，助力中医现代化研究(如中药新药研发、证候机制解析)</p>
        </div>
      </div>
    </div>
    <h1>
      <img src="./img/hLeft.png" alt="">
      核心数字化资源分类
      <img src="./img/hright.png" alt="">
    </h1>
    <div class="line"></div>
    <div class="tagBox">
      <span class="active">全部资源</span>
      <span>古籍数字化库</span>
      <span>中药材数据库</span>
      <span>临床医案库</span>
      <span>针灸淤血库</span>
    </div>
    <div class="typeContainer">
      <div class="typeItem">
        <img src="./img/type1.png" alt="">
        <div class="tag">古籍数字化库</div>
        <div class="title">中医古籍数字化库</div>
        <p>收录自先秦至清末的3200余部核心中医古籍，涵盖经方类、本草类、针炎类、医案类4大类别。</p>
        <p>
          <span>高清影像版</span>
          <span>文本结构化</span>
          <span>多版本比对</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="typeItem">
        <img src="./img/type2.png" alt="">
        <div class="tag">中药材数据库</div>
        <div class="title">中药材数据库 </div>
        <p>包含12000余种中药材的基原鉴定、性味归经功效主治、现代成分分析及质量标准数据。</p>
        <p>
          <span>高清影像版</span>
          <span>文本结构化</span>
          <span>多版本比对</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="typeItem">
        <img src="./img/type3.png" alt="">
        <div class="tag">古籍数字化库</div>
        <div class="title">方剂数据库</div>
        <p>收录古今经典方剂8000余首，包含组成、用法、功效、主治、现代应用及药理研究等信息。</p>
        <p>
          <span>高清影像版</span>
          <span>文本结构化</span>
          <span>多版本比对</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="typeItem">
        <img src="./img/type4.png" alt="">
        <div class="tag">临床医案库</div>
        <div class="title">临床医案库</div>
        <p>汇集50000余例名老中医临床医案，按病种、证型、治法进行结构化分类，支持多维度检索。</p>
        <p>
          <span>老中医</span>
          <span>病例分类</span>
          <span>诊疗经验</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="typeItem">
        <img src="./img/type5.png" alt="">
        <div class="tag">针灸淤血库</div>
        <div class="title">针灸腧穴数据库</div>
        <p>包含1500余个针灸穴位的定位、解剖、主治、刺灸法及现代研究等信息，配有3D可视化模型。</p>
        <p>
          <span>3D建模</span>
          <span>取穴方法</span>
          <span>治疗作用</span>
        </p>
        <a href="">查看详情</a>
      </div>
      <div class="typeItem">
        <img src="./img/type6.png" alt="">
        <div class="tag">临床医案库</div>
        <div class="title">中医证候数据库</div>
        <p>系统整理中医常见证候300余种，包含证候名称、临床表现、病因病机、鉴别诊断及治疗原则。</p>
        <p>
          <span>辨证要点</span>
          <span>鉴别诊断</span>
          <span>治疗原则</span>
        </p>
        <a href="">查看详情</a>
      </div>
    </div>
    <button>查看更多</button>
    <h1>
      <img src="./img/hLeft.png" alt="">
      意见反馈
      <img src="./img/hright.png" alt="">
    </h1>
    <div class="line"></div>
    <form action="">
      <label for="name" style="margin-right: 38px;">联系人姓名：</label> <label for="email">邮箱：</label><br>
      <input type="text" id="name" name="name" placeholder="请输入姓名" style="margin-right: 38px;">
      <input type="email" id="email" name="email" placeholder="请输入邮箱"><br>
      <label for="type">相关资源类型</label><br>
      <select name="type" id="type">
        <option value="">请选择</option>
        <option value="古籍数字化库">古籍数字化库</option>
        <option value="中药材数据库">中药材数据库</option>
        <option value="方剂数据库">方剂数据库</option>
        <option value="临床医案库">临床医案库</option>
        <option value="针灸腧穴数据库">针灸腧穴数据库</option>
        <option value="中医证候数据库">中医证候数据库</option>
      </select><br>
      <label for="radio">反馈类型</label><br>
      <input type="radio" id="radio" name="radio" value="建议"><span>建议</span>  
      <input type="radio" id="radio" name="radio" value="建议"><span>数据错误</span>
      <input type="radio" id="radio" name="radio" value="问题"><span>资源需求</span>
      <input type="radio" id="radio" name="radio" value="建议"><span>其他</span><br>
      <label for="reback">反馈内容</label><br>
      <textarea name="reback" id="reback" cols="30" rows="10" placeholder="请详细描述您的建议或问题..."></textarea>
      <button>提交反馈</button>
    </form>
  </main>
</template>

<script setup>
import Banner from '@/components/jishuchuangxinBanner/index.vue'
</script>


<style lang='less' scoped>
@import './index.less';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  background: #F5F5DC;
  border-radius: 0px 0px 0px 0px;
  padding-top: 206px;
  padding-bottom: 206px;
}

h1 {
  font-family: Microsoft YaHei, Microsoft YaHei;
  font-weight: bold;
  font-size: 34px;
  color: #1A3D2E;
  text-align: center;
  font-style: normal;
  text-transform: none;

  img {
    vertical-align: middle;
  }
}

.line {
  width: 100px;
  margin: 0 auto;
  height: 1px;
  background: #1A3D2E;
  margin-top: 20px;
}
</style>