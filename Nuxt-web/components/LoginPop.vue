<template>
  <client-only>
    <el-dialog v-model="loginDialogVisible" title="登录" width="360">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="邮箱或用户名" :prefix-icon="ElIconUserFilled"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model="form.userPwd"
            type="password"
            placeholder="请输入密码 至少8位"
            :prefix-icon="ElIconLock"
            show-word-limit
            :minlength="8"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          还没有账号？去<a href="javascript:void(0)" class="link-color" @click="handleShowRegDialog">注册</a>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="login(formRef)" :loading="btnLoading">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog v-model="regDialogVisible" title="注册" width="360" :close-on-click-modal="false">
      <el-form ref="formRegRef" :model="regForm" :rules="regRules">
        <el-form-item prop="userEmail">
          <el-input
            v-model="regForm.userEmail"
            placeholder="请输入邮箱"
            :prefix-icon="ElIconUserFilled"
            :maxlength="50"
            show-word-limit
          ></el-input>
          <el-button type="primary" size="small" @click="sendCode" :loading="isSendCode">
            <span v-if="codeTimeCount != 120"> 剩余{{ codeTimeCount }}秒 </span>
            <span v-else> 发送验证码 </span>
          </el-button>
        </el-form-item>
        <el-form-item prop="emailCode">
          <el-input v-model="regForm.emailCode" placeholder="邮箱验证码" :maxlength="6" show-word-limit></el-input>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input
            v-model="regForm.userName"
            placeholder="用户名 不能有汉字"
            :maxlength="20"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item prop="userNick">
          <el-input v-model="regForm.userNick" placeholder="昵称 随意" :maxlength="20" show-word-limit></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="regForm.password"
            type="password"
            placeholder="请输入密码 至少8位"
            :prefix-icon="ElIconLock"
            show-word-limit
            :minlength="8"
          ></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model="regForm.userPwd"
            type="password"
            placeholder="请再次输入密码 至少8位"
            :prefix-icon="ElIconLock"
            show-word-limit
            :minlength="8"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          已有账号？去<a href="javascript:void(0)" class="link-color" @click="handleShowLoginDialog">登录</a>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleReg(formRegRef)" :loading="btnLoading"
            >注 册</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </client-only>
</template>

<script lang="ts" setup name="LoginPop">
  import { FormInstance } from 'element-plus';
  import { reactive } from '#imports';
  import { useLoginDialogVisible, useRegDialogVisible } from '~/composables/states';
  import { useClientRequest } from '~/composables/useClientRequest';
  import { userApi } from '~/api/httpApi';

  const token = useToken();
  const regDialogVisible = useRegDialogVisible();
  const loginDialogVisible = useLoginDialogVisible();
  const tokenCookie = useCookie<string | undefined>('token');

  const formRef = ref<FormInstance>();
  const formRegRef = ref<FormInstance>();
  const btnLoading = ref<boolean>(false);
  const form = reactive({
    userName: '',
    userPwd: ''
  });
  const rules = ref({
    userName: [{ required: true, message: '请输入邮箱或用户名' }],
    userPwd: [
      {
        required: true,
        validator: (_rule: any, value: any, callback: any) => {
          if (!value) {
            callback(new Error('请输入密码'));
          } else if (form.userPwd.length < 8) {
            callback(new Error('密码至少8位'));
          } else {
            callback();
          }
        }
      }
    ]
  });

  //注册
  const regForm = reactive({
    userEmail: '',
    emailCode: '',
    userName: '',
    userNick: '',
    password: '',
    userPwd: ''
  });

  const regRules = ref({
    userEmail: [{ required: true, message: '请输入邮箱地址' }],
    emailCode: [{ required: true, message: '请输入验证码' }],
    userName: [{ required: true, message: '请输入用户名' }],
    userNick: [{ required: true, message: '请输入昵称' }],
    password: [{ required: true, message: '请输入密码' }],
    userPwd: [
      {
        required: true,
        validator: (_rule: any, value: any, callback: any) => {
          if (!value) {
            callback(new Error('请再次输入密码'));
          } else if (regForm.password !== regForm.userPwd) {
            callback(new Error('两次密码输入不一致'));
          } else if (regForm.userPwd.length < 8) {
            callback(new Error('密码至少8位'));
          } else {
            callback();
          }
        }
      }
    ]
  });

  //发送验证验证码
  const isSendCode = ref<boolean>(false);
  const codeTimeCount = ref(120);
  function sendCode() {
    if (regForm.userEmail && regForm.userEmail.length > 0 && regForm.userEmail.indexOf('@') != -1) {
      isSendCode.value = true;
      useClientRequest<ResOptions<string>>(userApi.sendCode, {
        method: 'post',
        body: {
          email: regForm.userEmail,
          codeType: 1
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

  // 登录
  function login(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;
    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        useClientRequest<ResOptions<any>>(userApi.login, {
          method: 'post',
          body: form
        })
          .then(data => {
            if (data.isSuccess) {
              ElMessage({
                message: '登录成功',
                type: 'success'
              });

              // 设置cookie
              tokenCookie.value = data.data.accessToken;
              // 更新state
              token.value = 'Bearer ' + tokenCookie.value;
              // 关闭登录弹层
              loginDialogVisible.value = false;
            }
          })
          .finally(() => {
            btnLoading.value = false;
          });
      }
    });
  }

  // 注册
  function handleReg(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;
    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        useClientRequest<ResOptions<string>>(userApi.regUser, {
          method: 'put',
          body: regForm
        })
          .then(data => {
            if (data.isSuccess) {
              ElMessage({
                message: '注册成功',
                type: 'success'
              });
              regDialogVisible.value = false;
            }
          })
          .finally(() => {
            btnLoading.value = false;
          });
      }
    });
  }

  // 隐藏登录弹层，显示注册弹层
  function handleShowRegDialog() {
    loginDialogVisible.value = false;
    regDialogVisible.value = true;
  }

  // 隐藏注册弹层，显示登录弹层
  function handleShowLoginDialog() {
    loginDialogVisible.value = true;
    regDialogVisible.value = false;
  }
</script>
