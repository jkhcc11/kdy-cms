//详情(全)
interface VodDetail extends ResBase, BaseEntityDto<string> {
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
    | 'subtypeVal'
    | 'id'
    | 'keyWord'
    | 'orderBy'
    | 'isEnd'
    | 'videoImg'
    | 'aks'
    | 'videoDouBan'
    | 'videoYear'
    | 'videoInfoUrl'
  > {}

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

//剧集
interface VideoEpisodeDto extends BaseEntityDto<string> {
  // 剧集Url
  episodeUrl: string;
  // 剧集名
  episodeName: string;
  // 排序
  // 越大越考前
  orderBy: number;
}

//剧集详情
interface GetEpisodeInfoDto extends BaseEntityDto<string> {
  playerHost: string;
  // 剧集Url
  episodeUrl: string;
  // 剧集名
  episodeName: string;
  // 剧集组
  videoEpisodeGroup: VideoEpisodeGroupDto;
  // 影片信息
  videoMainInfo: VodItem;
}