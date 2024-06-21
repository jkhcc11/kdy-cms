<template>
  <div class="container index">
    <div class="banner" v-if="config?.bannerItems && config?.bannerItems.length > 0">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in config?.bannerItems" :key="item.bannerName">
          <nuxt-link v-if="+item.bannerType === 0" :to="item.url">
            <kyd-img-box :imgUrl="item.imgUrl" />
          </nuxt-link>
          <a v-else :href="item.url" target="_blank">
            <kyd-img-box :imgUrl="item.imgUrl" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <movie-box v-for="item in homeData" :key="item.typeValue" type="index" :category-item="item" />
    <div class="friendly-link flex items-center mt-20 kdy_row" v-if="config?.linkItems && config?.linkItems.length > 0">
      <img src="../assets/images/icon_26.png" alt="友情链接" />
      友情链接
    </div>
    <div class="friendly-link__content kdy_row">
      <a v-for="(item, index) in config?.linkItems" :key="index" :href="item.linkUrl" target="_blank" class="kdy_a">{{
        item.linkName
      }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    key: route => route.fullPath
  });
  const { config } = useGlobalConfig();
  const { homeData } = useHomeData();
</script>

<style lang="scss">
  .index {
    padding-top: 20px;

    .banner {
      .el-carousel__container {
        height: 380px;
      }

      .el-image {
        height: 380px;
      }

      @media (max-width: 768px) {
        .el-carousel__container {
          height: 200px;
        }

        .el-image {
          height: 200px;
        }
      }
    }

    .friendly-link {
      border-bottom: #eee solid 1px;
      padding: 10px;
      font-size: 18px;
      margin-left: -10px;
      margin-right: -10px;
      > img {
        margin-right: 10px;
      }
      &__content {
        padding: 20px 15px;
        margin-left: -10px;
        margin-right: -10px;
        a {
          padding-right: 15px;
        }
      }
    }
  }
</style>
