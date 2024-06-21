<template>
  <el-button @click="onCopy" :type="btnType" :size="btnSize">{{ showText }}</el-button>
</template>

<script lang="ts" setup>
  import Clipboard from 'clipboard';

  // const buttonRef = ref<HTMLElement | null>(null);
  interface ButtonProps {
    showText: string;
    btnType: string;
    btnSize: string;
    textToCopy: string;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    showText: '复制',
    btnType: 'success',
    btnSize: 'small',
    textToCopy: ''
  });

  function onCopy() {
    const clipboard = new Clipboard('.el-button', {
      text: () => props.textToCopy
    });

    clipboard.on('success', () => {
      ElMessage({
        message: '复制成功',
        type: 'success'
      });
      clipboard.destroy();
    });

    clipboard.on('error', () => {
      ElMessage({
        message: '复制失败，请手动复制',
        type: 'error'
      });
      clipboard.destroy();
    });

    // clipboard.onClick({ currentTarget: buttonRef.value });
  }

  defineOptions({
    name: 'CopyButton'
  });
</script>
