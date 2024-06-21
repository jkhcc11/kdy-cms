<template>
  <div v-if="!epDetailRes?.isSuccess">
    <el-empty description="请求失败，无数据" />
  </div>
  <div v-if="epDetailRes?.isSuccess" class="container">
    <Head>
      <Title>{{ epDetailRes?.data.videoMainInfo.keyWord }} 在线观看 看电影 {{ `${domainHost}` }}</Title>
      <Meta
        name="description"
        :content="`${epDetailRes?.data.videoMainInfo.keyWord} 看电影 ${domainHost} 专注老影视、经典、冷门在线播放，在线弹幕观看`"
      />
    </Head>

    <div class="items-center mt-10 kdy_padding kdy_row" style="margin-left: -20px; margin-right: -20px">
      <span class="mr-10">当前位置</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{
            path: `/vod/1/${epDetailRes?.data.videoMainInfo.subtypeVal}`
          }"
        >
          影视库
        </el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{
            path: `/vod-detail/${epDetailRes?.data.videoMainInfo.id}`
          }"
          v-if="epDetailRes?.data.videoMainInfo.keyWord"
        >
          {{
            epDetailRes?.data.videoMainInfo.keyWord.length > 12
              ? epDetailRes?.data.videoMainInfo.keyWord.substr(0, 12) + '...'
              : epDetailRes?.data.videoMainInfo.keyWord
          }}
        </el-breadcrumb-item>
        <el-breadcrumb-item> {{ epDetailRes?.data.episodeName }} </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="40" class="mt-10 kdy_padding kdy_row">
      <el-col :span="18" :xs="24">
        <div id="mse">
          <iframe
            v-if="
              epDetailRes?.data.playerHost &&
              epDetailRes?.data.videoEpisodeGroup &&
              epDetailRes?.data.videoEpisodeGroup.episodes &&
              epDetailRes?.data.videoEpisodeGroup.episodes.length > 0
            "
            :src="`${epDetailRes.data.playerHost}/VideoPlay/Index/${epDetailRes?.data.id}`"
            id="main-player"
            allowfullscreen="true"
          ></iframe>
          <el-empty v-else description="因版权或其他原因资源已下架，请尝试登录或访问其他页面以继续操作。">
            <el-button type="info" plain @click="onFeedBack">登录</el-button>
          </el-empty>
        </div>
        <div>
          <h1 class="mb-10 mt-10 video-detail__title" v-if="epDetailRes?.data.videoMainInfo.keyWord">
            {{ epDetailRes?.data.videoMainInfo.keyWord }} {{ epDetailRes?.data.episodeName }}
            <el-button type="warning" size="small" @click="onFeedBack">异常反馈</el-button>
          </h1>
        </div>
        <div
          v-if="
            epDetailRes?.data.videoEpisodeGroup &&
            epDetailRes?.data.videoEpisodeGroup.episodes &&
            epDetailRes?.data.videoEpisodeGroup.episodes.length > 0
          "
        >
          <el-tabs>
            <el-tab-pane label="剧集列表">
              <el-space wrap :size="5">
                <div v-for="epItem in epDetailRes?.data.videoEpisodeGroup.episodes" :key="epItem.id">
                  <el-button :type="epItem.id == epDetailRes?.data.id ? 'primary' : 'default'">
                    <a
                      :href="`/vod-play/${epItem.id}`"
                      :class="epItem.id == epDetailRes?.data.id ? 'kdy_a_active' : 'kdy_a'"
                    >
                      {{ epItem.episodeName }}
                    </a>
                  </el-button>
                </div>
              </el-space>
            </el-tab-pane>
          </el-tabs>
        </div>
        <el-empty v-else description="因版权或其他原因资源已下架，请尝试登录或访问其他页面以继续操作。">
          <el-button type="info" plain @click="onFeedBack">登录</el-button>
        </el-empty>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down">
        <div class="qr_code items-center column mb-20">
          <qrcode-vue :value="qrcodeUrl" :size="160" level="H" />
          <p class="mt-10">扫描二维码用手机观看</p>
        </div>
        <!--   周榜单  
        <Ranking title="周榜单" :list="rank.data.weekRank" />
       月榜单     
        <Ranking title="月榜单" :list="rank.data.mouthRank" />-->
      </el-col>
    </el-row>

    <client-only>
      <el-dialog
        v-model="isShowFeedBack"
        :title="`${epDetailRes?.data.videoMainInfo.keyWord}-${epDetailRes?.data.episodeName} 异常反馈`"
        width="360"
      >
        <el-form ref="formRef" :model="feedbackForm" :rules="feedbackFormRules">
          <el-form-item prop="userName">
            <el-input v-model="feedbackForm.videoName" placeholder="影视名" disabled></el-input>
          </el-form-item>
          <el-form-item prop="qaList">
            <el-select v-model="feedbackForm.qaList" multiple placeholder="选择问题" style="width: 240px">
              <el-option v-for="item in qaOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item prop="remark">
            <el-input
              v-model="feedbackForm.remark"
              placeholder="其他备注"
              type="textarea"
              maxlength="30"
              show-word-limit
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
  </div>
</template>

<script setup lang="ts">
  //播放页
  import { domainHost } from '~/types/const';
  import QrcodeVue from 'qrcode.vue';
  import { userApi, videoHistoryApi } from '~/api/httpApi';
  import { FormInstance } from 'element-plus';

  const token = useToken();
  const loginDialogVisible = useLoginDialogVisible();
  definePageMeta({
    key: route => route.fullPath
  });

  const route = useRoute();
  // const id = ref();
  const qrcodeUrl = ref('');

  const { epDetailData: epDetailRes, refresh } = useEpDetailData(route.params.id + '');

  //反馈
  const isShowFeedBack = ref(false);
  const formRef = ref<FormInstance>();
  const btnLoading = ref(false);
  const feedbackForm = reactive({
    videoName: epDetailRes.value?.data.videoMainInfo.keyWord,
    // demandType: '',
    originalUrl: '',
    qaList: [],
    remark: ''
  });

  const qaOptions = [
    {
      value: '电信',
      label: '电信宽带'
    },
    {
      value: '移动',
      label: '移动宽带'
    },
    {
      value: '联通',
      label: '联通宽带'
    },
    {
      value: '其他宽带',
      label: '其他宽带'
    },
    {
      value: '无法播放',
      label: '无法播放'
    },
    {
      value: '卡顿',
      label: '能播放但是卡顿'
    },
    {
      value: '资源错误',
      label: '资源和剧集不匹配'
    },
    {
      value: '画质问题',
      label: '需要调整画质'
    }
  ];
  const feedbackFormRules = ref({
    videoName: [{ required: true, message: '请输入名称' }],
    originalUrl: [{ required: true, message: '请输入反馈地址' }],
    qaList: [{ required: true, message: '请至少选择一个问题点' }]
  });
  //提交反馈保存
  function onSubmit(formEl: FormInstance | undefined) {
    if (!process.client) return;
    if (!formEl) return;

    formEl.validate(valid => {
      if (valid) {
        btnLoading.value = true;
        useClientRequest<ResOptions<any>>(userApi.createFeedback, {
          method: 'post',
          body: {
            originalUrl: window.location.href,
            demandType: 5,
            videoName: feedbackForm.videoName,
            remark: `${feedbackForm.qaList.join(' ')} ${feedbackForm.remark}`
          }
        })
          .then(resData => {
            if (resData.isSuccess) {
              ElMessage({
                message: resData.msg,
                type: 'success'
              });

              // 关闭登录弹层
              isShowFeedBack.value = false;
            }
          })
          .finally(() => {
            btnLoading.value = false;
          });
      }
    });
  }

  //提交反馈
  async function onFeedBack() {
    if (!token.value) {
      loginDialogVisible.value = true;
      return;
    }

    feedbackForm.qaList.length = 0;
    feedbackForm.remark = '';
    isShowFeedBack.value = true;
  }
  // 视频组件
  //   let player: PresetPlayer | null = null;

  if (token.value) {
    //登录过的
    useClientRequest(`${userApi.createHistory}`, {
      body: {
        epId: route.params.id,
        vodUrl: route.fullPath
      },
      method: 'PUT'
    });
  }

  //历史记录
  useClientRequest(`${videoHistoryApi.create}`, {
    body: {
      epId: route.params.id
    },
    method: 'PUT'
  });

  /**登录后刷新 */
  watch(token, () => {
    refresh();
  });

  onMounted(async () => {
    qrcodeUrl.value = window.location.href;
  });
</script>

<style lang="scss" scoped>
  #mse {
    width: 100%;
    height: 500px !important;
    background: #000;
  }
  @media (max-width: 768px) {
    #mse {
      height: 300px !important;
    }
  }
  .title {
    .el-icon {
      margin-right: 15px;
    }
  }

  .animate {
    padding-left: 20px;
    white-space: nowrap;
    display: inline-block;
    animation: 15s wordsLoop linear infinite normal;
    color: #ffffff;
  }

  @keyframes wordsLoop {
    0% {
      transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes wordsLoop {
    0% {
      transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }

  .video-detail__title {
    line-height: 1.2;

    span {
      color: $light-gray;
      font-size: 14px;
      &.rate {
        font-size: 24px;
        color: #06d706;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .movies-pic {
      width: 120px;
      margin-right: 10px;
    }

    .kdy-list-horizontal-scroll {
      max-height: 180px; /* 固定高度 */
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
