<template>
  <div>
    <ClientOnly>
      <el-empty v-if="movieList.length === 0" description="无反馈记录~" />
      <div v-else class="video-list">
        <el-row :gutter="20">
          <el-col v-for="item in movieList" :key="item.id" :sm="4" :xs="8">
            <div class="video-list__block">
              <!-- <a :href="item.originalUrl">
                {{ item.feedBackInfoStatusStr }}
              </a> -->
              <el-tag :type="getStatusTagType(item.feedBackInfoStatus)">
                {{ item.feedBackInfoStatusStr }}
              </el-tag>
              <el-tag type="info">
                {{ item.demandTypeStr }}
              </el-tag>
              <div class="video-list__detail text-overflow">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="item.remark ? item.remark : item.videoName"
                  placement="top"
                >
                  <a
                    v-if="item.demandType == 10 && item.feedBackInfoStatus == 10"
                    :href="item.videoName"
                    target="_blank"
                  >
                    <h4 class="title text-overflow">{{ item.videoName }}</h4>
                  </a>
                  <a v-else :href="item.originalUrl" target="_blank" rel="noreferrer">
                    <h4 class="title text-overflow">{{ item.videoName }}</h4>
                  </a>
                </el-tooltip>

                <abbr>{{ $formatTimeDifference(item.createdTime) }}</abbr>
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

  const movieList = ref<any[]>([]);
  const currentPage = ref<number>(1);
  const total = ref(0);

  async function getList() {
    const resData = await useClientRequest<ResPage<any[]>>(userApi.queryFeedback, {
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

  //状态
  function getStatusTagType(feedBackInfoStatus: number) {
    if (feedBackInfoStatus == 0) {
      return 'warning';
    }

    if (feedBackInfoStatus == 10) {
      return 'success';
    }

    return '';
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
