<template>
  <div>
    <ClientOnly>
      <el-empty v-if="movieList.length === 0" description="还未收藏视频噢~" />
      <div v-else class="video-list">
        <el-row :gutter="20">
          <el-col v-for="item in movieList" :key="item.id" :sm="4" :xs="12">
            <div class="video-list__block">
              <nuxt-link :to="`/vod-detail/${item.businessId}`">
                <KydImgBox :imgUrl="item.businessItems.videoImg" />
              </nuxt-link>
              <div class="video-list__detail">
                <h4 class="title text-overflow">{{ item.businessItems.keyWord }}</h4>

                <abbr>
                  {{ $formatTimeDifference(item.createdTime) }}
                  <el-button
                    type="danger"
                    size="small"
                    :icon="Delete"
                    circle
                    @click="onCancelCollect(item.businessItems.keyWord, item.id)"
                  />
                </abbr>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="12"
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
  import { Delete } from '@element-plus/icons-vue';
  import { userApi } from '~/api/httpApi';
  import { useClientRequest } from '~/composables/useClientRequest';

  const movieList = ref<QueryUserSubscribeDto[]>([]);
  const currentPage = ref<number>(1);
  const total = ref(0);

  async function getList() {
    const resData = await useClientRequest<ResPage<QueryUserSubscribeDto[]>>(userApi.queryCollect, {
      query: {
        page: currentPage.value,
        pageSize: 12
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

  //取消收藏
  async function onCancelCollect(vodName: string, subId: string) {
    ElMessageBox.confirm(`确定要移除${vodName}收藏？`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      const resData = await useClientRequest<ResPage<QueryUserSubscribeDto[]>>(userApi.cancelCollect + '/' + subId, {
        method: 'PATCH'
      });
      if (resData.isSuccess) {
        ElMessage({
          message: resData.msg,
          type: 'success'
        });
        getList();
      }
    });
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
