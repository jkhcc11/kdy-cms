<template>
  <div class="container mt-20 show kdy_row">
    <ClientOnly>
      <el-row :gutter="40">
        <el-col :span="24" :xs="24">
          <div class="search-form">
            <el-form :model="form" :inline="true">
              <el-form-item>
                <el-input v-model="form.keyword" placeholder="搜索关键字"></el-input>
              </el-form-item>
              <el-form-item v-if="configList && configList.length > 0">
                <el-select v-model="form.configId" placeholder="引擎">
                  <el-option v-for="item in configList" :key="item.id" :label="item.hostName" :value="item.id" />
                </el-select>
              </el-form-item>
              <el-form-item v-else>
                <el-text class="mx-1" type="error">暂无可用引擎，请等待管理添加</el-text>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSearch(1)" :loading="pending">搜 索</el-button>
              </el-form-item>
            </el-form>
            <el-text class="mx-1" type="warning">注：如果需要在线观看请到主站搜索，此页面只提供下载地址！！</el-text>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="title" name="first">
              <el-skeleton :loading="pending" animated :count="3">
                <template #template>
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
                  <el-table
                    v-if="searchData?.data.results && searchData?.data.results.length > 0"
                    :data="searchData?.data.results"
                    :border="true"
                    stripe
                    style="width: 100%"
                  >
                    <el-table-column prop="resultName" label="名称" />
                    <!-- <el-table-column prop="resultUrl" label="链接" /> -->
                    <el-table-column prop="otp" label="操作">
                      <template #default="scope">
                        <el-button size="small" type="primary">
                          <a :href="scope.row.resultUrl" target="_blank" style="color: #fff" rel="noreferrer">打开</a>
                        </el-button>

                        <copy-button :textToCopy="scope.row.resultUrl"></copy-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-skeleton>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="24" :xs="24">
          <div class="pagination" v-if="searchData?.data.results && searchData?.data.results.length > 0">
            <el-pagination
              background
              layout="prev,pager, next"
              :current-page="form.page"
              :total="50"
              @current-change="handleCurrentChange"
            />
          </div>
          <el-empty v-else description="无结果，请更换关键字或更换引擎"> </el-empty>
        </el-col>
      </el-row>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { pageSearchApi } from '~/api/httpApi';

  const title = ref('');
  const route = useRoute();
  const activeName = ref('first');

  const form = reactive<{ keyword: string | undefined; configId: string | undefined; page: number | undefined }>({
    keyword: undefined,
    configId: undefined,
    page: undefined
  });

  form.keyword = route.query.keyword as string;
  form.configId = route.query.configId as string;
  form.page = (route.query.page && +route.query.page) || 1;

  //{"data":[{"hostName":"资源多","id":"1766048206820610048"}]
  const { data: configList } = await useClientRequest<ResData<any[]>>(`${pageSearchApi.getConfigList}`, {
    query: {
      keyWord: 'torrent'
    }
  });

  //
  const {
    data: searchData,
    pending,
    refresh,
    error
  } = await useAsyncData<ResData<NormalPageParseOut> | null>('bt-search-by-keyword', () => {
    if (form.keyword && form.configId) {
      return useClientRequest<ResData<NormalPageParseOut>>(pageSearchApi.search, {
        query: {
          keyWord: form.keyword,
          configId: form.configId,
          page: route.query.page ?? 1
        }
      });
    }

    return Promise.resolve(null); // 如果参数无效，返回一个resolved的Promise
  });

  title.value = `${form.keyword ?? ''} 搜索结果`;
  //搜素
  async function onSearch(page?: number) {
    if (!form.keyword) {
      ElMessage({
        message: '请输入关键字',
        type: 'error'
      });
      return;
    }

    if (!form.configId) {
      ElMessage({
        message: '请选择引擎',
        type: 'error'
      });
      return;
    }

    form.page = page;
    await navigateTo({
      path: route.path,
      query: {
        keyword: form.keyword,
        configId: form.configId,
        page: page
      }
    });

    refresh();
    title.value = `${form.keyword} 搜索结果`;
  }

  //翻页
  async function handleCurrentChange(page: number) {
    await onSearch(page);
  }

  onMounted(() => {
    if (form.keyword && form.configId) {
      refresh();
    }
  });
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
