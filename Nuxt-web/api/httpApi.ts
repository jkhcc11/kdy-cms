//基础数据Api
export const baseInfoApi = {
  getResource: '/kdy-normal/Resource/get-default'
};

//首页
export const homeApi = {
  getHomeData: '/kdy-normal/VideoMain/get-home'
};

//影视Api
export const vodApi = {
  querySearch: '/kdy-normal/VideoMain/query',
  //详情
  getDetail: '/kdy-normal/VideoMain/detail',
  getEpDetail: '/kdy-normal/VideoEpisode/epDetail'
};

//系列Api
export const seriesApi = {
  //查询系列
  querySearch: '/kdy-normal/VideoSeries/querySeries',
  //查询系列影片
  querySeriesList: '/kdy-normal/VideoSeries/querySeriesList',
  getDetail: '/kdy-normal/VideoSeries/getDetail'
};

//用户相关
export const userApi = {
  createCollect: '/kdy-login/UserSubscribe/create',
  cancelCollect: '/kdy-login/UserSubscribe/cancel',
  queryCollect: '/kdy-login/UserSubscribe/query',

  getInfo: '/kdy-login/KdyUser/getInfo',
  modifyPwd: '/kdy-login/KdyUser/modifyPwd',
  modifyInfo: '/kdy-login/KdyUser/modifyInfo',

  queryHistory: '/kdy-login/UserHistory/query',
  createHistory: '/kdy-login/UserHistory/create',

  createFeedback: '/kdy-login/FeedBackInfo/create',
  createWithHelp: '/kdy-login/FeedBackInfo/createWithHelp',
  queryFeedback: '/kdy-normal/FeedBackInfo/getPageList',

  regUser: '/kdy-normal/KdyUser/create',
  login: '/kdy-normal/KdyUser/login',
  sendCode: '/kdy-normal/SendCode/sendCodeByEmail'
};

//页面搜索api
export const pageSearchApi = {
  getConfigList: '/kdy-normal/PageSearchConfig/query-show-config',
  search: '/kdy-normal/PageSearchConfig/search'
};

//播放记录
export const videoHistoryApi = {
  create: '/kdy-normal/VideoHistory/create',
  search: '/kdy-normal/VideoHistory/search'
};
