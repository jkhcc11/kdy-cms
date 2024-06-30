<template>
  <div v-if="!detailRes?.isSuccess">
    <el-empty description="请求失败，无数据" />
  </div>
  <div v-if="detailRes?.isSuccess" class="container mt-10">
    <Head>
      <Title>{{ detailRes?.data.keyWord }} 详情页 看电影 {{ `${domainHost}` }}</Title>
      <Meta
        name="description"
        :content="`${detailRes?.data.keyWord} 看电影 ${domainHost} 专注老影视、经典、冷门在线播放，在线弹幕观看`"
      />
    </Head>

    <div class="items-center kdy_padding kdy_row" style="margin-left: -20px; margin-right: -20px">
      <span class="mr-10">当前位置</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{
            path: `/vod/1/${detailRes?.data.subtypeVal}`
          }"
        >
          影视库
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="detailRes?.data.keyWord">
          {{
            detailRes.data.keyWord.length > 12 ? detailRes.data.keyWord.substr(0, 12) + '...' : detailRes.data.keyWord
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="40" class="mt-10 kdy_padding kdy_row">
      <el-col :span="18" :xs="24">
        <h1 class="movie-detail-title hidden-sm-and-up">
          {{ detailRes?.data.keyWord }}
          <span class="rate" v-if="(detailRes?.data.videoDouBan ?? 0) > 0">
            {{ detailRes?.data.videoDouBan }}
          </span>
        </h1>
        <div class="clearfix">
          <div class="movies-pic">
            <KydImgBox :imgUrl="detailRes?.data.videoImg" />
          </div>
          <div class="movies-info">
            <h1 class="hidden-sm-and-down">
              {{ detailRes?.data.keyWord }}
              <span class="rate" v-if="(detailRes?.data.videoDouBan ?? 0) > 0">
                {{ detailRes?.data.videoDouBan }}
              </span>
              <a
                v-if="detailRes?.data.videoInfoUrl"
                :href="detailRes?.data.videoInfoUrl"
                target="_blank"
                rel="noreferrer"
              >
                <el-image :src="doubanIco" style="height: 17px; margin-left: 5px"> </el-image>
              </a>
            </h1>
            <el-form :inline="true" label-position="right">
              <el-form-item
                label="播放至:"
                v-if="detailRes?.data.newUserHistory && detailRes?.data.newUserHistory.epName"
              >
                <el-link
                  :href="`/vod-play/${detailRes?.data.newUserHistory.epId}`"
                  class="kdy_a_active"
                  type="primary"
                  style="font-size: x-large"
                >
                  {{ detailRes?.data.newUserHistory.epName }}
                </el-link>
              </el-form-item>
              <el-form-item label="地区:" v-if="detailRes?.data.videoMainInfo.videoCountries">
                <template v-for="item in detailRes?.data.videoMainInfo.videoCountries.split(',')">
                  {{ item }} &nbsp;
                </template>
              </el-form-item>
              <el-form-item label="年份:">{{ detailRes?.data.videoYear || '-' }}</el-form-item>
              <el-form-item label="类型:">{{ detailRes?.data.videoMainInfo.videoGenres }}</el-form-item>

              <el-form-item v-if="detailRes.data?.videoSeries && detailRes.data.videoSeries.id" label="系列:">
                <el-link :href="`/vod-series/${detailRes.data.videoSeries.id}`" type="primary" target="_blank">
                  {{ detailRes.data.videoSeries.seriesName }}</el-link
                >
              </el-form-item>
            </el-form>
            <el-form label-position="right">
              <el-form-item v-if="detailRes?.data.ask" label="别名:">
                <div class="text-overflow">{{ detailRes?.data.ask }}</div>
              </el-form-item>
              <el-form-item v-if="detailRes?.data.videoMainInfo.videoDirectors" label="导演:">
                <div class="text-overflow">{{ detailRes?.data.videoMainInfo.videoDirectors }}</div>
              </el-form-item>
              <el-form-item v-if="detailRes?.data.videoMainInfo.videoCasts" label="演员:">
                <div class="text-overflow">{{ detailRes?.data.videoMainInfo.videoCasts }}</div>
              </el-form-item>

              <el-form-item label="更新时间:">
                <div class="text-overflow">
                  {{ $formatTimeDifference(detailRes?.data.modifyTime ?? detailRes?.data.createdTime) }}
                </div>
              </el-form-item>
              <div>
                <!-- <nuxt-link
                  v-if="detailRes?.data.episodeGroup?.[0]"
                  :to="`/column/${detailRes?.data.episodeGroup}/video/${detailRes?.data.episodeGroup?.[0].id}`"
                >
                  <el-button :icon="ElIconVideoPlay" type="primary" class="mr-10">播放</el-button>
                </nuxt-link> -->
                <el-button
                  v-if="isCollect"
                  :loading="collectLoading"
                  :icon="ElIconStarFilled"
                  type="success"
                  @click="handleCollect"
                >
                  已收藏
                </el-button>
                <el-button v-else :loading="collectLoading" :icon="ElIconStar" type="default" @click="handleCollect">
                  收藏
                </el-button>
              </div>
            </el-form>
          </div>
        </div>
        <div v-if="detailRes?.data.episodeGroup && detailRes.data.episodeGroup.length" class="mt-10">
          <div class="related_video">
            <el-divider content-position="left">
              <el-text v-if="detailRes?.data.videoContentFeature == 'systeminput'" type="success"
                >极速线路，可放心食用</el-text
              >
              <el-text v-else type="warning">线路可能失效，播放失败可反馈</el-text></el-divider
            >
            <el-tabs>
              <el-tab-pane
                :label="epGroupItem.groupName"
                v-for="epGroupItem in detailRes.data.episodeGroup"
                :key="epGroupItem.id"
              >
                <el-space wrap :size="5" class="kdy_max_height_list">
                  <div v-for="epItem in epGroupItem.episodes" :key="epItem.id">
                    <el-text v-if="epGroupItem.episodeGroupType === EpisodeGroupTypeEnum.下载" line-clamp="1">
                      {{ epItem.episodeName }}
                      <el-button size="small" type="primary">
                        <a :href="epItem.episodeUrl" target="_blank" rel="noreferrer" class="kdy_a_active">打开</a>
                      </el-button>
                      <copy-button :textToCopy="epItem.episodeUrl"></copy-button>
                    </el-text>

                    <el-link :href="`/vod-play/${epItem.id}`" v-else>
                      <el-button>
                        {{ epItem.episodeName }}
                      </el-button>
                    </el-link>
                  </div>
                </el-space>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <el-empty v-else description="因版权或其他原因资源已下架，请尝试登录或访问其他页面以继续操作。">
          <el-button type="info" plain @click="handleCollect">登录</el-button>
        </el-empty>

        <div class="mt-10" v-if="detailRes?.data.episodeGroup && detailRes.data.episodeGroup.length">
          <!-- <div class="panel_hd between items-center">
            <div class="panel_hd__left">
              <h3 class="title items-center">相关影片</h3>
            </div>
          </div> -->
          <el-tabs v-model="currentActor">
            <!-- <el-tab-pane label="时间" name="时间">
              <vod-item-box :vodItems="artListData?.data" />
            </el-tab-pane>
            <el-tab-pane label="评分" name="评分">videoDouBan</el-tab-pane> -->
            <el-tab-pane
              :label="`${strItem}`"
              v-for="(strItem, index) in getDirectorsAndCasts(detailRes.data.videoMainInfo)"
              :key="index"
              :name="strItem"
              :disabled="artLoading"
            >
            </el-tab-pane>
          </el-tabs>

          <el-skeleton :loading="artLoading" animated :count="1">
            <template #template>
              <el-skeleton-item variant="image" style="width: 200px; height: 267px" />
              <div style="padding: 14px">
                <el-skeleton-item variant="h3" style="width: 50%" />
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-items: space-between;
                    margin-top: 16px;
                    height: 16px;
                  "
                >
                  <el-skeleton-item variant="text" style="margin-right: 16px" />
                  <el-skeleton-item variant="text" style="width: 30%" />
                </div>
              </div>
            </template>
            <template #default>
              <vod-item-box :vodItems="artListData?.data" />
            </template>
          </el-skeleton>
          <!-- <el-divider content-position="left">{{ currentActor }}</el-divider> -->
        </div>

        <div class="mt-20">
          <div class="panel_hd between items-center">
            <div class="panel_hd__left">
              <h3 class="title items-center">剧情简介</h3>
            </div>
          </div>
          <div class="desc kdy_max_height_list" v-html="detailRes?.data.videoMainInfo.videoSummary || ''"></div>
        </div>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down">
        <div class="qr_code items-center column mb-20">
          <qrcode-vue :value="qrcodeUrl" :size="160" level="H" />
          <p class="mt-10">扫描二维码用手机观看</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  //详情页
  import { domainHost, doubanIco } from '~/types/const';
  import { EpisodeGroupTypeEnum } from '~/types/enum';
  import QrcodeVue from 'qrcode.vue';
  import { useLoginDialogVisible, useToken } from '~/composables/states';
  import { FetchOptions } from '~/composables/useClientRequest';
  import { userApi, vodApi } from '~/api/httpApi';

  const route = useRoute();

  const token = useToken();
  //登录弹窗
  const loginDialogVisible = useLoginDialogVisible();

  //详情id
  const id = route.params.id;
  const qrcodeUrl = ref<string>('');
  const isCollect = ref<boolean>(false);
  const collectLoading = ref<boolean>(false);

  const { detailData: detailRes, refresh } = useDetailData(id + '');
  onMounted(() => {
    qrcodeUrl.value = window.location.href;
  });

  isCollect.value = detailRes.value?.data.isSubscribe ?? false;

  /**登录后刷新 */
  watch(token, () => {
    refresh();
  });

  watch(detailRes, () => {
    isCollect.value = detailRes.value?.data.isSubscribe ?? false;
  });

  //收藏|取消收藏
  async function handleCollect() {
    if (!token.value) {
      loginDialogVisible.value = true;
    } else {
      const requestUrl: string = !isCollect.value
        ? userApi.createCollect
        : userApi.cancelCollect + '/' + detailRes.value?.data.subscribeId;
      const requestOpts: FetchOptions = !isCollect.value
        ? {
            body: { businessId: id, subscribeType: 0 },
            method: 'PUT'
          }
        : { method: 'PATCH' };
      collectLoading.value = true;
      try {
        const resData = await useClientRequest<ResOptions<any>>(requestUrl, requestOpts);
        if (resData.isSuccess) {
          ElMessage({
            message: resData.msg,
            type: 'success'
          });
          isCollect.value = !isCollect.value;
          //重新拉去状态
          refresh();
        }
      } finally {
        collectLoading.value = false;
      }
    }
  }

  //演员|导演相关切换
  const currentActor = ref<string | null>(null);
  const artListData = ref<ResData<VodItem[]> | null>(null);
  const artLoading = ref(false);

  //导演和演员数组
  function getDirectorsAndCasts(videoMainInfo: VideoMainInfoDto) {
    // const result: string[] = [];

    //分割并移除对应的
    const splitAndTrim = (str: string) => {
      return str
        .split(/[,，/]/)
        .map(s => s.trim())
        .filter(s => s.length > 0);
    };

    let casts: string[] = [];
    let directors: string[] = [];

    if (videoMainInfo.videoCasts) {
      casts = splitAndTrim(videoMainInfo.videoCasts).slice(0, 3); // 取前3个演员
    }

    if (videoMainInfo.videoDirectors) {
      directors = splitAndTrim(videoMainInfo.videoDirectors).slice(0, 2); // 取前2个导演
    }

    // 使用 Set 去重
    const result = Array.from(new Set([...directors, ...casts]));
    if (result.length > 0 && !currentActor.value) {
      currentActor.value = result[0];
      // console.log('fwfew');
    }

    return result;
  }

  //艺人切换
  watch(currentActor, () => {
    artLoading.value = true;
    useClientRequest<ResData<VodItem[]>>(vodApi.querySameVideoByActor, {
      query: {
        actor: currentActor.value
      }
    })
      .then(resData => {
        artListData.value = resData;
      })
      .finally(() => {
        artLoading.value = false;
      });
  });
</script>

<style lang="scss" scoped>
  .movies-pic {
    width: 190px;
    margin-right: 20px;
    float: left;
  }

  .movie-detail-title {
    color: #333;
    font-size: 22px;
    margin-bottom: 10px;
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

  .movies-info {
    h1 {
      color: #333;
      font-size: 22px;
      margin-bottom: 10px;
      line-height: 1.2;
      padding-top: 0;
    }

    .el-form-item {
      margin-bottom: 5px;
    }

    span {
      color: $light-gray;
      font-size: 14px;

      &.rate {
        font-size: 24px;
        color: #06d706;
      }
    }
  }

  .title {
    .el-icon {
      margin-right: 15px;
    }
  }

  .desc {
    line-height: 28px;
  }

  .actor {
    overflow-x: auto;
    width: 100%;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      white-space: nowrap;

      li {
        display: inline-block;
        margin-right: 20px;
        width: 110px;
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
</style>
