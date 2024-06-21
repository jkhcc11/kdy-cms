export {};

declare global {
  //api统一返回格式
  interface ResOptions<T> {
    code: number;
    msg: string;
    data: T;
    isSuccess: boolean;
  }

  //分页
  interface PageOptions<T> {
    dataCount: number;
    data: T;
  }

  type ResPage<T> = Omit<ResOptions<PageOptions<T>>>;

  type ResData<T> = ResOptions<T>;

  interface BaseEntityDto<TKey> {
    id: TKey;
  }

  //基础
  interface ResBase {
    createdTime: string;
    modifyTime: string;
  }

  //影片扩展
  interface VideoMainInfoDto extends ResBase {
    // 影片类型 武侠，动作等
    videoGenres: string;
    // 描述
    videoSummary: string;
    // 主演
    videoCasts: string;
    // 导演
    videoDirectors: string;
    // 国家
    // 多个以 ，隔开
    videoCountries: string;
    // 解说Url
    narrateUrl: string;
    // 版权跳转Url
    banVideoJumpUrl: string;
  }

  //影片系列
  interface QueryVideoSeriesDto extends ResBase {
    // 系列名
    seriesName: string;
    // 海报
    seriesImg: string;
    // 备注
    seriesRemark: string;
    // 排序
    orderBy: number;
    // 直播Url
    liveUrl: string;
    // 系列简介url
    seriesDesUrl: string;
  }

  //用户历史记录
  interface QueryUserHistoryDto extends ResBase {
    // 主表主键Key
    keyId: number;
    // 剧集Key
    epId: number;
    // 剧集名
    epName: string;
    // 影片名
    vodName: string;
    // 播放地址
    vodUrl: string;
  }

  //剧集分组
  interface VideoEpisodeGroupDto extends BaseEntityDto<string> {
    // 剧集组名
    groupName: string;
    // 剧集组状态
    episodeGroupStatus: EpisodeGroupStatusEnum;
    // 剧集组类型
    episodeGroupType: EpisodeGroupTypeEnum;
    // 排序
    // 越大越考前
    orderBy: number;
    // 剧集
    episodes: VideoEpisodeDto[];
  }

  interface VideoEpisodeDto extends BaseEntityDto<string> {
    // 剧集Url
    episodeUrl: string;
    // 剧集名
    episodeName: string;
    // 排序
    // 越大越考前
    orderBy: number;
  }

  interface GetAllResourceDto {
    // 全局导航配置
    navItems: NavItem[];
    // Banner
    bannerItems: BannerItem[];
    // 筛选项
    queryFilterItems: QueryFilterItem[];
    // 友链
    linkItems: LinkItem[];
    // 全局通知信息
    tipMsg: string;
  }

  interface LinkItem {
    // 友链名
    linkName: string;
    // Url
    linkUrl: string;
  }

  interface BannerItem {
    // 名称
    bannerName: string;
    // 地址
    url: string;
    // 图片Url
    imgUrl: string;
    // Banner类型 todo:枚举
    bannerType: number;
  }

  interface NavItem {
    // 显示名
    showName: string;
    // 是否Url直接跳转
    isUrl: boolean;
    // 值|Url
    value: string;
  }

  interface QueryFilterItem {
    // 过滤类型
    filterType: FilterTypeEnum;
    // 显示名
    showName: string;
    // 过滤值
    filterValue: string;
  }

  interface GetEpisodeInfoDto extends BaseEntityDto<string> {
    playerHost: string;
    // 剧集Url
    episodeUrl: string;
    // 剧集名
    episodeName: string;
    // 剧集组
    videoEpisodeGroup: VideoEpisodeGroupDto;
    // 影片信息
    videoMainInfo: VideoMainDto;
  }

  interface VideoMainDto extends BaseEntityDto<string> {
    // 影片类型
    subtype: Subtype;
    // 影片类型
    subtypeVal: string;
    // 是否完结
    isEnd: boolean;
    // 视频名称
    keyWord: string;
    // 海报
    videoImg: string;
    // 影片状态
    videoMainStatus: VideoMainStatus;
  }

  interface QueryVideoSeriesDto extends BaseEntityDto<string> {
    // 系列名
    seriesName: string;
    // 海报
    seriesImg: string;
    // 备注
    seriesRemark: string;
    // 排序
    orderBy: number;
    // 直播Url
    liveUrl: string;
    // 系列简介url
    seriesDesUrl: string;
  }

  interface QueryVideoSeriesListDto {
    //影片
    videoMain: VodItem;
    //系列
    videoSeries: QueryVideoSeriesDto;
  }

  interface QueryUserSubscribeDto extends BaseEntityDto<string>, ResBase {
    // 业务Id
    // 影片Id、小说Id
    businessId: number;
    // 业务特征码
    businessFeature: string;
    // 用户邮箱
    userEmail: string;
    // 用户订阅类型
    userSubscribeType: number;
    // 业务信息
    businessItems: UserSubscribeBusinessItem;
  }

  interface UserSubscribeBusinessItem extends BaseEntityDto<string> {
    // 影片类型
    subtype: Subtype;
    // 影片类型Str
    subtypeStr: string;
    // 是否完结
    isEnd: boolean;
    // 视频名称
    keyWord: string;
    // 海报
    videoImg: string;
    // 影片状态
    videoMainStatus: VideoMainStatus;
    // 又名
    // 多个名称，逗号隔开
    aka: string;
    // 年份
    videoYear: number;
    // 影片主表 扩展信息
    videoMainInfo: VideoMainInfoDto;
  }

  interface QueryUserHistoryDto extends BaseEntityDto<string>, ResBase {
    // 主表主键Key
    keyId: number;
    // 剧集Key
    epId: number;
    // 剧集名
    epName: string;
    // 影片名
    vodName: string;
    // 播放地址
    vodUrl: string;
    // 用户名
    userName: string;
  }

  // interface ColumnItem extends ResBase {
  //   id: number;
  //   name: string;
  //   type: string;
  //   value: string;
  //   order: number;
  //   status: string;
  // }

  //详情(全)
  interface VodDetail extends ResBase {
    id: string;
    subtype: SubtypeEnum;
    subtypeVal: string;
    orderBy: number;
    isEnd: boolean;
    keyWord: string;
    videoImg: string;
    videoMainStatus: VideoMainStatusEnum;
    ask: string;
    videoYear: number;
    videoInfoUrl: string;
    isSubscribe: boolean;
    subscribeId: string;
    videoDouBan: number;
    videoMainInfo: VideoMainInfoDto;
    episodeGroup: VideoEpisodeGroupDto[];
    videoSeries?: QueryVideoSeriesDto;
    newUserHistory?: QueryUserHistoryDto;
  }

  //影片Item
  interface VodItem
    extends Pick<
      MovieItem,
      | 'subtype'
      | 'id'
      | 'keyWork'
      | 'orderBy'
      | 'isEnd'
      | 'videoImg'
      | 'aks'
      | 'videoDouBan'
      | 'videoYear'
      | 'videoInfoUrl'
    > {}

  // interface RankMovieItem
  //   extends Pick<MovieItem, 'updateTime' | 'id' | 'title' | 'columnValue' | 'currentEpisode' | 'theEnd' | 'moviePv'> {}
  // interface LeaderboardItem {
  //   weekRank: RankMovieItem[];
  //   mouthRank: RankMovieItem[];
  // }
  // interface CastListItem {
  //   id: number;
  //   role: string;
  //   actorId: number;
  //   actorAvatar: string;
  //   actorName: string;
  //   actorGender: string;
  //   actorBirthday: string;
  //   countryName: string;
  //   professionId: number;
  //   professionName: string;
  //   professionMpath: string;
  // }

  //首页item
  interface HomeDataItem {
    typeValue: string;
    typeName: number;
    isUrl: boolean;
    typeDataItems: VodItem[];
  }
}
