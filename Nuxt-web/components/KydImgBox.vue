<template>
  <el-image lazy class="video-list__block__img" :src="imgUrl" fit="cover">
    <template #error>
      <div class="image-slot">
        <el-image :src="errorDefaultImg" fit="cover" />
      </div>
    </template>
    <template #placeholder>
      <el-image :src="imgLoadingImg" fit="cover" />
    </template>
  </el-image>
</template>

<script lang="ts" setup>
  import { errorDefaultImg, imgLoadingImg } from '~/types/const';
  defineProps({
    imgUrl: {
      type: String,
      default: ''
    }
  });

  defineOptions({
    name: 'KdyImgBox'
  });
</script>
