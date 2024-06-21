<template>
  <div class="bg-fff user-index__head flex">
    <img src="../../assets/images/toux.png" alt="" />
    <div>
      {{ userData.data?.userNick }}
      <p class="grey">用户名: {{ userData.data?.userName }}</p>
      <p class="grey">邮箱: {{ userData.data?.userEmail }}</p>
      <!-- <a class="lv lv1"></a> -->
    </div>
  </div>
  <div class="clearfix kdy_row kdy_modifypwd">
    <el-button type="warning" size="small" @click="onModify">修改密码</el-button>
  </div>

  <div class="clearfix kdy_row kdy_modifyInfo">
    <el-form ref="formInfoRef" :model="modifyInfoForm" :rules="modifyInfoFormRules">
      <el-form-item>
        <el-input
          v-model="modifyInfoForm.userNick"
          placeholder="用户昵称 修改后下次登录生效"
          :maxlength="20"
          show-word-limit
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmitInfo(formInfoRef)" :loading="btnLoading"
          >修改昵称</el-button
        >
      </el-form-item>
    </el-form>
  </div>

  <client-only>
    <el-dialog v-model="isShowModify" title="用户密码修改" width="360">
      <el-form ref="formRef" :model="modifyForm" :rules="modifyFormRules">
        <el-form-item prop="userName">
          <el-input v-model="modifyForm.email" disabled></el-input>
          <el-button type="primary" size="small" @click="sendCode" :loading="isSendCode">
            <span v-if="codeTimeCount != 120"> 剩余{{ codeTimeCount }}秒 </span>
            <span v-else> 发送验证码 </span>
          </el-button>
        </el-form-item>

        <el-form-item prop="emailCode">
          <el-input v-model="modifyForm.emailCode" placeholder="邮箱验证码" :maxlength="6" show-word-limit></el-input>
        </el-form-item>
        <el-form-item prop="newPwd">
          <el-input
            v-model="modifyForm.newPwd"
            placeholder="新密码"
            :maxlength="20"
            show-word-limit
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="onSubmit(formRef)" :loading="btnLoading"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </client-only>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { userApi } from '~/api/httpApi';
  import { useClientRequest } from '~/composables/useClientRequest';

  // 获取用户信息
  const userData = await useClientRequest<ResOptions<any>>(userApi.getInfo);

  //密码修改
  const isShowModify = ref(false);
  const formRef = ref<FormInstance>();
  const btnLoading = ref(false);
  const modifyForm = reactive({
    email: userData.data.userEmail,
    newPwd: '',
    emailCode: ''
  });
  const modifyFormRules = ref({
    email: [{ required: true, message: '邮箱必填' }],
    newPwd: [{ required: true, message: '密码必填' }],
    emailCode: [{ required: true, message: '验证码必填' }]
  });

  function onModify() {
    isShowModify.value = true;
    modifyForm.newPwd = '';
    modifyForm.emailCode = '';
  }

  //发送验证验证码
  const isSendCode = ref<boolean>(false);
  const codeTimeCount = ref(120);
  function sendCode() {
    if (modifyForm.email && modifyForm.email.length > 0) {
      isSendCode.value = true;
      useClientRequest<ResOptions<string>>(userApi.sendCode, {
        method: 'post',
        body: {
          email: modifyForm.email,
          codeType: 2
        }
      })
        .then(data => {
          if (data.isSuccess) {
            codeTimeCount.value = 120;
            // 定时器变量
            let timer: number | undefined;
            timer = window.setInterval(() => {
              if (codeTimeCount.value > 0) {
                isSendCode.value = true;
                codeTimeCount.value--;
              } else {
                isSendCode.value = false;
                clearInterval(timer);
              }
            }, 1000);

            ElMessage({
              message: data.msg,
              type: 'success'
            });
          }
        })
        .finally(() => {
          isSendCode.value = false;
        });
    }
  }

  //提交反馈保存
  function onSubmit(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;

    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        useClientRequest<ResOptions<any>>(userApi.modifyPwd, {
          method: 'post',
          body: {
            ...modifyForm
          }
        })
          .then(resData => {
            if (resData.isSuccess) {
              ElMessage({
                message: resData.msg,
                type: 'success'
              });

              // 关闭登录弹层
              isShowModify.value = false;
            }
          })
          .finally(() => {
            btnLoading.value = false;
          });
      }
    });
  }

  //修改昵称
  const formInfoRef = ref<FormInstance>();
  const modifyInfoForm = reactive({
    userNick: userData.data.userNick
  });
  const modifyInfoFormRules = ref({
    userNick: [{ required: true, message: '昵称必填' }]
  });
  function onSubmitInfo(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;

    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        useClientRequest<ResOptions<any>>(userApi.modifyInfo, {
          method: 'post',
          body: {
            ...modifyInfoForm
          }
        })
          .then(resData => {
            if (resData.isSuccess) {
              ElMessage({
                message: resData.msg + ' 新昵称将在下次登录生效',
                type: 'success'
              });
            }
          })
          .finally(() => {
            btnLoading.value = false;
          });
      }
    });
  }
</script>

<style lang="scss">
  .user-index {
    .over-avatar {
      width: 160px;
      height: 160px;
      background: $drak-blue;
      border-radius: 50%;
      color: #ffffff;
      text-align: center;
      line-height: 160px;
      font-size: 60px;
      margin: 0 auto;
    }
    &__personal-name {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      padding: 10px 0;
    }
    &__head {
      padding: 20px;
      > img {
        width: 80px;
        margin-right: 20px;
      }
      .lv {
        background: url('../../assets/images/jlt.png') no-repeat 0 0;
        display: inline-block;
        width: 42px;
        height: 22px;
        vertical-align: middle;
        margin-top: 15px;
        &.lv1 {
          background-position: 0 -373px;
        }
      }
    }
    .el-card.is-always-shadow {
      box-shadow: none;
      border-radius: 0;
      border: 0;
    }
  }
  @media (max-width: 768px) {
    .user-index {
      margin-top: -60px;
      &__head {
        margin: 0 -15px;
      }
    }
  }

  .kdy_modifypwd {
    padding-left: 20px;
    padding-bottom: 10px;
    // margin-left: -10px;
    // margin-right: -10px;
  }
  .kdy_modifyInfo {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    // margin-left: -10px;
    // margin-right: -10px;
  }
</style>
