module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/no-v-html': 'off'
  },
  //解决prettier 换行提示问题 mac和windows换行不一致
  "prettier/prettier":[
    "error",
    {
      "endOfLine":"auto"
    }
  ]
};
