<template>
  <div class="error-page">
    <h1>{{ title }}</h1>
    <p v-if="isDev">{{ detailedMessage }}</p>
    <p v-else>{{ simpleMessage }}</p>
    <NuxtLink to="/" class="home-button">回首页</NuxtLink>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useError, useRuntimeConfig } from '#app';

  const error = useError();
  const config = useRuntimeConfig();
  const isDev = computed(() => config.public.isDev);
  const title = computed(() => {
    if (error.value.statusCode >= 400 && error.value.statusCode < 500) {
      return '页面错误，请联系管理员或重试';
    } else if (error.value.statusCode >= 500 && error.value.statusCode < 600) {
      return '服务器错误，请联系管理员或重试';
    } else {
      return `${error.value.statusCode} - 未知错误`;
    }
  });

  const detailedMessage = computed(() => {
    return error.value.message || 'An unexpected error occurred.';
  });

  const simpleMessage = computed(() => {
    if (error.value.statusCode >= 400 && error.value.statusCode < 500) {
      return 'Sorry, there was a problem with your request.';
    } else if (error.value.statusCode >= 500 && error.value.statusCode < 600) {
      return 'Sorry, something went wrong on our end. Please try again later.';
    } else {
      return 'Sorry, an unexpected error occurred.';
    }
  });
</script>

<style scoped>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f8f8;
    color: #333;
    font-family: Arial, sans-serif;
  }

  .error-page h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .error-page p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .home-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    transition: background-color 0.3s;
  }

  .home-button:hover {
    background-color: #0056b3;
  }
</style>
