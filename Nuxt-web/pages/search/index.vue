<template>
  <div class="container mt-20 show kdy_row">
    <ClientOnly>
      <el-row :gutter="40">
        <el-col :span="24" :xs="24">
          <div class="search-form">
            <el-form :model="form" :inline="true">
              <el-form-item>
                <el-input v-model="form.keyword" placeholder="请输入搜索影片关键字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSearch" :loading="pending">搜 索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="title" name="first">
              <div class="video-list">
                <el-row :gutter="20">
                  <el-skeleton :loading="pending" animated :count="1">
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
                      <el-col v-for="item in searchData.data.data" :key="item.id" :sm="4" :xs="12">
                        <div class="video-list__block">
                          <nuxt-link :to="`/vod-detail/${item.id}`" class="img-box">
                            <kyd-img-box :imgUrl="item.videoImg" />
                            <span v-if="item.videoDouBan">{{
                              +item.videoDouBan === 0 ? '无评分' : item.videoDouBan.toFixed(1)
                            }}</span>
                          </nuxt-link>
                          <div class="video-list__detail">
                            <h4 class="title text-overflow" :title="item.keyWord">
                              {{ item.videoYear }} {{ item.keyWord }}
                            </h4>
                            <p class="text-overflow">
                              {{ $formatTimeDifference(item.modifyTime ?? item.createdTime) }}
                              <!-- <template v-for="actor in item.casts"> {{ actor.actor.name }}&nbsp; </template> -->
                            </p>
                          </div>
                        </div>
                      </el-col>
                    </template>
                  </el-skeleton>
                </el-row>
                <div class="pagination" v-if="searchData.data.dataCount && searchData.data.dataCount > 0">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page="currentPage"
                    :page-size="commonPageSize"
                    :pager-count="5"
                    :total="searchData.data.dataCount"
                    @current-change="handleCurrentChange"
                  />
                </div>
                <el-empty v-else description="当前无数据,请更换关键字">
                  <el-button type="info" v-if="token" @click="feedback">提交反馈</el-button>
                </el-empty>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { vodApi } from '~/api/httpApi';
  import { commonPageSize } from '~/types/const';

  const vodInputVisible = useVodInputVisible();
  const token = useToken();
  const title = ref('');
  const route = useRoute();
  const activeName = ref('first');
  const form = reactive<{ keyword: string | undefined }>({
    keyword: undefined
  });
  const currentPage = ref<number>(1);

  form.keyword = route.query.keyword as string;
  if (route.query.page) {
    currentPage.value = +route.query.page;
  }

  // const {
  //   data: searchData,
  //   padding,
  //   refresh
  // } = await useClientRequest<ResPage<VodItem[]>>(`${vodApi.querySearch}`, {
  //   query: {
  //     keyWord: form.keyword,
  //     page: currentPage.value
  //   }
  // });
  const {
    data: searchData,
    pending,
    refresh
  } = await useAsyncData<ResPage<VodItem[]>>('vod-search-by-keyword', () =>
    useClientRequest<ResPage<VodItem[]>>(vodApi.querySearch, {
      query: {
        keyWord: form.keyword,
        page: currentPage.value,
        pageSize: 12
      }
    })
  );

  title.value = `${form.keyword} 搜索结果`;

  //翻页
  function handleCurrentChange(page: number) {
    currentPage.value = page;
    refresh();
    if (process.client) {
      window.scrollTo(0, 0);
    }

    title.value = `${form.keyword} 搜索结果 第${currentPage.value}页`;
  }

  //搜素
  async function onSearch() {
    await navigateTo({
      path: route.path,
      query: {
        keyword: form.keyword
      }
    });

    refresh();
    title.value = `${form.keyword} 搜索结果`;
  }

  function feedback() {
    vodInputVisible.value = true;
  }
</script>

<style lang="scss" scoped>
  .search-form {
    padding: 20px 0;
  }
  .pagination {
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  .kdy_row {
    padding: 15px;
  }
</style>
