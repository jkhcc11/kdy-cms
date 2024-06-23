<template>
  <div>
    <NuxtLoadingIndicator />
    <header class="header">
      <div class="container between">
        <div class="header__left">
          <nuxt-link to="/" class="logo"> <img src="/assets/images/logo.png" alt="" />看电影</nuxt-link>
          <nav v-if="route.path.indexOf('/user') === -1" class="hidden-sm-and-down">
            <ul>
              <li :class="route.path === '/' ? 'active' : ''"><NuxtLink to="/">首页</NuxtLink></li>
              <li
                v-for="(item, index) in config?.navItems"
                :key="index"
                :class="route.path === item.value ? 'active' : ''"
              >
                <nuxt-link v-if="!item.isUrl" :to="item.value">{{ item.showName }}</nuxt-link>
                <nuxt-link v-if="item.isUrl" :to="item.value" target="_blank">{{ item.showName }}</nuxt-link>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <el-link>其他</el-link>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>
                        <nuxt-link to="/bt-search">万能搜索</nuxt-link>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <nuxt-link to="/real-rank">他们正在看</nuxt-link>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </li>
            </ul>
          </nav>
        </div>
        <div v-if="route.path !== '/search'" class="header__right items-center">
          <el-input
            v-model="searchValue"
            class="w-50 m-2 mr-5"
            placeholder="请输入搜索的影视名"
            :suffix-icon="ElIconSearch"
            @keyup.enter="handleSearch"
          />
          <ClientOnly>
            <template v-if="token">
              <el-dropdown @command="handleCommand">
                <el-button circle :icon="ElIconUserFilled" color="#155FAA"></el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="user">个人中心</el-dropdown-item>
                    <el-dropdown-item command="vodInput">求片提交</el-dropdown-item>
                    <el-dropdown-item divided command="logOut">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
            <template v-else>
              <el-button circle :icon="ElIconUserFilled" @click="goLogin"></el-button>
            </template>
          </ClientOnly>
        </div>
      </div>
      <div v-if="route.path.indexOf('/user') === -1" class="mobile-nav hidden-sm-only hidden-sm-and-up">
        <ul>
          <li v-for="(item, index) in config?.navItems" :key="index" :class="route.path === item.value ? 'active' : ''">
            <nuxt-link v-if="!item.isUrl" :to="item.value">{{ item.showName }}</nuxt-link>
            <nuxt-link v-if="item.isUrl" :to="item.value" target="_blank">{{ item.showName }}</nuxt-link>
          </li>
          <li>
            <el-dropdown trigger="click">
              <el-link style="margin-top: -4px">其他</el-link>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <nuxt-link to="/bt-search">万能搜索</nuxt-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <nuxt-link to="/real-rank">他们正在看</nuxt-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
    <div class="header__height__placeholder"></div>
    <slot />
    <div class="container default__text-muted">
      本站所有信息均采集于互联网， 本站仅供测试和学习交流。请大家支持正版。<br />
      若本站收录的节目无意侵犯了贵司版权,请给1549930804@qq.com留言,本站将于24小时内删除。<br />
    </div>
    <footer>Copyright {{ $dayjs().format('YYYY') }} KDY All Rights Reserved. 防走丢鹅群：128931211</footer>
    <LoginPop />
    <VodInputBox />
    <el-backtop />
    <TipMsgBox v-if="config?.tipMsg" />
  </div>
</template>

<script setup lang="ts">
  import LoginPop from '~/components/LoginPop.vue';
  import VodInputBox from '~/components/VodInputBox.vue';
  import TipMsgBox from '~/components/TipMsgBox.vue';
  import { userApi } from '~/api/httpApi';
  const tokenCookie = useCookie<string | undefined>('token');
  const token = useToken();
  const route = useRoute();
  const loginDialogVisible = useLoginDialogVisible();
  const vodInputVisible = useVodInputVisible();

  const searchValue = ref('');

  //导航分类
  const { config, refresh } = useGlobalConfig();
  // refresh();

  // const { data: resData } = await useServerRequest<any>(baseInfoApi.getResource);
  // allData.navItems = resData.value.data.navItems;
  // console.log('allData', allData);
  // const { data: navigation } = await useServerRequest('/column/all', {
  //   query: { status: 0 }
  // });

  //导航搜索
  function handleSearch() {
    navigateTo('/search?keyword=' + searchValue.value);
  }

  //登录
  function goLogin() {
    loginDialogVisible.value = true;
  }

  function handleCommand(command: string) {
    switch (command) {
      case 'logOut':
        logOut();
        break;
      case 'vodInput': {
        vodInputVisible.value = true;
        break;
      }
      default:
        navigateTo('/user');
        break;
    }
  }

  //退出
  function logOut() {
    useClientRequest(userApi.logOut)
      .then(res => {
        if (route.path.includes('/user')) {
          navigateTo('/');
        }
      })
      .finally(() => {
        tokenCookie.value = undefined;
        token.value = '';
      });
  }

  // onMounted(async () => {
  //   if (!config.value) {
  //     await refresh();
  //   }
  // });
</script>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 55px;
    background-color: $drak-blue;

    &__left {
      display: flex;
      .logo {
        display: flex;
        width: 150px;
        height: 55px;
        line-height: 55px;
        font-size: 24px;
        color: $active-color;
        font-weight: bold;
        background-position: 50% 50% !important;
        background-size: cover !important;
        overflow: hidden;
        img {
          height: 35px;
          border-radius: 35px;
          margin-top: 10px;
        }
      }

      nav {
        ul {
          display: flex;
          li {
            a {
              display: inline-block;
              height: 55px;
              line-height: 55px;
              font-size: 15px;
              padding: 0 20px;
              color: #fff;
            }
            &.active {
              a {
                background-color: #155faa;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .header__height__placeholder {
    height: 55px;
  }

  footer {
    padding: 10px 0;
    text-align: center;
  }

  .default__text-muted {
    padding: 10px 0 0;
    color: #999999;
    text-align: center;
  }

  @media only screen and (max-width: 991px) {
    .header {
      position: relative;

      .mobile-nav {
        border-top: $light-gray solid 1px;
        background: $drak-blue;
        position: absolute;
        height: 46px;
        bottom: -46px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        box-sizing: border-box;
        padding-top: 8px;
        z-index: 9;
        &::-webkit-scrollbar {
          display: none;
        }
        ul {
          white-space: nowrap;
          li {
            display: inline-block;
            position: relative;
            &.active {
              a {
                color: #1583f3;
              }
            }
            a {
              display: inline-block;
              padding: 5px 19px;
              color: #ffffff;
              font-size: 16px;
            }
          }
        }
      }
    }
    .header__height__placeholder {
      height: 46px;
    }
  }
</style>
