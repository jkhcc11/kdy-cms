//用户订阅
interface QueryUserSubscribeDto extends BaseEntityDto<string>, ResBase {
  // 业务Id
  // 影片Id、小说Id
  businessId: string;
  // 业务特征码
  businessFeature: string;
  // 用户邮箱
  userEmail: string;
  // 用户订阅类型
  userSubscribeType: number;
  // 业务信息
  businessItems: UserSubscribeBusinessItem;
}

//用户订阅Item
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

//用户历史
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
