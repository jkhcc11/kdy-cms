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
          <span>
            {{ (detailRes?.data.videoDouBan ?? 0) > 0 ? detailRes?.data.videoDouBan : '暂无评分' }}
          </span>
        </h1>
        <div class="clearfix">
          <div class="movies-pic">
            <KydImgBox :imgUrl="detailRes?.data.videoImg" />
          </div>
          <div class="movies-info">
            <h1 class="hidden-sm-and-down">
              {{ detailRes?.data.keyWord }}
              <span>
                {{ (detailRes?.data.videoDouBan ?? 0) > 0 ? detailRes?.data.videoDouBan : '暂无评分' }}
              </span>
            </h1>
            <el-form :inline="true" label-position="right">
              <el-form-item label="类型:">{{ detailRes?.data.videoMainInfo.videoGenres }}</el-form-item>
              <el-form-item label="地区:">
                <template v-for="item in detailRes?.data.videoMainInfo.videoCountries.split(',')">
                  {{ item }} &nbsp;
                </template>
              </el-form-item>
              <el-form-item label="年份:">{{ detailRes?.data.videoYear || '-' }}</el-form-item>
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
                <!-- <ClientOnly>
                  <el-popover v-if="!isUserRate" placement="right" trigger="click">
                    <template #reference>
                      <el-button :icon="ElIconEdit">评分</el-button>
                    </template>
                    <el-rate v-model="rate" allow-half @change="onRatechange" />
                  </el-popover>
                </ClientOnly> -->
              </div>
            </el-form>
          </div>
        </div>
        <div v-if="detailRes?.data.episodeGroup && detailRes.data.episodeGroup.length" class="mt-20">
          <div
            v-if="detailRes?.data.newUserHistory && detailRes?.data.newUserHistory.epName"
            class="panel_hd between items-center"
          >
            <div class="panel_hd__left">
              上次播放至
              <el-button round size="small" class="link-color" type="primary">
                <a :href="`/vod-play/${detailRes?.data.newUserHistory.epId}`" class="kdy_a_active">
                  {{ detailRes?.data.newUserHistory.epName }}
                </a>
              </el-button>
            </div>
          </div>
          <div class="related_video">
            <el-tabs>
              <el-tab-pane
                :label="epGroupItem.groupName"
                v-for="epGroupItem in detailRes.data.episodeGroup"
                :key="epGroupItem.id"
              >
                <el-space wrap :size="5">
                  <div v-for="epItem in epGroupItem.episodes" :key="epItem.id">
                    <el-text v-if="epGroupItem.episodeGroupType === EpisodeGroupTypeEnum.下载" line-clamp="1">
                      {{ epItem.episodeName }}
                      <el-button size="small" type="primary">
                        <a :href="epItem.episodeUrl" target="_blank" rel="noreferrer" class="kdy_a_active">打开</a>
                      </el-button>
                      <copy-button :textToCopy="epItem.episodeUrl"></copy-button>
                    </el-text>

                    <el-button v-else>
                      <a :href="`/vod-play/${epItem.id}`" class="kdy_a">
                        {{ epItem.episodeName }}
                      </a>
                    </el-button>
                  </div>
                </el-space>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <el-empty v-else description="因版权或其他原因资源已下架，请尝试登录或访问其他页面以继续操作。">
          <el-button type="info" plain @click="handleCollect">登录</el-button>
        </el-empty>
        <div class="mt-20">
          <div class="panel_hd between items-center">
            <div class="panel_hd__left">
              <h3 class="title items-center">剧情简介</h3>
            </div>
          </div>
          <div class="desc" v-html="detailRes?.data.videoMainInfo.videoSummary || ''"></div>
        </div>
        <!--  演员    -->
        <!-- <div v-if="castsRes?.rows && castsRes?.rows.length" class="mt-20">
          <div class="panel_hd between items-center">
            <div class="panel_hd__left">
              <h3 class="title items-center"><i class="icon-movie-box"></i>演员</h3>
            </div>
          </div>
          <div class="actor">
            <ul>
              <li v-for="item in castsRes.rows" :key="item.id">
                <el-image style="width: 110px; height: 156px" fit="cover" :src="item.actorAvatar"></el-image>
                <div>{{ item.actorName }}</div>
                <div v-if="item.role" class="grey">饰 {{ item.role }}</div>
                <div v-else class="grey">{{ item.professionName }}</div>
              </li>
            </ul>
          </div>
        </div> -->
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down">
        <div class="qr_code items-center column mb-20">
          <qrcode-vue :value="qrcodeUrl" :size="160" level="H" />
          <p class="mt-10">扫描二维码用手机观看</p>
        </div>
        <!-- 周榜单    
        <Ranking title="周榜单" :list="rank?.data.weekRank" />
           月榜单    
        <Ranking title="月榜单" :list="rank?.data.mouthRank" /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  //详情页
  import { domainHost } from '~/types/const';
  import { EpisodeGroupTypeEnum } from '~/types/enum';
  import QrcodeVue from 'qrcode.vue';
  import { useLoginDialogVisible, useToken } from '~/composables/states';
  import { FetchOptions } from '~/composables/useClientRequest';
  import { userApi } from '~/api/httpApi';

  const route = useRoute();

  // definePageMeta({
  //   key: route => route.fullPath
  // });

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

  // const [{ data: detailRes, refresh }] = await Promise.all([
  //   useServerRequest<ResData<VodDetail>>(`${vodApi.getDetail}/${id}`)
  //   // useServerRequest<ResPage<CastListItem[]>>(`/movie/cast/list?movieId=${id}&pageNum=1&pageSize=50`)
  // ]);

  // if (!detailRes.value?.isSuccess) {
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: '页面不存在',
  //     fatal: true
  //   });
  // }

  isCollect.value = detailRes.value?.data.isSubscribe ?? false;

  /**登录后刷新 */
  watch(token, () => {
    refresh();
  });

  watch(detailRes, () => {
    isCollect.value = detailRes.value?.data.isSubscribe ?? false;
  });

  // /** 获取用户收藏状态 */
  // getUserCollect();
  // async function getUserCollect() {
  //   if (!token.value) {
  //     isCollect.value = false;
  //   } else {
  //     const { data: userCollect } = await useServerRequest<ResData<UserMovieBase>>('/user-collect/find', {
  //       query: { movieId: id }
  //     });
  //     isCollect.value = !!userCollect.value?.data;
  //   }
  // }

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
        }
      } finally {
        collectLoading.value = false;
      }
    }
  }
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
