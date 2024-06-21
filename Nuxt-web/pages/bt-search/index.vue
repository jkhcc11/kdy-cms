<template>
  <div class="container mt-20 show">
    <ClientOnly>
      <el-row :gutter="40">
        <el-col :span="24" :xs="24">
          <div class="search-form">
            <el-form :model="form" :inline="true">
              <el-form-item>
                <el-input v-model="form.keyword" placeholder="搜索关键字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="form.configId" placeholder="引擎">
                  <el-option v-for="item in configList" :key="item.id" :label="item.hostName" :value="item.id" />
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSearch" :loading="pending">搜 索</el-button>
              </el-form-item>
            </el-form>
            <el-text class="mx-1" type="warning">注：如果需要在线观看请到主站搜索，此页面只提供下载地址！！</el-text>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="title" name="first">
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
              <el-empty v-else description="无结果，请更换关键字或更换引擎"> </el-empty>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { pageSearchApi, vodApi } from '~/api/httpApi';

  const title = ref('');
  const route = useRoute();
  const activeName = ref('first');
  const form = reactive<{ keyword: string | undefined; configId: string | undefined }>({
    keyword: undefined,
    configId: undefined
  });
  const currentPage = ref<number>(1);

  form.keyword = route.query.keyword as string;
  form.configId = route.query.configId as string;

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
  } = await useAsyncData<ResData<NormalPageParseOut>>('bt-search-by-keyword', () =>
    useClientRequest<ResData<NormalPageParseOut>>(pageSearchApi.search, {
      query: {
        keyWord: form.keyword,
        configId: form.configId
      }
    })
  );

  title.value = `搜索结果`;
  //搜素
  async function onSearch() {
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

    await navigateTo({
      path: route.path,
      query: {
        keyword: form.keyword,
        configId: form.configId
      }
    });

    refresh();
    title.value = `${form.keyword} 搜索结果`;
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
</style>
