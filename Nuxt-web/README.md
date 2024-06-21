
## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### 已知可成功部署环境
-[x] vercel
-[ ] cloudflare Pages 有坑 待踩坑

### 常见问题

1、同一个组件query参数改变，页面未刷新数据

```
definePageMeta({
  key: route => route.fullPath
})
```
