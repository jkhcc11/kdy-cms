<template>
  <client-only>
    <el-dialog v-model="vodInputVisible" title="影片录入" :close-on-click-modal="false" class="kdy_dialog">
      <el-form ref="formVodInputRef" :model="formVodInput" :rules="rules">
        <el-form-item prop="originalUrl">
          <el-input
            v-model="formVodInput.originalUrl"
            placeholder="请输入豆瓣链接"
            :maxlength="200"
            show-word-limit
            type="textarea"
          ></el-input>
        </el-form-item>
        <el-form-item prop="remark">
          <el-input
            v-model="formVodInput.remark"
            placeholder="备注 求资源是国语的、希望资源是粤语带字幕"
            :maxlength="200"
            show-word-limit
            type="textarea"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="onSubmit(formVodInputRef)" :loading="btnLoading">{{
            showText
          }}</el-button>

          <el-text class="mx-1" type="warning">提交成功后，请留意邮件或前往个人中心查看反馈状态</el-text>
        </el-form-item>
        <el-form-item>
          <el-text class="mx-1" type="danger">
            1、不支持未完结电视剧或热门影片！！！ <br />
            2、请提交豆瓣链接，提交有问题的，请截图联系管理，有求才有应！！！
          </el-text>
        </el-form-item>
      </el-form>
    </el-dialog>
  </client-only>
</template>

<script lang="ts" setup name="LoginPop">
  import { FormInstance } from 'element-plus';
  import { reactive } from '#imports';
  import { useVodInputVisible } from '~/composables/states';
  import { useClientRequest } from '~/composables/useClientRequest';
  import { userApi } from '~/api/httpApi';

  const vodInputVisible = useVodInputVisible();

  const showText = ref('提交');
  const formVodInputRef = ref<FormInstance>();
  const btnLoading = ref<boolean>(false);
  const formVodInput = reactive({
    remark: '',
    originalUrl: ''
  });
  const rules = ref({
    originalUrl: [{ required: true, message: '请输入豆瓣链接' }]
  });

  watch(vodInputVisible, () => {
    formVodInput.originalUrl = '';
    formVodInput.remark = '';
    showText.value = '提交';
  });

  // 提交
  function onSubmit(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;
    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        showText.value = '请稍等，提交中...';
        useClientRequest<ResOptions<any>>(userApi.createWithHelp, {
          method: 'post',
          body: {
            ...formVodInput
          }
        })
          .then(data => {
            if (data.isSuccess) {
              ElMessage({
                message: `${data.msg}`,
                type: 'success'
              });

              // 关闭
              vodInputVisible.value = false;
            }
          })
          .finally(() => {
            btnLoading.value = false;
            showText.value = '提交';
          });
      }
    });
  }
</script>
