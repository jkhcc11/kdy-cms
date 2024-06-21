
## 一些ts说明
https://element-plus.org/

- `Omit` 排除字段 `Omit<ColumnMovieItem, 'genres'>` 在ColumnMovieItem移除`genres`
- `Pick` 只取字段 `Pick<ColumnItem, 'name' | 'type' | 'value'>` 只要ColumnItem中的`name|type|value`

### 首页

- 1、banner数据  `/basic/banner/list`


```

{
    "code": 200,
    "msg": "操作成功",
    "rows": [
        {
            "createTime": "2023-08-21T07:17:00.394Z",
            "updateTime": "2023-08-21T07:17:00.394Z",
            "createBy": "",
            "updateBy": "",
            "remark": "",
            "id": 6,
            "img": "http://oss.yinchunyu.com/upload/2023-08-21/1692631009827-109472778-fd3b51818464481ba82d8cffd034c825.jpg",
            "title": "超能一家人",
            "url": "/column/movie/movie/840",
            "urlType": "0"
        },
        ...
    ],
    "total": 5
}


```

- 2、首页数据 `/web/index`

```

{
    "code": 200,
    "msg": "操作成功",
    "data": [
        {
            "name": "电影",
            "type": "1",
            "value": "movie",
            "genres": [
                {
                    "id": 3,
                    "name": "喜剧片"
                },
                {
                    "id": 6,
                    "name": "动作片"
                },
                {
                    "id": 7,
                    "name": "爱情片"
                },
                {
                    "id": 8,
                    "name": "科幻片"
                },
                {
                    "id": 9,
                    "name": "恐怖片"
                },
                {
                    "id": 10,
                    "name": "剧情片"
                },
                {
                    "id": 11,
                    "name": "犯罪片"
                },
                {
                    "id": 12,
                    "name": "战争片"
                },
                {
                    "id": 13,
                    "name": "伦理片"
                }
            ],
            "ranks": [
                {
                    "id": 840,
                    "title": "超能一家人",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 964
                    }
                },
                {
                    "id": 837,
                    "title": "孤注一掷",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 763
                    }
                },
                {
                    "id": 185,
                    "title": "人在囧途",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 660
                    }
                },
                {
                    "id": 32,
                    "title": "钢铁侠",
                    "columnValue": "movie",
                    "episodeCount": 0,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 600
                    }
                },
                {
                    "id": 162,
                    "title": "西虹市首富",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 414
                    }
                },
                {
                    "id": 842,
                    "title": "我经过风暴",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 365
                    }
                },
                {
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 341
                    }
                },
                {
                    "id": 35,
                    "title": "流浪地球",
                    "columnValue": "movie",
                    "episodeCount": 0,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 339
                    }
                },
                {
                    "id": 547,
                    "title": "独行月球",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 287
                    }
                },
                {
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": null,
                    "moviePv": {
                        "pv": 284
                    }
                },
                {
                    "id": 136,
                    "title": "你好，李焕英",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 251
                    }
                },
                {
                    "id": 171,
                    "title": "一出好戏",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 189
                    }
                },
                {
                    "id": 836,
                    "title": "忍者神龟：变种大乱斗",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 165
                    }
                },
                {
                    "id": 134,
                    "title": "绿皮书",
                    "columnValue": "movie",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 157
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-15T02:54:17.278Z",
                    "updateTime": "2023-09-04T01:18:18.000Z",
                    "id": 837,
                    "title": "孤注一掷",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630406370-333390632-WechatIMG172.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 32,
                            "actor": {
                                "name": "申奥"
                            }
                        },
                        {
                            "id": 29,
                            "actor": {
                                "name": "张艺兴"
                            }
                        },
                        {
                            "id": 31,
                            "actor": {
                                "name": "王传君"
                            }
                        },
                        {
                            "id": 30,
                            "actor": {
                                "name": "金晨"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-05T23:50:13.602Z",
                        "updateTime": "2023-09-05T23:50:13.602Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 6,
                        "rate": 6,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-27T23:35:46.244Z",
                    "updateTime": "2023-09-04T01:14:18.000Z",
                    "id": 842,
                    "title": "我经过风暴",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-08-28/1693209164735-622305634-1861693209095_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 39,
                            "actor": {
                                "name": "佟丽娅"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-29T05:46:46.954Z",
                        "updateTime": "2023-08-29T05:46:46.954Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 4,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-21T07:15:59.406Z",
                    "updateTime": "2023-08-21T07:15:59.406Z",
                    "id": 840,
                    "title": "超能一家人",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630870965-143507103-1791692630833_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 36,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-23T05:57:53.407Z",
                        "updateTime": "2023-08-23T05:57:53.407Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 3,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-04T00:05:52.969Z",
                    "updateTime": "2023-08-21T07:08:09.000Z",
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630485871-109009397-WechatIMG173.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 23,
                            "actor": {
                                "name": "费翔"
                            }
                        },
                        {
                            "id": 22,
                            "actor": {
                                "name": "黄渤"
                            }
                        },
                        {
                            "id": 24,
                            "actor": {
                                "name": "乌尔善"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-10-18T13:28:49.222Z",
                        "updateTime": "2023-10-18T13:28:49.222Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 15,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-06T18:29:30.196Z",
                    "updateTime": "2023-08-21T07:07:32.000Z",
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630450619-354312433-1741692630303_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 27,
                            "actor": {
                                "name": "本·维特利"
                            }
                        },
                        {
                            "id": 26,
                            "actor": {
                                "name": "吴京"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-06T06:41:00.034Z",
                        "updateTime": "2023-09-06T06:41:00.034Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 7,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-06T18:38:56.243Z",
                    "updateTime": "2023-08-21T07:07:19.000Z",
                    "id": 836,
                    "title": "忍者神龟：变种大乱斗",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630436199-391468065-1761692630329_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 28,
                            "actor": {
                                "name": "杰夫·罗韦"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-14T23:55:02.664Z",
                        "updateTime": "2023-08-14T23:55:02.664Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 1,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-17T06:38:56.846Z",
                    "updateTime": "2023-08-17T06:38:56.846Z",
                    "id": 838,
                    "title": "八角笼中",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-17/1692283035388-318326761-WechatIMG169.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 33,
                            "actor": {
                                "name": "王宝强"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-17T06:48:42.957Z",
                        "updateTime": "2023-08-17T06:48:42.957Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 2,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-08-08T03:19:27.000Z",
                    "id": 162,
                    "title": "西虹市首富",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630499527-254711455-1771692630361_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 37,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:13:09.000Z",
                    "id": 35,
                    "title": "流浪地球",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-14/1678803187059-386070124-lgDJ6sUeKgbF3V8OawwNvjONEQL4@public.jpeg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 12,
                            "actor": {
                                "name": "吴京"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:12:30.000Z",
                    "id": 136,
                    "title": "你好，李焕英",
                    "poster": "/external/movie/FiVMN4R5YrTJ25EdycHL0m53683S@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:12:12.000Z",
                    "id": 171,
                    "title": "一出好戏",
                    "poster": "/external/movie/Ft4cFOItKxiJFW2QEt8tYHshgQ7m@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-12T00:49:02.000Z",
                    "id": 32,
                    "title": "钢铁侠",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-08/1678266753842-457627090-p2888647044 (2).jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 9,
                            "actor": {
                                "name": "小罗伯特·唐尼"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-10-19T02:44:44.850Z",
                        "updateTime": "2023-10-19T02:44:44.850Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 19,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                }
            ]
        },
        {
            "name": "电视剧",
            "type": "1",
            "value": "tv",
            "genres": [
                {
                    "id": 14,
                    "name": "国产剧"
                },
                {
                    "id": 15,
                    "name": "港剧"
                },
                {
                    "id": 16,
                    "name": "台湾剧"
                },
                {
                    "id": 17,
                    "name": "韩剧"
                },
                {
                    "id": 18,
                    "name": "日剧"
                },
                {
                    "id": 19,
                    "name": "泰剧"
                },
                {
                    "id": 20,
                    "name": "欧美剧"
                },
                {
                    "id": 21,
                    "name": "海外剧"
                }
            ],
            "ranks": [
                {
                    "id": 839,
                    "title": "大宋少年志2",
                    "columnValue": "tv",
                    "episodeCount": 27,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 358
                    }
                },
                {
                    "id": 33,
                    "title": "陈情令",
                    "columnValue": "tv",
                    "episodeCount": 50,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 249
                    }
                },
                {
                    "id": 209,
                    "title": "如懿传",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 215
                    }
                },
                {
                    "id": 196,
                    "title": "香蜜沉沉烬如霜",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 187
                    }
                },
                {
                    "id": 190,
                    "title": "庆余年 第一季",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 170
                    }
                },
                {
                    "id": 36,
                    "title": "顶斗的季节",
                    "columnValue": "tv",
                    "episodeCount": 20,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 154
                    }
                },
                {
                    "id": 198,
                    "title": "亲爱的，热爱的",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 150
                    }
                },
                {
                    "id": 195,
                    "title": "长安十二时辰",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 146
                    }
                },
                {
                    "id": 193,
                    "title": "斗罗大陆",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 144
                    }
                },
                {
                    "id": 194,
                    "title": "你微笑时很美",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 140
                    }
                },
                {
                    "id": 189,
                    "title": "琅琊榜",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 137
                    }
                },
                {
                    "id": 192,
                    "title": "武林外传",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 128
                    }
                },
                {
                    "id": 191,
                    "title": "白夜追凶",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 126
                    }
                },
                {
                    "id": 188,
                    "title": "陈情令",
                    "columnValue": "tv",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 123
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-20T17:51:39.860Z",
                    "updateTime": "2023-09-08T07:14:55.000Z",
                    "id": 839,
                    "title": "大宋少年志2",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692582601473-481255011-WechatIMG170.png",
                    "columnValue": "tv",
                    "casts": [
                        {
                            "id": 35,
                            "actor": {
                                "name": "周雨彤"
                            }
                        },
                        {
                            "id": 34,
                            "actor": {
                                "name": "王飞"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-08T07:11:29.218Z",
                        "updateTime": "2023-09-08T07:11:29.218Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 8,
                        "rate": 6,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-09T22:32:53.000Z",
                    "updateTime": "2023-08-08T20:09:32.000Z",
                    "id": 196,
                    "title": "香蜜沉沉烬如霜",
                    "poster": "/external/movie/FhfF6Ir1W5d449iLXO_YuE_IZWed@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-20T22:32:53.856Z",
                    "updateTime": "2023-07-02T17:59:00.000Z",
                    "id": 209,
                    "title": "如懿传",
                    "poster": "/external/movie/ls57ScHajzp9Nz33DA3xOChhqKlY@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 193,
                    "title": "斗罗大陆",
                    "poster": "/external/movie/FtzUokfKO9GweKhKHqciw1KjrPsG@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-02-29T23:40:12.123Z",
                        "updateTime": "2024-02-29T23:40:12.123Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 37,
                        "rate": 10,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 190,
                    "title": "庆余年 第一季",
                    "poster": "/external/movie/lieOjIYchmgjRILE1PvV8rXnwHuv@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-10-18T13:33:57.187Z",
                        "updateTime": "2023-10-18T13:33:57.187Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 16,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 33,
                    "title": "陈情令",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-08/1678286172500-777158003-lg6KwxRLqA0nMckvE8Ws6V84fZG1@public.jpeg",
                    "columnValue": "tv",
                    "casts": [
                        {
                            "id": 11,
                            "actor": {
                                "name": "王一博"
                            }
                        },
                        {
                            "id": 10,
                            "actor": {
                                "name": "郑伟文"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 192,
                    "title": "武林外传",
                    "poster": "/external/movie/FoliNi_FnO6a_wHE2LfXaGy3nauq@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 189,
                    "title": "琅琊榜",
                    "poster": "/external/movie/FvKQJ_qhVg7qJlgHkP88NgZGnQM7@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-11-15T00:56:05.900Z",
                        "updateTime": "2023-11-15T00:56:05.900Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 27,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 194,
                    "title": "你微笑时很美",
                    "poster": "/external/movie/FvBDbcgj3bX8K4Od4MpAAwqn14KS@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-02-27T01:35:50.405Z",
                        "updateTime": "2024-02-27T01:35:50.405Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 36,
                        "rate": 10,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 191,
                    "title": "白夜追凶",
                    "poster": "/external/movie/FtfzKc0VB_OcsCXp2W092ihhi1d5@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-11-15T00:54:10.117Z",
                        "updateTime": "2023-11-15T00:54:10.117Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 26,
                        "rate": 9,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 188,
                    "title": "陈情令",
                    "poster": "/external/movie/lg6KwxRLqA0nMckvE8Ws6V84fZG1@public",
                    "columnValue": "tv",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-12-24T21:46:09.736Z",
                        "updateTime": "2023-12-24T21:46:09.736Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 30,
                        "rate": 4,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 36,
                    "title": "顶斗的季节",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-14/1678803651620-917304270-4588dd9f2dc7473da110e5a6f49c477b.jpg",
                    "columnValue": "tv",
                    "casts": [
                        {
                            "id": 13,
                            "actor": {
                                "name": "林秀香"
                            }
                        }
                    ],
                    "movieRate": null
                }
            ]
        },
        {
            "name": "动漫",
            "type": "1",
            "value": "cartoon",
            "genres": [
                {
                    "id": 22,
                    "name": "国产动漫"
                },
                {
                    "id": 23,
                    "name": "日本动漫"
                },
                {
                    "id": 24,
                    "name": "欧美动漫"
                },
                {
                    "id": 25,
                    "name": "海外动漫"
                }
            ],
            "ranks": [
                {
                    "id": 832,
                    "title": "灌篮高手 The First Slam Dunk (2022)",
                    "columnValue": "cartoon",
                    "episodeCount": 1,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 483
                    }
                },
                {
                    "id": 25,
                    "title": "斗破苍穹特别篇1",
                    "columnValue": "cartoon",
                    "episodeCount": 2,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 281
                    }
                },
                {
                    "id": 220,
                    "title": "白蛇：缘起",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 195
                    }
                },
                {
                    "id": 4,
                    "title": "千与千寻",
                    "columnValue": "cartoon",
                    "episodeCount": 0,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 192
                    }
                },
                {
                    "id": 244,
                    "title": "黑猫警长",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 179
                    }
                },
                {
                    "id": 834,
                    "title": "长安三万里",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 161
                    }
                },
                {
                    "id": 281,
                    "title": "你的名字。",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 158
                    }
                },
                {
                    "id": 230,
                    "title": "爵迹",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 128
                    }
                },
                {
                    "id": 325,
                    "title": "神偷奶爸2",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 122
                    }
                },
                {
                    "id": 227,
                    "title": "西游记之大圣归来",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 120
                    }
                },
                {
                    "id": 229,
                    "title": "天书奇谭",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 115
                    }
                },
                {
                    "id": 314,
                    "title": "超能陆战队",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 115
                    }
                },
                {
                    "id": 336,
                    "title": "米芽米咕人",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 114
                    }
                },
                {
                    "id": 228,
                    "title": "哪吒闹海",
                    "columnValue": "cartoon",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 106
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-04-21T05:46:44.484Z",
                    "updateTime": "2023-08-21T07:09:25.000Z",
                    "id": 832,
                    "title": "灌篮高手 The First Slam Dunk (2022)",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630563105-568455556-1781692630529_.pic.jpg",
                    "columnValue": "cartoon",
                    "casts": [
                        {
                            "id": 21,
                            "actor": {
                                "name": "井上雄彦"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-08-04T00:20:52.723Z",
                    "updateTime": "2023-08-21T07:07:49.000Z",
                    "id": 834,
                    "title": "长安三万里",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630465077-67140750-1751692630309_.pic.jpg",
                    "columnValue": "cartoon",
                    "casts": [
                        {
                            "id": 25,
                            "actor": {
                                "name": "谢君伟"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-20T22:36:41.864Z",
                    "updateTime": "2023-07-24T05:05:27.000Z",
                    "id": 244,
                    "title": "黑猫警长",
                    "poster": "/external/movie/FoWiTNGirAlwMhy9GdOI4YDIGkdQ@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-20T22:36:41.530Z",
                    "updateTime": "2023-07-24T05:05:00.000Z",
                    "id": 220,
                    "title": "白蛇：缘起",
                    "poster": "/external/movie/FqOz9uppruxUN9ZieR3aP2qDIueW@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-12T00:50:05.000Z",
                    "id": 25,
                    "title": "斗破苍穹特别篇1",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-02-27/1677488942365-591658223-1677340235453-578665177-260.jpeg",
                    "columnValue": "cartoon",
                    "casts": [
                        {
                            "id": 4,
                            "actor": {
                                "name": "赵丙乐"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 4,
                    "title": "千与千寻",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-03/1677832081824-94627776-p2888647044 (1).jpg",
                    "columnValue": "cartoon",
                    "casts": [
                        {
                            "id": 5,
                            "actor": {
                                "name": "宫崎骏"
                            }
                        },
                        {
                            "id": 7,
                            "actor": {
                                "name": "入野自由"
                            }
                        },
                        {
                            "id": 6,
                            "actor": {
                                "name": "柊瑠美"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-20T22:36:41.696Z",
                    "updateTime": "2023-04-17T14:43:16.000Z",
                    "id": 230,
                    "title": "爵迹",
                    "poster": "/external/movie/FtjgJbGPFoxAcuHNZHkYJzvCGt5q@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-02-08T03:05:01.445Z",
                        "updateTime": "2024-02-08T03:05:01.445Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 35,
                        "rate": 2,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-20T22:36:41.686Z",
                    "updateTime": "2023-04-17T14:43:11.000Z",
                    "id": 229,
                    "title": "天书奇谭",
                    "poster": "/external/movie/Flzy5h1Gy8F2nbdvvoS6MX5AaVS_@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-02-08T03:04:30.051Z",
                        "updateTime": "2024-02-08T03:04:30.051Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 33,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-20T22:36:41.643Z",
                    "updateTime": "2023-04-17T14:43:08.000Z",
                    "id": 228,
                    "title": "哪吒闹海",
                    "poster": "/external/movie/FlI_RtqRr_Fr_L23BmzMte98ESKc@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-12-19T09:36:54.567Z",
                        "updateTime": "2023-12-19T09:36:54.567Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 29,
                        "rate": 6,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-20T22:36:41.566Z",
                    "updateTime": "2023-04-17T14:43:05.000Z",
                    "id": 227,
                    "title": "西游记之大圣归来",
                    "poster": "/external/movie/ll8Cdk8g-n9TMa7PQThqPT9WLra5@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-20T22:36:41.554Z",
                    "updateTime": "2023-04-17T14:43:01.000Z",
                    "id": 225,
                    "title": "大护法",
                    "poster": "/external/movie/FvEnQWoXECSUh1Cbd1dcSRrMHRdG@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-02-08T03:04:52.541Z",
                        "updateTime": "2024-02-08T03:04:52.541Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 34,
                        "rate": 9,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-20T22:36:41.536Z",
                    "updateTime": "2023-04-17T14:42:56.000Z",
                    "id": 222,
                    "title": "深海",
                    "poster": "/external/movie/FvUT0XKE_2zSTXRoynJLc53xUqP2@public",
                    "columnValue": "cartoon",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-10-26T01:19:25.517Z",
                        "updateTime": "2023-10-26T01:19:25.517Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 22,
                        "rate": 1,
                        "rateUserCount": 1
                    }
                }
            ]
        },
        {
            "name": "综艺",
            "type": "1",
            "value": "variety",
            "genres": [
                {
                    "id": 26,
                    "name": "大陆综艺"
                },
                {
                    "id": 27,
                    "name": "日韩综艺"
                },
                {
                    "id": 28,
                    "name": "港台综艺"
                },
                {
                    "id": 29,
                    "name": "欧美综艺"
                }
            ],
            "ranks": [
                {
                    "id": 37,
                    "title": "天天向上",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 181
                    }
                },
                {
                    "id": 276,
                    "title": "奇葩说 第六季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 138
                    }
                },
                {
                    "id": 825,
                    "title": "天桥骄子 第九季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 127
                    }
                },
                {
                    "id": 277,
                    "title": "向往的生活 第一季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 125
                    }
                },
                {
                    "id": 824,
                    "title": "美国之声 第一季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 121
                    }
                },
                {
                    "id": 841,
                    "title": "100万个约定",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 118
                    }
                },
                {
                    "id": 823,
                    "title": "天桥骄子 第十季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 117
                    }
                },
                {
                    "id": 822,
                    "title": "喜剧中心詹姆斯·弗兰科吐槽大会",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 116
                    }
                },
                {
                    "id": 831,
                    "title": "特效化妆师大对决 第四季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 107
                    }
                },
                {
                    "id": 828,
                    "title": "天桥骄子：全明星赛 第一季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 102
                    }
                },
                {
                    "id": 830,
                    "title": "第90届奥斯卡颁奖典礼",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 101
                    }
                },
                {
                    "id": 829,
                    "title": "欧阳万成：好交易",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 97
                    }
                },
                {
                    "id": 251,
                    "title": "声入人心 第一季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 95
                    }
                },
                {
                    "id": 269,
                    "title": "这！就是街舞 第三季",
                    "columnValue": "variety",
                    "episodeCount": null,
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 91
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-21T07:30:35.361Z",
                    "updateTime": "2023-08-21T07:30:35.361Z",
                    "id": 841,
                    "title": "100万个约定",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692631790076-772399268-1801692631755_.pic.jpg",
                    "columnValue": "variety",
                    "casts": [
                        {
                            "id": 38,
                            "actor": {
                                "name": "杨超越"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2024-01-01T19:14:53.918Z",
                        "updateTime": "2024-01-01T19:14:53.918Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 31,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 37,
                    "title": "天天向上",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-14/1678803814533-332383164-986424e23b6c29aa2aa4e72bc9484c5f.jpg",
                    "columnValue": "variety",
                    "casts": [
                        {
                            "id": 14,
                            "actor": {
                                "name": "汪涵"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-01T05:07:37.322Z",
                        "updateTime": "2023-09-01T05:07:37.322Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 5,
                        "rate": 1,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-24T03:58:14.460Z",
                    "updateTime": "2023-05-11T06:07:17.000Z",
                    "id": 825,
                    "title": "天桥骄子 第九季",
                    "poster": "/external/movie/Fr3iiWV8NCwghFZCRRwEezfRmfCO@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.585Z",
                    "updateTime": "2023-03-24T03:58:14.585Z",
                    "id": 831,
                    "title": "特效化妆师大对决 第四季",
                    "poster": "/external/movie/FmQ5zsuaim_4gRIxLg14THBIuebn@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.574Z",
                    "updateTime": "2023-03-24T03:58:14.574Z",
                    "id": 830,
                    "title": "第90届奥斯卡颁奖典礼",
                    "poster": "/external/movie/FgBeYESc_QCgKLQXSnmWqZW0zilw@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.559Z",
                    "updateTime": "2023-03-24T03:58:14.559Z",
                    "id": 829,
                    "title": "欧阳万成：好交易",
                    "poster": "/external/movie/FlTwp2EBQ_AFfCuOiht2SRYcFJsD@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.551Z",
                    "updateTime": "2023-03-24T03:58:14.551Z",
                    "id": 828,
                    "title": "天桥骄子：全明星赛 第一季",
                    "poster": "/external/movie/lsJQU5iyQBiFvG7m3c78acefl8NO@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.532Z",
                    "updateTime": "2023-03-24T03:58:14.532Z",
                    "id": 827,
                    "title": "全美超模大赛 第十九季",
                    "poster": "/external/movie/FnEmYJAjRknojOxFEYAdZh64w9jL@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2024-06-03T00:09:29.879Z",
                        "updateTime": "2024-06-03T00:09:29.879Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 42,
                        "rate": 5,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-24T03:58:14.519Z",
                    "updateTime": "2023-03-24T03:58:14.519Z",
                    "id": 826,
                    "title": "镜花水月 第一季",
                    "poster": "/external/movie/Fn3EfRug-iKUE3KtVkdmcBFODCNL@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.442Z",
                    "updateTime": "2023-03-24T03:58:14.442Z",
                    "id": 824,
                    "title": "美国之声 第一季",
                    "poster": "/external/movie/FiH_SnZqRwlWQO-hZLi_9eiX9Kxl@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.414Z",
                    "updateTime": "2023-03-24T03:58:14.414Z",
                    "id": 823,
                    "title": "天桥骄子 第十季",
                    "poster": "/external/movie/FsxmW30B0zMNF5GdFYgTm-H_zs0b@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-24T03:58:14.400Z",
                    "updateTime": "2023-03-24T03:58:14.400Z",
                    "id": 822,
                    "title": "喜剧中心詹姆斯·弗兰科吐槽大会",
                    "poster": "/external/movie/FjA-qE7U4JCv4u0xswXYgZ_6H7C8@public",
                    "columnValue": "variety",
                    "casts": [],
                    "movieRate": null
                }
            ]
        }
    ]
}

```

- 3、友情链接 `/basic/link/all`

```
{
    "code": 200,
    "msg": "操作成功",
    "data": [
        {
            "createTime": "2023-04-24T03:51:36.138Z",
            "updateTime": "2023-04-24T03:51:36.150Z",
            "createBy": "",
            "updateBy": "",
            "remark": "",
            "id": 2,
            "text": "淳渔CMS",
            "url": "http://cms.yinchunyu.com"
        },
        {
            "createTime": "2023-04-24T03:51:36.138Z",
            "updateTime": "2023-04-24T03:51:36.150Z",
            "createBy": "",
            "updateBy": "",
            "remark": "",
            "id": 3,
            "text": "后台管理",
            "url": "http://cms-admin.yinchunyu.com"
        }
    ]
}
```

- 4、全局配导航配置 `/column/all`

```

{
    "code": 200,
    "msg": "操作成功",
    "data": [
        {
            "createTime": "2023-03-09T19:23:10.107Z",
            "updateTime": "2023-04-21T04:27:09.000Z",
            "createBy": "admin",
            "updateBy": "admin",
            "remark": "",
            "id": 1,
            "name": "电影",
            "type": "1",
            "value": "movie",
            "order": 1,
            "status": "0"
        },
        {
            "createTime": "2023-03-09T19:23:25.987Z",
            "updateTime": "2023-03-09T19:23:25.987Z",
            "createBy": "admin",
            "updateBy": "admin",
            "remark": "",
            "id": 2,
            "name": "电视剧",
            "type": "1",
            "value": "tv",
            "order": 2,
            "status": "0"
        },
        {
            "createTime": "2023-03-09T19:26:01.304Z",
            "updateTime": "2023-03-09T19:26:01.304Z",
            "createBy": "admin",
            "updateBy": "admin",
            "remark": "",
            "id": 4,
            "name": "动漫",
            "type": "1",
            "value": "cartoon",
            "order": 3,
            "status": "0"
        },
        {
            "createTime": "2023-03-09T19:26:13.648Z",
            "updateTime": "2023-03-09T19:26:13.648Z",
            "createBy": "admin",
            "updateBy": "admin",
            "remark": "",
            "id": 5,
            "name": "综艺",
            "type": "1",
            "value": "variety",
            "order": 4,
            "status": "0"
        },
        {
            "createTime": "2023-04-21T09:06:29.030Z",
            "updateTime": "2023-04-21T09:12:45.000Z",
            "createBy": "admin",
            "updateBy": "admin",
            "remark": "",
            "id": 6,
            "name": "源码下载",
            "type": "2",
            "value": "https://github.com/yinMrsir/chunyu-cms",
            "order": 5,
            "status": "0"
        }
    ]
}

```

### 搜索页

- 1、搜索结果 `movie/list`

```
{
    "code": 200,
    "msg": "操作成功",
    "rows": [
        {
            "createTime": "2023-03-21T00:26:12.055Z",
            "updateTime": "2023-03-21T00:26:12.055Z",
            "createBy": "",
            "updateBy": "",
            "remark": "",
            "id": 550,
            "status": 0,
            "releaseStatus": 0,
            "releaseDate": null,
            "title": "变形金刚4：绝迹重生",
            "poster": "/external/movie/FjQigfzFA2SGdVDqpP5lVmLOZMSW@public",
            "bgColor": null,
            "titleEn": null,
            "titleOriginal": "Transformers: Age of Extinction",
            "akas": "变形金刚：歼灭世纪(港),变形金刚4：灭绝时代,变形金刚4,变4,Transformers4",
            "columnValue": "movie",
            "genres": "科幻片",
            "year": null,
            "pubdate": "2014-06-18T16:00:00.000Z",
            "duration": "166",
            "durations": null,
            "versions": null,
            "eggHunt": null,
            "color": null,
            "seasonCount": null,
            "currentSeason": null,
            "episodeCount": null,
            "currentEpisode": null,
            "theEnd": 0,
            "countryIds": "1",
            "languages": "英语",
            "tags": "变形金刚,科幻,美国,动作,2014,美国电影,Transformers,电影",
            "summary": "当年那场惨烈的芝加哥大战，汽车人虽然成功击退了霸天虎的入侵，却也让地球人对他们失去了应有的信任与尊重。由美国中情局组建的“墓风”部队对所有的变形金刚进行无差别的猎杀，一时间汽车人和霸天虎全都在地球不见了踪影。某天，居住在得州的落魄机械发明家凯德·伊格（马克·沃尔伯格 Marky Mark 饰）买回来一辆破旧的卡车车头，谁知那竟是处在休眠中的汽车人首领擎天柱。嗅到气息的墓风部队蜂拥而至，苏醒后的擎天柱救走了凯德一家，也和散落在各个角落的汽车人相继取得联系。另一方面，疯狂的人类科学家从变形金刚的残骸中获知了他们变形的秘密，并企图借此制造出人造金刚，而脱胎自威震天的惊破天正是他们的得意作品以及催命死神。 &lt;br /&gt; 　　新一轮的危机卷土而来，地球面临更大的灾难…… ",
            "isPay": 0,
            "paymentAmount": 0,
            "freeDuration": 1,
            "country": [
                {
                    "id": 1,
                    "name": "中国大陆"
                }
            ],
            "casts": [],
            "moviePv": {
                "pv": 46
            },
            "movieRate": null,
            "movieVideosCount": 0,
            "userCollectsCount": 0
        }
    ],
    "total": 1
}

```

- 2、右边热门 `movie/list`

### 类型页
- 1、大分类展示 `/web/type/xxx`

```
{
    "code": 200,
    "msg": "操作成功",
    "data": [
        {
            "id": 3,
            "name": "喜剧片",
            "ranks": [
                {
                    "id": 840,
                    "title": "超能一家人",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 965
                    }
                },
                {
                    "id": 185,
                    "title": "人在囧途",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 660
                    }
                },
                {
                    "id": 162,
                    "title": "西虹市首富",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 414
                    }
                },
                {
                    "id": 547,
                    "title": "独行月球",
                    "columnValue": "movie",
                    "genres": "科幻片,喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 287
                    }
                },
                {
                    "id": 171,
                    "title": "一出好戏",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 189
                    }
                },
                {
                    "id": 159,
                    "title": "无名之辈",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 125
                    }
                },
                {
                    "id": 180,
                    "title": "羞羞的铁拳",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 116
                    }
                },
                {
                    "id": 158,
                    "title": "我不是药神",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 113
                    }
                },
                {
                    "id": 164,
                    "title": "大话西游之大圣娶亲",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 107
                    }
                },
                {
                    "id": 178,
                    "title": "人再囧途之泰囧",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 104
                    }
                },
                {
                    "id": 184,
                    "title": "北京遇上西雅图",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 99
                    }
                },
                {
                    "id": 163,
                    "title": "让子弹飞",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 95
                    }
                },
                {
                    "id": 186,
                    "title": "西游降魔篇",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 91
                    }
                },
                {
                    "id": 167,
                    "title": "绿皮书",
                    "columnValue": "movie",
                    "genres": "喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 86
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-21T07:15:59.406Z",
                    "updateTime": "2023-08-21T07:15:59.406Z",
                    "id": 840,
                    "title": "超能一家人",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630870965-143507103-1791692630833_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 36,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-23T05:57:53.407Z",
                        "updateTime": "2023-08-23T05:57:53.407Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 3,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-08-08T03:19:27.000Z",
                    "id": 162,
                    "title": "西虹市首富",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630499527-254711455-1771692630361_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 37,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:12:12.000Z",
                    "id": 171,
                    "title": "一出好戏",
                    "poster": "/external/movie/Ft4cFOItKxiJFW2QEt8tYHshgQ7m@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-09T00:26:11.000Z",
                    "updateTime": "2023-05-11T17:49:14.896Z",
                    "id": 547,
                    "title": "独行月球",
                    "poster": "/external/movie/FhJj5H5zwX7re_U9JU7d2aE6-LE7@public",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 19,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-09T22:25:41.000Z",
                    "updateTime": "2023-05-11T17:48:23.454Z",
                    "id": 178,
                    "title": "人再囧途之泰囧",
                    "poster": "/external/movie/Fqh1Ogc8Ksm6sQf7l6Ws4HpYb3Hp@public",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 16,
                            "actor": {
                                "name": "范冰冰"
                            }
                        },
                        {
                            "id": 15,
                            "actor": {
                                "name": "徐峥"
                            }
                        },
                        {
                            "id": 17,
                            "actor": {
                                "name": "黄渤"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-11-10T04:18:21.799Z",
                        "updateTime": "2023-11-10T04:18:21.799Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 24,
                        "rate": 9,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-09T22:25:41.000Z",
                    "updateTime": "2023-05-11T17:48:21.022Z",
                    "id": 185,
                    "title": "人在囧途",
                    "poster": "/external/movie/lokfjOqpqCL2Zo2TYhVMAu7c9OQi@public",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 18,
                            "actor": {
                                "name": "徐峥"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2024-04-09T04:38:17.494Z",
                        "updateTime": "2024-04-09T04:38:17.494Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 40,
                        "rate": 10,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 165,
                    "title": "宇宙探索编辑部",
                    "poster": "/external/movie/FgNfrOG2XIMrecw4VnJ8fq-APApJ@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 161,
                    "title": "大话西游之月光宝盒",
                    "poster": "/external/movie/FshxbZPywm-PJHSVTIcyzsHKOxAv@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 164,
                    "title": "大话西游之大圣娶亲",
                    "poster": "/external/movie/lmoK8caL7vwG7WcxM4PUumijnhRs@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 159,
                    "title": "无名之辈",
                    "poster": "/external/movie/FuKhVZ-Gss_yEPs5E6WmyrILE4k6@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 158,
                    "title": "我不是药神",
                    "poster": "/external/movie/FuFHefDOqRVrgwrTtRjzBakQrke4@public",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 20,
                            "actor": {
                                "name": "徐峥"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 163,
                    "title": "让子弹飞",
                    "poster": "/external/movie/Fk5i7CtvqQZ2qo2HA_n6D-vtv20N@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 6,
            "name": "动作片",
            "ranks": [
                {
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "columnValue": "movie",
                    "genres": "动作片,科幻片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 341
                    }
                },
                {
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "columnValue": "movie",
                    "genres": "动作片,科幻片",
                    "theEnd": null,
                    "moviePv": {
                        "pv": 284
                    }
                },
                {
                    "id": 501,
                    "title": "钢铁侠3",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 97
                    }
                },
                {
                    "id": 509,
                    "title": "罗曼蒂克消亡史",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 88
                    }
                },
                {
                    "id": 500,
                    "title": "绣春刀",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 86
                    }
                },
                {
                    "id": 505,
                    "title": "长城",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 82
                    }
                },
                {
                    "id": 507,
                    "title": "大黄蜂",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 81
                    }
                },
                {
                    "id": 491,
                    "title": "寻龙诀",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 80
                    }
                },
                {
                    "id": 502,
                    "title": "宝贝计划",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 79
                    }
                },
                {
                    "id": 508,
                    "title": "少林足球",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 77
                    }
                },
                {
                    "id": 504,
                    "title": "绣春刀II：修罗战场",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 74
                    }
                },
                {
                    "id": 498,
                    "title": "神奇女侠",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 499,
                    "title": "天下无贼",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 503,
                    "title": "新龙门客栈",
                    "columnValue": "movie",
                    "genres": "动作片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-04T00:05:52.969Z",
                    "updateTime": "2023-08-21T07:08:09.000Z",
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630485871-109009397-WechatIMG173.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 24,
                            "actor": {
                                "name": "乌尔善"
                            }
                        },
                        {
                            "id": 23,
                            "actor": {
                                "name": "费翔"
                            }
                        },
                        {
                            "id": 22,
                            "actor": {
                                "name": "黄渤"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-10-18T13:28:49.222Z",
                        "updateTime": "2023-10-18T13:28:49.222Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 15,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-06T18:29:30.196Z",
                    "updateTime": "2023-08-21T07:07:32.000Z",
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630450619-354312433-1741692630303_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 27,
                            "actor": {
                                "name": "本·维特利"
                            }
                        },
                        {
                            "id": 26,
                            "actor": {
                                "name": "吴京"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-06T06:41:00.034Z",
                        "updateTime": "2023-09-06T06:41:00.034Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 7,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-21T00:25:04.743Z",
                    "updateTime": "2023-03-21T00:25:04.743Z",
                    "id": 509,
                    "title": "罗曼蒂克消亡史",
                    "poster": "/external/movie/liQgBQL1bpTcv59Yh1xrt2NRBEDZ@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.726Z",
                    "updateTime": "2023-03-21T00:25:04.726Z",
                    "id": 508,
                    "title": "少林足球",
                    "poster": "/external/movie/FibChtciYJTfjAHXA37ZfF8IOzeo@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.703Z",
                    "updateTime": "2023-03-21T00:25:04.703Z",
                    "id": 507,
                    "title": "大黄蜂",
                    "poster": "/external/movie/FmKYF4ZYn6SxVwdAilF4q2eWAJhX@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.693Z",
                    "updateTime": "2023-03-21T00:25:04.693Z",
                    "id": 506,
                    "title": "智取威虎山",
                    "poster": "/external/movie/FoaD8iZjNIrKGmN8G8FBj3l40jSj@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.675Z",
                    "updateTime": "2023-03-21T00:25:04.675Z",
                    "id": 505,
                    "title": "长城",
                    "poster": "/external/movie/lkKi3S999GnlbCjhNf3uCDfW3nWx@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.663Z",
                    "updateTime": "2023-03-21T00:25:04.663Z",
                    "id": 504,
                    "title": "绣春刀II：修罗战场",
                    "poster": "/external/movie/FpMOr8bbGWm0GVZkjgDq5DC5BsHq@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.658Z",
                    "updateTime": "2023-03-21T00:25:04.658Z",
                    "id": 503,
                    "title": "新龙门客栈",
                    "poster": "/external/movie/FiG1yV0mAmF3CdRqAg8zhMLxc9St@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.650Z",
                    "updateTime": "2023-03-21T00:25:04.650Z",
                    "id": 502,
                    "title": "宝贝计划",
                    "poster": "/external/movie/Fn5yezr285iIZkHVcs9nR4sqR4iE@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.639Z",
                    "updateTime": "2023-03-21T00:25:04.639Z",
                    "id": 501,
                    "title": "钢铁侠3",
                    "poster": "/external/movie/FupQ_NXqOdnurJTgI9mTxupVUUUv@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:04.611Z",
                    "updateTime": "2023-03-21T00:25:04.611Z",
                    "id": 500,
                    "title": "绣春刀",
                    "poster": "/external/movie/lphUzuV2GCwbze-LQ4yYM-Oe3qPV@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 7,
            "name": "爱情片",
            "ranks": [
                {
                    "id": 538,
                    "title": "后来的我们",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 90
                    }
                },
                {
                    "id": 534,
                    "title": "新龙门客栈",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 81
                    }
                },
                {
                    "id": 531,
                    "title": "小时代",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 79
                    }
                },
                {
                    "id": 535,
                    "title": "春娇与志明",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 75
                    }
                },
                {
                    "id": 529,
                    "title": "画皮",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 73
                    }
                },
                {
                    "id": 532,
                    "title": "滚蛋吧！肿瘤君",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 73
                    }
                },
                {
                    "id": 515,
                    "title": "色，戒",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 520,
                    "title": "七月与安生",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 537,
                    "title": "前任3：再见前任",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 528,
                    "title": "青蛇",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 530,
                    "title": "非诚勿扰",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 539,
                    "title": "归来",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 511,
                    "title": "大话西游之大圣娶亲",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 533,
                    "title": "卧虎藏龙",
                    "columnValue": "movie",
                    "genres": "爱情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-03-21T00:25:42.355Z",
                    "updateTime": "2023-03-21T00:25:42.355Z",
                    "id": 539,
                    "title": "归来",
                    "poster": "/external/movie/ljFG1cssOYFEEziAumgBpy-tqI3t@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.332Z",
                    "updateTime": "2023-03-21T00:25:42.332Z",
                    "id": 538,
                    "title": "后来的我们",
                    "poster": "/external/movie/Ft4_QxdXeCXGptrwR7a8bRECULGf@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.299Z",
                    "updateTime": "2023-03-21T00:25:42.299Z",
                    "id": 537,
                    "title": "前任3：再见前任",
                    "poster": "/external/movie/FspB4YpbXsq2lEdXubSTU-0uwPhV@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.290Z",
                    "updateTime": "2023-03-21T00:25:42.290Z",
                    "id": 536,
                    "title": "重返20岁",
                    "poster": "/external/movie/FkzGl9E4KIhhwTgHQ_M5R62Ei4bx@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.284Z",
                    "updateTime": "2023-03-21T00:25:42.284Z",
                    "id": 535,
                    "title": "春娇与志明",
                    "poster": "/external/movie/Fpi4qAjBAVI9qDPSX8v9GKCt_kmz@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.269Z",
                    "updateTime": "2023-03-21T00:25:42.269Z",
                    "id": 534,
                    "title": "新龙门客栈",
                    "poster": "/external/movie/FiG1yV0mAmF3CdRqAg8zhMLxc9St@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.262Z",
                    "updateTime": "2023-03-21T00:25:42.262Z",
                    "id": 533,
                    "title": "卧虎藏龙",
                    "poster": "/external/movie/FnkOWLGOVg-22glmlFovVoNMXED6@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.256Z",
                    "updateTime": "2023-03-21T00:25:42.256Z",
                    "id": 532,
                    "title": "滚蛋吧！肿瘤君",
                    "poster": "/external/movie/FlBjVZ6q0ajtQ_cvSYcTcJLJlnpy@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.250Z",
                    "updateTime": "2023-03-21T00:25:42.250Z",
                    "id": 531,
                    "title": "小时代",
                    "poster": "/external/movie/Fhlb8N9rs1N1OZNi_x0U8RPr9whW@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.208Z",
                    "updateTime": "2023-03-21T00:25:42.208Z",
                    "id": 530,
                    "title": "非诚勿扰",
                    "poster": "/external/movie/FulaVMTWbs_CorIzYqq6V8zGnwZS@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.173Z",
                    "updateTime": "2023-03-21T00:25:42.173Z",
                    "id": 529,
                    "title": "画皮",
                    "poster": "/external/movie/Fh-qSP_Gy8evz8_87NEWb9cr3E3o@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:25:42.148Z",
                    "updateTime": "2023-03-21T00:25:42.148Z",
                    "id": 528,
                    "title": "青蛇",
                    "poster": "/external/movie/Fqtsq1XYgwSyjaRRhzYIQWeS4lFi@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 8,
            "name": "科幻片",
            "ranks": [
                {
                    "id": 32,
                    "title": "钢铁侠",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 600
                    }
                },
                {
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "columnValue": "movie",
                    "genres": "动作片,科幻片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 341
                    }
                },
                {
                    "id": 35,
                    "title": "流浪地球",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 339
                    }
                },
                {
                    "id": 547,
                    "title": "独行月球",
                    "columnValue": "movie",
                    "genres": "科幻片,喜剧片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 287
                    }
                },
                {
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "columnValue": "movie",
                    "genres": "动作片,科幻片",
                    "theEnd": null,
                    "moviePv": {
                        "pv": 284
                    }
                },
                {
                    "id": 836,
                    "title": "忍者神龟：变种大乱斗",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 165
                    }
                },
                {
                    "id": 568,
                    "title": "忍者神龟2：破影而出",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 75
                    }
                },
                {
                    "id": 566,
                    "title": "像素大战",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 75
                    }
                },
                {
                    "id": 560,
                    "title": "被光抓走的人",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 74
                    }
                },
                {
                    "id": 562,
                    "title": "星际探索",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 564,
                    "title": "明日战记 明日戰記",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 71
                    }
                },
                {
                    "id": 561,
                    "title": "环形使者",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 567,
                    "title": "月球陨落",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 565,
                    "title": "超验骇客",
                    "columnValue": "movie",
                    "genres": "科幻片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-04T00:05:52.969Z",
                    "updateTime": "2023-08-21T07:08:09.000Z",
                    "id": 833,
                    "title": "封神第一部：朝歌风云",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630485871-109009397-WechatIMG173.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 23,
                            "actor": {
                                "name": "费翔"
                            }
                        },
                        {
                            "id": 22,
                            "actor": {
                                "name": "黄渤"
                            }
                        },
                        {
                            "id": 24,
                            "actor": {
                                "name": "乌尔善"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-10-18T13:28:49.222Z",
                        "updateTime": "2023-10-18T13:28:49.222Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 15,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-06T18:29:30.196Z",
                    "updateTime": "2023-08-21T07:07:32.000Z",
                    "id": 835,
                    "title": "巨齿鲨2：深渊",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630450619-354312433-1741692630303_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 26,
                            "actor": {
                                "name": "吴京"
                            }
                        },
                        {
                            "id": 27,
                            "actor": {
                                "name": "本·维特利"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-06T06:41:00.034Z",
                        "updateTime": "2023-09-06T06:41:00.034Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 7,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-06T18:38:56.243Z",
                    "updateTime": "2023-08-21T07:07:19.000Z",
                    "id": 836,
                    "title": "忍者神龟：变种大乱斗",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630436199-391468065-1761692630329_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 28,
                            "actor": {
                                "name": "杰夫·罗韦"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-14T23:55:02.664Z",
                        "updateTime": "2023-08-14T23:55:02.664Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 1,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:13:09.000Z",
                    "id": 35,
                    "title": "流浪地球",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-14/1678803187059-386070124-lgDJ6sUeKgbF3V8OawwNvjONEQL4@public.jpeg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 12,
                            "actor": {
                                "name": "吴京"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-12T00:49:02.000Z",
                    "id": 32,
                    "title": "钢铁侠",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-03-08/1678266753842-457627090-p2888647044 (2).jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 9,
                            "actor": {
                                "name": "小罗伯特·唐尼"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-10-19T02:44:44.850Z",
                        "updateTime": "2023-10-19T02:44:44.850Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 19,
                        "rate": 7,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-09T00:26:11.000Z",
                    "updateTime": "2023-05-11T17:49:14.896Z",
                    "id": 547,
                    "title": "独行月球",
                    "poster": "/external/movie/FhJj5H5zwX7re_U9JU7d2aE6-LE7@public",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 19,
                            "actor": {
                                "name": "沈腾"
                            }
                        }
                    ],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.876Z",
                    "updateTime": "2023-03-21T00:26:12.876Z",
                    "id": 569,
                    "title": "云图",
                    "poster": "/external/movie/FmZWzXaSTiJAxCc2hF6vnL5UaYj6@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.406Z",
                    "updateTime": "2023-03-21T00:26:12.406Z",
                    "id": 568,
                    "title": "忍者神龟2：破影而出",
                    "poster": "/external/movie/FsAVw2kbwBOuxz_gU0GQ6LUV8qWy@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.401Z",
                    "updateTime": "2023-03-21T00:26:12.401Z",
                    "id": 567,
                    "title": "月球陨落",
                    "poster": "/external/movie/lvePGuv9CcVvHER41pyToJESM3VD@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.296Z",
                    "updateTime": "2023-03-21T00:26:12.296Z",
                    "id": 566,
                    "title": "像素大战",
                    "poster": "/external/movie/FjQFl3BNusW__b55oyWtZ9Ou21_t@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.275Z",
                    "updateTime": "2023-03-21T00:26:12.275Z",
                    "id": 565,
                    "title": "超验骇客",
                    "poster": "/external/movie/FpESP6eagNRVBMcJUUUT7Or3WxFm@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:12.255Z",
                    "updateTime": "2023-03-21T00:26:12.255Z",
                    "id": 564,
                    "title": "明日战记 明日戰記",
                    "poster": "/external/movie/FpisxueIgH8hGlxNCHIgMio-kJ_t@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 9,
            "name": "恐怖片",
            "ranks": [
                {
                    "id": 599,
                    "title": "怨灵",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 90
                    }
                },
                {
                    "id": 596,
                    "title": "碟仙",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 78
                    }
                },
                {
                    "id": 597,
                    "title": "临终囧事",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 77
                    }
                },
                {
                    "id": 579,
                    "title": "怪物",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 74
                    }
                },
                {
                    "id": 598,
                    "title": "凶间雪山",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 71
                    }
                },
                {
                    "id": 592,
                    "title": "育婴室",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 71
                    }
                },
                {
                    "id": 591,
                    "title": "校花诡异事件",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 70
                    }
                },
                {
                    "id": 586,
                    "title": "画皮之阴阳法王",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 583,
                    "title": "青魇",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 575,
                    "title": "孤岛惊魂",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 588,
                    "title": "最后的吸血鬼",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 66
                    }
                },
                {
                    "id": 573,
                    "title": "深海寻人",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 589,
                    "title": "午夜出租车",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 64
                    }
                },
                {
                    "id": 594,
                    "title": "B区32号",
                    "columnValue": "movie",
                    "genres": "恐怖片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 64
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-03-21T00:26:50.245Z",
                    "updateTime": "2023-03-21T00:26:50.245Z",
                    "id": 599,
                    "title": "怨灵",
                    "poster": "/external/movie/lnYpR8u5XWIklZ0ezV8b14F03aAq@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.226Z",
                    "updateTime": "2023-03-21T00:26:50.226Z",
                    "id": 598,
                    "title": "凶间雪山",
                    "poster": "/external/movie/Fkv-Of_eMiE5OGQiruN4wyaS3X_r@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.176Z",
                    "updateTime": "2023-03-21T00:26:50.176Z",
                    "id": 597,
                    "title": "临终囧事",
                    "poster": "/external/movie/FngHA2JbJzHJ6zBd-46l73HFsg4d@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.151Z",
                    "updateTime": "2023-03-21T00:26:50.151Z",
                    "id": 596,
                    "title": "碟仙",
                    "poster": "/external/movie/FrGdbepd3gpqkfA3ijzSZQzNknyK@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.146Z",
                    "updateTime": "2023-03-21T00:26:50.146Z",
                    "id": 595,
                    "title": "天黑请闭眼",
                    "poster": "/external/movie/FoOVffJwggnOj2IwHg7NGHPdo4JP@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.144Z",
                    "updateTime": "2023-03-21T00:26:50.144Z",
                    "id": 594,
                    "title": "B区32号",
                    "poster": "/external/movie/FgLATYH-2hKAGiBLYiyfQPoOtlM1@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.130Z",
                    "updateTime": "2023-03-21T00:26:50.130Z",
                    "id": 593,
                    "title": "笔仙惊魂",
                    "poster": "/external/movie/FnEmwh7Ele49zdlYjL5aSmT2zjMR@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.123Z",
                    "updateTime": "2023-03-21T00:26:50.123Z",
                    "id": 592,
                    "title": "育婴室",
                    "poster": "/external/movie/Fjx-7Q06YbOPvn4JkOZym7fe-E1s@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.117Z",
                    "updateTime": "2023-03-21T00:26:50.117Z",
                    "id": 591,
                    "title": "校花诡异事件",
                    "poster": "/external/movie/FkzY62f8MwhjNpLfY_apah8RcqV_@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.092Z",
                    "updateTime": "2023-03-21T00:26:50.092Z",
                    "id": 590,
                    "title": "午夜出租车",
                    "poster": "/external/movie/FjesCKQq2RZQUdoCjhU4Q6oYs-OE@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.063Z",
                    "updateTime": "2023-03-21T00:26:50.063Z",
                    "id": 589,
                    "title": "午夜出租车",
                    "poster": "/external/movie/FjesCKQq2RZQUdoCjhU4Q6oYs-OE@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:26:50.051Z",
                    "updateTime": "2023-03-21T00:26:50.051Z",
                    "id": 588,
                    "title": "最后的吸血鬼",
                    "poster": "/external/movie/FpI8NhwHz_x4KN0qUh14m8q6wf2Z@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 10,
            "name": "剧情片",
            "ranks": [
                {
                    "id": 842,
                    "title": "我经过风暴",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 365
                    }
                },
                {
                    "id": 136,
                    "title": "你好，李焕英",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 251
                    }
                },
                {
                    "id": 134,
                    "title": "绿皮书",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 157
                    }
                },
                {
                    "id": 838,
                    "title": "八角笼中",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 153
                    }
                },
                {
                    "id": 133,
                    "title": "无名之辈",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 144
                    }
                },
                {
                    "id": 130,
                    "title": "我和我的祖国",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 125
                    }
                },
                {
                    "id": 137,
                    "title": "我不是药神",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 124
                    }
                },
                {
                    "id": 131,
                    "title": "满江红",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 121
                    }
                },
                {
                    "id": 132,
                    "title": "少年的你",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 118
                    }
                },
                {
                    "id": 129,
                    "title": "让子弹飞",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 117
                    }
                },
                {
                    "id": 135,
                    "title": "隐秘的角落",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 116
                    }
                },
                {
                    "id": 128,
                    "title": "霸王别姬",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 109
                    }
                },
                {
                    "id": 142,
                    "title": "中国机长",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 82
                    }
                },
                {
                    "id": 144,
                    "title": "八佰",
                    "columnValue": "movie",
                    "genres": "剧情片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 76
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-27T23:35:46.244Z",
                    "updateTime": "2023-09-04T01:14:18.000Z",
                    "id": 842,
                    "title": "我经过风暴",
                    "poster": "http://cms.yinchunyu.com/server/upload/2023-08-28/1693209164735-622305634-1861693209095_.pic.jpg",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 39,
                            "actor": {
                                "name": "佟丽娅"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-29T05:46:46.954Z",
                        "updateTime": "2023-08-29T05:46:46.954Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 4,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-08-17T06:38:56.846Z",
                    "updateTime": "2023-08-17T06:38:56.846Z",
                    "id": 838,
                    "title": "八角笼中",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-17/1692283035388-318326761-WechatIMG169.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 33,
                            "actor": {
                                "name": "王宝强"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-08-17T06:48:42.957Z",
                        "updateTime": "2023-08-17T06:48:42.957Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 2,
                        "rate": 8,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-07-09T19:12:30.000Z",
                    "id": 136,
                    "title": "你好，李焕英",
                    "poster": "/external/movie/FiVMN4R5YrTJ25EdycHL0m53683S@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 132,
                    "title": "少年的你",
                    "poster": "/external/movie/Fndw7GUjvgoHmGwPc_iBEh7yD9LW@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 129,
                    "title": "让子弹飞",
                    "poster": "/external/movie/Fk5i7CtvqQZ2qo2HA_n6D-vtv20N@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 137,
                    "title": "我不是药神",
                    "poster": "/external/movie/FuFHefDOqRVrgwrTtRjzBakQrke4@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 134,
                    "title": "绿皮书",
                    "poster": "/external/movie/lpohbb5Jnll74sSYJfI_YKuCIehW@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 131,
                    "title": "满江红",
                    "poster": "/external/movie/FlJXxbK8HJO_OYWh1NUAEWnXu4Qt@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 128,
                    "title": "霸王别姬",
                    "poster": "/external/movie/FhwCVXXgw33ArY303W3ADC5FOmpv@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 133,
                    "title": "无名之辈",
                    "poster": "/external/movie/FuKhVZ-Gss_yEPs5E6WmyrILE4k6@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 130,
                    "title": "我和我的祖国",
                    "poster": "/external/movie/lgDE_e4RsvdIT-XiFbCzNwnoM9Z0@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-05-11T02:42:24.000Z",
                    "updateTime": "2023-05-11T17:47:13.640Z",
                    "id": 135,
                    "title": "隐秘的角落",
                    "poster": "/external/movie/FvXhawkp_maW67Y1tNzyQgAxQasU@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-11-05T17:03:44.401Z",
                        "updateTime": "2023-11-05T17:03:44.401Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 23,
                        "rate": 9,
                        "rateUserCount": 1
                    }
                }
            ]
        },
        {
            "id": 11,
            "name": "犯罪片",
            "ranks": [
                {
                    "id": 837,
                    "title": "孤注一掷",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 1,
                    "moviePv": {
                        "pv": 763
                    }
                },
                {
                    "id": 657,
                    "title": "南方车站的聚会",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 78
                    }
                },
                {
                    "id": 650,
                    "title": "人潮汹涌",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 76
                    }
                },
                {
                    "id": 651,
                    "title": "寒战",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 74
                    }
                },
                {
                    "id": 654,
                    "title": "追龙",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 636,
                    "title": "功夫",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 71
                    }
                },
                {
                    "id": 653,
                    "title": "火锅英雄",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 71
                    }
                },
                {
                    "id": 649,
                    "title": "风中有朵雨做的云",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 647,
                    "title": "涉过愤怒的海",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 655,
                    "title": "坚如磐石",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 658,
                    "title": "全民目击",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 656,
                    "title": "李米的猜想",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 652,
                    "title": "白日焰火",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 648,
                    "title": "解救吾先生",
                    "columnValue": "movie",
                    "genres": "犯罪片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 63
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-08-15T02:54:17.278Z",
                    "updateTime": "2023-09-04T01:18:18.000Z",
                    "id": 837,
                    "title": "孤注一掷",
                    "poster": "http://oss.yinchunyu.com/upload/2023-08-21/1692630406370-333390632-WechatIMG172.png",
                    "columnValue": "movie",
                    "casts": [
                        {
                            "id": 31,
                            "actor": {
                                "name": "王传君"
                            }
                        },
                        {
                            "id": 30,
                            "actor": {
                                "name": "金晨"
                            }
                        },
                        {
                            "id": 32,
                            "actor": {
                                "name": "申奥"
                            }
                        },
                        {
                            "id": 29,
                            "actor": {
                                "name": "张艺兴"
                            }
                        }
                    ],
                    "movieRate": {
                        "createTime": "2023-09-05T23:50:13.602Z",
                        "updateTime": "2023-09-05T23:50:13.602Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 6,
                        "rate": 6,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-21T00:27:34.744Z",
                    "updateTime": "2023-03-21T00:27:34.744Z",
                    "id": 658,
                    "title": "全民目击",
                    "poster": "/external/movie/Fn8pu0JK-ttFEgy56dn-f44LD4HP@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.730Z",
                    "updateTime": "2023-03-21T00:27:34.730Z",
                    "id": 657,
                    "title": "南方车站的聚会",
                    "poster": "/external/movie/FqhT2ISsGG32X70-ZplCJaYJeMRD@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.707Z",
                    "updateTime": "2023-03-21T00:27:34.707Z",
                    "id": 656,
                    "title": "李米的猜想",
                    "poster": "/external/movie/Fnw32W3uIjF7aGr3B9-jM5FF4n8K@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.687Z",
                    "updateTime": "2023-03-21T00:27:34.687Z",
                    "id": 655,
                    "title": "坚如磐石",
                    "poster": "/external/movie/FjvUXSob5sq8mHk745XuuaF6eh0v@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.667Z",
                    "updateTime": "2023-03-21T00:27:34.667Z",
                    "id": 654,
                    "title": "追龙",
                    "poster": "/external/movie/Fh9PIJYNqGbbySvtxPVdyPz5Q6iX@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.655Z",
                    "updateTime": "2023-03-21T00:27:34.655Z",
                    "id": 653,
                    "title": "火锅英雄",
                    "poster": "/external/movie/FuqVu_sqm1Udk7VyatMcmkYNfi9V@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.645Z",
                    "updateTime": "2023-03-21T00:27:34.645Z",
                    "id": 652,
                    "title": "白日焰火",
                    "poster": "/external/movie/ln4RYAbz7Xl9pZdD-JI4JKK_0APJ@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.639Z",
                    "updateTime": "2023-03-21T00:27:34.639Z",
                    "id": 651,
                    "title": "寒战",
                    "poster": "/external/movie/lsxtsqadLzGB4afRDheBNp9Y_7vU@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.603Z",
                    "updateTime": "2023-03-21T00:27:34.603Z",
                    "id": 650,
                    "title": "人潮汹涌",
                    "poster": "/external/movie/FoSOQPCSZt_MGLcdrgwjoS8MtS0S@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.542Z",
                    "updateTime": "2023-03-21T00:27:34.542Z",
                    "id": 649,
                    "title": "风中有朵雨做的云",
                    "poster": "/external/movie/FoCQpu-kEk4dS8L3V-HakiqJMZhT@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:34.532Z",
                    "updateTime": "2023-03-21T00:27:34.532Z",
                    "id": 648,
                    "title": "解救吾先生",
                    "poster": "/external/movie/lnb_rvzrS3lTGbo0UOcbBtqHLtYc@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        },
        {
            "id": 12,
            "name": "战争片",
            "ranks": [
                {
                    "id": 683,
                    "title": "赤壁(上)",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 75
                    }
                },
                {
                    "id": 688,
                    "title": "举起手来！",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 74
                    }
                },
                {
                    "id": 682,
                    "title": "投名状",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 678,
                    "title": "集结号",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 680,
                    "title": "红高粱",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 68
                    }
                },
                {
                    "id": 659,
                    "title": "红海行动",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 673,
                    "title": "一九四二",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 686,
                    "title": "赤壁(下)",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 674,
                    "title": "长津湖之水门桥",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 66
                    }
                },
                {
                    "id": 679,
                    "title": "决战中途岛",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 66
                    }
                },
                {
                    "id": 665,
                    "title": "八佰",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 685,
                    "title": "南京！南京！",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 677,
                    "title": "狙击手",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 65
                    }
                },
                {
                    "id": 681,
                    "title": "黄金大劫案",
                    "columnValue": "movie",
                    "genres": "战争片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 62
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-03-21T00:27:52.703Z",
                    "updateTime": "2023-03-21T00:27:52.703Z",
                    "id": 688,
                    "title": "举起手来！",
                    "poster": "/external/movie/FkOibAEDKfFiIEJVNs-kIrDDHtDR@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.697Z",
                    "updateTime": "2023-03-21T00:27:52.697Z",
                    "id": 687,
                    "title": "云水谣",
                    "poster": "/external/movie/FoTrsGHceo9eCiuSca0XUiG7iQVC@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.691Z",
                    "updateTime": "2023-03-21T00:27:52.691Z",
                    "id": 686,
                    "title": "赤壁(下)",
                    "poster": "/external/movie/lmuCGMZdfGO7piShrvnr22edAKOF@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.688Z",
                    "updateTime": "2023-03-21T00:27:52.688Z",
                    "id": 685,
                    "title": "南京！南京！",
                    "poster": "/external/movie/Fr9z3qlQ4gcnLCOBfVPhjYPlOXu6@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.664Z",
                    "updateTime": "2023-03-21T00:27:52.664Z",
                    "id": 684,
                    "title": "狂怒",
                    "poster": "/external/movie/FgCLYvZmQOl-hKKufKmWyT7gZbtC@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.644Z",
                    "updateTime": "2023-03-21T00:27:52.644Z",
                    "id": 683,
                    "title": "赤壁(上)",
                    "poster": "/external/movie/FsfTfkZZo8mx4GTNEqI00Sc8_sDo@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.638Z",
                    "updateTime": "2023-03-21T00:27:52.638Z",
                    "id": 682,
                    "title": "投名状",
                    "poster": "/external/movie/liTw0g0YfeSDyOd6TQn3TXwKQHm_@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.635Z",
                    "updateTime": "2023-03-21T00:27:52.635Z",
                    "id": 681,
                    "title": "黄金大劫案",
                    "poster": "/external/movie/FuM-i2HonBnu_ysD4-PqLHNp2Tql@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.626Z",
                    "updateTime": "2023-03-21T00:27:52.626Z",
                    "id": 680,
                    "title": "红高粱",
                    "poster": "/external/movie/Fo_GFK5O-cfatRnk8uiO1HozOiVf@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.562Z",
                    "updateTime": "2023-03-21T00:27:52.562Z",
                    "id": 679,
                    "title": "决战中途岛",
                    "poster": "/external/movie/Fn3Sub7hudL13cs6KJEOUViHkZ3f@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.542Z",
                    "updateTime": "2023-03-21T00:27:52.542Z",
                    "id": 678,
                    "title": "集结号",
                    "poster": "/external/movie/Fv-W2gimwVPsSqGAgxI-e6bg0GOG@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:27:52.534Z",
                    "updateTime": "2023-03-21T00:27:52.534Z",
                    "id": 677,
                    "title": "狙击手",
                    "poster": "/external/movie/lobSKkIBy0GI8dK7-c0A7jAkXTBk@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-10-18T18:01:32.939Z",
                        "updateTime": "2023-10-18T18:01:32.939Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 17,
                        "rate": 10,
                        "rateUserCount": 1
                    }
                }
            ]
        },
        {
            "id": 13,
            "name": "伦理片",
            "ranks": [
                {
                    "id": 710,
                    "title": "亚洲铜",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 117
                    }
                },
                {
                    "id": 711,
                    "title": "猎艳者",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 94
                    }
                },
                {
                    "id": 716,
                    "title": "聊斋志异之美人首",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 92
                    }
                },
                {
                    "id": 712,
                    "title": "温柔的谎言",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 85
                    }
                },
                {
                    "id": 713,
                    "title": "男人的房事",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 85
                    }
                },
                {
                    "id": 707,
                    "title": "护士也疯狂",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 79
                    }
                },
                {
                    "id": 718,
                    "title": "闻香识爱",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 72
                    }
                },
                {
                    "id": 715,
                    "title": "美人图",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 69
                    }
                },
                {
                    "id": 694,
                    "title": "水落石出",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 67
                    }
                },
                {
                    "id": 708,
                    "title": "月圆之夜",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 66
                    }
                },
                {
                    "id": 714,
                    "title": "翡罗弥诺浮彼亚II",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 66
                    }
                },
                {
                    "id": 700,
                    "title": "嫩模圈",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 64
                    }
                },
                {
                    "id": 717,
                    "title": "我的南宫大人",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 64
                    }
                },
                {
                    "id": 696,
                    "title": "一夜情深",
                    "columnValue": "movie",
                    "genres": "伦理片",
                    "theEnd": 0,
                    "moviePv": {
                        "pv": 64
                    }
                }
            ],
            "rows": [
                {
                    "createTime": "2023-03-21T00:29:47.307Z",
                    "updateTime": "2023-03-21T00:29:47.307Z",
                    "id": 718,
                    "title": "闻香识爱",
                    "poster": "/external/movie/FhLHa0sZqkJc9l_thUeOLQeD7bJB@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.300Z",
                    "updateTime": "2023-03-21T00:29:47.300Z",
                    "id": 717,
                    "title": "我的南宫大人",
                    "poster": "/external/movie/Fm0VF-SBya2POhGMkkjolnubR7Yc@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.293Z",
                    "updateTime": "2023-03-21T00:29:47.293Z",
                    "id": 716,
                    "title": "聊斋志异之美人首",
                    "poster": "/external/movie/FgEmGU1pWLeROtNDKwdvgXcQ-sBb@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": {
                        "createTime": "2023-09-12T22:31:44.662Z",
                        "updateTime": "2023-09-12T22:31:44.662Z",
                        "createBy": "",
                        "updateBy": "",
                        "remark": "",
                        "id": 9,
                        "rate": 10,
                        "rateUserCount": 1
                    }
                },
                {
                    "createTime": "2023-03-21T00:29:47.289Z",
                    "updateTime": "2023-03-21T00:29:47.289Z",
                    "id": 715,
                    "title": "美人图",
                    "poster": "/external/movie/FuvINxdyctd11gVP3vRkZCc1D0i3@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.275Z",
                    "updateTime": "2023-03-21T00:29:47.275Z",
                    "id": 714,
                    "title": "翡罗弥诺浮彼亚II",
                    "poster": "/external/movie/Ftq3d_yhbn7C9QeoMgE-pJZB0J-x@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.257Z",
                    "updateTime": "2023-03-21T00:29:47.257Z",
                    "id": 713,
                    "title": "男人的房事",
                    "poster": "/external/movie/FrseTqAEUt-FnH96c4B1ginuvY3I@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.243Z",
                    "updateTime": "2023-03-21T00:29:47.243Z",
                    "id": 712,
                    "title": "温柔的谎言",
                    "poster": "/external/movie/FninX72AiTAbwwxlRB1rvIaoegz1@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.240Z",
                    "updateTime": "2023-03-21T00:29:47.240Z",
                    "id": 711,
                    "title": "猎艳者",
                    "poster": "/external/movie/Fv5S7bcX5yRfSKiEn5vy-Jvs0r5H@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.226Z",
                    "updateTime": "2023-03-21T00:29:47.226Z",
                    "id": 710,
                    "title": "亚洲铜",
                    "poster": "/external/movie/FmtYmzUqjvkRc63pN0YevztFgT-H@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.195Z",
                    "updateTime": "2023-03-21T00:29:47.195Z",
                    "id": 709,
                    "title": "无声情人",
                    "poster": "/external/movie/FgG3WFK35tSwrJqDUBfu0Y8h6A-m@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.143Z",
                    "updateTime": "2023-03-21T00:29:47.143Z",
                    "id": 708,
                    "title": "月圆之夜",
                    "poster": "/external/movie/FoE_0MGkStPKWSZ-A-4puxrH5t_X@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                },
                {
                    "createTime": "2023-03-21T00:29:47.133Z",
                    "updateTime": "2023-03-21T00:29:47.133Z",
                    "id": 707,
                    "title": "护士也疯狂",
                    "poster": "/external/movie/FqdCNkkAw5P8t2re_4GjhRh-xLyI@public",
                    "columnValue": "movie",
                    "casts": [],
                    "movieRate": null
                }
            ]
        }
    ]
}
```

- 2、大分类信息页面 `/column?value=xxx`
  
```

{
    "code": 200,
    "msg": "操作成功",
    "data": {
        "createTime": "2023-03-09T19:23:10.107Z",
        "updateTime": "2023-04-21T04:27:09.000Z",
        "createBy": "admin",
        "updateBy": "admin",
        "remark": "",
        "id": 1,
        "name": "电影",
        "type": "1",
        "value": "movie",
        "order": 1,
        "status": "0"
    }
}

```