import { isArray } from '~/utils/tool';
import qs from 'qs';

type FetchType = typeof $fetch;
export type FetchOptions = Parameters<FetchType>[1];

//客户端直接请求 就是浏览器直接请求
export const useClientRequest = <T = unknown>(url: string, opts?: FetchOptions) => {
  const cookieToken = useCookie<string | undefined>('token');
  const stateToken = useToken();

  const runtimeConfig = useRuntimeConfig();

  const defaultOptions: FetchOptions = {
    baseURL: runtimeConfig.public.clientApiBase,
    onRequest({ options }) {
      options.headers = (options.headers || {}) as { [key: string]: string };
      if (cookieToken.value) {
        options.headers.Authorization = 'Bearer ' + cookieToken.value;
      } else if (stateToken.value) {
        options.headers.Authorization = stateToken.value;
      }
    },
    onResponse({ response }) {
      if (+response.status === 200 && !response._data.isSuccess) {
        ElMessage.error(response._data.msg ?? '请求无效-client');
      }
    },
    onResponseError({ response }) {
      ElMessage.error((isArray(response._data.msg) ? response._data.msg[0] : response._data.msg) ?? '错误');
    }
  };

  // 处理 GET 请求的查询参数
  if (opts?.query) {
    const queryString = qs.stringify(opts.query, { arrayFormat: 'indices', allowDots: true });
    url += `?${queryString}`;
    // 移除 opts.params，因为我们已经手动处理了查询字符串
    delete opts.query;
  }

  return $fetch<T>(url, { ...defaultOptions, ...opts });
};
