<template>
  <div class="container mt-20">
    <el-card>
      <template #header>
        <div class="card-header">
          <span v-if="seriesListData?.data && seriesListData?.data[0] && seriesListData?.data[0].videoSeries">
            {{ seriesListData?.data[0].videoSeries.seriesName }}
          </span>
        </div>
      </template>

      <div v-loading="pending" class="video-list">
        <el-row v-if="seriesListData?.dataCount !== 0" :gutter="20">
          <el-col v-for="item in seriesListData?.data" :key="item.id" :sm="4" :xs="12">
            <div class="video-list__block">
              <nuxt-link :to="`/vod-detail/${item.videoMain.id}`" class="img-box">
                <kyd-img-box :imgUrl="item.videoMain.videoImg" />
                <span v-if="item.videoMain.videoDouBan">{{
                  +item.videoMain.videoDouBan === 0 ? '无评分' : item.videoMain.videoDouBan.toFixed(1)
                }}</span>
              </nuxt-link>
              <div class="video-list__detail">
                <h4 class="title text-overflow" :title="item.videoMain.keyWord">
                  {{ item.videoMain.videoYear }} {{ item.videoMain.keyWord }}
                </h4>
                <p class="text-overflow">
                  更新时间：{{ $formatTimeDifference(item.videoMain.modifyTime ?? item.videoMain.createdTime) }}
                  <!-- <template v-for="actor in item.casts"> {{ actor.actor.name }}&nbsp; </template> -->
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <div v-if="seriesListData?.dataCount !== 0" class="pagination mt-20 pt-10 kdy_row">
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, pager, next"
            :page-size="commonPageSize"
            :pager-count="5"
            :total="seriesListData?.dataCount"
            @current-change="onChangePage"
          />
        </div>
        <el-empty v-if="seriesListData?.dataCount === 0" description="当前无数据,请更换条件"></el-empty>
      </div>

      <template #footer v-if="seriesListData?.data && seriesListData?.data[0] && seriesListData?.data[0].videoSeries">
        <span>
          {{ seriesListData?.data[0].videoSeries.seriesRemark }}
        </span>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  //影视库页
  import { commonPageSize } from '~/types/const';
  import { useClientRequest } from '~/composables/useClientRequest';
  import { seriesApi } from '~/api/httpApi';

  const route = useRoute();
  definePageMeta({
    key: route => route.fullPath
  });

  const { query, params } = route;
  //当前页
  const currentPage = ref<number>((query.page && +query.page) || 1);

  const {
    data: seriesListData,
    pending,
    refresh
  } = await useClientRequest<ResPage<QueryVideoSeriesListDto[]>>(seriesApi.querySeriesList, {
    query: {
      seriesId: params.id,
      page: query.page,
      pageSize: commonPageSize
    }
  });

  //翻页回调
  async function onChangePage(page: any) {
    const route = useRoute();
    await navigateTo({
      path: route.path,
      query: {
        ...route.query,
        page
        // orderBy: [
        //   {
        //     key: orderBy.value,
        //     orderBy: 'desc'
        //   }
        // ],
      }
    });
    if (process.client) {
      window.scrollTo(0, 0);
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
</style>
