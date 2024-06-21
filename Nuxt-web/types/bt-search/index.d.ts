interface NormalPageParseOut {
  // 搜索结果集合
  results: NormalPageParseItem[];
  // 页面特征码
  pageMd5: string;
  // 搜索结果
  resultName: string;
  // 详情Url
  detailUrl: string;
  // 是否完结
  isEnd: boolean;
  // 海报Url
  imgUrl: string;
  // 年份
  videoYear: number;
}

interface NormalPageParseItem {
  // 结果Url
  resultUrl: string;
  // 结果名称
  resultName: string;
}
