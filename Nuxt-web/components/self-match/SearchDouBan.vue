<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-row justify="space-between">
          <el-col :span="12"> <span>确认豆瓣信息</span></el-col>
          <el-col :span="12">
            <el-button type="primary" plain @click="btnNext" :loading="baseVodInfo.pending"
              >1、确认，下一步</el-button
            ></el-col
          >
        </el-row>
      </div>
    </template>
    <el-space class="mb-10" direction="vertical" :fill="true" style="width: 100%">
      <div>
        <el-descriptions title="你要看的影片信息" :column="1" :border="true">
          <el-descriptions-item label="影片名">
            <el-input
              v-model="baseVodInfo.keyWord"
              style="width: 240px"
              placeholder="影片名 切勿错字"
              :disabled="baseVodInfo.pending"
            />
          </el-descriptions-item>
          <el-descriptions-item label="年份">
            <el-input-number
              v-model="baseVodInfo.vodYear"
              :min="1800"
              :max="2100"
              placeholder="影片年份"
              :disabled="baseVodInfo.pending"
            />
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="mb-10">
        <el-button type="success" plain @click="btnMatchDouBan" :loading="baseVodInfo.pending">开始匹配</el-button>
      </div>
    </el-space>

    <el-table :data="douBanDataList" :border="true" stripe style="width: 100%">
      <el-table-column prop="vodTitle" label="豆瓣名" />
      <el-table-column prop="vodYear" label="豆瓣年份" />
      <el-table-column prop="vodImg" label="海报">
        <template #default="scope">
          <el-image style="height: 50px; width: auto" :src="scope.row.vodImg" fit="cover" />
        </template>
      </el-table-column>
      <el-table-column prop="otp" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" :disabled="baseVodInfo.pending">
            <a :href="scope.row.detailUrl" target="_blank" style="color: #fff" rel="noreferrer">豆瓣详情</a>
          </el-button>

          <el-button size="small" type="success" @click="onSubmitFeedback" v-if="token" :disabled="baseVodInfo.pending">
            提交反馈
          </el-button>

          <el-button size="small" type="warning" v-else @click="goLogin" :disabled="baseVodInfo.pending">
            提交反馈
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-text class="mx-1" type="warning">
        注：为了尽可能的自动匹配上，请不要错字和少字 <br />
        注：此过程匹配的资源可能存在水印或者卡顿，如需要极速版本，请提交反馈，人工处理。
      </el-text>
    </template>
  </el-card>
</template>

<script setup lang="ts">
  import { userApi, vodApi } from '@/api/httpApi';

  const route = useRoute();
  const douBanDataList = ref<any[]>([]);
  const token = useToken();
  const useSelfMatch = useSelfMatchData();
  const loginDialogVisible = useLoginDialogVisible();

  const baseVodInfo = reactive<any>({
    keyWord: route.query.keyWord as string,
    vodYear: useSelfMatch.selfMatch.value.douBanYear,
    pending: false
  });

  //开始匹配豆瓣
  async function btnMatchDouBan() {
    if (!baseVodInfo.keyWord) {
      ElMessage.error('请输入关键字');
      return;
    }

    if (!baseVodInfo.vodYear) {
      ElMessage.error('请输入年份');
      return;
    }

    useSelfMatch.clear();

    useSelfMatch.selfMatch.value.keyWord = baseVodInfo.keyWord;
    useSelfMatch.selfMatch.value.inputYear = baseVodInfo.vodYear;

    baseVodInfo.pending = true;
    const { data, pending, refresh } = await useAsyncData<ResData<any>>('self-match-douban', () =>
      useClientRequest<ResData<any>>(vodApi.autoCreteByKeyWork, {
        query: {
          keyWord: baseVodInfo.keyWord,
          year: baseVodInfo.vodYear
        }
      })
    );

    baseVodInfo.pending = pending;
    if (data.value?.isSuccess) {
      douBanDataList.value = [];
      useSelfMatch.selfMatch.value.douBanImg = data.value.data.vodImg;
      useSelfMatch.selfMatch.value.douBanDetailUrl = data.value.data.detailUrl;
      useSelfMatch.selfMatch.value.douBanId = data.value.data.dbDouBanId;
      useSelfMatch.selfMatch.value.douBanTitle = data.value.data.vodTitle;
      useSelfMatch.selfMatch.value.douBanYear = data.value.data.vodYear;
      useSelfMatch.selfMatch.value.zySearchKeyWord = data.value.data.vodTitle;

      douBanDataList.value.push({ ...data.value.data });
    }
  }

  //下一步
  function btnNext() {
    if (!useSelfMatch.selfMatch.value.douBanTitle) {
      ElMessage.error('匹配失败，无法进入下一步');
      return;
    }
    useSelfMatch.selfMatch.value.currentStep = 2;
  }

  //提交反馈
  function onSubmitFeedback() {
    ElMessageBox.confirm(
      `提交的影片信息：${useSelfMatch.selfMatch.value.douBanYear}${useSelfMatch.selfMatch.value.douBanTitle} 是否确认？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      baseVodInfo.pending = true;
      useClientRequest<ResData<any>>(userApi.createWithHelp, {
        method: 'POST',
        body: {
          originalUrl: useSelfMatch.selfMatch.value.douBanDetailUrl,
          remark: '自助流程提交，默认语言'
        }
      })
        .then(data => {
          if (data.isSuccess) {
            ElMessage({
              message: `${data.msg}`,
              type: 'success'
            });

            useSelfMatch.clear();
            baseVodInfo.keyWord = '';
            baseVodInfo.vodYear = null;
            douBanDataList.value = [];
          }
        })
        .finally(() => {
          baseVodInfo.pending = false;
        });
    });
  }

  //登录
  function goLogin() {
    loginDialogVisible.value = true;
  }
</script>
