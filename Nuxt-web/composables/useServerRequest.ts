import { useFetch, UseFetchOptions } from '#app';
import { isArray } from '~/utils/tool';

//服务端请求可以在页面加载之前完成，适用于需要在页面渲染之前获取数据的场景。
export const useServerRequest = <T>(url: string, opts?: UseFetchOptions<T, unknown>) => {
  const token = useCookie<string | undefined>('token');
  const runtimeConfig = useRuntimeConfig();

  const defaultOptions: UseFetchOptions<unknown> = {
    baseURL: runtimeConfig.public.apiBase,
    onRequest({ options }) {
      options.headers = (options.headers || {}) as { [key: string]: string };
      if (token.value) {
        options.headers.Authorization = 'Bearer ' + token.value;
      }
    },
    onResponse({ response }) {
      if (+response.status === 200 && !response._data.isSuccess) {
        process.client && ElMessage.error(response._data.msg);
      }
    },
    onResponseError({ response }) {
      process.client &&
        ElMessage.error((isArray(response._data.msg) ? response._data.msg[0] : response._data.msg) ?? '错误');
    }
  };

  return useFetch<T>(url, { ...defaultOptions, ...opts } as any);
};
