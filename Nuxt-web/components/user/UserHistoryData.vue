<template>
  <div>
    <ClientOnly>
      <el-empty v-if="movieList.length === 0" description="无播放记录~" />
      <div v-else class="video-list">
        <el-row :gutter="20">
          <el-col v-for="item in movieList" :key="item.id" :sm="4" :xs="8">
            <div class="video-list__block">
              <el-tag>
                <nuxt-link :to="`/vod-play/${item.epId}`" class="kdy_a">
                  {{ item.epName }}
                </nuxt-link></el-tag
              >

              <div class="video-list__detail text-overflow">
                <nuxt-link :to="`/vod-detail/${item.keyId}`" class="kdy_a">
                  {{ item.vodName }}
                </nuxt-link>

                <br />
                <abbr> {{ $formatTimeDifference(item.modifyTime ?? item.createdTime) }}</abbr>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="24"
            :pager-count="5"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import { userApi } from '~/api/httpApi';
  import { useClientRequest } from '~/composables/useClientRequest';

  const movieList = ref<QueryUserHistoryDto[]>([]);
  const currentPage = ref<number>(1);
  const total = ref(0);

  async function getList() {
    const resData = await useClientRequest<ResPage<QueryUserHistoryDto[]>>(userApi.queryHistory, {
      query: {
        page: currentPage.value,
        pageSize: 24
      }
    });
    if (resData.isSuccess) {
      movieList.value = resData.data.data;
      total.value = resData.data.dataCount;
    }
  }
  getList();

  function handleCurrentChange(page: number) {
    currentPage.value = page;
    getList();
  }
</script>

<style scoped>
  .pagination {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  abbr {
    color: #8f8f8f;
    font-size: 10px;
  }
</style>
