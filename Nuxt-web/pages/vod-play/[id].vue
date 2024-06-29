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
        <el-breadcrumb-item> {{ currentEpName ?? epDetailRes?.data.episodeName }} </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-row :gutter="40" class="mt-10 kdy_padding kdy_row">
      <el-col :span="18" :xs="24" v-if="isCheck">
        <!-- check单独 -->
        <iframe
          v-if="epDetailRes?.data.playerHost && epDetailRes?.data.id"
          :src="`${epDetailRes.data.playerHost}/VideoPlay/Index/${epDetailRes?.data.id}`"
          id="main-player"
          allowfullscreen="true"
        ></iframe>
      </el-col>
      <el-col
        :span="18"
        :xs="24"
        v-else-if="
          epDetailRes?.data.videoEpisodeGroup &&
          epDetailRes?.data.videoEpisodeGroup.episodes &&
          epDetailRes?.data.videoEpisodeGroup.episodes.length > 0
        "
      >
        <el-carousel height="20px" :interval="5000" arrow="never" direction="vertical">
          <el-carousel-item>
            <el-text type="success">已实现自动下一集，电视剧全屏挂机播放即可！</el-text>
          </el-carousel-item>
          <el-carousel-item>
            <el-text type="warning">注：无法播放或播放异常请直接反馈</el-text>
          </el-carousel-item>
          <el-carousel-item>
            <el-text type="danger">注：如果资源有广告的，切勿相信，如需更换资源请提交反馈说明</el-text>
          </el-carousel-item>
        </el-carousel>

        <div id="mse">
          <iframe
            v-if="epDetailRes?.data.playerHost && epDetailRes?.data.id"
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
            {{ epDetailRes?.data.videoMainInfo.keyWord }} {{ currentEpName ?? epDetailRes?.data.episodeName }}
            <el-button type="warning" size="small" @click="onFeedBack">异常反馈</el-button>
          </h1>
        </div>
        <div>
          <el-tabs>
            <el-tab-pane label="剧集列表">
              <el-space wrap :size="5" class="kdy_max_height_list">
                <div v-for="epItem in epDetailRes?.data.videoEpisodeGroup.episodes" :key="epItem.id">
                  <el-link
                    :href="`/vod-play/${epItem.id}`"
                    :class="epItem.id == (currentEpId ?? epDetailRes.data.id) ? 'kdy_a_active' : 'kdy_a'"
                  >
                    <el-button :type="epItem.id == (currentEpId ?? epDetailRes.data.id) ? 'primary' : 'default'">
                      {{ epItem.episodeName }}
                    </el-button>
                  </el-link>
                </div>
              </el-space>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="18" :xs="24" v-else>
        <el-empty description="因版权或其他原因资源已下架，请尝试登录或访问其他页面以继续操作。">
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
  //巡查程序开放
  const isCheck = ref<boolean>(route.query.check == 'chrome');
  // const id = ref();
  const qrcodeUrl = ref('');
  const currentEpId = ref<string | undefined>(undefined);
  const currentEpName = ref<string | undefined>(undefined);
  const { epDetailData: epDetailRes, refresh } = useEpDetailData(route.params.id as string);

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

  function createHistory(epId: string | undefined) {
    if (!epId) {
      return;
    }

    if (isCheck.value) {
      //巡查不用
      return;
    }

    if (token.value) {
      //登录过的
      useClientRequest(`${userApi.createHistory}`, {
        body: {
          epId,
          vodUrl: `/vod-play/${epId}`
        },
        method: 'PUT'
      });
    }

    //历史记录
    useClientRequest(`${videoHistoryApi.create}`, {
      body: {
        epId
      },
      method: 'PUT'
    });
  }

  /**登录后刷新 */
  watch(token, () => {
    refresh();
  });

  //激活滚动到当前位置
  function scrollToActiveElement() {
    nextTick(() => {
      const elSpace = document.querySelector('.kdy_max_height_list');
      if (elSpace) {
        const activeElement = elSpace.querySelector('.kdy_a_active');
        if (activeElement) {
          const rect = activeElement.getBoundingClientRect();
          const elSpaceRect = elSpace.getBoundingClientRect();
          if (rect.top < elSpaceRect.top || rect.bottom > elSpaceRect.bottom) {
            elSpace.scrollTop = activeElement.offsetTop - elSpaceRect.height / 2 + rect.height / 2;
          }
        }
      }
    });
  }

  function autoNextMsg() {
    const messageHandler = (event: any) => {
      // // 确认消息来自预期的来源
      // if (event.origin !== '预期的来源') {
      //   return;
      // }

      //pushData.epId = nextEpId;
      //{origin:'https://kdy-play.kdy666.pro'}
      //console.log('autoNext', event);
      //{epId:"1802601442033405956"}

      const tempData = event.data;
      if (tempData && tempData.epId) {
        console.log('autoNextData', tempData);
        // 在这里处理接收到的数据
        //console.log('Received data:', tempData);
        // route.params.id = tempData.epId;
        // await navigateTo({
        //   path: 'vod-play',
        //   params: {
        //     id: tempData.epId
        //   }
        // });
        // router.replace({
        //   path: `/vod-play/${tempData.epId}`
        // });
        //不刷新 替换网址 拉去最新数据更新父窗口数据
        history.replaceState(null, '', `/vod-play/${tempData.epId}`);
        updateEpName(tempData.epId);
        //console.log('autoNextData-updatedata');
      }
    };

    window.addEventListener('message', messageHandler);
    onBeforeUnmount(() => {
      window.removeEventListener('message', messageHandler);
    });
  }

  //更新最新ep名称
  function updateEpName(newEpId: string) {
    //自动播放时接收到的epId
    currentEpId.value = newEpId;
  }

  //nextTick 确保了在 currentEpId 更新后，DOM 完全更新并渲染完成后再执行
  watch(currentEpId, () => {
    nextTick(() => {
      const activeElement = document.getElementsByClassName('kdy_a_active')[0];
      //console.log('activeElement', activeElement);
      if (activeElement) {
        currentEpName.value = activeElement.innerText;

        createHistory(currentEpId.value);
      }
    });
  });

  onMounted(() => {
    qrcodeUrl.value = window.location.href;
    scrollToActiveElement();
    autoNextMsg();
    createHistory(route.params.id as string);
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
