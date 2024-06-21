//影片系列
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
