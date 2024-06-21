<template>
  <client-only>
    <el-dialog v-model="tipMsgVisible" title="系统通知" center @close="onClose">
      {{ config?.tipMsg }}
    </el-dialog>
  </client-only>
</template>

<script lang="ts" setup name="LoginPop">
  import { useTipMsgVisible } from '~/composables/states';

  const tipMsgVisible = useTipMsgVisible();
  const { config } = useGlobalConfig();
  const tipMsgVisibleCookie = useCookie<boolean | undefined>('tipMsgVisible');

  function onClose() {
    tipMsgVisibleCookie.value = false;
  }
</script>
