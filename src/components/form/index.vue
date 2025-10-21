<template>
      <div class="formContainer">
      <div class="left">
        <h4>预约中医诊断</h4>
        <p>填写右侧表单预约中医诊断服务，我们的客服人员将尽快与您联系确认详情。您也可以直接拨打我们的预约电话进行预约。</p>
        <div>
          <div class="img"><img src="./img/phone.png" alt=""></div>
          <div>
            <span>电话咨询</span>
            <p>400-123-4567</p>
          </div>
        </div>
        <div>
          <div class="img"><img src="./img/email.png" alt=""></div>
          <div>
            <span>门诊时间</span>
            <p>周一至周五:8:00-18:00</p>
            <p>周六至周日:9:00-18:00</p>
          </div>
        </div>
        <div>
          <div class="img"><img src="./img/address.png" alt=""></div>
          <div>
            <span>诊所地址</span>
            <p>河南省郑州市金水区东风路</p>
          </div>
        </div>
        <img src="./img/qCode1.png" alt="">
      </div>
      <form action="" method="post" target="submitFrame" class="myForm">
        <div class="input_box">
          <div class="flexBox">
            <label for="name">姓名</label>
            <input type="text" id="name" name="name" class="userName" placeholder="请输入你的姓名" required>
          </div>
          <div class="flexBox">
            <label for="mobile">手机号码</label>
            <input type="text" id="phone" name="mobile" class="tel" placeholder="请输入你的手机号码" required>
          </div>
        </div>
        <label for="message">预约专家</label>
        <select name="zhuangtai" id="type" required>
          <option value="0">请选择专家</option>
          <option value="2">张明远 </option>
          <option value="3">李淑华</option>
          <option value="4">王建国</option>
        </select>
        <div class="input_box">
          <div class="flexBox">
            <label for="date">预约日期</label>
            <input type="date" id="date" name="date" class="date" placeholder="yyyy/mm/日" required>
          </div>
        </div>
        <label for="yixiang">主要症状</label>
        <textarea type="textarea" class="textarea" name="yixiang" id="requext" placeholder="请简要描述您的主要症状或健康问题"></textarea>
        <input type="submit" value="提交资讯" id="submit" class="commit_btn">
      </form>
    </div>
</template>

<script setup >
import FormValidator from '@/utils/form.js'
import { onMounted } from 'vue'
onMounted(() => {
    const formValidator = new FormValidator('.myForm');
});

</script>


<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 100%;
  height: 100%;
  padding: 1px;
  background: #F5F5DC;
}
.formContainer {
    margin: 0 auto;
    margin-top: 20px;
    width: 1200px;
    height: 532px;
    background: #FFFFFF;
    box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.19);
    border-radius: 20px 20px 20px 20px;
    display: flex;
    margin-bottom: 30px;

    .left {
        width: 50%;
        height: 100%;
        background-color: rgba(139, 69, 19, 1);
        border-radius: 20px 0px 0px 20px;
        padding-left: 26px;
        padding-top: 38px;

        h4 {
            font-weight: bold;
            font-size: 22px;
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-bottom: 28px;
        }

        p {
            font-weight: 400;
            font-size: 13px;
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }

        &>p {
            margin-bottom: 20px;
        }

        &>div {
            display: flex;
            margin-bottom: 20px;

            .img {
                width: 38px;
                height: 38px;
                margin-right: 5px;
            }

            span {
                font-size: 16px;
                color: #ffffff;
            }
        }
    }

    form {
        width: 50%;
        background: #F5F5DC;
        border: 1px solid #E5E5E5;
        box-shadow: 0px 0px 1px 1px rgba(3, 3, 3, 0.1);
        border-radius: 5px;
        padding: 24px;

        .input_box {
            display: flex;
            margin-bottom: 20px;
            gap: 20px;

            .flexBox {
                flex: 1;
            }
        }

        label {
            display: inline-block;
            width: 260px;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 12px;
            color: #4E596E;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }

        input {
            width: 100%;
            height: 50px;
            border-radius: 5px;
            border: 1px solid #E5E5E5;
            padding-left: 10px;

        }
        .textarea{
             border: 1px solid #E5E5E5;
        }

        #type {
            width: 100%;
            height: 50px;
            border-radius: 5px;
            border: 1px solid #E5E5E5;
            padding-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        #requext {
            padding: 20px;
            width: 560px;
            height: 80px;
            margin-top: 10px;
        }

        #agree {
            width: 13px;
            height: 13px;
            margin-right: 5px;

            span {
                color: #165DFF;
            }
        }

        #submit {
            width: 100%;
            margin: 0 auto;
            margin-top: 30px;
            height: 40px;
            background: #8B4513;
            color: #ffffff;
            cursor: pointer;
        }
    }

}
</style>