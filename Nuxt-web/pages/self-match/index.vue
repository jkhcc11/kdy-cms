<template>
  <div class="container kdy_row">
    <el-row :gutter="30" class="mt-20">
      <el-col :md="24" :xs="24">
        <el-card>
          <el-steps :active="useSelfMatch.selfMatch.value.currentStep" finish-status="success">
            <el-step title="确认信息" />
            <el-step title="匹配资源" />
            <el-step title="自助完成" />
          </el-steps>
        </el-card>
      </el-col>
      <el-col :md="24" :xs="24">
        <SearchDouBan v-if="useSelfMatch.selfMatch.value.currentStep == 1" />
      </el-col>
      <el-col :md="24" :xs="24"> <SearchZy v-if="useSelfMatch.selfMatch.value.currentStep == 2" /> </el-col>
      <el-col :md="24" :xs="24"> <ConfirmInfo v-if="useSelfMatch.selfMatch.value.currentStep == 3" /> </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
  import SearchDouBan from '@/components/self-match/SearchDouBan.vue';
  import SearchZy from '@/components/self-match/SearchZy.vue';
  import ConfirmInfo from '@/components/self-match/ConfirmInfo.vue';

  const useSelfMatch = useSelfMatchData();
</script>
