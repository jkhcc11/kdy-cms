<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-row justify="space-between">
          <el-col :span="12"> <span>确认信息</span></el-col>
          <el-col :span="12">
            <el-button type="primary" plain @click="btnBack" :loading="pending">2、上一步</el-button>
            <el-button type="primary" plain @click="btnSave" :loading="pending">3、提交</el-button>
          </el-col>
        </el-row>
      </div>
    </template>
    <el-space class="mb-10" direction="vertical" :fill="true" style="width: 100%">
      <div>
        <el-descriptions title="影片信息" :column="3" :border="true">
          <el-descriptions-item label="名称"
            >{{ useSelfMatch.selfMatch.value.douBanTitle }}

            <a :href="useSelfMatch.selfMatch.value.douBanDetailUrl" target="_blank" style="color: #fff" rel="noreferrer"
              >前往豆瓣</a
            >
          </el-descriptions-item>
          <el-descriptions-item label="豆瓣DB序号">{{ useSelfMatch.selfMatch.value.douBanId }}</el-descriptions-item>
          <el-descriptions-item label="年份">{{ useSelfMatch.selfMatch.value.douBanYear }}</el-descriptions-item>

          <el-descriptions-item label="资源站-名称">{{ useSelfMatch.selfMatch.value.zyVodTitle }}</el-descriptions-item>
          <el-descriptions-item label="资源站-完结">{{
            useSelfMatch.selfMatch.value.zyVodIsEnd ? '是' : '否'
          }}</el-descriptions-item>
          <el-descriptions-item label="资源站-年">{{ useSelfMatch.selfMatch.value.zyVodYear }}</el-descriptions-item>

          <el-descriptions-item label="海报">
            <el-image style="width: 100px; height: 100px" :src="useSelfMatch.selfMatch.value.douBanImg" fit="cover" />
          </el-descriptions-item>
          <el-descriptions-item label="资源站封面">
            <el-image style="width: 100px; height: 100px" :src="useSelfMatch.selfMatch.value.zyVodImg" fit="cover"
          /></el-descriptions-item>
        </el-descriptions>
      </div>
    </el-space>
    <template #footer>
      <el-text class="mx-1" type="warning"> 注：成功提交后即可观看</el-text>
    </template>
  </el-card>
</template>

<script setup lang="ts">
  import { vodApi } from '@/api/httpApi';
  const pending = ref(false);
  const useSelfMatch = useSelfMatchData();

  //保存
  async function btnSave() {
    ElMessageBox.confirm(
      `提交的影片信息：${useSelfMatch.selfMatch.value.zyVodYear}${useSelfMatch.selfMatch.value.zyVodTitle} 是否确认？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      pending.value = true;
      useClientRequest<ResData<any>>(vodApi.autoMatchSave, {
        method: 'POST',
        body: {
          douBanInfoId: useSelfMatch.selfMatch.value.douBanId,
          zyPageMd5: useSelfMatch.selfMatch.value.zyPageMd5,
          zyDetailUrl: useSelfMatch.selfMatch.value.zyDetailUrl,
          epItems: useSelfMatch.selfMatch.value.epItems
        }
      })
        .then(data => {
          if (data.isSuccess) {
            // ElMessage({
            //   message: `${data.msg??}`,
            //   type: 'success'
            // });

            ElMessageBox.confirm(`提交成功，是否前往详情？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
              .then(() => {
                navigateTo(`/vod-detail/${data.data}`);
              })
              .finally(() => {
                useSelfMatch.clear();
              });
          }
        })
        .finally(() => {
          pending.value = false;
        });
    });
  }

  //上一步
  function btnBack() {
    useSelfMatch.selfMatch.value.currentStep = 2;
  }
</script>
