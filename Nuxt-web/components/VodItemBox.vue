<template>
  <div class="video-list">
    <el-row :gutter="20">
      <el-col v-for="item in vodItems" :key="item.id" :sm="4" :xs="12">
        <div class="video-list__block">
          <a :href="`/vod-detail/${item.mainId ?? item.id}`" class="img-box">
            <kyd-img-box :imgUrl="item.videoImg" />
            <span v-if="item.videoDouBan">{{ +item.videoDouBan === 0 ? '无评分' : item.videoDouBan.toFixed(1) }}</span>
          </a>
          <div class="video-list__detail">
            <h4 class="title text-overflow" :title="item.keyWord">
              {{ item.videoYear > 0 ? item.videoYear : '' }} {{ item.keyWord }}
            </h4>
            <p class="text-overflow" v-if="item.createdTime">
              {{ $formatTimeDifference(item.modifyTime ?? item.createdTime) }}
              <!-- <template v-for="actor in item.casts"> {{ actor.actor.name }}&nbsp; </template> -->
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    vodItems: {
      type: Array<VodItem>,
      default: () => []
    }
  });

  defineOptions({
    name: 'VodItemBox'
  });
</script>

<style lang="scss">
  .video-list {
    &__block {
      padding: 10px 0;
      &__img {
        width: 100%;
        height: 218px;
      }
      .img-box {
        position: relative;
        height: 218px;
        display: block;
        img {
          border-radius: 5px;
        }
        span {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          line-height: 30px;
          left: 0;
          display: inline-block;
          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
          color: #fff;
          font-size: 12px;
          text-align: right;
          padding-right: 10px;
          box-sizing: border-box;
        }
      }
    }

    &__detail {
      .title {
        font-size: 14px;
        color: #333;
        padding-top: 10px;
      }

      p {
        min-height: 19px;
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 5px;
        color: #999;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .video-list {
      &__block {
        &__img,
        .img-box {
          height: 170px;
        }
      }
    }
  }
</style>
