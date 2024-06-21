<template>
  <el-row :gutter="20" class="mt-20 kdy_row">
    <el-col :sm="24">
      <div class="panel_hd between items-center">
        <div class="panel_hd__left">
          <h3 class="title items-center">
            <i :class="categoryItem.cssClass" class="icon-movie-box"></i>
            {{ categoryItem.typeName }}
          </h3>
        </div>
        <div class="panel_hd__right items-center">
          <ul class="items-center">
            <!-- <li v-for="item in categoryItem.genres" :key="item.id" class="hidden-sm-and-down">
              <nuxt-link :to="`/column/${categoryItem.value}/show?t=${item.name}`">{{ item.name }}</nuxt-link>
            </li> -->
            <li>
              <nuxt-link v-if="categoryItem.isUrl" :to="categoryItem.typeValue">
                更多<el-icon><ElIconArrowRight /></el-icon>
              </nuxt-link>
              <nuxt-link v-else :to="`/vod/1/${categoryItem.typeValue}`" class="items-center">
                更多 <el-icon><ElIconArrowRight /></el-icon>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="video-list">
        <el-row :gutter="20">
          <el-col v-for="item in categoryItem.typeDataItems" :key="item.id" :sm="4" :xs="8">
            <div class="video-list__block">
              <a :href="`${item.detailUrl}`" class="img-box">
                <kyd-img-box :imgUrl="item.videoImg" />
                <!-- <el-image lazy class="video-list__block__img" :src="item.videoImg" fit="cover" /> -->
                <span v-if="item.videoDouBan">{{
                  +item.videoDouBan === 0 ? '无评分' : item.videoDouBan.toFixed(1)
                }}</span>
              </a>
              <div class="video-list__detail">
                <h4 class="title text-overflow" :title="item.keyWord">
                  {{ item.videoYear > 0 ? item.videoYear : '' }} {{ item.keyWord }}
                </h4>
                <p class="text-overflow">
                  {{ $formatTimeDifference(item.createdTime) }}
                  <!-- <template v-for="actor in item.casts"> {{ actor.actor.name }}&nbsp; </template> -->
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <!-- <el-col :span="6" class="hidden-sm-and-down">
      <Ranking :title="categoryItem.name + '榜单'" :list="categoryItem.ranks" />
    </el-col> -->
  </el-row>
</template>

<script setup lang="ts">
  defineProps({
    categoryItem: {
      type: Object,
      default: () => ({})
    }
  });

  defineOptions({
    name: 'MovieBox'
  });
</script>

<style lang="scss">
  .panel_hd {
    border-bottom: #eeeeee solid 1px;
    height: 46px;
    margin-bottom: 15px;
    .title {
      font-size: 18px;
      line-height: 24px;

      img {
        margin-right: 10px;
      }
    }
    &__right {
      li {
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 10px;
          background: #eee;
          position: absolute;
          top: 50%;
          transform: translateY(-30%);
          right: 0;
        }
        &:last-child::before {
          display: none;
        }
        a {
          padding: 0 10px;
          color: #999;
          font-size: 14px;
        }
      }
    }
  }

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

  .icon-movie-box {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background: url('../assets/images/icon_1.png') no-repeat;
    background-size: cover;

    &.new-movie {
      background: url('../assets/images/icon_1.png') no-repeat;
      background-size: cover;
    }

    &.new-tv {
      background: url('../assets/images/icon_2.png') no-repeat;
      background-size: cover;
    }
  }
</style>
