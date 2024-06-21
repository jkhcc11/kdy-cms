// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // alias: {
  //   '@api': '/api'
  // },
  devtools: { enabled: process.env.DEV_TOOLS || true },
  // css单独文件引用，不使用内联
  experimental: {
    inlineSSRStyles: false
  },
  modules: ['@element-plus/nuxt', 'dayjs-nuxt'],
  css: ['@/assets/css/main.css', 'element-plus/dist/index.css', 'element-plus/theme-chalk/display.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/var.scss";'
        }
      }
    }
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: '看电影-专注老影视 www.kdy666.pro',
      meta: [
        { name: 'keywords', content: '看电影 www.kdy666.pro,视频弹幕站点,冷门经典电影,支持冷门影片补录' },
        {
          name: 'description',
          content: '看电影 www.kdy666.pro 专注老影视、经典、冷门在线播放，在线弹幕观看'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  //运行参数
  runtimeConfig: {
    public: {
      apiBase: '/server',
      clientApiBase: (process.env.BASE_URL || 'http://[::1]:6005') + '/api',
      globalTitle: '看电影'
    }
  },
  nitro: {
    devProxy: {
      '/server': {
        target: process.env.BASE_URL || 'http://[::1]:6005',
        changeOrigin: true
      }
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/server/**': {
        proxy: (process.env.BASE_URL || 'http://[::1]:6005') + '/api/**'
      }
    }
  }
});
