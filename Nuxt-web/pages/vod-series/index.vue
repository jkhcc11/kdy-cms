<template>
  <div class="container mt-20">
    <Head>
      <!-- <Title>{{ $titleRender(`${title}_${info?.data?.name}`) }}</Title> -->
      <Title>专题系列 看电影 {{ `${domainHost}` }}</Title>
      <Meta name="description" :content="`最全老影视、经典、冷门影片，尽在看电影 ${domainHost}`" />
    </Head>

    <el-row :gutter="10">
      <el-col :xs="12" :md="6" :lg="4" v-for="item in seriesData.data" :key="item.id">
        <el-card shadow="hover">
          <template #header>
            <el-text class="w-150px mb-2" truncated>
              {{ item.seriesName }}
            </el-text>
          </template>

          <nuxt-link :to="`/vod-series/${item.id}`">
            <KydImgBox :imgUrl="item.seriesImg" />
          </nuxt-link>
        </el-card>
      </el-col>
    </el-row>

    <div v-if="seriesData?.dataCount !== 0" class="pagination mt-20 pt-10 kdy_row">
      <el-pagination
        v-model:current-page="currentPage"
        background
        layout="prev, pager, next"
        :page-size="commonPageSize"
        :pager-count="5"
        :total="seriesData?.dataCount"
        @current-change="onChangePage"
      />
    </div>
    <el-empty v-if="seriesData?.dataCount === 0" description="当前无数据,请更换条件"></el-empty>
  </div>
</template>

<script setup lang="ts">
  //影视库页
  import { commonPageSize, domainHost } from '~/types/const';
  import { useClientRequest } from '~/composables/useClientRequest';
  import { seriesApi } from '~/api/httpApi';

  const route = useRoute();
  definePageMeta({
    key: route => route.fullPath
  });

  const { query } = route;
  //当前页
  const currentPage = ref<number>((query.page && +query.page) || 1);

  const {
    data: seriesData,
    pending,
    refresh
  } = await useClientRequest<ResPage<QueryVideoSeriesDto[]>>(seriesApi.querySearch, {
    query: {
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
