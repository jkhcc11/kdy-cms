<template>
  <div class="container user-index">
    <Head>
      <Title>{{ $titleRender('个人中心') }}</Title>
      <Style type="text/css" children="body { background-color: #f7f7f7; }" />
    </Head>
    <el-row :gutter="30" class="mt-20">
      <el-col :md="6" :xs="24">
        <UserInfoData />
      </el-col>
      <el-col :md="18" :xs="24" class="bg-fff">
        <el-tabs v-model="activeName">
          <el-tab-pane label="我的收藏" name="collect">
            <collect-data />
          </el-tab-pane>
          <el-tab-pane label="我的反馈" name="feedback">
            <feed-back-data />
          </el-tab-pane>
          <el-tab-pane label="播放记录" name="history">
            <user-history-data />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import CollectData from '@/components/user/CollectData.vue';
  import FeedBackData from '@/components/user/FeedBackData.vue';
  import UserHistoryData from '@/components/user/UserHistoryData.vue';
  import UserInfoData from '~/components/user/UserInfoData.vue';
  definePageMeta({
    middleware: ['auth']
  });

  const activeName = ref<string>('collect');
</script>

<style lang="scss" scoped>
  .user-index {
    .integral {
      margin: 10px 0;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #f66c25;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .user-index {
      .integral {
        margin: 10px -15px;
      }
    }
  }
</style>
