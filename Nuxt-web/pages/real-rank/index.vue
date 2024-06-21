<template>
  <div class="container mt-10 kdy_row">
    <el-row :gutter="40">
      <el-col :span="24" :xs="24">
        <el-tabs v-model="activeName">
          <el-tab-pane label="他们正在看" name="first">
            <el-text class="mx-1" type="warning">仅显示最近24小时记录</el-text>
            <el-text class="mx-1" type="success">距下次刷新{{ codeTimeCount }} 秒</el-text>
            <el-table :data="realRankData?.data.data" :border="true" stripe style="width: 100%">
              <el-table-column prop="vodName" label="名称">
                <template #default="scope">
                  <el-link :href="`/vod-detail/${scope.row.keyId}`" target="_blank" type="primary">{{
                    scope.row.vodName
                  }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="epName" label="集数">
                <template #default="scope">
                  <el-link :href="`/vod-play/${scope.row.epId}`" target="_blank" type="success"
                    >{{ scope.row.epName }}
                  </el-link>
                </template>
              </el-table-column>
              <el-table-column prop="imgUrl" label="封面">
                <template #default="scope">
                  <el-image style="height: 50px; width: auto" :src="scope.row.vodImgUrl" fit="cover" />
                </template>
              </el-table-column>

              <el-table-column prop="createdTime" label="时间">
                <template #default="scope">
                  {{ $formatTimeDifference(scope.row.createdTime) }}
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { videoHistoryApi } from '~/api/httpApi';
  import dayjs from 'dayjs';

  const endTime = dayjs().format('YYYY-MM-DD HH:mm:ss'); // 结束时间为当前时间
  const startTime = dayjs().subtract(24, 'hour').format('YYYY-MM-DD HH:mm:ss'); // 开始时间为24小时前的时间
  const activeName = ref('first');
  const codeTimeCount = ref(60);

  const {
    data: realRankData,
    pending,
    refresh
  } = await useAsyncData<ResPage<any[]>>('query-real-rank-list', () =>
    useClientRequest<ResPage<any[]>>(videoHistoryApi.search, {
      query: {
        startTime: startTime,
        endTime: endTime
      }
    })
  );

  if (process.client) {
    // 定时器变量
    let timer: number | undefined;
    timer = setInterval(() => {
      if (codeTimeCount.value > 0) {
        codeTimeCount.value--;
      } else {
        codeTimeCount.value = 60;
        refresh();
      }
    }, 1000);
  }
</script>

<style lang="scss" scoped>
  //   .feedback-list {
  //     padding: 10px;
  //   }
  .kdy_row {
    padding: 10px;
  }
</style>
