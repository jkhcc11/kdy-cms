//影片类型
export enum SubtypeEnum {
  未知 = 0,
  电影 = 5,
  电视剧 = 6,
  记录片 = 7,
  综艺 = 8,
  动漫 = 9
}

//影片状态
export enum VideoMainStatusEnum {
  正常 = 0,
  禁用 = 1,
  登录 = 2,
  下架 = 10
}

export enum EpisodeGroupStatusEnum {
  使用中 = 0,
  禁用 = 1
}

export enum EpisodeGroupTypeEnum {
  播放 = 1,
  下载 = 2
}

export enum FilterTypeEnum {
  影片分类 = 1,
  影片类型 = 2,
  国家 = 3
}
