<template>
  <div class="container mt-10 kdy_row">
    <el-row :gutter="40">
      <el-col :span="24" :xs="24">
        <el-tabs v-model="activeName">
          <el-tab-pane label="反馈列表" name="first">
            <el-text class="mx-1" type="warning">仅显示最新10条记录</el-text>
            <el-table :data="feedbackData.data.data" :border="true" stripe style="width: 100%">
              <el-table-column prop="videoName" label="名称" />
              <el-table-column prop="demandType" label="类型">
                <template #default="scope">
                  <el-tag :type="scope.row.demandType === 5 ? 'warning' : ''" disable-transitions size="small">{{
                    scope.row.demandTypeStr
                  }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="feedBackInfoStatus" label="进度">
                <template #default="scope">
                  <el-tag :type="getStatusTagType(scope.row.feedBackInfoStatus)" disable-transitions size="small">{{
                    scope.row.feedBackInfoStatusStr
                  }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="remark" label="备注" />
              <el-table-column prop="createdTime" label="反馈时间">
                <template #default="scope">
                  {{ $formatTimeDifference(scope.row.createdTime) }}
                </template>
              </el-table-column>
              <el-table-column prop="userEmail" label="用户" />
              <el-table-column prop="otp" label="操作">
                <template #default="scope">
                  <el-button size="small" type="primary">
                    <a :href="scope.row.originalUrl" target="_blank" style="color: #fff" rel="noreferrer">详情</a>
                  </el-button>
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
  import { userApi } from '~/api/httpApi';

  const activeName = ref('first');
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
    data: feedbackData,
    pending,
    refresh
  } = await useAsyncData<ResPage<any[]>>('get-feedback-list', () =>
    useClientRequest<ResPage<any[]>>(userApi.queryFeedback, {
      query: {
        page: 1
      }
    })
  );

  refresh();

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

<style lang="scss" scoped>
  .kdy_row {
    padding: 10px;
  }
</style>
