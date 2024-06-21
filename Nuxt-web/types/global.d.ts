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

  //全局资源
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

  //友链
  interface LinkItem {
    // 友链名
    linkName: string;
    // Url
    linkUrl: string;
  }

  //banner
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

  //导航
  interface NavItem {
    // 显示名
    showName: string;
    // 是否Url直接跳转
    isUrl: boolean;
    // 值|Url
    value: string;
  }

  //筛选
  interface QueryFilterItem {
    // 过滤类型
    filterType: FilterTypeEnum;
    // 显示名
    showName: string;
    // 过滤值
    filterValue: string;
  }

  //首页item
  interface HomeDataItem {
    typeValue: string;
    typeName: number;
    isUrl: boolean;
    typeDataItems: VodItem[];
  }
}
