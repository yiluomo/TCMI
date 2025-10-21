<template>

    <body>
        <BreadLink firstTitle="从业者赋能" secondTitle="工具中心" />
        <main>
            <Banner text1="工具中心" text2="为中医从业者提供专业的数字化辅助工具，提升诊疗与研究效率" />
            <div class="message message1 messageSearch ">
                <div class="search">
                    <input type="text" placeholder="搜索学术资源、关键词、作者或机构...">
                    <div>时间不限<img src="./img/down.png" alt=""></div>
                    <div>全部学科<img src="./img/down.png" alt=""></div>
                    <button>筛选</button>
                </div>
                <div class="titleTop">
                    <div class="left">为您推荐</div>
                    <div class="right">查看全部工具&nbsp;></div>
                </div>
                <div class="toolContentContainer">
                    <div>
                        <img src="./img/2.png" alt="">
                        <div class="toolTitle">中医智能辨证系统 V4.2</div>
                        <p>基于大数据和AI算法的中医辨证辅助系统，支持症状录入、舌象分析、脉象模拟等功能，提供辨证分析报告和治疗建议，适用于临床诊疗和教学研究。</p>
                        <div class="textContainer">
                            <div><img src="./img/true.png" alt="">症状数据库</div>
                            <div><img src="./img/true.png" alt="">辨证分析</div>
                            <div><img src="./img/true.png" alt="">治疗建议</div>
                            <div><img src="./img/true.png" alt="">病例管理</div>
                        </div>
                        <div class="text3">
                            <span>AI辅助</span>
                            <span>辨证系统</span>
                            <span>临床工具</span>
                            <span>在线使用</span>
                            <span>2025更新</span>
                        </div>
                        <div class="text4">
                            <img src="./img/user.png" alt="">
                            <span class="text4_span">12,548位用户</span>
                            <div>立即使用</div>
                        </div>
                    </div>
                    <div>
                        <img src="./img/2.png" alt="">
                        <div class="toolTitle">中药处方智能分析系统</div>
                        <p>输入中药处方，系统自动分析药物配伍规律、性味归经分布、功效分类，并提供历代文献中相似方剂参考，辅助临床处方优化和教学研究。 </p>
                        <div class="textContainer">
                            <div><img src="./img/true.png" alt="">症状数据库</div>
                            <div><img src="./img/true.png" alt="">辨证分析</div>
                            <div><img src="./img/true.png" alt="">治疗建议</div>
                            <div><img src="./img/true.png" alt="">病例管理</div>
                        </div>
                        <div class="text3">
                            <span>复方分析</span>
                            <span>中药配伍</span>
                            <span>临床工具</span>
                            <span>在线使用</span>
                        </div>
                        <div class="text4">
                            <img src="./img/user.png" alt="">
                            <span class="text4_span">9,872位用户</span>
                            <div>立即使用</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message toolDone">
                <div class="titleTop">
                    工具分类
                </div>
                <div class="toolListContainer">
                    <div class="toolList">
                        <div class="listtitle"><img src="./img/stethoscope.png" alt="">&nbsp;诊断辅助工具</div>
                        <div class="listContainer">
                            <div>
                                <span>舌象分析工具</span>
                                <p>通过上传舌象图片，自动分析舌质、舌苔特征，辅助中医诊断。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>脉象模拟系统</span>
                                <p>模拟28种常见脉象特征，提供脉象图谱和鉴别要点，适用于教学和临床参考。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>体质辨识量表</span>
                                <p>基于中医体质分类与判定标准，通过问卷形式进行体质辨识并提供调理建议。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                        </div>
                    </div>
                    <div class="toolList">
                        <div class="listtitle"><img src="./img/stethoscope.png" alt="">&nbsp;诊断辅助工具</div>
                        <div class="listContainer">
                            <div>
                                <span>方剂检索系统</span>
                                <p>基于药物组成、功效、主治等多维度检索古今方剂，提供详细方解和临床应用。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>中药配伍禁忌查询</span>
                                <p>查询中药配伍禁忌(十八反、十九畏)及现代药理研究的配伍禁忌信息。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>中药剂量换算工具</span>
                                <p>实现古今中药剂量单位换算，提供不同朝代与现代剂量的精确换算。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                        </div>
                    </div>
                    <div class="toolList">
                        <div class="listtitle"><img src="./img/stethoscope.png" alt="">&nbsp;诊断辅助工具</div>
                        <div class="listContainer">
                            <div>
                                <span>中医经典文献检索</span>
                                <p>检索《黄帝内经》《伤寒论》等中医经典文献，支持原文、注释、现代研究多维度查询。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>中医药学术论文检索</span>
                                <p>整合国内外中医药学术期刊论文，支持关键词、作者、机构等多维度检索。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                            <div>
                                <span>中医药术语查询系统</span>
                                <p>提供中医药标准术语查询，包含定义、来源、临床应用及相关文献链接。</p>
                                <span class="use">使用&nbsp; ></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="titleBottom">
                    工具使用指南
                </div>
                <div class="guideContainer">
                    <div class="guideContent">
                        <img src="./img/pulse.png" alt="">
                        <span>中医智能辨证系统使用教程</span>
                        <p>详细介绍智能辨证系统的功能模块、操作流程和临床应用案例，帮助用户快速掌握系统使用方法。</p>
                        <div>查看教程 &nbsp; ></div>
                    </div>
                    <div class="guideContent">
                        <img src="./img/pulse.png" alt="">
                        <span>中药处方分析系统操作指南</span>
                        <p>从处方录入到报告解读，全面讲解处方分析系统的使用技巧和结果应用方法。</p>
                        <div>查看教程 &nbsp; ></div>
                    </div>
                    <div class="guideContent">
                        <img src="./img/pulse.png" alt="">
                        <span>中医工具综合应用案例</span>
                        <p>通过实际临床案例，展示多种工具协同使用的方法和效果，提升临床工作效率。</p>
                        <div>查看教程 &nbsp; ></div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<script setup>
import BreadLink from '@/components/breadLink/index.vue'
import Banner from '@/components/workPowerBanner/index.vue'

</script>

<style scoped>
@import "./index.css";
@import './main.css';
@import './search.css';

*{
    margin: 0;
    padding: 0;
}
</style>