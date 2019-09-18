# 小说分类列表

- <strong>URL</strong>  
  api.zhuishushenqi.com/book/by-categories
- <strong>Method</strong>  
  GET
- <strong>Params</strong>
  - gender:male/female/picture/press (来自小说分类 API)
  - type：hot(热门)/new(新书)/reputation(好评)/over(完结)/monthly(包月)
  - major: 玄幻/奇幻/武侠/仙侠/....
  - minor: (空值/全部/东方玄幻/异界大陆/异界争霸/远古神话)
  - start: 0(开始位置)
  - limit：20(显示数量)
- <strong>Example</strong>  
  GET api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=20

> PS: 接口数据已过期。

```
response:
{
    "total": 416606,
    "books": [
        {
            "_id": "5816b415b06d1d32157790b1",
            "title": "圣墟",
            "author": "辰东",
            "shortIntro": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……",
            "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F",
            "site": "zhuishuvip",
            "majorCate": "玄幻",
            "minorCate": "东方玄幻",
            "sizetype": -1,
            "superscript": "",
            "contentType": "txt",
            "banned": 0,
            "latelyFollower": 256414,
            "retentionRatio": 74.42,
            "lastChapter": "第513章 卖肉",
            "tags": [
                "玄幻",
                "东方玄幻"
            ]
        },
        // 省略...
    ],
    "ok": true
}
```
