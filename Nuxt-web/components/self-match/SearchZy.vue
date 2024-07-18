<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-row justify="space-between">
          <el-col :span="12"> <span>匹配资源</span></el-col>
          <el-col :span="12">
            <el-button type="warning" plain @click="btnBack" :loading="baseSearchInfo.pending">1、上一步</el-button>

            <el-button type="primary" plain @click="btnNext" :loading="baseSearchInfo.pending"
              >2、下一步</el-button
            ></el-col
          >
        </el-row>
      </div>
    </template>
    <el-space class="mb-10" direction="vertical" :fill="true" style="width: 100%">
      <div>
        <el-descriptions title="影片信息" :column="3" :border="true">
          <el-descriptions-item label="名称"
            >{{ useSelfMatch.selfMatch.value.douBanTitle }}

            <el-link :href="useSelfMatch.selfMatch.value.douBanDetailUrl" target="_blank" rel="noreferrer"
              >前往豆瓣</el-link
            >
          </el-descriptions-item>
          <el-descriptions-item label="豆瓣DB序号">{{ useSelfMatch.selfMatch.value.douBanId }}</el-descriptions-item>
          <el-descriptions-item label="年份">{{ useSelfMatch.selfMatch.value.douBanYear }}</el-descriptions-item>
          <el-descriptions-item label="海报">
            <el-image style="width: 100px; height: 100px" :src="useSelfMatch.selfMatch.value.douBanImg" fit="cover" />
          </el-descriptions-item>
          <el-descriptions-item label="其他">
            <el-button
              size="small"
              type="success"
              @click="onSubmitFeedback"
              v-if="token"
              :disabled="baseSearchInfo.pending"
            >
              不找了，提交反馈
            </el-button>

            <el-button size="small" type="warning" v-else @click="goLogin" :disabled="baseSearchInfo.pending">
              不找了，提交反馈
            </el-button>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div>
        <el-select v-model="baseSearchInfo.configId" placeholder="请选择引擎" size="large" style="width: 240px">
          <el-option v-for="item in configList" :key="item.id" :label="item.hostName" :value="item.id" />
        </el-select>
        <el-input
          v-model="useSelfMatch.selfMatch.value.zySearchKeyWord"
          style="width: 240px"
          placeholder="影片关键字即可"
          :disabled="baseSearchInfo.pending"
        />
        <el-button type="primary" plain @click="btnSearch" :loading="baseSearchInfo.pending">开始搜索</el-button>
      </div>
    </el-space>
    <el-table
      ref="zyTableRef"
      :data="zyDataList"
      :border="true"
      stripe
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column prop="resultName" label="资源名称" />
      <el-table-column prop="videoYear" label="资源年份" />
      <el-table-column prop="imgUrl" label="资源海报">
        <template #default="scope">
          <el-image style="height: 50px; width: auto" :src="scope.row.imgUrl" fit="cover" />
        </template>
      </el-table-column>

      <!-- <el-table-column prop="otp" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary">
            <a :href="scope.row.originalUrl" target="_blank" style="color: #fff" rel="noreferrer">预览</a>
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <template #footer>
      <el-text class="mx-1" type="warning">
        注：如果关键字匹配失败，请尝试调整关键字后再搜索 <br />
        注：此资源可能存在水印或者卡顿，如需要极速版本，请提交反馈，人工处理。</el-text
      >
    </template>
  </el-card>
</template>

<script setup lang="ts">
  import { pageSearchApi, userApi } from '@/api/httpApi';
  import { ElTable } from 'element-plus';

  const { data: configList } = await useClientRequest<ResData<any[]>>(`${pageSearchApi.getConfigList}`, {
    query: {
      keyWord: 'zyPageParseForJson'
    }
  });

  const zyTableRef = ref<InstanceType<typeof ElTable>>();
  const zyDataList = ref<any[]>([]);
  const loginDialogVisible = useLoginDialogVisible();
  const token = useToken();
  const baseSearchInfo = reactive<any>({
    configId: null,
    pending: false
  });
  const useSelfMatch = useSelfMatchData();

  //开始匹配资源
  async function btnSearch() {
    if (!baseSearchInfo.configId) {
      ElMessage.error('请选择引擎');
      return;
    }

    zyTableRef.value!.setCurrentRow(null);
    zyDataList.value = [];
    baseSearchInfo.pending = true;
    const { data, pending, refresh } = await useAsyncData<ResData<any>>('self-match-zy', () =>
      useClientRequest<ResData<any>>(pageSearchApi.search, {
        query: {
          keyWord: useSelfMatch.selfMatch.value.zySearchKeyWord,
          configId: baseSearchInfo.configId,
          page: 1
        }
      })
    );

    baseSearchInfo.pending = pending;
    if (data.value?.isSuccess) {
      useSelfMatch.clearZy();
      zyTableRef.value!.setCurrentRow(null);
      zyDataList.value = [{ ...data.value.data }];

      // zyDataList.value.push({  });
    }
  }

  //行点击
  const handleCurrentChange = (rowData: any) => {
    useSelfMatch.selfMatch.value.zyVodTitle = rowData.resultName;
    useSelfMatch.selfMatch.value.zyVodYear = rowData.videoYear;
    useSelfMatch.selfMatch.value.zyVodImg = rowData.imgUrl;
    useSelfMatch.selfMatch.value.zyVodIsEnd = rowData.isEnd;

    useSelfMatch.selfMatch.value.zyPageMd5 = rowData.pageMd5;
    useSelfMatch.selfMatch.value.zyDetailUrl = rowData.detailUrl;

    if (rowData.results.length > 1) {
      useSelfMatch.selfMatch.value.epItems = rowData.results.map((it: any) => {
        return {
          episodeName: it.resultName,
          episodeUrl: it.resultUrl
        };
      });
    } else {
      useSelfMatch.selfMatch.value.epItems = rowData.results.map((it: any) => {
        return {
          episodeName: '备用',
          episodeUrl: it.resultUrl
        };
      });
    }
  };

  //下一步
  function btnNext() {
    if (!useSelfMatch.selfMatch.value.zyVodTitle) {
      ElMessage.error('匹配失败，请先选择一行数据');
      return;
    }

    if (useSelfMatch.selfMatch.value.douBanYear != useSelfMatch.selfMatch.value.zyVodYear) {
      ElMessage.error('匹配失败，年份不一致，请更换关键字或提交反馈');
      return;
    }

    //todo:这里需要调整为移除关键字的
    if (
      RemoveSpecialCharacters(useSelfMatch.selfMatch.value.douBanTitle) !=
      RemoveSpecialCharacters(useSelfMatch.selfMatch.value.zyVodTitle)
    ) {
      ElMessage.error('匹配失败，名称不一致，请更换关键字或提交反馈');
      return;
    }

    useSelfMatch.selfMatch.value.currentStep = 3;
  }

  //上一步
  function btnBack() {
    useSelfMatch.selfMatch.value.currentStep = 1;
  }

  //提交反馈
  function onSubmitFeedback() {
    ElMessageBox.confirm(
      `提交的影片信息：${useSelfMatch.selfMatch.value.douBanYear}${useSelfMatch.selfMatch.value.douBanTitle} 是否确认？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      baseSearchInfo.pending = true;
      useClientRequest<ResOptions<any>>(userApi.createWithHelp, {
        method: 'POST',
        body: {
          originalUrl: useSelfMatch.selfMatch.value.douBanDetailUrl,
          remark: '自助流程提交，默认语言'
        }
      })
        .then(data => {
          if (data.isSuccess) {
            ElMessage({
              message: `${data.msg}`,
              type: 'success'
            });

            useSelfMatch.clear();
          }
        })
        .finally(() => {
          baseSearchInfo.pending = false;
        });
    });
  }

  //登录
  function goLogin() {
    loginDialogVisible.value = true;
  }
</script>
