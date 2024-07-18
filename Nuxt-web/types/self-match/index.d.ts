//用户订阅
interface SelfMatchModel {
  // 用户关键字
  keyWord: string;
  // 用户 输入的年
  inputYear: number;

  //当前步骤
  currentStep: number;

  // 豆瓣DBId
  douBanId: number;
  // 豆瓣详情
  douBanDetailUrl: string;
  //豆瓣标题
  douBanTitle: string;
  //豆瓣海报
  douBanImg: string;
  //豆瓣年
  douBanYear: number;

  //资源-搜索关键字-用户更改的
  zySearchKeyWord: string;
  //资源-标题
  zyVodTitle: string;
  //资源-年
  zyVodYear: number;
  //资源-海报
  zyVodImg: string;
  //资源-是否完结
  zyVodIsEnd: boolean;
  //资源-md5
  zyPageMd5: string;
  //资源-详情
  zyDetailUrl: string;

  //剧集
  epItems: VideoEpisodeDto[];
}
