import { baseInfoApi, homeApi, vodApi } from '~/api/httpApi';

/** 用户信息 **/
export const useToken = () =>
  useState<string>('token', () => {
    const token = useCookie<string | undefined>('token');
    return token.value ? 'Bearer ' + token.value : '';
  });

/** 登录弹层显示状态 */
export const useLoginDialogVisible = () => useState<boolean>('loginDialogVisible', () => false);

/** 注册弹层显示状态 */
export const useRegDialogVisible = () => useState<boolean>('regDialogVisible', () => false);

/** 找回弹层显示状态 */
export const useFindDialogVisible = () => useState<boolean>('findDialogVisible', () => false);

/** 提交录入弹窗状态 */
export const useVodInputVisible = () => useState<boolean>('vodInputVisible', () => false);

/** 全局通知状态 */
export const useTipMsgVisible = () =>
  useState<boolean>('tipMsgVisible', () => {
    const token = useCookie<boolean | undefined>('tipMsgVisible');
    return token.value == undefined ? true : token.value;
  });

//全局资源
export const useGlobalConfig = () => {
  const config = useState<GetAllResourceDto | undefined>('globalConfig', () => undefined);
  const fetchConfig = async () => {
    if (process.server) {
      const { data: resData } = await useServerRequest<ResData<GetAllResourceDto>>(baseInfoApi.getResource);
      config.value = resData.value?.data;
    } else {
      const resData = await useClientRequest<ResData<GetAllResourceDto>>(baseInfoApi.getResource);
      config.value = resData.data;
    }
  };
  const { refresh } = useAsyncData('globalConfigFetch', fetchConfig, { immediate: false });

  if (!config.value) {
    fetchConfig();
  }

  return {
    config,
    refresh
  };
};

//首页数据
export const useHomeData = () => {
  const homeData = useState<HomeDataItem[] | undefined>('home-data', () => undefined);
  const fetchConfig = async () => {
    if (process.server) {
      const { data: resData } = await useServerRequest<ResData<HomeDataItem[]>>(homeApi.getHomeData);
      homeData.value = resData.value?.data;
    } else {
      const resData = await useClientRequest<ResData<HomeDataItem[]>>(homeApi.getHomeData);
      homeData.value = resData.data;
    }
  };
  const { refresh } = useAsyncData('home-data', fetchConfig, { immediate: false, lazy: true });

  if (!homeData.value) {
    fetchConfig();
  }

  return {
    homeData,
    refresh
  };
};

//详情
export const useDetailData = (id: string) => {
  const key = `vod-detail-data:${id}`;
  const detailData = useState<ResData<VodDetail> | null>(key, () => null);
  const fetchConfig = async () => {
    if (process.server) {
      const { data: resData } = await useServerRequest<ResData<VodDetail>>(`${vodApi.getDetail}/${id}`);
      detailData.value = resData.value;
    } else {
      const resData = await useClientRequest<ResData<VodDetail>>(`${vodApi.getDetail}/${id}`);
      detailData.value = resData;
    }
  };
  const { refresh } = useAsyncData(key, fetchConfig, { immediate: false, lazy: true });

  if (!detailData.value) {
    refresh();
  }

  return {
    detailData,
    refresh
  };
};

//播放详情
export const useEpDetailData = (id: string) => {
  const key = `vod-ep-detail-data:${id}`;
  const resultEpDetailData = useState<ResData<GetEpisodeInfoDto> | null>(key, () => null);

  const fetchConfig = async () => {
    if (process.server) {
      const { data: resData } = await useServerRequest<ResData<GetEpisodeInfoDto>>(`${vodApi.getEpDetail}/${id}`);
      resultEpDetailData.value = resData.value;
    } else {
      const resData = await useClientRequest<ResData<GetEpisodeInfoDto>>(`${vodApi.getEpDetail}/${id}`);
      resultEpDetailData.value = resData;
    }
  };
  const { refresh } = useAsyncData(key, fetchConfig, { immediate: false, lazy: true });
  if (!resultEpDetailData.value) {
    refresh();
  }

  return {
    epDetailData: resultEpDetailData,
    refresh
  };
};
