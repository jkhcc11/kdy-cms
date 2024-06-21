<template>
  <div class="container mt-10 show">
    <Head>
      <!-- <Title>{{ $titleRender(`${title}_${info?.data?.name}`) }}</Title> -->
      <Title>影视库 看电影 {{ `${domainHost}` }}</Title>
      <Meta name="description" :content="`最全老影视、经典、冷门影片，尽在看电影 ${domainHost}`" />
      <!-- <Meta name="description" :content="`最全老影视、经典、冷门${title}${info?.data?.name}尽在看电影 ${domainHost}`" /> -->
    </Head>

    <el-row :gutter="40">
      <el-col :xs="24" class="kdy_row">
        <div class="panel_hd between items-center">
          <div class="panel_hd__left">
            <h3 class="title items-center">
              <el-icon><ElIconVideoCamera /></el-icon>影视库筛选
            </h3>
          </div>
        </div>
        <el-form>
          <el-form-item label="分类">
            <ul class="show__type-filter">
              <li :class="params.t === '0' || params.t === undefined ? 'active' : ''">
                <nuxt-link :to="generatePathUrl({ t: '0', page: '1' })" class="kdy_a">全部</nuxt-link>
              </li>
              <li
                v-for="item in filterItems.vodTypeList"
                :key="item.filterValue"
                :class="params.t === item.filterValue ? 'active' : ''"
              >
                <nuxt-link :to="generatePathUrl({ t: item.filterValue, page: '1' })" class="kdy_a">{{
                  item.showName
                }}</nuxt-link>
              </li>
            </ul>
          </el-form-item>
          <el-form-item label="类型">
            <ul class="show__type-filter">
              <li :class="route.query.g === '' || route.query.g === undefined ? 'active' : ''">
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, g: '' } }" class="kdy_a">全部</nuxt-link>
              </li>
              <li
                v-for="item in filterItems.genreList"
                :key="item.filterValue"
                :class="route.query.g === item.filterValue ? 'active' : ''"
              >
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, g: item.filterValue } }" class="kdy_a">{{
                  item.showName
                }}</nuxt-link>
              </li>
            </ul>
          </el-form-item>
          <el-form-item label="地区">
            <ul class="show__type-filter">
              <li :class="route.query.c === '' || route.query.c === undefined ? 'active' : ''">
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, c: '' } }" class="kdy_a">全部</nuxt-link>
              </li>
              <li
                v-for="item in filterItems.countryList"
                :key="item.filterValue"
                :class="route.query.c && route.query.c === item.filterValue ? 'active' : ''"
              >
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, c: item.filterValue } }" class="kdy_a">{{
                  item.showName
                }}</nuxt-link>
              </li>
            </ul>
          </el-form-item>
          <el-form-item label="年份">
            <ul class="show__type-filter">
              <li :class="route.query.y === '' || route.query.y === undefined ? 'active' : ''">
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, y: '' } }" class="kdy_a">全部</nuxt-link>
              </li>
              <li
                v-for="item in yearList"
                :key="item"
                :class="route.query.y && +route.query.y === item ? 'active' : ''"
              >
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, y: item } }" class="kdy_a">{{
                  item
                }}</nuxt-link>
              </li>
              <li :class="route.query.y && route.query.y === '-1' ? 'active' : ''">
                <nuxt-link :to="{ path: defaultUrl(), query: { ...route.query, y: '-1' } }" class="kdy_a"
                  >其他</nuxt-link
                >
              </li>
            </ul>
          </el-form-item>
        </el-form>
        <el-tabs v-model="orderBy" @tab-change="handleTabChange">
          <el-tab-pane label="默认" :name="defaultOrderBy" :disabled="pending"></el-tab-pane>
          <el-tab-pane label="时间" name="createdTime" :disabled="pending"></el-tab-pane>
          <el-tab-pane label="评分" name="videoDouBan" :disabled="pending"></el-tab-pane>
        </el-tabs>
        <div v-loading="pending" class="video-list">
          <el-row v-if="vodData?.dataCount !== 0" :gutter="20">
            <el-col v-for="item in vodData?.data" :key="item.id" :sm="4" :xs="8">
              <div class="video-list__block">
                <nuxt-link :to="`/vod-detail/${item.id}`" class="img-box">
                  <kyd-img-box :imgUrl="item.videoImg" />
                  <span v-if="item.videoDouBan">{{
                    +item.videoDouBan === 0 ? '无评分' : item.videoDouBan.toFixed(1)
                  }}</span>
                </nuxt-link>
                <div class="video-list__detail">
                  <h4 class="title text-overflow" :title="item.keyWord">{{ item.videoYear }} {{ item.keyWord }}</h4>
                  <p class="text-overflow">
                    {{ $formatTimeDifference(item.modifyTime ?? item.createdTime) }}
                    <!-- 更新时间：{{ $dayjs(item.modifyTime ?? item.createdTime).format('YYYY-MM-DD') }} -->
                    <!-- <template v-for="actor in item.casts"> {{ actor.actor.name }}&nbsp; </template> -->
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
          <div v-if="vodData?.dataCount !== 0" class="pagination">
            <el-pagination
              v-model:current-page="currentPage"
              background
              layout="prev, pager, next"
              :page-size="commonPageSize"
              :pager-count="5"
              :total="vodData?.dataCount"
              @current-change="onChangePage"
            />
          </div>
          <el-empty v-if="vodData?.dataCount === 0" description="当前无数据,请更换条件"></el-empty>
        </div>
      </el-col>
      <!-- <el-col :span="6" class="hidden-sm-and-down">
            周榜单     
          <Ranking title="周榜单" :list="rank?.data.weekRank" />
           月榜单 
          <Ranking title="月榜单" :list="rank?.data.mouthRank" />
        </el-col> -->
    </el-row>
  </div>
</template>

<script setup lang="ts">
  //影视库页
  import { commonPageSize, domainHost } from '~/types/const';
  import { useClientRequest } from '~/composables/useClientRequest';
  import { vodApi } from '~/api/httpApi';
  import { FilterTypeEnum } from '~/types/enum';

  const route = useRoute();

  definePageMeta({
    key: route => route.fullPath
  });

  const { query, params } = route;
  //当前页
  const currentPage = ref<number>((params.page && +params.page) || 1);
  //排序
  const defaultOrderBy = 'default';
  const orderBy = ref<string>((query.o as string) || defaultOrderBy);
  //年列表
  const yearList = ref<number[]>([]);
  const y = new Date().getFullYear();
  for (let i = 0; i <= 15; i++) {
    yearList.value.push(y - i);
  }

  //筛选配置

  const filterItems = reactive({
    vodTypeList: [] as any[] | undefined,
    countryList: [] as any[] | undefined,
    genreList: [] as any[] | undefined
  });

  async function useVodData() {
    const { data, pending, refresh } = await useAsyncData<ResPage<VodItem[]>>('vod-search-data', () =>
      useClientRequest<ResPage<VodItem[]>>(vodApi.querySearch, {
        query: {
          subtype: params.t == '0' ? '' : params.t,
          genres: query.g,
          videoCountries: query.c,
          year: query.y,
          page: params.page,
          pageSize: commonPageSize,
          orderBy:
            orderBy.value && orderBy.value !== defaultOrderBy
              ? [
                  {
                    key: orderBy.value,
                    orderBy: 'desc'
                  }
                ]
              : []
        }
      })
    );

    //
    const { data: vodData } = data.value || { data: [] };

    return {
      vodData,
      pending,
      refresh
    };
  }

  // 在组件中使用
  const { vodData, pending, refresh } = await useVodData();

  //翻页回调
  async function onChangePage(page: any) {
    const route = useRoute();
    const path = generatePathUrl({ page: page });
    await navigateTo({
      path: path,
      query: {
        ...route.query
      }
    });
    if (process.client) {
      window.scrollTo(0, 0);
    }
  }

  async function handleTabChange(newVal: any) {
    const route = useRoute();
    const path = generatePathUrl({ page: '1' });
    await navigateTo({
      path: path,
      query: {
        ...route.query,
        o: newVal
      }
    });
    if (process.client) {
      window.scrollTo(0, 0);
    }
  }

  //生成Pathurl
  const generatePathUrl = (newParams: Partial<typeof params>) => {
    const mergedParams = { ...params, ...newParams };
    return `/vod/${mergedParams.page}/${mergedParams.t}`;
  };

  //默认url
  const defaultUrl = () => {
    return `/vod/1/${params.t}`;
  };

  onMounted(async () => {
    const { config } = useGlobalConfig();
    filterItems.vodTypeList = config.value?.queryFilterItems.filter(
      item => item.filterType === FilterTypeEnum.影片分类
    );
    filterItems.countryList = config.value?.queryFilterItems.filter(item => item.filterType === FilterTypeEnum.国家);
    filterItems.genreList = config.value?.queryFilterItems.filter(item => item.filterType === FilterTypeEnum.影片类型);
  });
</script>

<style lang="scss" scoped>
  .show {
    .title {
      .el-icon {
        margin-right: 15px;
      }
    }
    &__type-filter {
      li {
        display: inline-block;
        margin-right: 15px;
        padding: 0 10px;
        height: 24px;
        line-height: 24px;
        &.active {
          color: $active-color;
          border-bottom: 3px solid #5fb878;
          //   a {
          //     color: #ffffff;
          //   }
        }
      }
    }
    @media (max-width: 768px) {
      &__type-filter {
        white-space: nowrap;
        width: 300px;
        overflow-x: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .pagination {
      padding: 20px;
      display: flex;
      justify-content: center;
    }
  }
</style>
